window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight; 
    const scrollPosition = window.pageYOffset;
    const stickytreshold = 20;
  
    if (scrollPosition > stickytreshold) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });

const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "flex";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// const buttons = document.getElementsByClassName('Fakebutton');
// const popup = document.querySelector('.popup');

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', () => {
//     popup.classList.add('show');
//     setTimeout(() => {
//       popup.classList.remove('show');
//       popup.classList.add('fade');
//       setTimeout(() => {
//         popup.classList.remove('fade');
//       }, 500); // Длительность затухания
//     }, 3000); // Длительность показа
//   });
// }

const buttons = document.getElementsByClassName('Fakebutton');
const popupContainer = document.getElementById('popupContainer');
const popupText = 'Ведётся тех. обслуживание функция не доступна';

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    let popupCount = popupContainer.querySelectorAll('.popup').length; 

    if (popupCount < 3) {
      const popup = document.createElement('div');
      popup.className = 'popup';
      popup.textContent = popupText;
      popup.classList.add('show');
      popup.style.zIndex = popupCount + 2; 
      popupContainer.appendChild(popup);

      setTimeout(() => {
        popup.classList.remove('show');
        popup.classList.add('fade');
        setTimeout(() => {
          popup.remove();
        }, 500);
      }, 1000);
    } else if (popupCount >= 3) { 
      currentPopups[0].remove(); 
    }
  });
}

const clearButtons = document.querySelectorAll('.clearButton');
const inputFields = document.querySelectorAll('.myInput');

clearButtons.forEach(button => {
  button.addEventListener('click', () => {
    inputFields.forEach(input => {
      input.value = '';
    });
  });
});

let slider = document.querySelector('.slider');
let sliderItems = document.querySelectorAll('.slider-item');
let currentPosition = 0;

function slideLeft() {
  currentPosition = Math.min(currentPosition + 100, 0); // 100px на элемент
  slider.style.transform = `translateX(${currentPosition}px)`;
  updateVisibility();
}

function slideRight() {
  currentPosition = Math.max(currentPosition - 100, -200); // 200px для 2 элементов
  slider.style.transform = `translateX(${currentPosition}px)`;
  updateVisibility();
}

function updateVisibility() {
  sliderItems.forEach((item, index) => {
    if (index * 100 >= -currentPosition && index * 100 < -currentPosition + 300) {
      item.classList.add('visible');
    } else {
      item.classList.remove('visible');
    }
  });
}


document.getElementById("language").addEventListener("change", function(){
  let selectedValue = this.value;
  window.location.href = selectedValue;
});

const buttona = document.getElementsByClassName("Bigbutton");
let activeButton = null;

// Обратите внимание на изменения в цикле
for (let i = 0; i < buttona.length; i++) {
  buttona[i].addEventListener("click", function() {
    // Если нажата та же кнопка, убираем активный класс
    if (this === activeButton) {
      this.classList.remove("active");
      activeButton = null;
      return;
    }

    // Если есть активная кнопка, убираем класс active у нее
    if (activeButton) {
      activeButton.classList.remove("active");
    }

    // Добавляем класс active текущей кнопке
    this.classList.add("active");

    // Обновляем активную кнопку
    activeButton = this;
  });
}

const sliderButtons = document.querySelectorAll(".slider-button");
const prevButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");

let currentIndex = 0;
const numButtons = sliderButtons.length; 
const centerIndex = 2; 


function updateSlider() {
    sliderButtons.forEach((button, index) => {
        if (index === currentIndex) {
            button.classList.add("active");
            button.style.order = centerIndex; 
        } else {
            button.classList.remove("active");
            const newOrder = (index - currentIndex + numButtons + centerIndex) % numButtons;
             button.style.order = newOrder;
        }
    });
}

sliderButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
  });
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + numButtons) % numButtons;
  updateSlider();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % numButtons;
  updateSlider();
});

updateSlider();
