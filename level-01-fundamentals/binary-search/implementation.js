// 🎉 DONE: verificar que los elementos del array sean números.
// 🎉 DONE: reemplazar mensajes por otros más claros
// 🎉 DONE: agregar JSDoc a `binarySearch`
// ⏳ TODO: realizar una versión recursiva

/**
 * Performs binary search on a SORTED array to find the target number.
 * 
 * @param {number} target - The number to search.
 * @param {number[]} array - The list that will be navigated.
 * @returns {number|string} Index of the found number in the array, or error message if failed.
 * @throws {TypeError} If the target is not a number.
 * @throws {TypeError} If the second argument is not an array.
 * @throws {Error} If the array is empty.
 * @throws {TypeError} If the array contains a none number type.
 * @throws {Error} If the target is not in the array.
 * 
 * @example
 * binarySearch(8, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
 * // 7
 * 
 * @example
 * // Error handling
 * binarySearch(8, [1, 2, '3']);
 * // throws "Todos los elementos del array deben ser números..."
*/
export function binarySearch(target, array)
{
    try
    {
        if(typeof target !== 'number')
        {
            throw new  TypeError(`El valor buscado debe ser un número. Tipo recibido: ${typeof target}`);
        }
        else if (!Array.isArray(array))
        {
            throw new TypeError(`El segundo argumento debe ser un array. Tipo recibido: ${typeof array}`);
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
