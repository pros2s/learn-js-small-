'use strict';

// Массив фильмов
const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против ..."
  ]
};

// Удаление рекламы
const addv = document.querySelectorAll('.promo__adv img');

const deleteAdv = (arr) => {
  arr.forEach(item => {
    item.remove();
  });

  document.querySelector('.promo__adv-title').remove();
};

deleteAdv(addv);

// Жанр и картинка фильма
const genreText = 'драма',
      poster = document.querySelector('.promo__bg'),
      genreItem = poster.querySelector('.promo__genre');

genreItem.textContent = genreText;

poster.style.backgroundImage = 'url("img/bg.jpg")';

// Сортировка массива
const sortArr = (arr) => {
  arr.sort();
};

// Сортировка и нумерация флиьмов
const movieList = document.querySelector('.promo__interactive-list');

sortArr(movieDB.movies);

const createMovieList = (films, parent) => {
  parent.innerHTML = "";
  sortArr(films);

  films.forEach((item, i) => {
    parent.innerHTML += `
      <li class="promo__interactive-item">${i + 1}. ${item}
          <div class="delete"></div>
      </li>
    `;
  });

  document.querySelectorAll('.delete').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      btn.parentElement.remove();
      movieDB.movies.splice(i, 1);

      createMovieList(films, parent);
    });
  });
};

createMovieList(movieDB.movies, movieList);

// Добавление фильмов в список
const addForm = document.querySelector('form.add'),
      addCheckbox = addForm.querySelector('[type="checkbox"]'),
      addInput = addForm.querySelector('.adding__input');

addForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let newFilm = addInput.value;
  const newFav = addCheckbox.checked;

  // Если название фильма слишком большое, то ...
  if(newFilm) {
    if(newFilm.length > 21) {
      newFilm = `${newFilm.substring(0, 22)}...`;
    }

    if(newFav) {
      console.log('Любимый фильм');
    }

    movieDB.movies.push(newFilm);

    sortArr(movieDB.movies);

    createMovieList(movieDB.movies, movieList);
  }

  e.target.reset();
});