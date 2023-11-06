const randomColor = () => {
    const randomNum = Math.floor(Math.random() * 16777215);
    const colorCode = "#" + randomNum.toString(16);
    document.body.style.backgroundColor = colorCode;
    document.getElementById("color-code").innerText = colorCode;
    navigator.clipboard.writeText(colorCode);
}

// event call
document.getElementById("btn").addEventListener("click", randomColor);

// init call
randomColor();