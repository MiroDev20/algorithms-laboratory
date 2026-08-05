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
    `Se esperaba un número, pero se recibió ${typeof string}`
);

test(
    "Array input validation: is not an array",
    () => bs(2, string),
    `Se esperaba un array, pero se recibió ${typeof string}`
);

test(
    "Array input validation: is empty",
    () => bs(2, []),
    `El array está vacío`
);

test(
    "Element not found",
    () => bs(10, [1, 2, 3]),
    "Elemento no encontrado"
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
    "Elemento no encontrado"
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
