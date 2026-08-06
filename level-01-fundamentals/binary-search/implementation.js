// 🎉 DONE: verificar que los elementos del array sean números.
// ⏳ TODO: reemplazar mensajes por otros más claros
// ⏳ TODO: realizar una versión recursiva
// ⏳ TODO: agregar JSDoc a `binarySearch`
export function binarySearch(target, array)
{
    try
    {
        if(typeof target !== 'number')
        {
            throw new  Error(`Se esperaba un número, pero se recibió ${typeof target}`);
        }
        else if (!Array.isArray(array))
        {
            throw new Error(`Se esperaba un array, pero se recibió ${typeof array}`);
        }
        else if (array.length === 0)
        {
            throw new Error(`El array está vacío`);
        }
        else
        {
            for(let i = 0; i < array.length; i ++)
            {
                if (typeof array[i] !== 'number')
                {
                    throw new TypeError("El array solo puede contener números");
                }
            }

            let mid;

            let start = 0;
            let end = array.length - 1;
    
            while (start <= end)
            {
                mid = Math.floor((start + end) / 2);

                if (array[mid] == target)
                {
                    return mid;
                }
                else if (array[mid] > target)
                {
                    end = mid - 1;
                }
                else
                {
                    start = mid + 1;
                }
            }
            throw new Error('Elemento no encontrado');
        }
    }
    catch(error)
    {
        return error.message
    }
}
