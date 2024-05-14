const form = document.querySelector('.input-wrapper form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  let params = {
    email: form.querySelector('input[type="email"]').value,
  };

  const email = form.querySelector('input[type="email"]').value; // Получаем значение email из input
  if (email.trim() !== '') {
    emailjs
      .send('service_12rfup7', 'template_8s0bf5o', { to_email: email })
      .then(
        function (response) {
          console.log('Письмо успешно отправлено!', response);
          form.reset(); // Очищаем форму после успешной отправки
        },
        function (error) {
          console.error('Ошибка отправки письма:', error);
        }
      );
  }
});

// az.36419.a@gmail.com
