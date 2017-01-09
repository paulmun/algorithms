/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    var longest = 0;
        stacker = [],
        temp = [],
        tcount = 0;
        for(var i = 0; i < input.length; i ++){
            if(input.charAt(i) == '\n' || i == input.length-1){
                if(i == input.length-1)temp.push(input.charAt(i));
                if(temp.indexOf('.') == -1){
                    temp.push('/');
                    console.log(temp)
                }
                while(stacker.length > tcount){
                    stacker.pop();
                }
                stacker.push(temp.join(''));
                if(temp.indexOf('.') > -1 && stacker.join('').length > longest){
                    longest = stacker.join('').length;
                    console.log(stacker)
                }
                tcount = 0;
                temp = [];
                continue;
            }
            else if(input.charAt(i) == '\t'){
                tcount++;
                continue;
            }
            else{
                temp.push(input.charAt(i));
            }
        }
        return longest;
       
};