var largestGoodInteger = function(num) {
    let result = ""

let i=0

let max = -Infinity
while(i<num.length){
    
   if(max<num[i] && (num[i]==num[i+1] && num[i]==num[i+2])){
           
       max = num[i]
       result = `${num[i]}${num[i]}${num[i]}`
       i++
   }
   
    i++
}
return result
};


/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
 const arr  =  num.split("")
     let aa=[]
for(i=0;i<arr.length;i++){
    if(arr[i]==arr[i+1] && arr[i+1]==arr[i+2] ){
           aa.push(`${arr[i] + arr[i+1] + arr[i+2]}`)
    }  
}
console.log(aa,aa.length)
if(aa.length==0) return ""
if(aa.length==1) return aa[0]
//if(aa[0]==aa[1]) return aa[0]
let aaa = Math.max(...aa)
if(aaa=="0") return "000"
return aaa.toString()
};
