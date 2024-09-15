const body=document.querySelector("body");
const buttons=document.querySelectorAll(".button");
const gradientColors=["red", "orange", "purple", "green", 'blue', "indigo", "violet"];
buttons.forEach(function (button){
    button.addEventListener("click" , function (e){
        if(e.target.id==="grey"){
            body.style.background=e.target.id;
        }
        if(e.target.id==="white"){
            body.style.background=e.target.id;
        }
        if(e.target.id==="pink"){
            body.style.background=e.target.id;
        }
        if(e.target.id==="yellow"){
            body.style.background=e.target.id;
        }
        if(e.target.id==="random"){
            const randomColor = gradientColors[Math.floor(Math.random() * gradientColors.length)];
            body.style.background = randomColor; // Set the random color
        }
    });
    
});