function findPosition(arr, item){
          let array = [];
          let i = 0;
          arr.forEach(function(e){
               if(e === item){
                     let pos = arr.indexOf(e, i);
                     array.push(pos);
                     i = pos + 1;
               }     
          });
          return array;
}
