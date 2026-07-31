import { linearSearch as ls } from "./implementation.js";

const LOG = (item) => console.log(item)

function test(name, fn, expected)
{
    let obtained;

    try
    {
        obtained = fn();
    }
    catch (error)
    {
        obtained = error.message;
    }
    
    if (obtained === expected)
    {
        LOG(`✅ ${name}`)
    }
    else
    {
        LOG(`❌ ${name}\nEsperado: ${expected}\nObtenido: ${obtained}`)
    }
}

test(
    "Array vacío",
    () => ls(2, []),
    -1
)

test(
    "Elemento en índice 0",
    () => ls(5, [5, 4, 8]),
    0
)

test(
    "Elemento inexistente",
    () => ls(9, [3, 7, 0]),
    -1
)

test(
    "Elemento al final",
    () => ls(6, [9, 2, 6]),
    2
)

test(
    "Elementos repetidos",
    () => ls(2, [4, 2, 5, 1, 2]),
    1
)

// Prueba de mensajes de errores

test(
    "Target es un string",
    () => ls("x", [1, 2, 3]),
    `A number was expected, but it was obtained string`
)

test(
    "Array es un string",
    () => ls(5, "abc"),
    `An array was expected, but it was obtained string`
)
