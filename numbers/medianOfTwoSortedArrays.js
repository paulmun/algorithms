/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var newArr = [],
        i = 0,
        j = 0;
        
    while(nums1[i] || nums2[j]){
        if(nums1[i] === undefined){
            newArr.push(nums2[j]);
            j++;
        }
        else if(nums2[j] === undefined){
            newArr.push(nums1[i])
            i++;
        }
        else if(nums1[i] <= nums2[j]){
            newArr.push(nums1[i]);
            i++;
        }
        else{
            newArr.push(nums2[j]);
            j++;
        }
    }
    
    console.log(newArr.length)
    var half = newArr.length/2;
    console.log(half);
    
    if(newArr.length%2 === 0){
        return(newArr[half-1] + newArr[half])/2;
    }
    else{
        return newArr[Math.floor(half)];
    }
};


// A little more efficient

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var newArr = [],
        i = 0,
        j = 0,
        count = 0,
        half = Math.floor((nums1.length + nums2.length)/2)
        
    while(count <= half){
        if(nums1[i] === undefined){
            newArr.push(nums2[j]);
            j++;
        }
        else if(nums2[j] === undefined){
            newArr.push(nums1[i])
            i++;
        }
        else if(nums1[i] <= nums2[j]){
            newArr.push(nums1[i]);
            i++;
        }
        else{
            newArr.push(nums2[j]);
            j++;
        }
        count++;
    }
    
    if((nums1.length + nums2.length) % 2 === 0){
        return(newArr[newArr.length-1] + newArr[newArr.length-2])/2;
    }
    else{
        return newArr[newArr.length-1];
    }
};