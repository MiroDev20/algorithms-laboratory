function binarySearch(target, array)
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
