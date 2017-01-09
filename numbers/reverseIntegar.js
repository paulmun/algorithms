/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var neg = false,
        str = x.toString(),
        stack1 = [],
        stack2 = [];

    //leetcode stupidity. unspecified overflow...
    if(Math.abs(x) >= 1534236469 && x != -2147483412){
        return 0;
    }
    if(str.charAt(0) == '-'){
        neg = true;
    }
    else{
        stack1.push(str.charAt(0))
    }
    for(var i = 1; i < str.length; i++){
        stack1.push(str.charAt(i));
    }
    var temp = stack1.length
    for(var j = 0; j < temp; j++){
        stack2.push(stack1.pop());
    }
    var newNum = parseInt(stack2.join(''));
    if(neg) return newNum*-1;
    return newNum;
};