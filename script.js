// JavaScript анімація для зображень
const jsImages = [
    document.getElementById('js-animation1'), 
    document.getElementById('js-animation2')
];
let scales = [1, 1];
let rotation = 0; // Змінна для обертання

function animate() {
    // Анімація для другого зображення (масштабування)
    scales[1] += 0.1;
    if (scales[1] > 1.5) scales[1] = 1; // Скидаємо масштаб
    jsImages[1].style.transform = `scale(${scales[1]})`;

    // Анімація для першого зображення (обертання)
    rotation += 10; // Збільшуємо кут обертання
    jsImages[0].style.transform = `rotate(${rotation}deg)`; // Обертання
}

setInterval(animate, 500); // Змінюємо масштаби та обертання кожні 500 мс
