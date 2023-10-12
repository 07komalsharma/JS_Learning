const myHeros=["thor","ironman","spiderman"];
const dcheros=["superman","flash","batsman"];

//myHeros.push(dcheros);
console.log(myHeros);

//console.log(myHeros[3][2]);

const allHeros=myHeros.concat(dcheros)
console.log(allHeros);


// spread method learn like drop glass  
const all_new_heros=[...myHeros,...dcheros]

console.log(
    all_new_heros
);

const anth=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
// const anthr_arr=anth.flat(Infinity)
//const anthr_arr=anth.flat(1)
const anthr_arr=anth.flat(2)
console.log(anthr_arr);

//from are use to make it in array

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hiteshh"));

console.log(Array.from({name:"komall"})); //intresting case it returns empty array

let v1=34
let v2=90
let v3=87

console.log(Array.of(v1,v2,v3));
