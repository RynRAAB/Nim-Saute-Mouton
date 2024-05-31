document.addEventListener('mousemove', function(e) {
    var customCursor = document.getElementById("cursor");
    customCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});