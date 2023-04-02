let side = document.querySelector (".dice");
let i=0;

const changeSide = () => {
    i++;
    i = i % 6;
    console.log ("i= " + i);
    if (i===1) {
        side.src ="img/side2.svg";
    } else if (i===2) {
        side.src ="img/side3.svg";
    } else if (i===3) {
        side.src ="img/side4.svg";
    } else if (i===4) {
        side.src ="img/side5.svg";
    } else if (i===5) {
        side.src ="img/side6.svg";
    } else {
        side.src ="img/side1.svg";
    }
}

document.addEventListener ("keydown", changeSide)