console.log("Jay Ganesh !");

let scoreBox = document.querySelector('#scoreBox').innerHTML;
console.log(scoreBox);
var totalCreated = document.querySelector('#totalCreated').innerHTML;
let arr = scoreBox.split(":");
let score = arr[1];
console.log(score);
let arr1 = totalCreated.split(":");
let total = arr1[1];
console.log(total);
var balloon;

var stopFunction = setInterval(createBalloons, 1000);

function createBalloons() 
{
   var x = Math.random() * 100;

   //creating balloons dynamically as per time interval mention in setInterval().
   balloon = document.createElement('img');
   balloon.id = "balloon";
   balloon.classList.add("balloon-remove");
   balloon.src = "ballonEdit.png";
   document.getElementById('div').appendChild(balloon);
   //balloon.style.bottom = 650+"px";
   //balloon.style.left = x+"px";
   
   total++;
   document.querySelector('#totalCreated').innerHTML = arr1[0] + " : " + total;

   // adding the function on balloons by incrementing score by 1 and removing balloon.
   balloon.addEventListener('click', clickedIt);
   function clickedIt() 
   {
      score++;
      document.querySelector('#scoreBox').innerHTML = arr[0] + " : " + score;
      document.getElementById("balloon").remove();
   }
   removeBalloons();
   //moveBalloon();
}

// adding function on clicking a stop button(stoping the execution).
let stop = document.getElementById("stop")
stop.addEventListener('click', clear);
function clear() {
   clearInterval(stopFunction);
}

// function moveBalloon()
// {
//       var f=0;
//       setInterval(() => {
//          console.log("Inside setInterval floating");
//          f++;
//          document.getElementById("balloonId").style.bottom = f+"px";
//          console.log("fvalue",f);
//       },100)

// }


// remove balloons when it reaches to a certain position.
function removeBalloons()
{
   console.log("Inside Function removeBallons");
   let balloons = document.querySelector('.balloon-remove');
   console.log("remove",balloons);
   if (balloons) 
   {
      let balloonBottom = parseFloat(getComputedStyle(balloons).bottom)
      console.log('ghjk',balloonBottom);
      if(balloonBottom >= 350)
      {
         balloons.remove();
      }
   }

}












// function moveBalloon()
// {
//       var f=0;
//       setInterval(() => {
//          console.log("Inside setInterval floating");
//          f++;
//          document.getElementById("balloonId").style.bottom = f+"px";
//          console.log("fvalue",f);
//       },100)

// }










// function removeBalloons()
// {
//    if(balloon.style.top == '-600px')
//    {
//       balloon.remove();
//    }
// }

















































































































// if (document.getElementById("balloon")) 
// {
//    document.getElementById("balloon").addEventListener('animationend', endBalloon())
// }
// function endBalloon() 
// {
//    document.getElementById("balloon").remove();
// };

//  creating balloon dynamically.
// balloon = document.createElement('img');
// balloon.id = "balloon";
// balloon.src = "balloon.jpg";
// document.getElementById('div').appendChild(balloon);

//  creating balloon dynamically(second approach)
// let img = new Image();
// img.src="balloon.jpg";
// document.getElementById('div').appendChild(img);
// console.log(img);

// //trying to remove balloons.
// if (document.getElementById("balloon").style.bottom=="150px")
// {
//    console.log("inside if condition");
//    document.getElementById("balloon").remove();
// }