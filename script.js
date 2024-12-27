const gameContainer = document.querySelector('.container');
const userResult = document.querySelector('.user_result img');
const cpuResult = document.querySelector('.cpu_result img');
const result = document.querySelector('.result');
const optionImages = document.querySelectorAll('.option_image');

let timeoutId;

const outcomes = {
    RR: "Draw",
    RP: "CPU",
    RS: "User",
    PP: "Draw",
    PR: "User",
    PS: "CPU",
    SS: "Draw",
    SR: "CPU",
    SP: "User"
};

const cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
const moves = ["R", "P", "S"];

optionImages.forEach((image, index) => {
    image.addEventListener("click", () => {
        clearTimeout(timeoutId);
        
        optionImages.forEach((img, idx) => {
            img.classList.toggle("active", idx === index);
        });
        
        userResult.src = cpuResult.src = "images/rock.png";
        result.textContent = "Wait...";
        gameContainer.classList.add("start");

        timeoutId = setTimeout(() => {
            const userImg = image.querySelector('img');
            userResult.src = userImg.src;
            
            const randomNumber = Math.floor(Math.random() * 3);
            cpuResult.src = cpuImages[randomNumber];
            
            const userValue = moves[index];
            const cpuValue = moves[randomNumber];
            const outcome = outcomes[userValue + cpuValue];
            
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outcome} Won!!`;
            gameContainer.classList.remove("start");
        }, 2500);
    });
});


