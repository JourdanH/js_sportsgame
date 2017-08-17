(function(){
  let team1 = document.getElementById("team1");
  let team2 = document.getElementById("team2");
  let name1 = prompt("Team 1 name", "Team 1");
  let name2 = prompt("Team 2 name", "Team 2");

  if (name1 !=null){
  team1.innerText = name1;}
  else { team1.innerText= "Team 1"
    name1 = "Team 1"
  }


  if (name2 !=null){
  team2.innerText = name2;}
  else {team2.innerText="Team 2"
    name2 = "Team 2"
  };

//
// })();
//
// (function(){
  //variables
  let oneShot = document.querySelector("#teamone-numshots");
  let oneShoot = document.querySelector("#teamone-shoot");
  let oneGoal = document.querySelector("#teamone-numhits");
  let twoShot = document.querySelector("#teamtwo-numshots");
  let twoShoot = document.querySelector("#teamtwo-shoot");
  let twoGoal = document.querySelector("#teamtwo-numhits");
  let resetCount = document.querySelector("#num-resets");
  let reset= document.querySelector("#reset");
  let smack= document.getElementById('smack');
  let resetNoise= document.getElementById('resetnoise');



//Team 1 code
  oneShoot.addEventListener("click",function(){


    oneShot.innerHTML = parseInt(oneShot.innerHTML)+1

      let shot1 = (Math.floor(Math.random()*50-1)+1);

      if (shot1> 30) {oneGoal.innerHTML=parseInt(oneGoal.innerHTML)+1};

      smack.play();
  });
//team 2 variables

  twoShoot.addEventListener("click",function(){


    twoShot.innerHTML = parseInt(twoShot.innerHTML)+1

      let shot2 = (Math.floor(Math.random()*50-1)+1);

      if (shot2> 25) {twoGoal.innerHTML=parseInt(twoGoal.innerHTML)+1};

    smack.play();



  });
  reset.addEventListener("click",function(){

    resetNoise.play();
    resetCount.innerHTML = parseInt(resetCount.innerHTML)+1;



    setInterval(resetPoints(), 1000);
    function resetPoints(){
     if (oneGoal.innerHTML>twoGoal.innerHTML){
       alert(name1 + " won!");
     }
     else if (twoGoal.innerHTML>oneGoal.innerHTML) {
        alert(name2+ " won!");
     }
     else {
       alert("You tied!")
     }


      oneShot.innerHTML = 0;
      oneGoal.innerHTML = 0;
      twoShot.innerHTML = 0;
      twoGoal.innerHTML = 0;
    };
    });



})();
