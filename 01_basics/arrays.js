// javascript arrays are resizable and contain a mix of different datatypes 

// js array copy operations create shallow copies rather than deep copies 

//shallow copy of an object is a copy whose properties share the same references 


const myArr=[1,2,3,4,5,6,7]

const myHeros=["shaktiman","naagraaj"]

const myArr2=new Array(1,2,3,4)
//console.log(myArr[0]);

//array methods
myArr.push(20)
myArr.unshift(9) //it inserts element at start
myArr.shift()
console.log(myArr);
console.log(myArr.includes(8));
console.log(myArr.indexOf(20));

 const newArr=myArr.join()
 console.log(newArr)
 console.log(typeof newArr)
 
 //slice ,splice

 console.log("A",myArr);

 const myn1=myArr.slice(1,3)
 console.log(myn1);

 console.log("B",myArr)
 const myn2=myArr.splice(1,3);

 console.log(myn2);
 console.log(myArr)