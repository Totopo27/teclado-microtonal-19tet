# Teclado Microtonal 19-TET

Un teclado hexagonal interactivo para explorar música microtonal en el sistema de temperamento igual de 19 notas por octava (19-TET).

## Características

- **Disposición hexagonal** de teclas para fácil visualización de intervalos
- **Sistema 19-TET** completo con 3 octavas + 1 nota adicional
- **Visualización de escalas** con resaltado de notas
- **Modo de combinación de escalas** para explorar superposiciones armónicas
- **7 modos griegos** adaptados al temperamento 19-TET
- **Controles de transposición** de octava (+8va, -8va, Reset)
- **Monitor de polifonía en tiempo real**: 
  - Visualización de todas las notas activas simultáneamente
  - Contador de voces activas
  - Información de frecuencia y octava por cada nota
  - Chips de colores según la octava
  - Orden cronológico de notas pulsadas
- **Información monofónica**: Muestra la última nota tocada
- **Integración con Max/MSP** mediante `window.max.outlet()`
- **Soporte completo de teclado QWERTY** (19 teclas + controles)
- **Diseño responsive** que se adapta a diferentes tamaños de pantalla

##  Uso

### Online
Simplemente abre `index.html` en tu navegador web.

### Con Max/MSP
1. Abre el proyecto en Max/MSP
2. Carga el archivo HTML en un objeto `jweb`
3. El teclado enviará mensajes MIDI mediante `window.max.outlet(noteValue, noteName, velocity)`

##  Escalas incluidas

- **Jónico (Mayor)**: C-D-E-F-G-A-B
- **Dórico**: C-D-E♭-F-G-A-B♭
- **Frigio**: C-Db-E♭-F-G-A♭-B♭
- **Lidio**: C-D-E-F♯-G-A-B
- **Mixolidio**: C-D-E-F-G-A-B♭
- **Eólico (Menor)**: C-D-E♭-F-G-A♭-B♭
- **Locrio**: C-D♭-E♭-F-G♭-A♭-B♭

##  Controles

### Ratón
- **Clic en tecla**: Reproducir nota
- **Mantener presionado**: Nota sostenida
- **Hover**: Vista previa del color de activación

### Teclado QWERTY - Octava Baja Completa (19 notas)

#### Notas musicales:
```
┌─────────────────────────────────────────────┐
│ Fila Q:  Q   W   E   R   T   Y   U         │
│         C  C♯ D♭  D  D# E♭  E        │
│         (0) (1) (2) (3) (4) (5) (6)        │
├─────────────────────────────────────────────┤
│ Fila A:  A   S   D   F   G   H   J         │
│         E♯  F  F♯ G♭ G G♯ A♭      │
│         (7) (8) (9) (10)(11)(12)(13)       │
├─────────────────────────────────────────────┤
│ Fila Z:  Z   X   C   V   B                 │
│         A  A♯ B♭  B  B♯                │
│         (14)(15)(16)(17)(18)               │
└─────────────────────────────────────────────┘
```

#### Controles de octava:
- **↑ Flecha Arriba**: +8va (subir octava)
- **↓ Flecha Abajo**: -8va (bajar octava)  
- **Barra Espaciadora**: Reset octava a 0

### Controles de interfaz
- **+8va / -8va**: Transponer octavas (también con flechas ↑↓)
- **Reset Octava**: Volver a octava base (también con Espacio)
- **Selector de escala**: Elegir modo griego
- **Combinar escalas**: Activar modo de superposición de escalas
- **Limpiar escalas**: Resetear visualización de escalas

### Atajos útiles
- Mantén presionadas múltiples teclas para tocar acordes
- Usa las flechas mientras tocas para cambiar de octava en tiempo real
- El espacio te permite volver rápidamente a la octava central

##  Teoría del 19-TET

El temperamento igual de 19 notas divide la octava en 19 partes iguales:
- **Razón**: 2^(1/19) ≈ 1.0372
- **Intervalo**: ~63.16 centavos por paso
- **Ventajas**: Mejor aproximación a la tercera mayor pura que el 12-TET

### Disposición del teclado
Octava 0 (baja):  valores 43-61
Octava 1 (media): valores 62-80
Octava 2 (alta):  valores 81-100
