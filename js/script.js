document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});

class App {
  init() {
    document.querySelector('.header__menu-icon')
      .addEventListener('click', (event) => {
        event.target.classList.toggle('_active');
        document.querySelector('.header__menu').classList.toggle('_active');
      });

    document.getElementById('add-show-button')
      .addEventListener('click', (event) => {
        event.target.parentElement.classList.remove('_active');
        document.querySelector('.header__menu-icon').classList.toggle('_active');
        document.querySelector('.add-show-form').classList.toggle('_active');
      });

    document.querySelector('.add-show-form__close-button')
      .addEventListener('click', (event) => {
        event.target.closest('.add-show-form').classList.remove('_active');
      })

    document.querySelector('.add-show-form__submit-button')
      .addEventListener('click', (event) => {
        let title = document.getElementById('added-show-title').value;
        let description = document.getElementById('added-show-description').value;
        let option = document.getElementById('added-show-list').value;
        if (!title) {
          return
        }
        console.log(title);
        console.log(description);
        console.log(option);
        document.getElementById('added-show-title').value = '';
        document.getElementById('added-show-description').value = '';
        document.getElementById('added-show-list').value = 'plan-to-watch';
      })
  }
};