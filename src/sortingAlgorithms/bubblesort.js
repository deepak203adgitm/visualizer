export function getBubleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;

    bubbleSort(array, array.length - 1, animations);
    return animations;
}

function bubbleSort(

    array,
    endIdx,
    animations,
) {
    let div_sizes = array;

    let array_size = endIdx + 1;


    for (var i = 0; i < array_size - 1; i++) {
        for (var j = 0; j < array_size - 1 - i; j++) {


            if (div_sizes[j] > div_sizes[j + 1]) {



                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;





            }



            animations.push([j, j + 1]);
            animations.push([j, j + 1]);
            animations.push([j, div_sizes[j]]);//Color update
            animations.push([j + 1, div_sizes[j + 1]]);//Color update


        }




    }


    for (var k = 0; k < array_size; k++) {
        animations.push([array_size - 1 - k, array_size - 1 - k]);
        animations.push([array_size - 1 - k, array_size - 1 - k]);//Color update
        animations.push([array_size - k - 1, div_sizes[array_size - 1 - k]]);//Color update
        animations.push([array_size - k - 1, div_sizes[array_size - 1 - k]]);//
    }


}


