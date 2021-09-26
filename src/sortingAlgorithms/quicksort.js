export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;

    quickSortHelper(array, 0, array.length - 1, animations);

    return animations;
}




function quickSortHelper(array, start, end, animations) {
    if (start >= end) {
        return;
    }
    let pivot = start,
        left = start + 1,
        right = end;

    while (right >= left) {

        if (array[right] < array[pivot] && array[left] > array[pivot]) {

            animations.push([right, left]);
            animations.push([right, left]);

            let temp = array[right];
            array[right] = array[left];
            array[left] = temp;
            animations.push([left, array[left]]);
            animations.push([right, array[right]]);
        }
        if (array[right] >= array[pivot]) {


            right--;
        }
        if (array[left] <= array[pivot]) {

            left++;
        }

    }

    if (pivot !== right) {
        animations.push([right, pivot]);
        animations.push([right, pivot]);
        let temp = array[right];
        array[right] = array[pivot];
        array[pivot] = temp;

        animations.push([right, array[right]]);
        animations.push([pivot, array[pivot]]);

    }

    quickSortHelper(array, start, right - 1, animations);
    quickSortHelper(array, right + 1, end, animations);


}