import { binarySearch as bs } from "./implementation.js";

function test(name, fn, expected)
{
    let obtained = fn();

    if(obtained == expected)
    {
        console.log(`✅ ${name}`);
    }
    else
    {
        console.log(`❌ ${name}\nEsperado: ${expected}\nObtenido: ${obtained}`);
    }
}

const string = "abc";

test(
    "Target input validation: is not a number",
    () => bs(string, [1, 2, 3]),
    `El valor buscado debe ser un número. Tipo recibido: ${typeof string}`
);

test(
    "Array input validation: is not an array",
    () => bs(2, string),
    `El segundo argumento debe ser un array. Tipo recibido: ${typeof string}`
);

test(
    "Array input validation: is empty",
    () => bs(2, []),
    "No se puede realizar búsquedas en un array vacío"
);

test(
    "Element not found",
    () => bs(10, [1, 2, 3]),
    "El elemento 10 no se encuentra en el array"
);

test(
    "Element found in the middle",
    () => bs(5, [1, 3, 5, 7, 9]),
    2
);

test(
    "Element found at the beginning",
    () => bs(1, [1, 3, 5, 7, 9]),
    0
);

test(
    "Element found at the end",
    () => bs(9, [1, 3, 5, 7, 9]),
    4
);

test(
    "Single element array: found",
    () => bs(10, [10]),
    0
);

test(
    "Single element array: not found",
    () => bs(5, [10]),
    `El elemento 5 no se encuentra en el array`
);

test(
    "Negative numbers",
    () => bs(-4, [-10, -4, 0, 5, 8]),
    1
);

test(
    "Floating point numbers",
    () => bs(2.5, [1.2, 2.5, 3.7]),
    1
);

test(
    "Invalid types in array",
    () => bs(5, [1, 2, 3, 4, "5", 6, 7, 8, 9]),
    "Todos los elementos del array deben ser números. Elemento no válido encontrado en el índice 4: string"
)
