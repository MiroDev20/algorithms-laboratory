export function linearSearch (target, array)
{
    if (typeof target !== 'number')
    {
        throw new Error(`A number was expected, but it was obtained ${typeof target}`)
    }
    else
    {
        if (!Array.isArray(array))
        {
            throw new Error(`An array was expected, but it was obtained ${typeof array}`)
        }
        else
        {
            for (let i = 0; i < array.length; i++)
            {
                if (array[i] === target)
                {
                    return i
                }
            }
        }
    }

    return -1
}
