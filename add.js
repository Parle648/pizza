const BtnPlas = document.querySelector('.plas');
const sliders = document.querySelector('.carousel');

const SliderNext = function(){

    const arrBlocks = document.querySelectorAll('.sliders');

    let newObj = document.createElement('div');  newObj.classList.add('sliders')

    let img = document.createElement('img');
    img.classList.add('sliderImg'); img.src = arrBlocks[0].firstElementChild.getAttribute('src')

    sliders.appendChild(newObj); newObj.appendChild(img)

    sliders.classList.add('animationNext'); 
    
    sliders.addEventListener('animationend', function(){

    sliders.classList.remove('animationNext')

    arrBlocks[0].remove()
})
}

    const btnPrevious = document.querySelector('.minus')

    const SluderPrevious = function(){
        const arrBlocks = document.querySelectorAll('.sliders');

        let FirstBlock = document.createElement('div');FirstBlock.classList.add('sliders');FirstBlock.classList.add('absolute')

        let img = document.createElement('img'); img.classList.add('sliderImg'); img.src = sliders.lastElementChild.firstElementChild.getAttribute('src')

        FirstBlock.appendChild(img); sliders.prepend(FirstBlock);

        sliders.classList.add('animPrevious')

        sliders.addEventListener('animationend', function(){

            sliders.classList.remove('animPrevious');FirstBlock.classList.remove('absolute')
        
            arrBlocks[3].remove()
        })
    }

BtnPlas.addEventListener('click', SliderNext);
btnPrevious.addEventListener('click', SluderPrevious)