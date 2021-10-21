let newCountry = function(obj){
    let arrCountrAnd =[];
    let keysObj = Object.keys(obj);
     let valuesObj = Object.values(obj);
    for (let i = 0;i <=keysObj.length; i++){
         arrCountrAnd.push(`${keysObj[i]} - это ${valuesObj[i]}`)          
}console.log(arrCountrAnd)
}
//task 2 .HW2//*************** */
function letArray(a){
    let arrA = [];
    let count =1
    
    for (let z = 0;z<=a;z++){
       
        let arrB = [];
            for (let y = 1;y<=3;y++ ){
            
            arrB.push(count);
            count++
}
        arrA.push(arrB);
    }
    console.log(count,arrA);
}
//*******************************// */
//task 3 .HW2**************8
const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг','Пятница','Суббота' , 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thirsday','Friday','Saturday', 'Sunday'],
}
function letNameOfDay(a,b){
    if (a == 'en'){
        console.log(namesOfDays.en[b-1]);
        }
    if (a == 'ru'){
        console.log(namesOfDays.ru[b-1]);
        }
}
letNameOfDay('ru',1);
//************************** */
//task 4 .HW2
let numArray = [5,9,4,13,23];
function twoNumbSum(){
    numArray.sort(( a , b) => a - b);
    console.log(numArray[0]+numArray[1])
}
twoNumbSum()
//***************************** */



//t5 hw2
let arrTwo = [0,1,1,1];
let twoToTen = function(arr){
    arr.reverse();
    let ten = 0;
        for (let i = 0; i<= arr.length; i++){
        if (arr[i] == 1){
            ten+= 2**[i];
        }
        else if( arr[i] = 0){
            ten+= 0 ;
        }
    }console.log(i,ten)
}
twoToTen(arrTwo) 
console.log(twoToTen(arrTwo));