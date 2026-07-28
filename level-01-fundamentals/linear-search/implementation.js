function linearSearch (target, array)
{
    for (let i = 0; i < array.length; i++)
    {
        if (array[i] === target)
        {
            result = array.indexOf(array[i])
        }
    }

    return result || -1
}

console.log(linearSearch(8, [1, 5, 2, 7, 5, 8, 0, 3]))
