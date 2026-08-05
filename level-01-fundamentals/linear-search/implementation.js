export function linearSearch (target, array)
{
    try
    {
        if (typeof target !== 'number')
        {
            throw new Error(`A number was expected, but it was obtained ${typeof target}`);
        }
        else if (!Array.isArray(array))
        {
            throw new Error(`An array was expected, but it was obtained ${typeof array}`);
        }

        else if (array.length === 0)
        {
            throw new Error("Cannot search in an empty array");
        }
        else
        {
            for (let i = 0; i < array.length; i++)
            {
                if (typeof array[i] !== 'number')
                {
                    throw new Error("The array can only have 'number' types")
                }
                else if (array[i] === target)
                {
                    return i;
                }
            }

            throw new Error("Element not found");
        }
    }
    catch(error)
    {
        return error.message;
    }
}
