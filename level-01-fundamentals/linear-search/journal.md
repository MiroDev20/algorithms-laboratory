# Aprendizaje de linear-search

Básicamente buscar hasta encontrar, de eso se trata, pero se puede complicar un
poco debido a los casos límites y también es un poco frustrante el no tener la
idea del algoritmo perfecto. Lo digo por el caso en el que hay varias
ocurrencias y debes decidir si hacer que devuelva el primero o el último.

Esperaba encontrar *La solución correcta*, pero creo que es más una
cuestión que depende del uso que le vayas a dar.

## O(n)

Vaya, aún no me cuadra del todo.

Sé que es una forma de analizar la complejidad de un algoritmo en base a su
tiempo de ejecución y su espacio en memoria (creo que a eso se le llama
complejidad espacial y temporal) que dependen del tamaño de la entrada (input).

No me preocupa no tener la idea clara de este tema, por eso existe este
repositorio.

En el próximo ejercicio le pediré a Claude que me diga cómo se analizan los
algoritmos usando este concepto.

He visto que se usan tablas, no parece difícil.

## Problema con los mensajes de error

Dado que cualquier string (que no contenga números) es menor a 0, no se pueden
mostrar los mensajes de entrada inválida.

Claude me sugirió: `return typeof result === 'number' ? result : -1`

A lo que respondí: Si corrijo el bug de la forma en la que me lo sugieres jamás
se mostrarán los mensajes de error ya que solo se devolverá algo diferente de -1
cuando se trate de un valor tipo 'number' y no 'string'. ¿Qué tal
`(result === 'number' && result >= 0) || result === 'string'`?

Si bien identifiqué el error de Claude no expresé bien la solución, pero Claude
entendió lo que quise decir y lo corrigió.

Él propuso entonces:
`(typeof result === 'number' && result >= 0) || typeof result === 'string'`

Y yo implementé:
`return (typeof result === 'number' && result >= 0) || typeof result === 'string' ? result : -1`

Al final me propuso otra solución más limpia: `typeof result === 'number' && result >= 0 ? result : result ?? -1`

Dado que tengo frente a mí tres soluciones, tengo que evaluar la que provocó el problema
y después sus dos posibles soluciones.

## Responsable del problema

`return result >= 0 ? result : -1`

### ¿Por qué?

Se supone que en caso de recibir un input de tipo 'string' (en `target` o `array`)
`result` guardaría un mensaje indicando el error, pero el return que hice
dice "si result >= 0 devuélvelo, sino devuelve -1"

O sea que solo se devolverán valores numéricos mayores o iguales a 0, y dado que ningún
string (a menos que contenga un número) es mayor a 0, nunca se mostrarán los
mensajes de error y, en cambio, se devolverá -1.

### Primera Solución

`return (typeof result === 'number' && result >= 0) || typeof result === 'string' ? result : -1`

Traducido a lenguaje natural: si `result` es de tipo 'number' y mayor a 0
o es un string devuélvelo, sino devuelve -1.

### Segunda Solución

`typeof result === 'number' ? result : result ?? -1`

Traducido: si result es de tipo 'number' devuélvelo, sino
¿result es null/undefined? de serlo devuelve -1, caso contrario devuelve result.

Creo que esta opción es mejor porque en vez de verificar si `typeof result === 'string'`
verifica que sea diferente de null/undefined y además se elimina la comparación `result >= 0`
la cual está de más y quise mantener en la primera solución solo porque la original (la que causó el problema)
también lo hacía.

## Throw Error

Hablando con Claude sobre el estado del algoritmo, me recomendó usar `throw new Error()` en lugar de `console.log()`, ya que de esta manera se evita que el programa interprete como mensajes de consola lo que en realidad son errores de uso.

Una vez reemplazados los `console.log()` por `throw new Error()`, no es necesaria la lógica del último `return`.

Además, debería capturar los nuevos errores en los tests.

## Captura de Excepciones en `tests.js`

Bien, implementé la captura de excepciones gracias a que DeepSeek
(no Claude) me dio una breve explicación de cómo hacerlo.

El problema principal era que al pasar como argumento la función
linearSearch (ls) **se ejecutaba inmediatamente** para poder devolver algo a
`obtained`, y cuando se lanzaba un error, se detenía todo.

Obviamente no podía crear dentro de los parámetros de `test` (la función)
la lógica necesaria para capturar el error, así que tenía que evitar que
este se lanzara de inmediato y, para eso, tenía que cambiar el momento en
el que se ejecuta la función `ls`.

La solución es bastante simple: en vez de pasarla directamente, lo haré como
callback, ejecutándola dentro de `test` en el interior de un bloque `try`
esperando el error.

Pude haber ido a `implementation.js` y retornar `linearSearch` dentro de algo
como `function callback(target, array)` (muy probablemente eso habría hecho), pero
la ballena me mostró algo tan eficaz como sencillo: en `test.js` meter las
llamadas a `ls` en arrow functions de forma que se asocie a un nuevo parámetro
de `test` (algo como fun, callback o fn) después ejecutarla dentro de un bloque
`try`, tal cual lo comenté más arriba.

1. Primero removí obtained de los parámetros de `test` (porque ya no recibiría)
    el resultado de `ls` sino la propia función `ls`
2. Agregué el nuevo llamado fn (a partir de aquí, si bien no había reemplazado el
    segundo argumento en las llamadas a `test` por las arrow functions, lo di por hecho).
3. Reutilicé obtained para guardar el return de fn (así evito tocar los condicionales)
4. En caso de lanzar error vuelvo a usar obtained para guardarlo.
5. Por último hice realidad el supuesto que di por hecho y agregué las arrow
    functions en las llamadas a `test`.

Todavía hay otras cosas que añadirle a este algoritmo, pero ya le he dedicado
mucho, así que avanzaré al siguiente y volveré a este en un futuro.
