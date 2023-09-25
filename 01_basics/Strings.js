const name="komal"

console.log(`Hello my name is ${name}`);

//one more way to declare string in js

const gameName=new String("Temple Run")
console.log(gameName.length);

console.log(gameName.toUpperCase())

const newString=gameName.substring(0,5)
console.log(newString);

const mySt="       komal..   "
console.log(mySt.trim())

const url="https://komal.com/komal%20sharma"
console.log(url.replace("%20","-"));