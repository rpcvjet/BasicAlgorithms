function upper(x) {
    return x.toUpperCase();
   }
   
   function accum(s) {
   
   let finalarray = [];
   
     let upperstring = upper(s);
     let newarray = upperstring.split('');
   
     for(let i = 0; i < newarray.length; i++) {
   
       newarray[i] += newarray[i].toLowerCase().repeat(i)
   
     }
     return newarray.join('-')
   }
   
   accum('abcd')