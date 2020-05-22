export function getInsertionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;

    insertionSort(array,array.length,animations);
    return animations;
  }


function insertionSort(arr,n,animations)  
{  
    let i, key, j;  
    for (i = 1; i < n; i++) 
    {  
        key = arr[i]
        j = i - 1;  
  
        while (j >= 0 && arr[j] > key) 
        {  
            
            arr[j + 1] = arr[j]; 
            animations.push([j+1]);
            animations.push([j+1,arr[j]]);
            animations.push([j+1]);

            j = j - 1;  
        }  
        arr[j + 1] = key;
        animations.push([j+1]);
        animations.push([j+1,key]);
        animations.push([j+1]);
        

    }  
}  