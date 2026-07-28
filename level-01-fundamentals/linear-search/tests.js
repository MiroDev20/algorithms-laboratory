import { linearSearch as ls } from "./implementation.js";

const LOG = (item) => console.log(item)

function test(name, obtained, expected)
{
    expected = 2345;
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
    "Hola",
    ls(2, [4, 2, 4]),
    1
)
