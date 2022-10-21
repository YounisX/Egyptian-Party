export  function countDown(){

let contDownDate= new Date("nov 18,2022 15:30:30") ;
let currentDate = new Date();
let timeDiff = contDownDate - currentDate ;

days= Math.floor( timeDiff/(1000*24*60*60));
hours= Math.floor( timeDiff %(1000*24*60*60)/(1000*24*60) );
minutes= Math.floor( timeDiff %(1000*24*60*60)/(1000*60) );
seconds= Math.floor( timeDiff %(1000*24*60*60)/(1000) );
console.log(seconds);

document.getElementById('days').innerHTML= days


}