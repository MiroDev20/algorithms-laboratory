function binarySearch(target, array)
{
    try
    {
        if(typeof target !== 'number')
        {
            throw new  Error(`Se esperaba un número, pero se recibió ${typeof target}`);
        }
        else if (!Array.isArray(array))
        {
            throw new Error(`Se esperaba un array, pero se recibió ${typeof array}`)
        }
        else if (array.length === 0)
        {
            throw new Error(`El array está vacío`)
        }
        else
        {
            let mid;

            let start = 0;
            let end = array.length - 1;

            let located = false;

            while (!located)
            {
                mid = Math.floor((start + end) / 2);

                if (array[mid] == target)
                {
                    located = true;
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
            return mid;
        }
    }
    catch(error)
    {
        console.log(error.message)
    }
}

console.log(binarySearch(4, [1, 2, 3, 4, 5, 6, 7]))
