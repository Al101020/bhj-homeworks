let dead = document.getElementById('dead').textContent;

const hole1 = document.getElementById("hole1");
const hole2 = document.getElementById("hole2");
const hole3 = document.getElementById("hole3");
const hole4 = document.getElementById("hole4");
const hole5 = document.getElementById("hole5");
const hole6 = document.getElementById("hole6");
const hole7 = document.getElementById("hole7");
const hole8 = document.getElementById("hole8");
const hole9 = document.getElementById("hole9");

preciseСlick = Number(document.getElementById('dead').textContent);

notPreciseСlick = Number(document.getElementById('lost').textContent);

// поле1
function pole1Click() {
    if(document.getElementById('hole1').className == 'hole hole_has-mole') {
        document.getElementById('dead').textContent++;
        console.log("попал");
        preciseСlick++;
        if (preciseСlick === 10) {
            alert('Ты победил');
            document.getElementById('dead').textContent = 0;
            document.getElementById('lost').textContent = 0;
        }  
    } else {
        document.getElementById('lost').textContent++;
        console.log("промах");
        notPreciseСlick++;
        if (notPreciseСlick === 5) {
            alert('Ты проиграл');
            document.getElementById('dead').textContent = 0;
            document.getElementById('lost').textContent = 0;
        }
    }
}

hole1.onclick = pole1Click;

// поле2
function pole2Click() {
    if(document.getElementById('hole2').className == 'hole hole_has-mole') {
        document.getElementById('dead').textContent++;
        console.log("попал");
        preciseСlick++;
        if (preciseСlick === 10) {
            alert('Ты победил');
            document.getElementById('dead').textContent = 0;
            document.getElementById('lost').textContent = 0;
        }  
    } else {
        document.getElementById('lost').textContent++;
        console.log("промах");
        notPreciseСlick++;
        if (notPreciseСlick === 5) {
            alert('Ты проиграл');
            document.getElementById('dead').textContent = 0;
            document.getElementById('lost').textContent = 0;
        }
    }
}

hole2.onclick = pole2Click;

// поле3
function pole3Click() {
    if(document.getElementById('hole3').className == 'hole hole_has-mole') {
        document.getElementById('dead').textContent++;
        console.log("попал");
        preciseСlick++;
        if (preciseСlick === 10) {
            alert('Ты победил');
            document.getElementById('dead').textContent = 0;
            document.getElementById('lost').textContent = 0;
        }  
    } else {
        document.getElementById('lost').textContent++;
        console.log("промах");
        notPreciseСlick++;
        if (notPreciseСlick === 5) {
            alert('Ты проиграл');
            document.getElementById('dead').textContent = 0;
            document.getElementById('lost').textContent = 0;
        }
    }
}

hole3.onclick = pole3Click;

// поле4
function pole4Click() {
    if(document.getElementById('hole4').className == 'hole hole_has-mole') {
        document.getElementById('dead').textContent++;
        console.log("попал");
        preciseСlick++;
        if (preciseСlick === 10) {
            alert('Ты победил');
            document.getElementById('dead').textContent = 0;
            document.getElementById('lost').textContent = 0;
        }  
    } else {
        document.getElementById('lost').textContent++;
        console.log("промах");
        notPreciseСlick++;
        if (notPreciseСlick === 5) {
            alert('Ты проиграл');
            document.getElementById('dead').textContent = 0;
            document.getElementById('lost').textContent = 0;
        }
    }
}

hole4.onclick = pole4Click;

// поле5
function pole5Click() {
    if(document.getElementById('hole5').className == 'hole hole_has-mole') {
        document.getElementById('dead').textContent++;
        console.log("попал");
        preciseСlick++;
        if (preciseСlick === 10) {
            alert('Ты победил');
            document.getElementById('dead').textContent = 0;
            document.getElementById('lost').textContent = 0;
        }  
    } else {
        document.getElementById('lost').textContent++;
        console.log("промах");
        notPreciseСlick++;
        if (notPreciseСlick === 5) {
            alert('Ты проиграл');
            document.getElementById('dead').textContent = 0;
            document.getElementById('lost').textContent = 0;
        }
    }
}

hole5.onclick = pole5Click;

// поле6
function pole6Click() {
    if(document.getElementById('hole6').className == 'hole hole_has-mole') {
        document.getElementById('dead').textContent++;
        console.log("попал");
        preciseСlick++;
        if (preciseСlick === 10) {
            alert('Ты победил');
            document.getElementById('dead').textContent = 0;
            document.getElementById('lost').textContent = 0;
        }  
    } else {
        document.getElementById('lost').textContent++;
        console.log("промах");
        notPreciseСlick++;
        if (notPreciseСlick === 5) {
            alert('Ты проиграл');
            document.getElementById('dead').textContent = 0;
            document.getElementById('lost').textContent = 0;
        }
    }
}

hole6.onclick = pole6Click;

// поле7
function pole7Click() {
    if(document.getElementById('hole7').className == 'hole hole_has-mole') {
        document.getElementById('dead').textContent++;
        console.log("попал");
        preciseСlick++;
        if (preciseСlick === 10) {
            alert('Ты победил');
            document.getElementById('dead').textContent = 0;
            document.getElementById('lost').textContent = 0;
        }  
    } else {
        document.getElementById('lost').textContent++;
        console.log("промах");
        notPreciseСlick++;
        if (notPreciseСlick === 5) {
            alert('Ты проиграл');
            document.getElementById('dead').textContent = 0;
            document.getElementById('lost').textContent = 0;
        }
    }
}

hole7.onclick = pole7Click;

// поле8
function pole8Click() {
    if(document.getElementById('hole8').className == 'hole hole_has-mole') {
        document.getElementById('dead').textContent++;
        console.log("попал");
        preciseСlick++;
        if (preciseСlick === 10) {
            alert('Ты победил');
            document.getElementById('dead').textContent = 0;
            document.getElementById('lost').textContent = 0;
        }  
    } else {
        document.getElementById('lost').textContent++;
        console.log("промах");
        notPreciseСlick++;
        if (notPreciseСlick === 5) {
            alert('Ты проиграл');
            document.getElementById('dead').textContent = 0;
            document.getElementById('lost').textContent = 0;
        }
    }
}

hole8.onclick = pole8Click;

// поле9
function pole9Click() {
    if(document.getElementById('hole9').className == 'hole hole_has-mole') {
        document.getElementById('dead').textContent++;
        console.log("попал");
        preciseСlick++;
        if (preciseСlick === 10) {
            alert('Ты победил');
            document.getElementById('dead').textContent = 0;
            document.getElementById('lost').textContent = 0;
        }  
    } else {
        document.getElementById('lost').textContent++;
        console.log("промах");
        notPreciseСlick++;
        if (notPreciseСlick === 5) {
            alert('Ты проиграл');
            document.getElementById('dead').textContent = 0;
            document.getElementById('lost').textContent = 0;
        }
    }
}

hole9.onclick = pole9Click;