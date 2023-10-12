function AddNums(num1,num2){
    console.log(num1+num2);
}

let result=AddNums(1,2);
//console.log(result);

function Addthis(num1,num2){
     return num1+num2
}

const vari=Addthis(1,4)
console.log(vari);

function loginUserMessage(username){
    if(username===undefined){ //or(!username)
        console.log("please enter a username");

    }
      return `${username} just logged in `
}

// const res=loginUserMessage("komal")
// console.log(res);
console.log(loginUserMessage())