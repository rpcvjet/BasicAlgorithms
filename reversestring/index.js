// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


    function reverse(str) {
    
        let reversed = '';

       for (let character of str) {
           reversed = character + reversed;
           debugger;
       }

        return reversed;

    }

        reverse('clock');

module.exports = reverse;


//method 1
    
    // function reverse(str) {
    //     
    //     return str.split('').reverse().join('');
    // }


//method 2


    //method 3
        // function reverse(str) {
        //     debugger;
        //    return str.split('').reduce( (reversed, char) => char + reversed, '');
        
        // }
