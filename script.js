const gameContainer = document.querySelector('.container'),
userResult = document.querySelector('.user_result img'),
cpuResult = document.querySelector('.cpu_result img'),
result = document.querySelector('.result'),
optionImages = document.querySelectorAll('.option_image');




optionImages.forEach((image, index) => {
image.addEventListener("click", (e) => {
    image.classList.add("active");

userResult.src = cpuResult.src = "images/rock.png";
result.textContent = "Wait...";

    optionImages.forEach((image2,index2) => {
        index !== index2 && image2.classList.remove("active");
    });

 gameContainer.classList.add("start");


let time = setTimeout(() => {
    let imageSrc = e.target.querySelector('img').src;
    userResult.src = imageSrc;
  
    gameContainer.classList.remove("start");
 
    let randomNumber = Math.floor(Math.random() *3);
 
     let cpuImage = ["images/rock.png", "images/paper.png", "images/scissors.png"];
      cpuResult.src = cpuImage[randomNumber];
 
      let cpuValue = ["R", "P", "S"][randomNumber];
 
      let userValue = ["R", "P", "S"][index];
 
     let outComes = {
         RR: "Draw",
         RP: "Cpu",
         RS: "User",
         PP: "Draw",
         PR: "User",
         PS: "Cpu",
         SS: "Draw",
         SR: "Cpu",
         SP: "User"
     };
 
 
     let outComeValue = outComes[userValue + cpuValue];
 
     result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
     
      
}, 2500);

 
});
});


