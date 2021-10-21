function ConstrObj (object){
    let arrO = Object.entries(object);
    let a     

     
    for (a =0; a < arrO.length;a++){ 
    let x = arrO[a][0];   
    this[x] = arrO[a][1];
}
    

}
//t2
function ConstrObj (object){
    let arrO = Object.entries(object);
    let a     

     
    for (a =0; a < arrO.length;a++){ 
    let x = arrO[a][0];   
    this[x] = arrO[a][1];
}
    
    this.getFullName  = function (){
    return this['surname']+" " +this['name']
}
}
//t3
function ArrConstr(emplyeeArr){}
let arr123=[];        
for (i =0; i< emplyeeArr.length;i++){
            arr123.push(emplyeeArr[i]);
}
///t4
function getFull(arr){
    let arrFullName=[];
    for(i=0;i<arr.length;i++){
        arrFullName.push(arr[i].surname+" "+ arr[i].name)
        
}return arrFullName
}
///////t5//
let sumFunc =function(arr){
    let sum =0
    let arrSum =[];
        for(let i = 0;i<arr.length;i++){
        arrSum.push(arr[i].salary)
        sum +=arr[i].salary

} console.log(arrSum,sum/arr.length) 
   

}//t6///
function ranndom(arr){
    let employ = Math.floor((Math.random()*arr.length))
    console.log(arr[employ])
}
////t7////
Object.defineProperties(newAr123,{
    'fullInfo4':{
        get:function(){
            console.log(this.surname +" "+ this.name)
},
        set:function(value){
            Object.preventExtensions(this)
            console.log(this.id=value)
},    
    }
})/////



