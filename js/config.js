// js/config.js
// Configuración de teclas y frecuencias del temperamento 19-TET

const keyConfigurations = [
  // Octava baja (b) - valores 43-61
  { id: '0b', name: 'C', value: 43, top: 750, left: 50, color: 'white', text: '0' },
  { id: '1b', name: 'C♯', value: 44, top: 795, left: 128, color: 'dark-gray', text: '1' },
  { id: '2b', name: 'D♭', value: 45, top: 705, left: 128, color: 'dark-gray', text: '2' },
  { id: '3b', name: 'D', value: 46, top: 750, left: 206, color: 'white', text: '3' },
  { id: '4b', name: 'D♯', value: 47, top: 795, left: 284, color: 'dark-gray', text: '4' },
  { id: '5b', name: 'E♭', value: 48, top: 705, left: 284, color: 'dark-gray', text: '5' },
  { id: '6b', name: 'E', value: 49, top: 750, left: 362, color: 'white', text: '6' },
  { id: '7b', name: 'E♯', value: 50, top: 660, left: 362, color: 'blue', text: '7' },
  { id: '8b', name: 'F', value: 51, top: 705, left: 439, color: 'white', text: '8' },
  { id: '9b', name: 'F♯', value: 52, top: 750, left: 514, color: 'dark-gray', text: '9' },
  { id: '10b', name: 'G♭', value: 53, top: 660, left: 514, color: 'dark-gray', text: '10' },
  { id: '11b', name: 'G', value: 54, top: 705, left: 592, color: 'white', text: '11' },
  { id: '12b', name: 'G♯', value: 55, top: 750, left: 663, color: 'dark-gray', text: '12' },
  { id: '13b', name: 'A♭', value: 56, top: 660, left: 663, color: 'dark-gray', text: '13' },
  { id: '14b', name: 'A', value: 57, top: 705, left: 740, color: 'white', text: '14' },
  { id: '15b', name: 'A♯', value: 58, top: 750, left: 814, color: 'dark-gray', text: '15' },
  { id: '16b', name: 'B♭', value: 59, top: 660, left: 814, color: 'dark-gray', text: '16' },
  { id: '17b', name: 'B', value: 60, top: 705, left: 892, color: 'white', text: '17' },
  { id: '18b', name: 'B♯', value: 61, top: 615, left: 892, color: 'blue', text: '18' },

  // Octava media (m) - valores 62-80
  { id: '0m', name: 'do', value: 62, top: 500, left: 50, color: 'white', text: '0' },
  { id: '1m', name: 'do#', value: 63, top: 545, left: 128, color: 'dark-gray', text: '1' },
  { id: '2m', name: 'reb', value: 64, top: 455, left: 128, color: 'dark-gray', text: '2' },
  { id: '3m', name: 're', value: 65, top: 500, left: 206, color: 'white', text: '3' },
  { id: '4m', name: 're#', value: 66, top: 545, left: 284, color: 'dark-gray', text: '4' },
  { id: '5m', name: 'mib', value: 67, top: 455, left: 284, color: 'dark-gray', text: '5' },
  { id: '6m', name: 'mi', value: 68, top: 500, left: 362, color: 'white', text: '6' },
  { id: '7m', name: 'mi#', value: 69, top: 410, left: 362, color: 'blue', text: '7' },
  { id: '8m', name: 'fa', value: 70, top: 455, left: 439, color: 'white', text: '8' },
  { id: '9m', name: 'fa#', value: 71, top: 500, left: 514, color: 'dark-gray', text: '9' },
  { id: '10m', name: 'solb', value: 72, top: 410, left: 514, color: 'dark-gray', text: '10' },
  { id: '11m', name: 'sol', value: 73, top: 455, left: 592, color: 'white', text: '11' },
  { id: '12m', name: 'sol#', value: 74, top: 500, left: 663, color: 'dark-gray', text: '12' },
  { id: '13m', name: 'lab', value: 75, top: 410, left: 663, color: 'dark-gray', text: '13' },
  { id: '14m', name: 'la', value: 76, top: 455, left: 740, color: 'white', text: '14' },
  { id: '15m', name: 'la#', value: 77, top: 500, left: 814, color: 'dark-gray', text: '15' },
  { id: '16m', name: 'sib', value: 78, top: 410, left: 814, color: 'dark-gray', text: '16' },
  { id: '17m', name: 'si', value: 79, top: 455, left: 892, color: 'white', text: '17' },
  { id: '18m', name: 'si#', value: 80, top: 365, left: 892, color: 'blue', text: '18' },

  // Octava alta (a) - valores 81-99
  { id: '0a', name: 'do', value: 81, top: 250, left: 50, color: 'white', text: '0' },
  { id: '1a', name: 'do#', value: 82, top: 295, left: 128, color: 'dark-gray', text: '1' },
  { id: '2a', name: 'reb', value: 83, top: 205, left: 128, color: 'dark-gray', text: '2' },
  { id: '3a', name: 're', value: 84, top: 250, left: 206, color: 'white', text: '3' },
  { id: '4a', name: 're#', value: 85, top: 295, left: 284, color: 'dark-gray', text: '4' },
  { id: '5a', name: 'mib', value: 86, top: 205, left: 284, color: 'dark-gray', text: '5' },
  { id: '6a', name: 'mi', value: 87, top: 250, left: 362, color: 'white', text: '6' },
  { id: '7a', name: 'mi#', value: 88, top: 160, left: 362, color: 'blue', text: '7' },
  { id: '8a', name: 'fa', value: 89, top: 205, left: 439, color: 'white', text: '8' },
  { id: '9a', name: 'fa#', value: 90, top: 250, left: 514, color: 'dark-gray', text: '9' },
  { id: '10a', name: 'solb', value: 91, top: 160, left: 514, color: 'dark-gray', text: '10' },
  { id: '11a', name: 'sol', value: 92, top: 205, left: 592, color: 'white', text: '11' },
  { id: '12a', name: 'sol#', value: 93, top: 250, left: 663, color: 'dark-gray', text: '12' },
  { id: '13a', name: 'lab', value: 94, top: 160, left: 663, color: 'dark-gray', text: '13' },
  { id: '14a', name: 'la', value: 95, top: 205, left: 740, color: 'white', text: '14' },
  { id: '15a', name: 'la#', value: 96, top: 250, left: 814, color: 'dark-gray', text: '15' },
  { id: '16a', name: 'sib', value: 97, top: 160, left: 814, color: 'dark-gray', text: '16' },
  { id: '17a', name: 'si', value: 98, top: 205, left: 892, color: 'white', text: '17' },
  { id: '18a', name: 'si#', value: 99, top: 115, left: 892, color: 'blue', text: '18' },

  // Tecla adicional
  { id: '0aa', name: 'do', value: 100, top: 160, left: 970, color: 'white', text: '0' }
];

// Temperamento 19-TET - Frecuencias completas en Hz
const arrayT19 = [
      27.5, 28.521764, 29.581491, 30.680593, 31.820532, 33.002825, 34.229046, 35.500828, 36.819863, 38.187906, 39.60678, 41.078371, 42.60464, 44.187617, 45.82941, 47.532204,
      49.298265, 51.129945, 53.02968, 55., 57.043527, 59.162982, 61.361185, 63.641063, 66.00565, 68.458092, 71.001656, 73.639726, 76.375813, 79.21356, 82.156743, 85.20928,
      88.375235, 91.658821, 95.064408, 98.596531, 102.259889, 106.05936, 110., 114.087055, 118.325964, 122.722371, 127.282126, 132.011299, 136.916185, 142.003312, 147.279451,
      152.751626, 158.427119, 164.313486, 170.418561, 176.75047, 183.317641, 190.128817, 197.193061, 204.519778, 212.11872, 220., 228.17411, 236.651929, 245.444742, 254.564252,
      264.022598, 273.83237, 284.006624, 294.558902, 305.503251, 316.854238, 328.626972, 340.837121, 353.50094, 366.635283, 380.257633, 394.386122, 409.039556, 424.237439, 440.,
      456.34822, 473.303858, 490.889484, 509.128504, 528.045197, 547.664739, 568.013247, 589.117805, 611.006503, 633.708477, 657.253943, 681.674243, 707.001879, 733.270566,
      760.515266, 788.772245, 818.079112, 848.474878, 880., 912.696439, 946.607716, 981.778968, 1018.257009, 1056.090393, 1095.329479, 1136.026494, 1178.235609, 1222.013006,
      1267.416953, 1314.507886, 1363.348485, 1414.003759, 1466.541131, 1521.030532, 1577.544489, 1636.158225, 1696.949756, 1760., 1825.392878, 1893.215432, 1963.557935, 2036.514018,
      2112.180786, 2190.658957, 2272.052988, 2356.471218, 2444.026011, 2534.833906, 2629.015773, 2726.69697, 2828.007518, 2933.082263, 3042.061064, 3155.088978, 3272.31645,
      3393.899513, 3520., 3650.785756, 3786.430863, 3927.115871, 4073.028035, 4224.361573
    ];
