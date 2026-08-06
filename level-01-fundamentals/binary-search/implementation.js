// 🎉 DONE: verificar que los elementos del array sean números.
// 🎉 DONE: reemplazar mensajes por otros más claros
// ⏳ TODO: realizar una versión recursiva
// ⏳ TODO: agregar JSDoc a `binarySearch`
export function binarySearch(target, array)
{
    try
    {
        if(typeof target !== 'number')
        {
            throw new  Error(`El valor buscado debe ser un número. Tipo recibido: ${typeof target}`);
        }
        else if (!Array.isArray(array))
        {
            throw new Error(`El segundo argumento debe ser un array. Tipo recibido: ${typeof array}`);
        }
        else if (array.length === 0)
        {
            throw new Error('No se puede realizar búsquedas en un array vacío');
        }
        else
        {
            for(let i = 0; i < array.length; i ++)
            {
                if (typeof array[i] !== 'number')
                {
                    throw new TypeError(`Todos los elementos del array deben ser números. Elemento no válido encontrado en el índice ${i}: ${typeof array[i]}`);
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
            throw new Error(`El elemento ${target} no se encuentra en el array`);
        }
    }
    catch(error)
    {
        return error.message
    }
}
