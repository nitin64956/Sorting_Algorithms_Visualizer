export function getSelectionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;

    selectionSort(array,array.length,animations);
    return animations;
  }


  function selectionSort(arr,n,animations)  
{  
    let i, j, min_idx;  
    for (i = 0; i < n-1; i++)  
    {  
         min_idx = i;  
        for (j = i+1; j < n; j++)  
        if (arr[j] < arr[min_idx])  
            min_idx = j;  
  
        let t  = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = t;
        animations.push([i,min_idx]);
        animations.push([i,arr[i]]);
        animations.push([min_idx,arr[min_idx]]);
        animations.push([i,min_idx]); 

    }  
}