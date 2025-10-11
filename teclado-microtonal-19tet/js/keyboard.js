// js/keyboard.js
// Lógica del teclado hexagonal

// Estado de la aplicación
let currentOctave = 0;
let activeKeys = new Map();
let currentScale = 'none';
let combineMode = false;
let combinedScales = new Set();

// Obtener octava real de una tecla
function getRealOctave(value) {
  // Las teclas base van del 43 al 100
  // 43-61 = octava 0 (baja)
  // 62-80 = octava 1 (media)  
  // 81-100 = octava 2 (alta)
  if (value >= 43 && value <= 61) return 0;
  if (value >= 62 && value <= 80) return 1;
  if (value >= 81 && value <= 100) return 2;
  return 0;
}

// Calcular frecuencia
function getFrequency(value) {
  const adjustedValue = value + (currentOctave * 19);
  if (adjustedValue >= 0 && adjustedValue < arrayT19.length) {
    return arrayT19[adjustedValue];
  }
  return null;
}

// Generar teclado
function generateKeyboard() {
  const container = document.getElementById('keyboard-container');
  container.innerHTML = '';
  
  keyConfigurations.forEach(config => {
    const hexagon = document.createElement('div');
    hexagon.className = 'hexagon';
    hexagon.id = config.id;
    hexagon.style.top = `${config.top}px`;
    hexagon.style.left = `${config.left}px`;
    
    const colorClass = `hexagon-in2-${config.color}`;
    const noteIndex = parseInt(config.text);
    
    hexagon.innerHTML = `
      <div class="hexagon-in1">
        <div class="hexagon-in2 ${colorClass}" data-value="${config.value}" data-name="${config.name}" data-note="${noteIndex}">
          <div class="hexagon-text">${config.text}</div>
        </div>
      </div>
    `;
    
    const innerHex = hexagon.querySelector('.hexagon-in2');
    
    innerHex.addEventListener('mousedown', () => playNote(config));
    innerHex.addEventListener('mouseup', () => stopNote(config));
    innerHex.addEventListener('mouseleave', () => {
      if (activeKeys.has(config.id)) stopNote(config);
    });
    
    // Guardar referencia al elemento para acceso directo
    config.element = innerHex;
    
    container.appendChild(hexagon);
  });
  
  updateScaleDisplay();
}

// Reproducir nota
function playNote(config) {
  if (activeKeys.has(config.id)) return;
  
  activeKeys.set(config.id, true);
  const element = document.getElementById(config.id).querySelector('.hexagon-in2');
  element.classList.add('active');
  
  const adjustedValue = config.value + (currentOctave * 19);
  const frequency = getFrequency(config.value);
  const realOctave = getRealOctave(config.value) + currentOctave;
  
  // Enviar a Max/MSP si está disponible
  if (window.max && typeof window.max.outlet === 'function') {
    window.max.outlet(adjustedValue, config.name, "127");
  }
  
  // Actualizar panel de información
  document.getElementById('current-note').textContent = `${config.name} (${config.text})`;
  document.getElementById('current-freq').textContent = frequency ? frequency.toFixed(2) : '-';
  document.getElementById('current-octave').textContent = realOctave;
}

// Detener nota
function stopNote(config) {
  if (!activeKeys.has(config.id)) return;
  
  activeKeys.delete(config.id);
  const element = document.getElementById(config.id).querySelector('.hexagon-in2');
  element.classList.remove('active');
  
  const adjustedValue = config.value + (currentOctave * 19);
  
  if (window.max && typeof window.max.outlet === 'function') {
    window.max.outlet(adjustedValue, config.name, "0");
  }
}

// Actualizar visualización de escala
function updateScaleDisplay() {
  // PASO 1: LIMPIAR ABSOLUTAMENTE TODO
  keyConfigurations.forEach(config => {
    if (config.element) {
      config.element.classList.remove('scale-highlight');
    }
  });

  // PASO 2: Determinar qué notas iluminar
  let allScaleNotes = new Set();
  
  if (combineMode && combinedScales.size > 0) {
    // Modo combinación: unir todas las escalas seleccionadas
    combinedScales.forEach(scaleName => {
      const scaleNotes = scales[scaleName] || [];
      scaleNotes.forEach(note => {
        allScaleNotes.add(note);
      });
    });
  } else if (currentScale !== 'none') {
    // Modo normal: solo la escala actual
    const scaleNotes = scales[currentScale] || [];
    scaleNotes.forEach(note => allScaleNotes.add(note));
  }
  
  // Convertir Set a Array ordenado
  const notesToHighlight = Array.from(allScaleNotes).sort((a, b) => a - b);
  
  // PASO 3: Aplicar el resaltado solo a las notas correspondientes
  if (notesToHighlight.length > 0) {
    keyConfigurations.forEach(config => {
      const noteIndex = parseInt(config.text);
      
      if (notesToHighlight.includes(noteIndex)) {
        if (config.element) {
          config.element.classList.add('scale-highlight');
        }
      }
    });
  }
}

// Actualizar lista de escalas combinadas
function updateCombinedScalesList() {
  const listContainer = document.getElementById('combined-scales-list');
  listContainer.innerHTML = '';
  
  if (combinedScales.size === 0) {
    listContainer.innerHTML = '<span style="color: #95a5a6;">No hay escalas combinadas</span>';
    return;
  }
  
  combinedScales.forEach(scaleName => {
    const tag = document.createElement('div');
    tag.className = 'scale-tag';
    tag.innerHTML = `
      ${scaleNames[scaleName] || scaleName}
      <span class="remove-scale" data-scale="${scaleName}">✕</span>
    `;
    
    tag.querySelector('.remove-scale').addEventListener('click', (e) => {
      e.stopPropagation();
      combinedScales.delete(scaleName);
      updateCombinedScalesList();
      updateScaleDisplay();
    });
    
    listContainer.appendChild(tag);
  });
}