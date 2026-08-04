# Diario de Estudio de `Binary Search`

En la PlayStore hay una aplicación llamada Algoritmos que explica de forma muy
sencilla varios algoritmos y otros conceptos relacionados con la programación.

La App tiene un gran conjunto de temas que son de pago (todos por 10.000 COP),
pero de momento me basta con su versión gratuita.

Acabo de ver la explicación de Binary Search (búsqueda lineal) y entendí el
concepto sin mucha dificultad: se parte desde la mitad de la lista evaluando
si el elemento allí es el buscado. Si no, se evalúa si es mayor o menor. Si es
menor, quiere decir que el elemento buscado está a su derecha y se descartan
todos los de la izquierda. Caso contrario, quiere decir que el elemento buscado
está a su izquierda y se descartan los de la derecha. En ambos casos, el
procedimiento se repite hasta dar con el elemento buscado.

> [!NOTE]
> Este algoritmo asume que la lista está ordenada.

Aunque entendí el algoritmo, tengo una duda en cuanto a su implementación: ¿qué
pasa si la longitud de la lista es impar?

Tomé la decisión de reemplazar el contenido de los `README.md` por explicaciones
sencillas hechas por DeepSeek para tener una guía de consulta y mantener
`journal.md` como un diario sobre lo que aprendo, dudas que tenga, razonamiento,
y otras ideas.

En la explicación de DeepSeek leí algo sobre el uso de límites (uno inicial y
uno final) para aplicar el algoritmo, cosa que me sonó a punteros y, pese a que
no está relacionado con la vaga idea que tengo de la conversión a código de
Binary Search, lo tendré en cuenta.

Tampoco me dijo nada sobre qué hacer si la longitud es impar, así que lo
averiguaré en la práctica.
