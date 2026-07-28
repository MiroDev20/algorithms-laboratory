# Linear Search

El algoritmo *Linear Search* es sencillo de entender pues ya lo he usado antes
fuera del ámbito de la programación.

- Buscar un emoji
- Buscar un par de medias
- Buscar un color

Para todas esas búsquedas se requiere de comparar uno por uno los elementos de
la lista (emojis, medias, colores) con lo que queremos hallar.

> En el caso del par de medias solo habría que repetir el algoritmo.

## Se Ve Así

```ejemplo
buscar 🔴 en [🔵, 🟡, 🔴, 🟢, 🟣]
    ¿🔵 == 🔴? → ❌
    ¿🟡 == 🔴? → ❌
    ¿🔴 == 🔴? → ✅ devolver posición (3)
```

> [!NOTE]
> Al ser un ejemplo quise dejar la indexación con base cero (0)

## Idea Principal

Recorrer hasta encontrar

## ¿Por qué existe?

Es lo más intuitivo, lo que se nos ocurriría a todos, comparar uno por uno.

Además ni siquiera requiere datos ordenados.

## Funcionamiento

1. Empezar desde el primer elemento
2. Comparar con el objetivo
3. Si coincide → retornar índice
4. Si no → continuar al siguiente
5. Si llega al final → retornar -1 (es lo recomendable)
