//const twitUser=new Object(); //singleton object

const twitUser={};
twitUser.id="1234kl"
twitUser.name="komal"

//console.log(twitUser);
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userFullname:{
            firstname:"komall",
            lastname:"sharmaa"
        }
    }
}
//console.log(regularUser);
//console.log(regularUser.fullname?.userFullname.firstname);
//? agr kbhi api se value aarhi toh ye fullname exist krta hai ya nhi tb ye syntax use krte h wrna make if else condtions

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"c"};

//const obj3={obj1,obj2};
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2};
//console.log(obj3);

const users=[
    {
        id:1,
        email:"ks@gmail.com"
    },
    {
        id:2,
        email:"pw@gmail.com"
    },
    {
        id:3,
        email:"er@gmail.com"
    },
    {
        id:4,
        email:"hj@gmail.com"
    }
]
console.log(users);
console.log(users[2].email);

console.log(Object.keys(twitUser));
console.log(Object.values(twitUser));
console.log(Object.entries(twitUser));

console.log(twitUser.hasOwnProperty('name'));


//destructuring 

const course={
    coursename:"js in hindi",
    price:"123",
    courseInstructor:"komal"
}

const {courseInstructor:instructor}=course
console.log(instructor);



const navbar=({company})=>{

}
navbar(company="kroma")

//using this api : https://randomuser.me/api/