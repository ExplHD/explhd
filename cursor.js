const cursor = document.querySelector(".curser")
var timeout;

document.addEventListener("mousemove", (e) => {
    let X = e.pageX;
    let Y = e.pageY;
    
    cursor.style.left = X + "px";
    cursor.style.top = Y + "px";
    cursor.style.display = "block";

    function mouseStopped(){
        cursor.style.size = "none";
    }
    
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 5000);
})

document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
})