# Díario de Estudio de `Binary Search`

En la PlayStore hay una aplicación llamada Algoritmos que explica de forma muy
sencilla varios algoritmos y otros conceptos relacianados a la programación.

La App tiene un gran conjunto de temas que son de pago (todos por 10.000 COP),
pero de momento me basta con su versión gratuita.

Acabo de ver la explicación de Binary Search (busqueda lineal) y entendí el
concepto sin mucha dificultad: se parte desde la mitad de la lista evaluando
si el elemento allí es el buscado, sino, se evalúa si es mayor o menor, si es
menor; quiere decir que el elemento buscado está a su derecha y se descartan
todos los de la izquierda, caso contrario; quiere decir que el elemento buscado
esta a su izquierda y se descartan los de la derecha. En ambos casos el
procedimiento se repite hasta dar con el elemento buscado.

> [!NOTE]
> Este algoritmo asume que la lista está ordenada

Aunque entendí el algoritmo tengo una duda en cuanto a su implementación: ¿qué
pasa si la longitud de la lista es impar?
