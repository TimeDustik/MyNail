// JavaScript для взаємодії на сайті
function openBooking() {
    alert("Запис на манікюр відкритий! Зв'яжіться з нами для детальної інформації.");
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Ваше повідомлення надіслано!');
});
