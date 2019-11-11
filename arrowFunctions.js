//syntax

(param1,param2) => {statements}
(param1,param2) => experssion
(param1,param2) => {return experssion;}


(singleParams) => {statements}
singleparams => {statements}


()=>{statements}
()=>experssion
()=>{return experssion}

(param1, param2, param3)=>experssion


//Normal function
var multiply=function(x,y){
    return x*y;
}

//arrow function
var multiply = (x,y)=>{return x*y}
// or
var multiply = (x,y)=>x*y



//array
var  materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllim'
]

var materialLength1= materials.map(function(material){
    return material.length
})

var materialLength2 = materials.map((material)=>material.length)

var materialLength2 = materials.map((material)=>{
    return material.length
})