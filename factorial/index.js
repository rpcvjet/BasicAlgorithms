function FirstFactorial(num) { 
    
    let result = num;
    
    while(num > 1) {
        
        num--;
        
        result *= num 
    }
   // code goes here  
   return result; 
          
 }
    
 // keep this function call here 
 FirstFactorial(readline());