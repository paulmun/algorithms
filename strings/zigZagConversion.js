/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var container = [],
        final = [];
        count = 0,
        direction = true;
        
    if(s.length == 1)return s;
        
    for(var _ = 0; _ < numRows; _++){
        container.push([]);
    }
    
    for(var i = 0; i < s.length; i ++){
        container[count].push(s.charAt(i));
        if(numRows == 1){
            count = 0;
            continue;
        }
        else if(count === numRows-1 && direction === true){
            count--;
            direction = false;
        }
        else if(count === 0 && direction === false){
            count++;
            direction = true;
        }
        else{
            if(direction === true){
                count++;
            }
            else{
                count--;
            }
        }
    }
    for(var x = 0; x<container.length; x++){
        console.log(container[x])
        final = final.concat(container[x]);    
    }
    return final.join('')
    
};