/**
 * @author Dilson Campêlo
 * 08/09/2021
 */
 let point = document.querySelectorAll('.pointer')
 let sliders = document.querySelector('.sliders');
function slide1(){
        point[0].style.backgroundColor = '#b78c55';
        point[1].style.backgroundColor = 'transparent';
        point[2].style.backgroundColor = 'transparent';
        sliders.style.marginLeft = 0;
}
function slide2(){
        sliders.style.marginLeft = '-100vw';
        point[0].style.backgroundColor = 'transparent';
        point[1].style.backgroundColor = '#b78c55';
        point[2].style.backgroundColor = 'transparent';
}
function slide3(){
        point[0].style.backgroundColor = 'transparent';
        point[1].style.backgroundColor = 'transparent';
        point[2].style.backgroundColor = '#b78c55';
        sliders.style.marginLeft = '-200vw';
}
