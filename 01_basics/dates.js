let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//month is started with 0 in js

let myCreateDate=new Date(2023,0,23)
console.log(myCreateDate.toDateString())

let myOwnFr=new Date(2023,0,23,5,3)
console.log(myOwnFr.toLocaleString());

let mmdate=new Date("01-14-2023")
console.log(mmdate.toLocaleString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);


let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

//`${newDate.getDay()} and the time `
newDate.toLocaleString('default',{
    weekday:"long"
})