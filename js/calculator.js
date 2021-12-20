
let calculator_submit = document.querySelector('.calculator_submit');
let calculator_item = document.querySelectorAll('.calculator_item');
let calculator_artboard = document.querySelector('.calculator_artboard');

calculator_submit.addEventListener('click' , ()=>{
    let calculator_width = document.querySelector('.calculator_width').value;
    let calculator_height = document.querySelector('.calculator_height').value;
    let calculator_figure = document.querySelectorAll('.calculator_figure > img');
    calculator_figure.forEach(thisfigure =>{
        thisfigure.style.display = 'none';
    })
    let ratio = calculator_width / calculator_height;
    let sSide;
    if(ratio > 1.33){
        calculator_figure[1].style.display = 'block';
        sSide = calculator_height;
    }else if(ratio < 0.75){
        calculator_figure[2].style.display = 'block';
        sSide = calculator_width;
    }else{
        calculator_figure[0].style.display = 'block';
        sSide = calculator_height;
    }
    let hiUnit=sSide * 0.07;
    calculator_item[0].innerHTML = Math.floor(hiUnit * 1) + " pt";
    calculator_item[1].innerHTML = Math.floor(hiUnit * 1.75) + " pt";
    calculator_item[2].innerHTML = Math.floor(hiUnit * 1.2) + " pt";
    calculator_item[3].innerHTML = Math.floor(hiUnit * 0.8) + " pt";
    calculator_item[4].innerHTML = Math.floor(hiUnit * 0.65) + " pt";
    calculator_item[5].innerHTML = Math.floor(hiUnit * 0.45) + " pt";
    calculator_item[6].innerHTML = Math.floor(hiUnit * 0.35) + " pt";
    calculator_item[7].innerHTML = Math.floor(hiUnit * 0.6) + " pt";
    calculator_item[8].innerHTML = Math.floor(hiUnit * 0.35) + " pt";
    calculator_item[9].innerHTML = Math.floor(hiUnit * 0.25) + " pt";
    calculator_item[10].innerHTML = Math.floor(hiUnit * 0.20) + " pt";
});
