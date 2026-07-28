function linearSearch (target, array)
{
    let result;

    if (!typeof target === 'number') // 🔥 FIXME: fix type validation
    {
        result = `A number was expected, but it was obtained ${typeof target}`
    }
    else
    {
        if (!array instanceof Array) // 🔥 FIXME: fix type validation
        {
            result = `An array was expected, but it was obtained ${typeof array}`
        }
        else
        {
            for (let i = 0; i < array.length; i++)
            {
                if (array[i] === target)
                {
                    result = array.indexOf(array[i]) // 🔧 REFACTOR: innecesary use of `.indexOf(array[i])`
                }
            }
        }
    }

    return result || -1 // 🔥 FIXME: fix return. When result = 0 returns -1 because consider it falsy
}

console.log(linearSearch(1, [1, 5, 2, 7, 5, 8, 0, 3]))
