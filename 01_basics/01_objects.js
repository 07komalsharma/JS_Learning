//singleton

//objects literals

const mySym=Symbol("key1")

const JsUser={
    name:"komal",
    email:"ks@gmail.com",
    age:12,
    location:"udaipur",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"],
    "full name":"sharma",
    [mySym]:"mykeyy"

}
//if we want to use mySym as a type symbol inside object assignment then [symbolname] syntax is followed
//nd for access same way [symbolname]
console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(JsUser["full name"]);
console.log(typeof JsUser.mySym);
console.log(typeof mySym);
console.log(JsUser[mySym]);

JsUser.email="gs@gmail.com"
console.log(JsUser["email"]);

//Object.freeze(JsUser)
//after using this property the changes can't propagate 
console.log(JsUser);

JsUser.greeting=function(){
    console.log("hello js user !");
}

console.log(JsUser.greeting); // o/p Function(anonymous)
console.log(JsUser.greeting()); 

JsUser.greetingTwo=function(){
    console.log(`hello js user ,${this.name}`);
}
//console.log(JsUser.greetingTwo());
JsUser.greetingTwo();