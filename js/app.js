const field = document.getElementById("field");
const ball = document.getElementById("ball");
const sound = document.getElementById("kickSound");

field.addEventListener("click", function(event) {

    // maydon o'lchamini olish
    const rect = field.getBoundingClientRect();

    // sichqoncha bosilgan joyni topish
    let x = event.clientX - rect.left - ball.offsetWidth / 2;
    let y = event.clientY - rect.top - ball.offsetHeight / 2;

    // chegaradan chiqmaslik
    const maxX = field.clientWidth - ball.offsetWidth; 
    const maxY = field.clientHeight - ball.offsetHeight;
    
    if (x < 50) x = 50;
    if (y < 20) y = 20;
    if (x > maxX) x = maxX;
    if (y > maxY) y = maxY;

    // to'p pozitsiyasi
    ball.style.left = x + "px";
    ball.style.top = y + "px";

    // ovoz
    sound.currentTime = 0;
    sound.play();
});
