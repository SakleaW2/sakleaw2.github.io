// Пример интерактивности: добавление обработчиков событий
const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('click', () => {
        alert(`Вы выбрали: ${item.querySelector('h3').textContent}`);
    });
});