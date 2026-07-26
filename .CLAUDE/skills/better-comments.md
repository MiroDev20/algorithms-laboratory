# Better Comments

## Propósito

Interpreta los comentarios creados con la extensión Better Comments como información semántica del proyecto.

Cada etiqueta representa una intención del desarrollador y debe influir en tu análisis.

No ignores estos comentarios.

Respétalos durante toda la conversación.

---

# Reglas generales

- Lee los comentarios antes de analizar el código.
- Ten en cuenta su contexto antes de sugerir cambios.
- No elimines comentarios del usuario salvo que se solicite explícitamente.
- Si un comentario contradice el código, señala la inconsistencia.
- Si un comentario describe una decisión de diseño, tenla presente antes de proponer alternativas.

---

# Etiquetas

## *

Comentario normal.

No requiere ninguna acción especial.

---

## ⏳ Pendiente

Representa una tarea futura.

No asumas que debe resolverse inmediatamente.

Si propones una solución, indícala como una posible mejora.

---

## 🎉 Completado

Indica un objetivo alcanzado.

Evita sugerir volver a implementar esa parte salvo que exista un problema claro.

---

## 🔥 Crítico

Zona especialmente importante.

Analiza esta sección con mayor detalle.

Si detectas riesgos, explícalos claramente.

---

## 🏙️ Arquitectura

Describe decisiones arquitectónicas.

Antes de proponer cambios, verifica que respeten esa arquitectura.

---

## ⚖️ Decisión

Representa un compromiso o trade-off.

Si sugieres una alternativa, explica también qué se perdería.

---

## 🔐 Seguridad

Presta especial atención a:

- validación
- permisos
- manejo de datos
- vulnerabilidades

---

## ⚡ Rendimiento

Evalúa:

- complejidad temporal
- complejidad espacial
- asignaciones innecesarias
- recorridos repetidos

No optimices sin justificar el beneficio.

---

## ⚠️ Advertencia

Existe un riesgo conocido.

No ignores este comentario.

Explícalo si afecta a la conversación.

---

## 🎯 Objetivo

Describe la intención de una función o bloque.

Evalúa si la implementación realmente cumple ese objetivo.

---

## 📏 Restricción

Existe una limitación.

No propongas soluciones que la incumplan.

---

## 👀 Revisar

Zona pendiente de revisión.

Si encuentras mejoras, indícalas.

---

## ✅ Correcto

Representa una implementación validada.

No asumas que es perfecta, pero evita sugerir cambios innecesarios.

---

## 💭 Idea

Representa una idea aún no implementada.

No la trates como un requisito.

---

## ❔ Duda

El usuario no comprende completamente esa parte.

Prioriza explicar el concepto antes de modificar el código.

---

## 📌 Importante

Información especialmente relevante.

Tenla presente durante todo el análisis.

---

## 🔎 Investigación

El usuario está explorando una posibilidad.

Presenta ventajas, desventajas y alternativas.

Evita afirmar conclusiones sin justificación.

---

## 🤓 Aprendizaje

El objetivo es comprender.

Prioriza explicaciones, ejemplos e intuiciones antes que la solución.

---

## 🤔 Bloqueo

El usuario está atascado.

Aplica el enfoque definido en la skill de mentor:

1. preguntas
2. pistas
3. pseudocódigo
4. implementación solo si se solicita

---

## 🧪 Experimento

Código utilizado para aprender o probar ideas.

Evita simplificarlo únicamente por estilo.

Respeta el carácter experimental.

---

## 🔁 Refactor

Existe intención de reorganizar el código.

Puedes sugerir mejoras estructurales.

No cambies el comportamiento observable.

---

## 💡 Idea de mejora

Representa una posible mejora futura.

Puedes desarrollarla si aporta valor.

---

## 🔧 Configuración

Describe aspectos de configuración del proyecto.

Comprueba que tus sugerencias sean compatibles con dicha configuración.

---

## 🗑️ Eliminación

Código candidato a eliminar.

Antes de recomendar eliminarlo, verifica que no tenga dependencias.

---

## 💾 Persistencia

Relacionado con almacenamiento o guardado.

Comprueba consistencia y posibles pérdidas de información.

---

## 🧩 Integración

Relacionado con la interacción entre componentes.

Analiza dependencias e impacto de los cambios.

---

## 🐛 Bug

Existe un fallo conocido.

Prioriza encontrar la causa raíz antes de proponer soluciones.

---

## 📍 Referencia

Marca una ubicación importante.

Utilízala como contexto durante el análisis.

---

## 📋 Tarea

Representa trabajo pendiente.

Puedes ayudar a dividirla en pasos más pequeños.

---

## 🌐 Externo

Hace referencia a servicios, APIs o recursos externos.

Ten presentes sus limitaciones antes de sugerir cambios.

---

## ✍️ Documentación

Relacionado con documentación.

Prioriza claridad y precisión.

---

## 📊 Métricas

Relacionado con rendimiento o mediciones.

Evita sacar conclusiones sin datos.

---

## ✨ Mejora

Representa una mejora no prioritaria.

Trátala como una recomendación, no como una obligación.

---

## 📝 Nota

Información adicional del desarrollador.

Utilízala como contexto, aunque no requiera ninguna acción.

---

# Prioridad

Si varios comentarios afectan al mismo bloque, utiliza el siguiente orden de prioridad:

1. 🔥 Crítico
2. 🔐 Seguridad
3. ⚠️ Advertencia
4. 📏 Restricción
5. 🎯 Objetivo
6. 🐛 Bug
7. ⚡ Rendimiento
8. 🏙️ Arquitectura
9. resto de etiquetas

---

# Relación con la skill Mentor

Cuando un comentario indique que el objetivo es aprender (🤓, 🤔, 🧪), prioriza siempre el razonamiento y la explicación antes que proporcionar una solución completa.
