let closeBtn = document.getElementById('closeBtn');
let navSection= document.getElementsByClassName('navsection');

closeBtn.addEventListener('click', function() {
    document.getElementById('close').style.width = "0px";  
    for ( let i =0; i<navSection.length;i++){
        navSection[i].style.display="none";
    }

})


// console.log(navSection)


//        JQUERY 

// $('#navBtn').click(function(){
//     $('.sidenav').animate ({"width":"0","display":"none"})
//     $(".sidenav").toggle (1000)
// });



let navBtn = document.getElementById('navBtn');

navBtn.addEventListener('click',function(){

    if($("#close").width()=="200"){
        closeNav();
        $("#navBtn").css({top: '50%', left: '2%', position:'absolute'})
        for ( let i =0; i<navSection.length;i++){
            navSection[i].style.display="none";
        }

    }
    else{
        $("#close").width("200");
        $("#sidenav").css({"display":"none"})
        $("#navBtn").css({top: '50%', left: '15%', position:'absolute'})
        for ( let i =0; i<navSection.length;i++){
            navSection[i].style.display="block";
        }

        }
        }


,2000)
function closeNav(){
    $("#close").width("0");
}



//*the navbar open animation stealed from the site but i got the idea 


  



//!my code 

// function openNav(){
//     if($('.sidenav').width()=="200"){
//         closeNav();
//     }
//     else{
//         $('.sidenav').width("200");

//     }
// }

// function closeNav(){
//     $(".sidenav").width("0px");
//     $(".navsecion").width("0px");

// }



// import {countDown} from "./countDown Module";
// countDown();

setInterval(()=>{

    let contDownDate= new Date("nov 18,2022 15:30:30") ;
    let currentDate = new Date();
    let timeDiff = contDownDate - currentDate ;
    
    days= Math.floor( timeDiff/(1000*24*60*60));
    hours= Math.floor( timeDiff %(1000*24*60*60)/(1000*24*60) );
    minutes= Math.floor( timeDiff %(1000*60*60)/(1000*60) );
    seconds= Math.floor( timeDiff %(1000*60)/(1000) );
    
    document.getElementById('days').innerHTML= days+"D"
    document.getElementById('hours').innerHTML= hours+"H"
    document.getElementById('minutes').innerHTML= minutes+"M"
    document.getElementById('seconds').innerHTML= seconds <10 ? "0" +seconds+"S": seconds+"S" 


},1000)
    
    




function showTime(){

    let max=100;
   
    $("textarea").keyup(function(){

let inputValue = $(this).val().length;
let goal = max-inputValue;

if(goal <= 0){
    document.getElementById("char").innerHTML = "you've reached your max words"
}
else{
document.getElementById('char').innerHTML = goal

}
console.log(inputValue)

   

}
)}
showTime()



// $("input").keyup(function(){
// let inputValue = $("input").val();
// document.getElementById("a7a").innerHTML=inputValue
// console.log(inputValue)
// })

$('#singerBtn1').click(function () { 
    $('#singer1').toggle(1000);
    
});
$('#singerBtn2').click(function () { 
    $('#singer2').toggle(1000);
    
});
$('#singerBtn3').click(function () { 
    $('#singer3').toggle(1000);
    
});
$('#singerBtn4').click(function () { 
    $('#singer4').toggle(1000);
    
});

// !changing background of countdown when scrollTop Method

let countDownOffset = $("#countDownTrans").offset().top; 
$(window).scroll(function(){
    let windowScroll= $(window).scrollTop();
    if(windowScroll>countDownOffset-450){
        $(".countDown").css({"backgroundImage":"url(./img/daniel-schludi-mbGxz7pt0jM-unsplash.jpg)"});
    }
    else{
        $(".countDown").css({"backgroundImage":"url(./img/972057.jpg)"});

    }
});


// ?nice Scroll to the href with animate (html & body)

$("a[href^='#']").click(function (e) {
    let linkHref = $(e.target).attr('href');
    let sectionOffset = $(linkHref).offset().top;
    console.log(linkHref);
    $("body,html").animate({scrollTop:sectionOffset},2300)
  })



document.addEventListener('mousemove',function (e) {
    const mouseX = e.clientX;
    const mouseY= e.clientY;
    const anchor = document.getElementById('anchor');
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY= rekt.top + rekt.height /2;

  const angleDeg = angle(mouseX,mouseY,anchorX,anchorY);
  const eyes = document.querySelectorAll('.eye');
eyes.forEach(eye => {
    eye.style.transform = `rotate(${angleDeg}deg)`    
    anchor.style.filter = `hue-rotate(${angleDeg}deg)`    
});
});    

  






function angle(cx,cy,ex,ey) {
    const dy= ey-cy;
    const dx=  ex-cx;
    const rad= Math.atan2(dy, dx);
    const deg = rad *180 / Math.PI;
    return deg;
}