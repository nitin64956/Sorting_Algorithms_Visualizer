export function getCycleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;

    cycleSort(array,array.length,animations);
    return animations;
  }


function cycleSort(arr,n,animations) 
{ 
    let writes = 0; 
  
     for (let  cycle_start = 0; cycle_start <= n - 2; cycle_start++) { 
        let item = arr[cycle_start]; 
  
         let pos = cycle_start; 
        for (let i = cycle_start + 1; i < n; i++) 
            if (arr[i] < item) 
                pos++; 
  
         if (pos === cycle_start) 
            continue; 
  
         while (item === arr[pos]) 
            pos += 1; 
  
         if (pos !== cycle_start) { 
           
            let t = item;
          item = arr[pos];
          arr[pos] = t; 
          animations.push([pos]);
          animations.push([pos,arr[pos]]);
          animations.push([pos]); 
            writes = writes + 1; 
        } 
  
        while (pos !== cycle_start) { 
            pos = cycle_start; 
  
            for (let i = cycle_start + 1; i < n; i++) 
                if (arr[i] < item) 
                    pos += 1; 
  
            while (item === arr[pos]) 
                pos += 1; 
  
             if (item !== arr[pos]) { 
                let v = item;
                item = arr[pos];
                arr[pos] = v; 
                animations.push([pos]);
                animations.push([pos,arr[pos]]);
                animations.push([pos]); 
                writes = writes + 1; 
            } 
        } 
    } 
  
} 