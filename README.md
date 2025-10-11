# 🎹 Teclado Microtonal 19-TET

Un teclado hexagonal interactivo para explorar música microtonal en el sistema de temperamento igual de 19 notas por octava (19-TET).

![Screenshot](assets/screenshot.png)

## 🌟 Características

- **Disposición hexagonal** de teclas para fácil visualización de intervalos
- **Sistema 19-TET** completo con 3 octavas + 1 nota adicional
- **Visualización de escalas** con resaltado de notas
- **Modo de combinación de escalas** para explorar superposiciones armónicas
- **7 modos griegos** adaptados al temperamento 19-TET
- **Controles de transposición** de octava (+8va, -8va, Reset)
- **Información en tiempo real**: nota, frecuencia y octava actual
- **Integración con Max/MSP** mediante `window.max.outlet()`
- **Soporte de teclado QWERTY** para tocar con el teclado de computadora
- **Diseño responsive** que se adapta a diferentes tamaños de pantalla

## 🚀 Uso

### Online
Simplemente abre `index.html` en tu navegador web moderno (Chrome, Firefox, Edge, Safari).

### Con Max/MSP
1. Abre el proyecto en Max/MSP
2. Carga el archivo HTML en un objeto `jweb`
3. El teclado enviará mensajes MIDI mediante `window.max.outlet(noteValue, noteName, velocity)`

## 🎵 Escalas incluidas

- **Jónico (Mayor)**: Do-Re-Mi-Fa-Sol-La-Si
- **Dórico**: Do-Re-Mib-Fa-Sol-La-Sib
- **Frigio**: Do-Reb-Mib-Fa-Sol-Lab-Sib
- **Lidio**: Do-Re-Mi-Fa#-Sol-La-Si
- **Mixolidio**: Do-Re-Mi-Fa-Sol-La-Sib
- **Eólico (Menor)**: Do-Re-Mib-Fa-Sol-Lab-Sib
- **Locrio**: Do-Reb-Mib-Fa-Solb-Lab-Sib

## 🎮 Controles

### Ratón
- **Clic en tecla**: Reproducir nota
- **Mantener presionado**: Nota sostenida
- **Hover**: Vista previa del color de activación

### Teclado QWERTY (opcional)
- Octava baja: `A S D F G H J` (teclas blancas), `W E T Y U` (teclas negras)
- Octava media: `Z X C V B N M`

### Controles de interfaz
- **+8va / -8va**: Transponer octavas
- **Reset Octava**: Volver a octava base
- **Selector de escala**: Elegir modo griego
- **Combinar escalas**: Activar modo de superposición de escalas
- **Limpiar escalas**: Resetear visualización de escalas

## 📐 Teoría del 19-TET

El temperamento igual de 19 notas divide la octava en 19 partes iguales:
- **Razón**: 2^(1/19) ≈ 1.0372
- **Intervalo**: ~63.16 centavos por paso
- **Ventajas**: Mejor aproximación a la tercera mayor pura que el 12-TET

### Disposición del teclado
Octava 0 (baja):  valores 43-61
Octava 1 (media): valores 62-80
Octava 2 (alta):  valores 81-100
