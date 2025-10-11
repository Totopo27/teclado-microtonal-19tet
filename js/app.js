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

  // Soporte de teclado QWERTY (opcional)
  const keyMap = {
    'a': '0b', 's': '3b', 'd': '6b', 'f': '8b', 'g': '11b', 'h': '14b', 'j': '17b',
    'w': '1b', 'e': '4b', 't': '9b', 'y': '12b', 'u': '15b',
    'z': '0m', 'x': '3m', 'c': '6m', 'v': '8m', 'b': '11m', 'n': '14m', 'm': '17m'
  };

  document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (keyMap[key] && !e.repeat) {
      const config = keyConfigurations.find(c => c.id === keyMap[key]);
      if (config) playNote(config);
    }
  });

  document.addEventListener('keyup', (e) => {
    const key = e.key.toLowerCase();
    if (keyMap[key]) {
      const config = keyConfigurations.find(c => c.id === keyMap[key]);
      if (config) stopNote(config);
    }
  });
});