import { useState } from "react";

const C = {
  night: "#0D1B2A", amber: "#F7B731", teal: "#3FC1C9", rose: "#FC5185",
  ink: "#1A2B3C", slate: "#64748B", snow: "#F8FAFC", white: "#FFFFFF",
  b1: "#5B5EA6", b2: "#0891B2", b3: "#059669", b4: "#D97706", b5: "#DC2626",
};

const BLOCKS = [
  {
    id: 1, color: C.b1, emoji: "🔢", title: "Sucesiones Numéricas",
    subtitle: "Encuentra el patrón oculto",
    units: [
      {
        id: "1.1", phase: "INICIO", title: "¿Qué es una sucesión numérica?",
        prior: "¿Qué número sigue en 2, 4, 6, 8, ___? ¿Por qué?",
        content: [
          { heading: "Definición", text: "Una sucesión numérica es un conjunto ordenado de números que siguen una regla de formación. A cada número se le llama TÉRMINO." },
          { heading: "Tipos de sucesiones", text: null, table: {
            headers: ["Tipo", "¿Cómo se forma?", "Ejemplo"],
            rows: [
              ["Aritmética", "Suma o resta la misma cantidad (+d)", "3, 7, 11, 15… (+4)"],
              ["Geométrica", "Multiplica o divide por la misma razón (×r)", "2, 6, 18, 54… (×3)"],
              ["Combinada", "Mezcla de suma/resta con multiplicación/división", "1, 3, 15, 135…"],
            ]
          }},
        ],
        activity: {
          title: "Practica en tu libreta",
          tasks: [
            "Identifica el tipo y escribe el término que sigue: a) 5, 10, 15, 20, ___   b) 3, 9, 27, 81, ___   c) 1, 3, 15, 135, ___",
            "Para cada sucesión, escribe con una frase cuál es su regla de formación.",
          ],
          product: "Fotografía tu libreta con las 3 sucesiones resueltas y su regla escrita."
        }
      },
      {
        id: "1.2", phase: "DESARROLLO", title: "Cómo encontrar la regla de formación",
        prior: "Observa: 392, 392, 196, 49, ___  ¿Crece o decrece? ¿Hay suma o multiplicación?",
        content: [
          { heading: "Pasos para descubrir el patrón", text: null, steps: [
            "Observa si la sucesión CRECE o DECRECE.",
            "Calcula las diferencias entre términos consecutivos.",
            "Si las diferencias son iguales → aritmética (suma/resta).",
            "Si la razón es constante → geométrica (multiplicación/división).",
            "Si cambia → busca una combinación de ambas.",
          ]},
          { heading: "Ejemplo resuelto: 1, 3, 15, 135", text: "Diferencias: no constantes. Razones: 3÷1=3, 15÷3=5, 135÷15=9. ¡Los factores son 3, 5, 9… (+2 cada vez)! Es combinada. El siguiente factor es 11 → 135 × 11 = 1485." },
        ],
        activity: {
          title: "Ejercicios en tu libreta",
          tasks: [
            "Encuentra el siguiente término y escribe la regla: a) 392, 392, 196, 49, ___    b) 12, 24, 4, 12, ___, ___",
            "Para cada una: ¿es aritmética, geométrica o combinada?",
          ],
          product: "Libreta con procedimiento visible (diferencias o razones calculadas)."
        }
      },
      {
        id: "1.3", phase: "DESARROLLO", title: "El término enésimo (posición n)",
        prior: "¿Cuánto valdría el término 50 de la sucesión 2, 4, 6, 8…? ¿Tendrías que escribir los 50 términos?",
        content: [
          { heading: "¿Qué es el término enésimo?", text: "Es una regla que te permite calcular CUALQUIER término sin recorrer toda la sucesión. Se escribe como: aₙ = [operación con n]" },
          { heading: "Cómo encontrarla: tabla de posición", text: null, table: {
            headers: ["Posición (n)", "1", "2", "3", "4", "n"],
            rows: [
              ["Sucesión 2,4,6,8…", "2", "4", "6", "8", "2n"],
              ["Sucesión 5,6,7,8…", "5", "6", "7", "8", "n+4"],
            ]
          }},
          { heading: "Cómo usar la regla", text: "Una vez que tienes la regla, sustituye el número de posición. Ejemplo: en aₙ = 2n, el término 50 es 2×50 = 100." },
        ],
        activity: {
          title: "Construye tus tablas",
          tasks: [
            "Para la sucesión 5, 6, 7, 8, 9… construye la tabla de posición y encuentra la regla del enésimo término.",
            "Usa la regla para calcular el término 50 y el término 65.",
            "Repite con la sucesión 11, 12, 13, 14…",
          ],
          product: "Libreta con tabla de posición y la regla escrita como fórmula."
        }
      },
      {
        id: "1.4", phase: "PRÁCTICA", title: "Dada la regla, construye la sucesión",
        prior: "Hasta ahora encontramos la regla. Ahora haremos lo contrario: a partir de la regla, generamos la sucesión.",
        content: [
          { heading: "Procedimiento inverso", text: "Sustituye n = 1, 2, 3, 4, 5, 6… en la fórmula y calcula cada resultado." },
          { heading: "Ejemplos", text: null, table: {
            headers: ["Regla", "Términos 1-5", "Tipo"],
            rows: [
              ["aₙ = n + 3", "4, 5, 6, 7, 8", "Aritmética (+1)"],
              ["aₙ = 2n − 1", "1, 3, 5, 7, 9", "Aritmética (impares)"],
              ["aₙ = 3n + 1", "4, 7, 10, 13, 16", "Aritmética (+3)"],
              ["aₙ = n − 2", "−1, 0, 1, 2, 3", "Aritmética (+1 desde −1)"],
            ]
          }},
        ],
        activity: {
          title: "Reto integrador — Bloque 1",
          tasks: [
            "Encuentra el siguiente término y la regla de: 12, 24, 4, 12, ___, ___",
            "Calcula el término 50 y el término 100 de la sucesión: 5, 10, 15, 20…",
            "Con la regla aₙ = 4n − 2, escribe los primeros 8 términos.",
            "CREA tu propia sucesión combinada con al menos 6 términos y escribe su regla.",
          ],
          product: "📸 Fotografía tu hoja completa y envíala por Classroom."
        }
      },
    ]
  },
  {
    id: 2, color: C.b2, emoji: "📐", title: "Jerarquía de Operaciones",
    subtitle: "El orden sí importa",
    units: [
      {
        id: "2.1", phase: "INICIO", title: "¿Por qué existe la jerarquía?",
        prior: "Sin reglas, 2 + 3 × 4 podría dar 20 (si sumas primero) o 14 (si multiplicas primero). ¿Cuál es el correcto?",
        content: [
          { heading: "El conflicto", text: "2 + 3 × 4. Si no hay orden, hay ambigüedad. Por eso existe la jerarquía de operaciones: un acuerdo universal sobre qué calcular primero." },
          { heading: "La pirámide PEMDAS", text: null, table: {
            headers: ["Nivel", "Operación", "Ejemplo"],
            rows: [
              ["1° (primero)", "Paréntesis ( )  [ ]  { }", "(3+4) = 7 primero"],
              ["2°", "Potencias y raíces  xⁿ  √", "2³ = 8 antes de sumar"],
              ["3°", "Multiplicación y División  ×  ÷", "3×4 antes de sumar"],
              ["4° (último)", "Suma y Resta  +  −", "2+12=14 al final"],
            ]
          }},
          { heading: "Resultado correcto", text: "2 + 3 × 4 = 2 + 12 = 14 ✅ (primero 3×4=12, luego 2+12)" },
        ],
        activity: {
          title: "Copia y memoriza",
          tasks: [
            "Dibuja la pirámide PEMDAS en tu libreta usando 4 colores distintos.",
            "Resuelve: a) 10 − 6 ÷ 3 + 30 ÷ 6   b) 7 × 1 + 3 − 2 ÷ 1 + 4 + 1",
          ],
          product: "Pirámide dibujada + 2 ejercicios con pasos marcados."
        }
      },
      {
        id: "2.2", phase: "DESARROLLO", title: "Multiplicación y división antes que suma y resta",
        prior: "Recuerda: nivel 3 (×÷) siempre va antes que nivel 4 (+−). Cuando hay varias del mismo nivel: de izquierda a derecha.",
        content: [
          { heading: "Regla de izquierda a derecha", text: "Cuando en una expresión hay sólo multiplicaciones, divisiones, o una mezcla de ambas en el mismo nivel, se resuelven de izquierda a derecha." },
          { heading: "Ejemplo paso a paso", text: null, steps: [
            "Expresión: 7×3 − 12÷3×4 + 1 − 4",
            "Paso 1 (multiplicar/dividir de izq. a der.): 7×3=21 | 12÷3=4 | 4×4=16",
            "Expresión reducida: 21 − 16 + 1 − 4",
            "Paso 2 (suma/resta de izq. a der.): 21−16=5 | 5+1=6 | 6−4=2",
            "Resultado: 2 ✅",
          ]},
        ],
        activity: {
          title: "Usa el organizador",
          tasks: [
            "Copia el organizador en tu libreta: Paso 1 (Mult/Div) → Paso 2 (Suma/Resta) → Resultado",
            "Resuelve con el organizador: a) 5+5+4×6 − 36÷3×2+10   b) 7×3−12÷3×4+1−4",
          ],
          product: "Libreta con organizador lleno para cada ejercicio."
        }
      },
      {
        id: "2.3", phase: "DESARROLLO", title: "Signos de agrupación: ( )  [ ]  { }",
        prior: "Los signos de agrupación son como instrucciones urgentes: 'resuelve esto PRIMERO antes de hacer cualquier otra cosa'.",
        content: [
          { heading: "Los tres signos y su orden", text: null, table: {
            headers: ["Signo", "Nombre", "Posición en el orden"],
            rows: [
              ["( )", "Paréntesis", "PRIMERO — se resuelven antes que corchetes y llaves"],
              ["[ ]", "Corchetes", "SEGUNDO — sólo puede contener paréntesis"],
              ["{ }", "Llaves", "TERCERO — puede contener corchetes y paréntesis"],
            ]
          }},
          { heading: "Regla de oro: de adentro hacia afuera", text: "Siempre resuelve el signo más interior primero. Nunca pongas corchetes dentro de paréntesis." },
          { heading: "Ejemplo completo", text: "{[(3+4) + (4−3)] × (2+1)}\nPaso 1 paréntesis: 3+4=7, 4−3=1, 2+1=3 → {[7+1]×3}\nPaso 2 corchetes: 7+1=8 → {8×3}\nPaso 3 llaves: 8×3=24 ✅" },
        ],
        activity: {
          title: "Copia y resuelve",
          tasks: [
            "Explica con tus palabras qué significa 'resolver de adentro hacia afuera'.",
            "Resuelve: a) 5×(3+4)   b) {[(2×3)+(4−1)]×2}",
          ],
          product: "Libreta con explicación propia y 2 ejercicios resueltos por pasos."
        }
      },
      {
        id: "2.4", phase: "PRÁCTICA", title: "Operaciones combinadas con todos los signos",
        prior: "Ahora combinamos todo: paréntesis, corchetes, llaves, multiplicaciones y divisiones en una sola expresión.",
        content: [
          { heading: "Organizador completo de pasos", text: null, table: {
            headers: ["Paso", "Qué resuelvo primero"],
            rows: [
              ["P — Paréntesis ( )", "Todo lo que esté entre paréntesis"],
              ["E — Exponentes (potencias)", "Potencias y raíces"],
              ["M/D — Mult y Div", "De izquierda a derecha"],
              ["A/S — Suma y Resta", "De izquierda a derecha"],
            ]
          }},
          { heading: "Ejemplo: 150 ÷ (25×2) + 32 ÷ (8×2)", text: "Paso 1 paréntesis: 25×2=50, 8×2=16 → 150÷50 + 32÷16\nPaso 2 divisiones: 150÷50=3, 32÷16=2 → 3 + 2\nPaso 3 suma: 3+2=5 ✅" },
        ],
        activity: {
          title: "Reto integrador — Bloque 2",
          tasks: [
            "Resuelve con el organizador P-E-MD-AS: [50÷(2×5) + 3÷(2−1)] × 6÷(5+1)",
            "Resuelve: 30[(6+7×2)÷5 − 7÷(10−3)] × 4 + (20)(2)",
            "Resuelve: [(6+7×1)5 − 7(6−3)] × 4 + (20)(2)",
            "CREA un ejercicio propio con al menos 3 niveles jerárquicos y resuélvelo.",
          ],
          product: "📸 Muestra el organizador completo (cada paso visible) en tu libreta."
        }
      },
    ]
  },
  {
    id: 3, color: C.b3, emoji: "➗", title: "Fracciones",
    subtitle: "Multiplicación y división de partes",
    units: [
      {
        id: "3.1", phase: "INICIO", title: "Repaso rápido de fracciones",
        prior: "¿Qué representa el numerador? ¿Y el denominador? ¿Puedes dibujar 3/4 de un círculo?",
        content: [
          { heading: "Partes de una fracción", text: "Numerador (arriba): cuántas partes tomamos. Denominador (abajo): en cuántas partes iguales está dividido el entero. Ejemplo: 3/4 = tomamos 3 de cada 4 partes." },
          { heading: "Fracciones equivalentes", text: null, table: {
            headers: ["Fracción", "Equivalente", "¿Cómo?"],
            rows: [
              ["1/2", "2/4 = 3/6 = 4/8", "Multiplica numerador y denominador por el mismo número"],
              ["3/4", "6/8 = 9/12", "×2 y ×3 respectivamente"],
              ["2/3", "4/6 = 6/9", "×2 y ×3 respectivamente"],
            ]
          }},
        ],
        activity: {
          title: "Activa tu memoria",
          tasks: [
            "Dibuja en tu libreta: 1/2, 2/3 y 3/4 usando rectángulos divididos.",
            "Escribe 3 fracciones equivalentes para 1/3.",
          ],
          product: "Dibujos y fracciones equivalentes en libreta."
        }
      },
      {
        id: "3.2", phase: "DESARROLLO", title: "Multiplicación de fracciones",
        prior: "¿Qué significaría 'la mitad de tres cuartos'? Eso es exactamente 1/2 × 3/4.",
        content: [
          { heading: "Algoritmo de multiplicación", text: null, steps: [
            "Multiplica numerador × numerador.",
            "Multiplica denominador × denominador.",
            "Simplifica la fracción resultado si es posible.",
          ]},
          { heading: "Ejemplo", text: "2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2 ✅ (se simplifica dividiendo entre 6)" },
          { heading: "⚠️ Ley de signos", text: null, table: {
            headers: ["Operación", "Resultado"],
            rows: [
              ["(+) × (+)", "Positivo (+)"],
              ["(−) × (−)", "Positivo (+)"],
              ["(+) × (−)", "Negativo (−)"],
              ["(−) × (+)", "Negativo (−)"],
            ]
          }},
        ],
        activity: {
          title: "Practica en tu libreta",
          tasks: [
            "Resuelve y simplifica: a) 2/5 × 3/4   b) (−3/7) × (2/9)   c) 5/6 × 3/10",
            "Problema contextualizado: Una receta pide 3/4 de taza de azúcar. Quieres hacer 2/3 de la receta. ¿Cuánta azúcar necesitas?",
          ],
          product: "Procedimiento completo con ley de signos indicada."
        }
      },
      {
        id: "3.3", phase: "DESARROLLO", title: "División de fracciones: el truco KCI",
        prior: "Dividir entre una fracción es lo mismo que multiplicar por su inverso. ¿Por qué? Porque 1÷(1/2) = 2 (hay dos mitades en 1).",
        content: [
          { heading: "Los 3 pasos: Conserva – Cambia – Invierte", text: null, steps: [
            "CONSERVA la primera fracción tal como está.",
            "CAMBIA el signo ÷ por ×.",
            "INVIERTE la segunda fracción (voltea numerador y denominador).",
            "Multiplica normalmente y simplifica.",
          ]},
          { heading: "Ejemplo", text: "3/4 ÷ 2/5\n→ Conserva: 3/4\n→ Cambia: 3/4 ×\n→ Invierte: 3/4 × 5/2\n→ Resultado: 15/8 ✅" },
          { heading: "Ley de signos para la división", text: null, table: {
            headers: ["Operación", "Resultado"],
            rows: [
              ["(+) ÷ (+)", "Positivo (+)"],
              ["(−) ÷ (−)", "Positivo (+)"],
              ["(+) ÷ (−)", "Negativo (−)"],
              ["(−) ÷ (+)", "Negativo (−)"],
            ]
          }},
        ],
        activity: {
          title: "Ejercicios KCI",
          tasks: [
            "Resuelve con los 3 pasos visibles: a) 5/6 ÷ 2/3   b) (−3/4) ÷ (1/2)   c) 7/8 ÷ (−1/4)",
            "Problema: Tienes 3/4 de pizza. Cada porción es 1/8. ¿Cuántas porciones puedes servir?",
          ],
          product: "Los 3 pasos (K-C-I) escritos para cada ejercicio."
        }
      },
      {
        id: "3.4", phase: "CIERRE", title: "Fracciones con decimales",
        prior: "¿Cómo expresarías 0.5 como fracción? ¿Y 0.25? ¿Y 1.5?",
        content: [
          { heading: "Conversión decimal → fracción", text: null, table: {
            headers: ["Decimal", "Fracción", "Decimal", "Fracción"],
            rows: [
              ["0.1", "1/10", "0.5", "1/2"],
              ["0.25", "1/4", "0.75", "3/4"],
              ["1.5", "3/2", "2.5", "5/2"],
            ]
          }},
          { heading: "Ejemplo completo: 3/4 × 0.5", text: "→ Convierte 0.5 = 1/2\n→ 3/4 × 1/2 = (3×1)/(4×2) = 3/8 = 0.375 ✅" },
        ],
        activity: {
          title: "Reto integrador — Bloque 3",
          tasks: [
            "Resuelve: (−2/3) × (3/5) = ?",
            "Resuelve: 7/8 ÷ (−1/4) = ?",
            "Resuelve: 3/5 × 0.25 = ?",
            "Problema: Una receta pide 3/4 de taza de harina. Quieres hacer 1/2 de la receta. ¿Cuánta harina necesitas?",
          ],
          product: "📸 Procedimiento completo con ley de signos. Fotografía y envía a Classroom."
        }
      },
    ]
  },
  {
    id: 4, color: C.b4, emoji: "📊", title: "Proporcionalidad Directa",
    subtitle: "Cuando todo crece en la misma proporción",
    units: [
      {
        id: "4.1", phase: "INICIO", title: "¿Qué es la proporcionalidad directa?",
        prior: "Si compras 2 refrescos y pagas $30, ¿cuánto pagarías por 6 refrescos? ¿Cómo lo calculaste?",
        content: [
          { heading: "Definición", text: "Dos magnitudes son directamente proporcionales cuando, al multiplicar una de ellas por un número cualquiera, la otra queda multiplicada por ese mismo número." },
          { heading: "Ejemplos de la vida diaria", text: null, table: {
            headers: ["Magnitud A", "Magnitud B", "Relación"],
            rows: [
              ["Litros de gasolina", "Precio a pagar", "Más litros = más dinero"],
              ["Horas trabajadas", "Salario cobrado", "Más horas = más pago"],
              ["Ingredientes", "Porciones de comida", "Más porciones = más ingredientes"],
              ["Kilómetros recorridos", "Tiempo de viaje", "Más km = más tiempo"],
            ]
          }},
          { heading: "Cociente constante", text: "Si A/B siempre da el mismo número (k), entonces son directamente proporcionales. A ese número k se le llama constante de proporcionalidad." },
        ],
        activity: {
          title: "Activación",
          tasks: [
            "Anota en tu libreta 5 ejemplos de proporcionalidad directa de tu propia vida.",
            "Para cada ejemplo, escribe qué magnitud aumenta y cuál disminuye.",
          ],
          product: "5 ejemplos propios con justificación breve."
        }
      },
      {
        id: "4.2", phase: "DESARROLLO", title: "Tabla de proporcionalidad y cociente constante",
        prior: "¿Cómo sabes si dos magnitudes SON proporcionales directas? Calculando el cociente.",
        content: [
          { heading: "Cómo verificar la proporcionalidad", text: "Divide el valor de la segunda magnitud entre el de la primera. Si el resultado es SIEMPRE el mismo número, son proporcionales directas." },
          { heading: "Ejemplo: gasolina y precio", text: null, table: {
            headers: ["Litros", "1", "2", "5", "10"],
            rows: [
              ["Precio ($)", "25", "50", "125", "250"],
              ["Precio ÷ Litros = k", "25", "25", "25", "25"],
            ]
          }},
          { heading: "La fórmula", text: "k = Precio ÷ Litros = 25. Entonces: Precio = 25 × Litros. Esta es la ecuación de proporcionalidad directa: y = kx" },
        ],
        activity: {
          title: "Construye tu propia tabla",
          tasks: [
            "Si 3 cuadernos cuestan $75, construye una tabla para 1, 3, 5, 7 y 12 cuadernos.",
            "Calcula el cociente para cada par y verifica que sea constante.",
            "Escribe la fórmula (y = kx) para este problema.",
          ],
          product: "Tabla completa + cociente calculado + fórmula escrita."
        }
      },
      {
        id: "4.3", phase: "DESARROLLO", title: "Gráfica de proporcionalidad directa",
        prior: "Si graficamos los pares de valores de una proporcionalidad directa, ¿qué forma crees que tendrá la gráfica?",
        content: [
          { heading: "Características de la gráfica", text: null, table: {
            headers: ["Característica", "¿Por qué?"],
            rows: [
              ["Es una línea recta", "La relación entre las magnitudes es constante"],
              ["Pasa por el origen (0,0)", "Cuando x=0, y=0 también (no hay producto si no hay cantidad)"],
              ["La pendiente = k", "La constante de proporcionalidad es la inclinación de la recta"],
            ]
          }},
          { heading: "Cómo trazar la gráfica", text: null, steps: [
            "Dibuja dos ejes perpendiculares (eje X horizontal, eje Y vertical).",
            "Pon etiquetas a cada eje (qué magnitud representa).",
            "Coloca los puntos de tu tabla en el plano.",
            "Une los puntos con una regla → debe quedar una línea recta.",
            "Verifica que la línea pase por el origen (0,0).",
          ]},
        ],
        activity: {
          title: "Reto integrador — Bloque 4",
          tasks: [
            "Determina si son proporcionales directas: (2,10), (4,20), (6,35). ¿Por qué sí o no?",
            "Si 5 kg de arroz cuestan $90, ¿cuánto cuestan 12 kg? Construye la tabla.",
            "Traza la gráfica de esa relación en papel cuadriculado.",
            "Escribe la ecuación (fórmula) que relaciona ambas magnitudes.",
          ],
          product: "📸 Tabla + gráfica + fórmula en tu libreta. Envía a Classroom."
        }
      },
    ]
  },
  {
    id: 5, color: C.b5, emoji: "⚡", title: "Potencias",
    subtitle: "La multiplicación que se repite a sí misma",
    units: [
      {
        id: "5.1", phase: "INICIO", title: "¿Qué es una potencia?",
        prior: "¿Cuánto es 2×2×2×2? ¿Y si tuvieras que multiplicar 2 por sí mismo 10 veces? Las potencias son un atajo para escribirlo.",
        content: [
          { heading: "Anatomía de una potencia", text: "En 2³:\n• 2 es la BASE (el número que se multiplica)\n• 3 es el EXPONENTE (cuántas veces se multiplica la base)\n• 2³ = 2×2×2 = 8" },
          { heading: "Casos especiales", text: null, table: {
            headers: ["Caso", "Regla", "Ejemplo"],
            rows: [
              ["Base positiva", "Siempre positivo", "3² = 9"],
              ["Base negativa, exp. PAR", "Resultado positivo", "(−2)⁴ = 16"],
              ["Base negativa, exp. IMPAR", "Resultado negativo", "(−2)³ = −8"],
              ["Exponente cero", "¡Siempre es 1!", "5⁰ = 1, (−7)⁰ = 1"],
              ["Exponente uno", "La base misma", "8¹ = 8"],
            ]
          }},
        ],
        activity: {
          title: "Practica los casos",
          tasks: [
            "Calcula: a) 4³   b) (−3)²   c) (−2)⁵   d) 7⁰   e) 10¹",
            "Observa el patrón: 2¹=2, 2²=4, 2³=8, 2⁴=16… Escribe hasta 2⁸.",
          ],
          product: "Cálculos en libreta con el proceso visible."
        }
      },
      {
        id: "5.2", phase: "DESARROLLO", title: "Ley 1: Multiplicación de misma base",
        prior: "2³ × 2⁴ = (2×2×2) × (2×2×2×2) = 2 multiplicado 7 veces. ¿Ves el patrón?",
        content: [
          { heading: "La ley", text: "aᵐ × aⁿ = a^(m+n)\nCuando las bases son IGUALES y multiplicamos, los exponentes se SUMAN.\n⚠️ Solo funciona con la misma base." },
          { heading: "Ejemplos", text: null, table: {
            headers: ["Expresión", "Aplicando la ley", "Resultado"],
            rows: [
              ["3² × 3⁵", "3^(2+5) = 3⁷", "2187"],
              ["x³ × x⁴", "x^(3+4) = x⁷", "x⁷"],
              ["5¹ × 5⁰", "5^(1+0) = 5¹", "5"],
              ["(−2)³ × (−2)²", "(−2)^(3+2) = (−2)⁵", "−32"],
            ]
          }},
        ],
        activity: {
          title: "Aplica la Ley 1",
          tasks: [
            "Simplifica (una sola potencia): a) 4³ × 4²   b) y² × y⁵   c) 6³ × 6⁴ × 6²",
            "¿Puedes aplicar la ley a 2³ × 3²? ¿Por qué sí o no?",
          ],
          product: "Ejercicios con la ley identificada y resultado."
        }
      },
      {
        id: "5.3", phase: "DESARROLLO", title: "Ley 2: División de misma base",
        prior: "2⁵ ÷ 2³ = (2×2×2×2×2)/(2×2×2). ¿Qué factores se cancelan arriba y abajo?",
        content: [
          { heading: "La ley", text: "aᵐ ÷ aⁿ = a^(m−n)\nCuando las bases son IGUALES y dividimos, el exponente menor se RESTA del mayor.\n⚠️ Solo con la misma base." },
          { heading: "Ejemplos", text: null, table: {
            headers: ["Expresión", "Aplicando la ley", "Resultado"],
            rows: [
              ["5⁶ ÷ 5²", "5^(6−2) = 5⁴", "625"],
              ["x⁸ ÷ x³", "x^(8−3) = x⁵", "x⁵"],
              ["3⁴ ÷ 3⁴", "3^(4−4) = 3⁰", "1"],
              ["10⁸ ÷ 10³", "10^(8−3) = 10⁵", "100000"],
            ]
          }},
        ],
        activity: {
          title: "Aplica la Ley 2",
          tasks: [
            "Simplifica: a) 7⁵ ÷ 7²   b) m⁶ ÷ m   c) (−3)⁵ ÷ (−3)²",
            "¿Por qué cualquier número elevado a cero es 1? Explícalo usando la Ley 2.",
          ],
          product: "Ejercicios con la ley y explicación escrita con palabras propias."
        }
      },
      {
        id: "5.4", phase: "DESARROLLO", title: "Ley 3: Potencia de una potencia",
        prior: "(2³)⁴ significa 2³ × 2³ × 2³ × 2³. Usando la Ley 1, ¿cuánto es?",
        content: [
          { heading: "La ley", text: "(aᵐ)ⁿ = a^(m×n)\nCuando hay potencia de una potencia, los exponentes se MULTIPLICAN.\n⚠️ Aquí se multiplican, ¡no se suman!" },
          { heading: "Ejemplos", text: null, table: {
            headers: ["Expresión", "Aplicando la ley", "Resultado"],
            rows: [
              ["(3²)⁵", "3^(2×5) = 3¹⁰", "59049"],
              ["(x⁴)³", "x^(4×3) = x¹²", "x¹²"],
              ["((−2)³)²", "(−2)^(3×2) = (−2)⁶", "64"],
              ["(a⁰)⁵", "a^(0×5) = a⁰", "1"],
            ]
          }},
        ],
        activity: {
          title: "Reto integrador — Bloque 5",
          tasks: [
            "Simplifica: (5²)³ = ?   y   (y³)⁴ = ?",
            "Simplifica: 6³ × 6⁴ × 6² (usa Ley 1)",
            "Simplifica: 10⁸ ÷ 10³  y  (−3)⁵ ÷ (−3)²  (usa Ley 2)",
            "RETO MIXTO: [(5²)³ × 5⁰] ÷ 5⁴  — aplica las 3 leyes en orden. Muestra qué ley usas en cada paso.",
          ],
          product: "📸 Procedimiento completo (indicando qué ley aplicas en cada paso). Envía a Classroom."
        }
      },
    ]
  },
];

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function Badge({ text, color, small }) {
  return (
    <span style={{
      display: "inline-block",
      background: color,
      color: "#fff",
      borderRadius: 6,
      padding: small ? "2px 10px" : "4px 14px",
      fontSize: small ? 11 : 12,
      fontWeight: 700,
      letterSpacing: 1,
    }}>{text}</span>
  );
}

function Card({ children, style }) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: 12,
      padding: "18px 20px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
      marginBottom: 14,
      ...style,
    }}>{children}</div>
  );
}

function StepList({ steps }) {
  return (
    <ol style={{ margin: "10px 0 0 0", paddingLeft: 0, listStyle: "none" }}>
      {steps.map((s, i) => (
        <li key={i} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
          <span style={{
            minWidth: 26, height: 26, borderRadius: "50%",
            background: C.teal, color: "#fff",
            fontWeight: 700, fontSize: 13,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>{i + 1}</span>
          <span style={{ fontSize: 14, color: C.ink, lineHeight: 1.5, paddingTop: 3 }}>{s}</span>
        </li>
      ))}
    </ol>
  );
}

function DataTable({ headers, rows }) {
  return (
    <div style={{ overflowX: "auto", margin: "10px 0" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} style={{
                background: C.night, color: "#fff",
                padding: "8px 10px", textAlign: "left",
                fontWeight: 700, borderBottom: "2px solid #ddd",
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ background: ri % 2 === 0 ? C.snow : "#fff" }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{
                  padding: "7px 10px", borderBottom: "1px solid #e5e7eb",
                  color: C.ink, verticalAlign: "top",
                }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ContentSection({ item, blockColor }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <h4 style={{ color: blockColor, fontWeight: 700, margin: "0 0 8px 0", fontSize: 15 }}>
        {item.heading}
      </h4>
      {item.text && (
        <p style={{ color: C.ink, lineHeight: 1.6, fontSize: 14, margin: 0, whiteSpace: "pre-line" }}>
          {item.text}
        </p>
      )}
      {item.steps && <StepList steps={item.steps} />}
      {item.table && <DataTable headers={item.table.headers} rows={item.table.rows} />}
    </div>
  );
}

function ActivityPanel({ activity, blockColor }) {
  const [done, setDone] = useState({});
  return (
    <div style={{
      background: `${blockColor}12`,
      border: `2px solid ${blockColor}`,
      borderRadius: 12,
      padding: "16px 18px",
      marginTop: 6,
    }}>
      <div style={{ fontWeight: 700, color: blockColor, fontSize: 15, marginBottom: 10 }}>
        🎯 {activity.title}
      </div>
      {activity.tasks.map((t, i) => (
        <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
          <input
            type="checkbox"
            checked={!!done[i]}
            onChange={() => setDone(d => ({ ...d, [i]: !d[i] }))}
            style={{ marginTop: 3, width: 16, height: 16, cursor: "pointer", accentColor: blockColor, flexShrink: 0 }}
          />
          <span style={{
            fontSize: 13.5, color: C.ink, lineHeight: 1.5,
            textDecoration: done[i] ? "line-through" : "none",
            opacity: done[i] ? 0.5 : 1,
          }}>{t}</span>
        </div>
      ))}
      <div style={{
        marginTop: 12, background: blockColor, color: "#fff",
        borderRadius: 8, padding: "8px 12px", fontSize: 13, fontWeight: 600,
      }}>
        📦 Producto: {activity.product}
      </div>
    </div>
  );
}

function UnitView({ unit, blockColor, onBack }) {
  const phaseColors = { INICIO: "#0891B2", DESARROLLO: "#059669", PRÁCTICA: "#D97706", CIERRE: "#DC2626" };
  return (
    <div>
      <button
        onClick={onBack}
        style={{
          background: "none", border: `2px solid ${blockColor}`,
          color: blockColor, borderRadius: 8, padding: "6px 14px",
          cursor: "pointer", fontWeight: 700, fontSize: 13, marginBottom: 16,
        }}
      >
        ← Regresar
      </button>

      <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap", alignItems: "center" }}>
        <Badge text={unit.id} color={blockColor} />
        <Badge text={unit.phase} color={phaseColors[unit.phase] || C.slate} small />
      </div>

      <h2 style={{ color: C.night, fontWeight: 800, fontSize: 22, margin: "0 0 6px 0" }}>
        {unit.title}
      </h2>

      {/* Prior knowledge */}
      <Card style={{ background: `${blockColor}10`, border: `1px solid ${blockColor}40` }}>
        <div style={{ fontWeight: 700, color: blockColor, fontSize: 13, marginBottom: 6 }}>
          🔍 ACTIVA TUS CONOCIMIENTOS PREVIOS
        </div>
        <p style={{ margin: 0, color: C.ink, fontSize: 14, lineHeight: 1.5 }}>{unit.prior}</p>
      </Card>

      {/* Content sections */}
      <div style={{ fontWeight: 700, color: C.slate, fontSize: 12, letterSpacing: 1, margin: "18px 0 10px" }}>
        📖 CONTENIDO
      </div>
      {unit.content.map((item, i) => (
        <Card key={i}>
          <ContentSection item={item} blockColor={blockColor} />
        </Card>
      ))}

      {/* Activity */}
      <div style={{ fontWeight: 700, color: C.slate, fontSize: 12, letterSpacing: 1, margin: "18px 0 10px" }}>
        ✏️ ACTIVIDAD — PRODUCTO EVALUABLE
      </div>
      <ActivityPanel activity={unit.activity} blockColor={blockColor} />
    </div>
  );
}

function BlockView({ block, onBack }) {
  const [activeUnit, setActiveUnit] = useState(null);

  if (activeUnit !== null) {
    return (
      <UnitView
        unit={block.units[activeUnit]}
        blockColor={block.color}
        onBack={() => setActiveUnit(null)}
      />
    );
  }

  return (
    <div>
      <button
        onClick={onBack}
        style={{
          background: "none", border: `2px solid ${block.color}`,
          color: block.color, borderRadius: 8, padding: "6px 14px",
          cursor: "pointer", fontWeight: 700, fontSize: 13, marginBottom: 18,
        }}
      >
        ← Regresar al inicio
      </button>

      {/* Block header */}
      <div style={{
        background: block.color,
        borderRadius: 16,
        padding: "24px 24px 20px",
        marginBottom: 22,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", right: -20, top: -20,
          width: 120, height: 120, borderRadius: "50%",
          background: "rgba(255,255,255,0.1)",
        }} />
        <div style={{ fontSize: 36, marginBottom: 8 }}>{block.emoji}</div>
        <h2 style={{ color: "#fff", fontWeight: 800, fontSize: 24, margin: "0 0 4px" }}>{block.title}</h2>
        <p style={{ color: "rgba(255,255,255,0.85)", margin: 0, fontSize: 14 }}>{block.subtitle}</p>
        <div style={{ marginTop: 12, color: "rgba(255,255,255,0.7)", fontSize: 12 }}>
          {block.units.length} unidades · Inicio → Desarrollo → Cierre
        </div>
      </div>

      {/* Units list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {block.units.map((unit, idx) => {
          const phaseColors = { INICIO: "#0891B2", DESARROLLO: "#059669", PRÁCTICA: "#D97706", CIERRE: "#DC2626" };
          return (
            <button
              key={unit.id}
              onClick={() => setActiveUnit(idx)}
              style={{
                background: "#fff",
                border: `2px solid ${block.color}30`,
                borderRadius: 12,
                padding: "16px 18px",
                cursor: "pointer",
                textAlign: "left",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                transition: "all 0.15s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = block.color; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = `${block.color}30`; e.currentTarget.style.transform = "none"; }}
            >
              <div style={{ display: "flex", gap: 8, marginBottom: 6, alignItems: "center" }}>
                <Badge text={unit.id} color={block.color} small />
                <Badge text={unit.phase} color={phaseColors[unit.phase] || C.slate} small />
              </div>
              <div style={{ fontWeight: 700, color: C.night, fontSize: 15 }}>{unit.title}</div>
              <div style={{ color: C.slate, fontSize: 12, marginTop: 4 }}>
                {unit.content.length} secciones · {unit.activity.tasks.length} tareas evaluables
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [activeBlock, setActiveBlock] = useState(null);
  const [search, setSearch] = useState("");

  if (activeBlock !== null) {
    return (
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "16px 18px", fontFamily: "system-ui, sans-serif" }}>
        <BlockView block={BLOCKS[activeBlock]} onBack={() => setActiveBlock(null)} />
      </div>
    );
  }

  const filtered = search
    ? BLOCKS.filter(b =>
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.units.some(u => u.title.toLowerCase().includes(search.toLowerCase()))
      )
    : BLOCKS;

  return (
    <div style={{ maxWidth: 780, margin: "0 auto", fontFamily: "system-ui, sans-serif" }}>
      {/* Hero */}
      <div style={{
        background: C.night,
        borderRadius: "0 0 24px 24px",
        padding: "28px 24px 24px",
        marginBottom: 22,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", right: -30, top: -30,
          width: 160, height: 160, borderRadius: "50%",
          background: `${C.b1}25`,
        }} />
        <div style={{
          position: "absolute", left: -20, bottom: -20,
          width: 100, height: 100, borderRadius: "50%",
          background: `${C.teal}20`,
        }} />
        <div style={{ display: "inline-block", background: C.amber, color: C.night, borderRadius: 6, padding: "3px 12px", fontSize: 11, fontWeight: 800, letterSpacing: 2, marginBottom: 12 }}>
          MATEMÁTICAS · SECUNDARIA 107
        </div>
        <h1 style={{ color: "#fff", fontWeight: 900, fontSize: 26, margin: "0 0 6px", lineHeight: 1.2 }}>
          Compendio Didáctico Integrado
        </h1>
        <p style={{ color: C.teal, margin: "0 0 16px", fontSize: 14 }}>
          1°, 2° y 3° de Secundaria · Modalidad a Distancia · Nueva Escuela Mexicana
        </p>

        {/* Search */}
        <input
          placeholder="🔍  Busca un tema o bloque…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: "100%", boxSizing: "border-box",
            padding: "10px 16px", borderRadius: 10, border: "none",
            fontSize: 14, background: "rgba(255,255,255,0.1)",
            color: "#fff", outline: "none",
          }}
        />
      </div>

      {/* How to use */}
      {!search && (
        <div style={{ padding: "0 18px 16px" }}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10,
            marginBottom: 22,
          }}>
            {[
              { icon: "📖", label: "Lee", desc: "Introducción de cada tema" },
              { icon: "✏️", label: "Practica", desc: "Copia ejemplos en libreta" },
              { icon: "✅", label: "Entrega", desc: "Fotografía y envía" },
              { icon: "🔗", label: "Recursos", desc: "Links de apoyo incluidos" },
            ].map((item) => (
              <div key={item.label} style={{
                background: "#fff",
                borderRadius: 12, padding: "12px 8px",
                textAlign: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}>
                <div style={{ fontSize: 22, marginBottom: 4 }}>{item.icon}</div>
                <div style={{ fontWeight: 700, color: C.night, fontSize: 12 }}>{item.label}</div>
                <div style={{ color: C.slate, fontSize: 11, marginTop: 2 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Blocks */}
      <div style={{ padding: "0 18px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ fontWeight: 700, color: C.slate, fontSize: 12, letterSpacing: 1, marginBottom: 4 }}>
          {search ? `RESULTADOS PARA "${search.toUpperCase()}"` : "5 BLOQUES TEMÁTICOS"}
        </div>

        {filtered.map((block, idx) => (
          <button
            key={block.id}
            onClick={() => setActiveBlock(BLOCKS.indexOf(block))}
            style={{
              background: "#fff",
              border: `2px solid ${block.color}25`,
              borderRadius: 16,
              padding: 0,
              cursor: "pointer",
              textAlign: "left",
              overflow: "hidden",
              boxShadow: "0 3px 12px rgba(0,0,0,0.07)",
              transition: "all 0.15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.12)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 3px 12px rgba(0,0,0,0.07)"; }}
          >
            <div style={{ display: "flex", alignItems: "stretch" }}>
              {/* Color band */}
              <div style={{
                width: 8, background: block.color, flexShrink: 0,
              }} />
              {/* Content */}
              <div style={{ padding: "16px 18px", flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ display: "flex", gap: 8, marginBottom: 6, alignItems: "center" }}>
                      <span style={{ fontSize: 22 }}>{block.emoji}</span>
                      <Badge text={`Bloque ${block.id}`} color={block.color} small />
                    </div>
                    <h3 style={{ color: C.night, fontWeight: 800, fontSize: 17, margin: "0 0 3px" }}>
                      {block.title}
                    </h3>
                    <p style={{ color: C.slate, margin: 0, fontSize: 13 }}>{block.subtitle}</p>
                  </div>
                  <div style={{
                    background: block.color, color: "#fff",
                    borderRadius: 8, padding: "4px 10px",
                    fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 10,
                  }}>
                    {block.units.length} unidades →
                  </div>
                </div>
                {/* Unit preview */}
                <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
                  {block.units.map(u => (
                    <span key={u.id} style={{
                      background: `${block.color}12`, color: block.color,
                      borderRadius: 6, padding: "2px 8px", fontSize: 11, fontWeight: 600,
                    }}>
                      {u.id} {u.title.substring(0, 22)}{u.title.length > 22 ? "…" : ""}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </button>
        ))}

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: 40, color: C.slate }}>
            No se encontraron temas para "{search}". Intenta con otra búsqueda.
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{
        textAlign: "center", padding: "16px 18px 24px",
        color: C.slate, fontSize: 12,
        borderTop: "1px solid #e5e7eb",
      }}>
        Secundaria 107 · Nueva Escuela Mexicana · «El conocimiento transforma»
      </div>
    </div>
  );
}
