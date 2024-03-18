document.addEventListener("DOMContentLoaded", function() {
    let colors = ["#FF0000", "#F7CC09", "#00FF66", "#2400FF", "#B909F7", "#00FFE0"];
    let button = document.getElementById("button");
    let slide = document.getElementById("slide");
    let colorCode = document.getElementById("color-code").querySelector("p");

    button.addEventListener("click", function() {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        slide.style.backgroundColor = randomColor;
        colorCode.textContent = randomColor.slice(1);
    });
});
