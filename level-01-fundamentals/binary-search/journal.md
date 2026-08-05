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

## Implementación

Al final, que la lista tenga un número par o impar de elementos no importa
demasiado. Da igual si redondeo hacia arriba o hacia abajo, lo verdaderamente
relevante es la comparación, ya que esto determina qué lado debe descartarse.

Saber esto fue un alivio, como quitarme un peso de encima, porque pensé que
tendría que implementar un algoritmo de selección diferente según si la lista
era par o impar.

Posteriormente, enfrenté otro problema relacionado con el descarte de un lado de
la lista, aunque no era tan grave. El asunto era que al reducir el rango
-sumando o restando `mid` a los punteros de `inicio` y `final` respectivamente-
dejaba el valor `medio` (la variable que representa el centro de la lista) de
tal forma que en el rango resultante quedaba un elemento que ya se sabía que no
era el buscado.

Este error provocaba que el algoritmo funcionara correctamente en ocasiones y en
otras no.

### Estructura

Respecto a la estructura del código:

Declaré todas las variables mutables al inicio de la función e inicialicé todas
excepto `medio`, ya que esta se modifica obligatoriamente al inicio del bucle
while, mientras que los cambios en las demás dependen de condiciones
específicas.

El bucle while, que ejecuta el algoritmo principal, se interrumpe en cuanto
`medio` es igual al elemento buscado.

Priorizando la simplicidad, decidí utilizar un único return que devuelve `medio`
después de la interrupción del bucle.

## Manejo de errores y testing

El algoritmo actual aún no contempla todos los casos de error y tampoco cuenta
con pruebas exhaustivas, aspectos que constituyen mi siguiente objetivo de
desarrollo.

Quiero hacer especial énfasis en que considero que la función debe manejar sus
propios errores internamente, y no delegar esta responsabilidad al archivo de
pruebas. Aunque no se vaya a implementar en un entorno real, parto del
principio de que si así fuera, la función debería ser autónoma. Se trata de una
cuestión de diseño: la función debe ser capaz de cumplir su propósito de manera
independiente.

## Elemento no encontrado

Estaba pensando en cómo manejar la excepción de elemento no encontrado.

No sabía por dónde empezar, pero tenía claro que no quería más de un `return` en
el código. Se lo comenté a DeepSeek y me mostró algo que, a partir de ahora,
aplicaré a mis futuros algoritmos.

En vez de poner el `return` al final del algoritmo, lo ubico justo cuando se
cumple el objetivo del mismo. En el caso de binary search, es encontrar un
número, y al
final lanzaré un error indicando que no se ha encontrado el objetivo.

Además, me mostró que podía eliminar el uso de la variable `localizad
(booleano) terminando el bucle cuando`inicio` deje de ser menor o igual a
`final`.

Funciona porque si el elemento buscado es un número grande, como 60, en una
lista del 1 al 20, siempre se estará moviendo `inicio` hacia delante hasta ser
igual a
`final`. Y si el número buscado fuera algo como -14 en esa misma lista, `final`
se
movería hacia atrás. En cualquier caso, `inicio` y `final` llegarán a ser
iguales.

## Tests

Los tests fueron implementados tomando como referencia los utilizados en
**Linear Search**.

Durante su desarrollo cometí un pequeño error relacionado con el alcance
(*scope*) de las variables. Como los mensajes de error en `implementation.js`
utilizan `typeof`, asumí erróneamente que podía hacer lo mismo en `tests.js`
sin tener en cuenta que las variables deben existir dentro del mismo ámbito.

Para solucionarlo, definí una variable llamada `string` en los tests y utilicé
`typeof string` para generar el mensaje esperado. De esta forma, el valor
obtenido por `typeof` coincide con el tipo del argumento que realmente se está
pasando a la función.

## Complejidad Temporal

### Mejor caso

Asumiendo que el elemento buscado esté en el centro de la lista: O(1) ya que
solo requiere de una comparación.

### Caso promedio

En cada iteración se elimina aproximadamente la mitad de los elementos
restantes, reduciendo el problema de tamaño N a N/2.

Esto resulta en una complejidad de O(log₂ n), donde n es el número de elementos
en la lista ordenada.

### Peor caso

El elemento está al final de las divisiones o ni siquiera existe.

## Complejidad espacial

Solo usa 3 variables:

- `inicio`
- `final`
- `medio`
