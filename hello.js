function findPosition(arr, item){
          let array = [];
          arr.forEach(function(e){
               if(e === item){
                     let pos = arr.indexOf(e);
                     array.push(pos);    
               }     
          });
          return arr;
}