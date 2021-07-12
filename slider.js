let imagesBlock = [{
        title: `<div class="section-2-div-4">
            <div>
                <h3 class="subtitle">City:</h3>
                <span>Rostov-on-Don <br>LCD admiral</span>
            </div>
            <div>
                <h3 class="subtitle">Repair time:</h3>
                <span>3.5 months</span>
            </div>
        </div>
        <div class="section-2-div-4__1">
            <div class="section-2-div-4__1-div">
                <h3 class="subtitle">apartment area:</h3>
                <span>81 m2</span>
            </div>
            <div>
                <h3 class="subtitle">Repair Cost:</h3>
                <span>Upon request</span>
            </div>
        </div>`
    }, {
        title: `<div class="section-2-div-4">
        <div>
            <h3 class="subtitle">City:</h3>
            <span>Sochi <br> Thieves</span>
        </div>
        <div>
            <h3 class="subtitle">Repair time:</h3>
            <span>4 months</span>
        </div>
    </div>
    <div class="section-2-div-4__1">
        <div class="section-2-div-4__1-div">
            <h3 class="subtitle">apartment area:</h3>
            <span>105 m2</span>
        </div>
        <div>
            <h3 class="subtitle">Repair Cost:</h3>
            <span>Upon request</span>
        </div>
    </div>`
  }, {
    title: `<div class="section-2-div-4">
        <div>
            <h3 class="subtitle">City:</h3>
            <span>Rostov-on-Don <br>Patriotic</span>
        </div>
        <div>
            <h3 class="subtitle">Repair time:</h3>
            <span>3 months</span>
        </div>
    </div>
    <div class="section-2-div-4__1">
        <div class="section-2-div-4__1-div">
            <h3 class="subtitle">apartment area:</h3>
            <span>93 m2</span>
        </div>
        <div>
            <h3 class="subtitle">Repair Cost:</h3>
            <span>Upon request</span>
        </div>
    </div>`
}];

// Ищем ноду (слайды), записываем в псевдомассив
let slides = document.querySelectorAll(".slide");
// Ищем ноду (стрелки)
let ArrowPrev = document.querySelector(".slider__arrows_prev");
let ArrowNext = document.querySelector(".slider__arrows_next");
// Ищем ноду (точки) записываем в псевдомассив
let Dots = document.querySelectorAll(".slider__dot");
// Ищем ноду (заголовки),  записываем в псевдомассив
let Items = document.querySelectorAll (".section-2-div-ul__item")
// Ищем ноду (блок с текстом),
let Block = document.querySelector (".section-2-div-3")


let index = 0;

const activeSlider = (n) => {
    for (slide of slides) {
        slide.classList.remove ('active'); // убираем со всех картинок класс activ
    }
    slides[n].classList.add ('active'); // добавляем текущей картинке класс activ
}
const activeDot = (n) => {
    for (dot of Dots) {
        dot.classList.remove ('active'); // убираем со всех точек класс activ
    }
    Dots[n].classList.add ('active'); // добавляем текущей точке класс activ
}
const activeItem = (n) => {
    for (item of Items) {
        item.classList.remove ('active'); // убираем со всех заголовков класс activ
    }
    Items[n].classList.add ('active'); // добавляем текущему заголовку класс activ
}

// функция замены блока с текстом
function activeBlock(n) {
    Block.innerHTML = imagesBlock[n].title
  }

// вызываем функцию с активной картинкой, заголовком, блоком и точкой
const prepareCurrentSlide = (ind) => {
    activeSlider (ind);
    activeDot (ind);
    activeItem (ind);
    activeBlock (ind);
}

const nextSlider = () => {
    if (index == slides.length -1) {
        index = 0;
        prepareCurrentSlide (index);
    } else {
        index ++; // увеличиваем на 1 index
        prepareCurrentSlide (index);
    }
}
const prevSlider = () => {
    if (index == 0) {
        index = slides.length -1;
        prepareCurrentSlide (index);
    } else {
        index --; // уменьшаем на 1 index
        prepareCurrentSlide (index);
    }
}
// переключаем точки
Dots.forEach((item, indexDot) => {
    item.addEventListener ('click', () => {
        index = indexDot;
        prepareCurrentSlide (index);
    })
})

// переключаем заголовки
Items.forEach((item, indexItem) => {
    item.addEventListener ('click', () => {
        index = indexItem;
        prepareCurrentSlide (index);
    })
})

// После нажатия на стрелки, запускаем соответствующую функцию
ArrowNext.addEventListener ('click', nextSlider);
ArrowPrev.addEventListener ('click', prevSlider);

setInterval(nextSlider, 2500);