//t1 /HW5***************
function maceCounter(){
    var counter = 0;
    return function(){
        return counter++;
    }
}
////////t2 hw5
function createArr(...args){
    let arrNumn2 = [];
    arrNumn2.push(args)
   

    console.log(arrNumn2,arguments);
}
/////////
///t3 hw 5/разница во времени между вызовами//
let corectDate = function(){
    let date;    
    return () =>{
    if (!date){
            date = new Date()
            return 'Enavled';        

} let curDate = new Date();
  let sec = curDate - date;
    let data = curDate;    
return parseInt(Math.floor(sec/1000));
};
}
////
//t4 hw5 таймер...
let tt = function(tm){
    let co = tm;   
    let tttt = setInterval(function(){
    let m = Math.floor(co / 60) ;
    let s = co%60;
        if(m<10){
           m = '0' + m;
}
        if( s  <10){
            s ='0' + s;
}
    console.log(m,':',s);
      co--
        if (co==0){
        clearInterval(tttt);
}   
 }
                           ,1000);
        if (co==0){
        clearInterval(tttt);
}
}   