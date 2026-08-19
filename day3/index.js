let A=[3,5,6,7,8,9,10];
let B=[1,2,3,4,5,6,7,8,9,10];
let k="Hello Woreld";
console.log(k.length);
console.log(A);
console.log(A.length);
console.log(B);
console.log(B.length);


let p=k.toUpperCase();
console.log(p);


let g=k.toLowerCase();
console.log(g);

console.log(k.charAt(0));
console.log(k.indexOf("Woreld"));
console.log(k.lastIndexOf("e"));

let m=k.slice(0,5);
console.log(m);

let n=k.split(" ");
console.log(n);

console.log(k.replace("Woreld", "kkkassskksksk"));
console.log(k.concat(" ", "How are you?"));
console.log(k.includes("Hello"));

let x=[
    {"leop":50 , "name":"leopard"},
    {"le":60 , "name":"jao"},
    {"lep":850 , "name":"kakk"},
    
]
console.log(x[0].name);
console.log(x[1].name);
console.log(x[2].name);

x.unshift({"leop":100 , "name":"newanimal"});
console.log(x);
x.shift();
console.log(x);

let date=new Date();

console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());

//all math func
let math= Math;
let arr=[1,2,3,4,5,6,7,8,9,10];
console.log(math.max(...arr));
console.log(math.min(...arr));
console.log(math.abs(-5));
console.log(math.round(5.5));
console.log(math.floor(5.9));
console.log(math.ceil(5.1));