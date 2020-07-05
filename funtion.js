function disappear() {
    let x = document.getElementById("profile");
    x.style.display = "none";
    let y = document.getElementById("footer");
    y.style.display = "flex";
}
function appear() {
    let x = document.getElementById("profile");
    x.style.display = "flex";
    let y = document.getElementById("footer");
    y.style.display = "none";
}