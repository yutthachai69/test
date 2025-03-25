// script.js
document.addEventListener('DOMContentLoaded', () => {
    const recipeCards = document.querySelectorAll('.recipe-card');

    recipeCards.forEach(card => {
        card.addEventListener('click', () => {
            const recipeName = card.querySelector('h3').textContent;
            alert(`คุณเลือกสูตร: ${recipeName}! คลิกเพื่อดูรายละเอียดเพิ่มเติม`);
        });
    });
});