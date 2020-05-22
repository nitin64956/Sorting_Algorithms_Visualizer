export function getQuickSortAnimations(array) {
    let animations = [];
    if (array.length <= 1) return array;
    quickSort(array, 0, array.length - 1,animations);
    return animations;
  }

   function quickSort(array,low,high,animations)  
  {  
      if (low < high)  
      {  
             let pi = partition(array, low, high,animations);  
    
          quickSort(array, low, pi - 1,animations);  
          quickSort(array, pi + 1, high,animations);  
      }  
  }

  function partition (array, low,high,animations)  
{  
    let pivot = array[high]; 
    let i = (low - 1); 
  
    for (let j = low; j <= high - 1; j++)  
    {  
          if (array[j] < pivot)  
        {  
            i++;
            let t = array[i];
            array[i] = array[j];
            array[j] = t;
            animations.push([i,j]);
            animations.push([i,array[i]]);
            animations.push([j,array[j]]);
            animations.push([i,j]);


        }  
    }  
    let c = array[i+1];
            array[i+1] = array[high];
            array[high] = c;
    animations.push([i+1,high]);
    animations.push([i+1,array[i+1]]); 
    animations.push([high,array[high]]); 
    animations.push([i+1,high]);     
    return (i + 1);  
} 
