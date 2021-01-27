'Use strict';



var attempt = 25;

var userAttempt = 1;

var x1;
var x2;
var x3;

function batata(name, path) {
    this.productName = name;
    this.productPath = path;
    this.renderTime = 0;
    this.select = 0;
    batata.prototype.allProducts.push(this);
}
batata.prototype.allProducts = [];

new batata('bag', '../img/bag.jpg');
new batata('banana', '../img/banana.jpg');
new batata('bathroom', '../img/bathroom.jpg');
new batata('boots', '../img/boots.jpg');
new batata('breakfast', '../img/breakfast.jpg');
new batata('bubblegum', '../img/bubblegum.jpg');
new batata('chair', '../img/chair.jpg');
new batata('cthulhu', '../img/cthulhu.jpg');
new batata('dog-duck', '../img/dog-duck.jpg');
new batata('dragon', '../img/dragon.jpg');
new batata('pen', '../img/pen.jpg');
new batata('pet-sweep', '../img/pet-sweep.jpg');
new batata('scissors', '../img/scissors.jpg');
new batata('shark', '../img/shark.jpg');
new batata('sweep', '../img/sweep.png');
new batata('tauntaun', '../img/tauntaun.jpg');
new batata('unicorn', '../img/unicorn.jpg');
new batata('usb', '../img/usb.gif');
new batata('water-can', '../img/water-can.jpg');
new batata('wine-glass', '../img/wine-glass.jpg');

var imgOne;
var imgTwo;
var imgThree;

function getRandom() {
    return Math.floor(Math.random() * 20);
}

var img1 = document.getElementById('one');
var img2 = document.getElementById('two');
var img3 = document.getElementById('three');

function render() {
    imgOne = getRandom();

    do {
        imgTwo = getRandom();
        imgThree = getRandom();
    }
    while (imgOne === imgTwo || imgOne === imgThree || imgTwo === imgThree);

    x1 = imgOne;
    x2 = imgTwo;
    x3 = imgThree;

    do {
        imgOne = getRandom();
        imgTwo = getRandom();
        imgThree = getRandom();

    } while (imgOne === x1 || imgOne === x2 || imgOne === x3 || imgOne === imgTwo || imgOne === imgThree || imgTwo === x1 || imgTwo === x2 || imgTwo === x3 || imgTwo === imgThree
    || imgThree === x1 || imgThree === x2 || imgThree === x3);


    img1.src = batata.prototype.allProducts[imgOne].productPath;
    img2.src = batata.prototype.allProducts[imgTwo].productPath;
    img3.src = batata.prototype.allProducts[imgThree].productPath;

    batata.prototype.allProducts[imgOne].renderTime++;
    batata.prototype.allProducts[imgTwo].renderTime++;
    batata.prototype.allProducts[imgThree].renderTime++;
}



img1.addEventListener('click', press);
img2.addEventListener('click', press);
img3.addEventListener('click', press);

function press(event) {
    event.preventDefault();
    if (userAttempt <= attempt) {


        if (event.target.id === 'one') {

            userAttempt++;
            batata.prototype.allProducts[imgOne].select++;
            render();
        } else if (event.target.id === 'two') {

            userAttempt++;
            batata.prototype.allProducts[imgTwo].select++;
            render();
        } else if (event.target.id === 'three') {

            userAttempt++;
            batata.prototype.allProducts[imgThree].select++;
            render();
        }
    } else {
        result();
    }
}
var prodName=[];
var voteNumbers=[];

function result() {
    var fathi = document.getElementById('res');
    var list;
    fathi.innerHTML = '';

    for (var i = 0; i < batata.prototype.allProducts.length; i++) {
        list = document.createElement('li');
        list.textContent = batata.prototype.allProducts[i].productName + ' had ' + batata.prototype.allProducts[i].select + ' votes, and was seen ' + batata.prototype.allProducts[i].renderTime + ' times.';
        fathi.appendChild(list);

        prodName.push(batata.prototype.allProducts[i].productName);
        voteNumbers.push(batata.prototype.allProducts[i].select);



    }
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: prodName,
            datasets: [{
                label: 'Vote Number',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: voteNumbers,
            }]
        },

        // Configuration options go here
        options: {}
    });
}


render();

