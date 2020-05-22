export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;

    bubbleSort(array,array.length,animations);
    return animations;
  }



function bubbleSort(arr,n,animations)  
{  
    let i, j;  
    for (i = 0; i < n-1; i++)  {  
    for (j = 0; j < n-i-1; j++)  {
        if (arr[j] > arr[j+1])  
            {
                let t  = arr[j];
                arr[j] =arr[j+1];
                arr[j+1] = t;
                animations.push([j,j+1]);
                animations.push([j,arr[j]]);
                animations.push([j+1,arr[j+1]]);
                animations.push([j,j+1]); 
            }
    }   
    }
} 