
function createCursor() {
    var cursor = document.createElement("DIV");
    cursor.className = "cursor";
    
    var point1 = document.createElement("DIV");
    point1.classList.add("point");
    point1.classList.add("point1");
    cursor.appendChild(point1);
    
    var point2 = document.createElement("DIV");
    point2.classList.add("point");
    point2.classList.add("point2");
    cursor.appendChild(point2);
    
    var point3 = document.createElement("DIV");
    point3.classList.add("point");
    point3.classList.add("point3");
    cursor.appendChild(point3);
    
    var point4 = document.createElement("DIV");
    point4.classList.add("point");
    point4.classList.add("point4");
    cursor.appendChild(point4);
    
    var point5 = document.createElement("DIV");
    point5.classList.add("point");
    point5.classList.add("point5");
    cursor.appendChild(point5);

    var point6 = document.createElement("DIV");
    point6.classList.add("point");
    point6.classList.add("point6");
    cursor.appendChild(point6);
    
    var point7 = document.createElement("DIV");
    point7.classList.add("point");
    point7.classList.add("point7");
    cursor.appendChild(point7);
    
    var point8 = document.createElement("DIV");
    point8.classList.add("point");
    point8.classList.add("point8");
    cursor.appendChild(point8);
    
    return cursor;
}


window.addEventListener("mousemove", function(event){
    var body = document.querySelector("MAIN");
    if (body.childNodes.length > 65)
        body.removeChild(body.children.item(2));
    var virtualCursor = createCursor();
    body.appendChild(virtualCursor);
    virtualCursor.style.transform = `translate(` + event.clientX + `px,` + event.clientY + `px)`;
});

window.addEventListener("mousemove", function(event){
    var virtualCursor = document.getElementById("point-fixe");
    virtualCursor.style.transform = `translate(` + event.clientX + `px,` + event.clientY + `px)`;
    virtualCursor.style.display = "none";
});

let mouseTimeout;
const idleTime = 1500;
function onMouseIdle() {
    var virtualCursor = document.getElementById("point-fixe");
    virtualCursor.style.display = "flex";
}
function resetMouseTimeout() {
    clearTimeout(mouseTimeout);
    mouseTimeout = setTimeout(onMouseIdle, idleTime);
}
document.addEventListener('mousemove', resetMouseTimeout);
