// js/app.js
// Inicialización y gestión de eventos

document.addEventListener('DOMContentLoaded', function() {
  // Generar teclado al cargar
  generateKeyboard();
  
  // Controles de octava
  document.getElementById('octave-up').addEventListener('click', () => {
    currentOctave = Math.min(currentOctave + 1, 2);
    document.getElementById('current-octave').textContent = currentOctave;
  });

  document.getElementById('octave-down').addEventListener('click', () => {
    currentOctave = Math.max(currentOctave - 1, -2);
    document.getElementById('current-octave').textContent = currentOctave;
  });

  document.getElementById('reset-octave').addEventListener('click', () => {
    currentOctave = 0;
    document.getElementById('current-octave').textContent = 0;
  });

  // Selector de escala
  document.getElementById('scale-selector').addEventListener('change', (e) => {
    const selectedScale = e.target.value;
    
    if (combineMode) {
      // En modo combinación, agregar a la lista si no es 'none'
      if (selectedScale !== 'none') {
        combinedScales.add(selectedScale);
        updateCombinedScalesList();
        // Resetear el selector para poder agregar más
        e.target.value = 'none';
      }
    } else {
      // En modo normal, PRIMERO limpiar todo, LUEGO cambiar la escala
      currentScale = selectedScale;
      combinedScales.clear();
      updateCombinedScalesList();
    }
    
    // Siempre actualizar la visualización después de cambiar
    updateScaleDisplay();
  });

  // Checkbox de combinación de escalas
  document.getElementById('combine-scales').addEventListener('change', (e) => {
    combineMode = e.target.checked;
    const combinationPanel = document.getElementById('scale-combination');
    
    if (combineMode) {
      combinationPanel.style.display = 'block';
      // Si hay una escala seleccionada, agregarla a las combinadas
      if (currentScale !== 'none') {
        combinedScales.add(currentScale);
      }
    } else {
      combinationPanel.style.display = 'none';
      // Al desactivar, mantener solo la última escala como actual
      if (combinedScales.size > 0) {
        currentScale = Array.from(combinedScales).pop();
        document.getElementById('scale-selector').value = currentScale;
      }
      combinedScales.clear();
    }
    
    updateCombinedScalesList();
    updateScaleDisplay();
  });

  // Botón de limpiar escalas
  document.getElementById('clear-scales').addEventListener('click', () => {
    combinedScales.clear();
    currentScale = 'none';
    document.getElementById('scale-selector').value = 'none';
    updateCombinedScalesList();
    updateScaleDisplay();
  });

  // ============================================
  // SOPORTE COMPLETO DE TECLADO QWERTY
  // ============================================
  
  // Mapeo completo para la octava baja (19 notas: 0b-18b)
  // Distribución en 3 filas del teclado QWERTY
  const keyMap = {
    // Fila superior (QWERTY) - Notas 0-6
    'q': '0b',   // Do (0)
    'w': '1b',   // Do# (1)
    'e': '2b',   // Reb (2)
    'r': '3b',   // Re (3)
    't': '4b',   // Re# (4)
    'y': '5b',   // Mib (5)
    'u': '6b',   // Mi (6)
    
    // Fila media (ASDF) - Notas 7-13
    'a': '7b',   // Mi# (7)
    's': '8b',   // Fa (8)
    'd': '9b',   // Fa# (9)
    'f': '10b',  // Solb (10)
    'g': '11b',  // Sol (11)
    'h': '12b',  // Sol# (12)
    'j': '13b',  // Lab (13)
    
    // Fila inferior (ZXCV) - Notas 14-18
    'z': '14b',  // La (14)
    'x': '15b',  // La# (15)
    'c': '16b',  // Sib (16)
    'v': '17b',  // Si (17)
    'b': '18b'   // Si# (18)
  };

  // Teclas especiales para controles
  const controlKeys = {
    'ArrowUp': 'octave-up',      // Flecha arriba: +8va
    'ArrowDown': 'octave-down',  // Flecha abajo: -8va
    ' ': 'reset-octave'          // Barra espaciadora: Reset octava
  };

  // Set para rastrear teclas presionadas (evitar repetición)
  const pressedKeys = new Set();

  // Evento keydown para tocar notas y controles
  document.addEventListener('keydown', (e) => {
    // Prevenir comportamiento por defecto de las flechas y espacio
    if (controlKeys[e.key]) {
      e.preventDefault();
    }

    // Manejar controles de octava
    if (controlKeys[e.key] && !pressedKeys.has(e.key)) {
      pressedKeys.add(e.key);
      const buttonId = controlKeys[e.key];
      document.getElementById(buttonId).click();
      
      // Feedback visual en el botón
      const button = document.getElementById(buttonId);
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = '';
      }, 100);
      return;
    }

    // Manejar notas musicales
    const key = e.key.toLowerCase();
    if (keyMap[key] && !pressedKeys.has(key)) {
      pressedKeys.add(key);
      const config = keyConfigurations.find(c => c.id === keyMap[key]);
      if (config) {
        playNote(config);
      }
    }
  });

  // Evento keyup para detener notas
  document.addEventListener('keyup', (e) => {
    const key = e.key.toLowerCase();
    
    // Limpiar teclas de control presionadas
    if (controlKeys[e.key]) {
      pressedKeys.delete(e.key);
      return;
    }
    
    // Detener notas musicales
    if (keyMap[key]) {
      pressedKeys.delete(key);
      const config = keyConfigurations.find(c => c.id === keyMap[key]);
      if (config) {
        stopNote(config);
      }
    }
  });

  // Mostrar ayuda de teclado al inicio (opcional)
  showKeyboardHelp();
});

// Función para mostrar ayuda de teclado (opcional)
function showKeyboardHelp() {
  console.log(`
╔════════════════════════════════════════════════════════╗
║          CONTROLES DE TECLADO QWERTY                   ║
╠════════════════════════════════════════════════════════╣
║                                                        ║
║  🎹 OCTAVA BAJA (Notas 0-18):                         ║
║                                                        ║
║  Fila Q: Q W E R T Y U  → Notas 0-6                   ║
║          Do Do# Re Re# Mi♭ Mi Mi#                     ║
║                                                        ║
║  Fila A: A S D F G H J  → Notas 7-13                  ║
║          Mi# Fa Fa# Sol♭ Sol Sol# La♭                 ║
║                                                        ║
║  Fila Z: Z X C V B      → Notas 14-18                 ║
║          La La# Si♭ Si Si#                            ║
║                                                        ║
║  🎚️ CONTROLES:                                         ║
║  ↑ Flecha Arriba   → +8va (subir octava)              ║
║  ↓ Flecha Abajo    → -8va (bajar octava)              ║
║  Espacio           → Reset octava                      ║
║                                                        ║
╚════════════════════════════════════════════════════════╝
  `);
}