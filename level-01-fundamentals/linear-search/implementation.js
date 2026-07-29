export function linearSearch (target, array)
{
    let result;

    if (typeof target !== 'number')
    {
        result = `A number was expected, but it was obtained ${typeof target}`
    }
    else
    {
        if (!Array.isArray(array))
        {
            result = `An array was expected, but it was obtained ${typeof array}`
        }
        else
        {
            for (let i = 0; i < array.length; i++)
            {
                if (array[i] === target)
                {
                    result = i
                    break
                }
            }
        }
    }

    return typeof result === 'number' ? result : result ?? -1
}
