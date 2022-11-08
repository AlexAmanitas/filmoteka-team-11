import renderList from './render_movie_list';
import searchPanel from '../templates/search_panel.hbs';
import FilmApiService from './movie_database_api';
import { transformObjUa, transformObj } from './transformObject';
import { refs } from './refs';
import debounce from 'lodash.debounce';
var debounce = require('lodash.debounce');
import Notiflix from 'notiflix';

const apiRequest = new FilmApiService();

refs.searchForm.addEventListener('submit', onSubmit);
refs.searchInput.addEventListener('input', debounce(onInput, 350));

function onSubmit(evt) {
  evt.preventDefault();
  console.log(evt, refs.searchInput.value);
  apiRequest.searchQuery = refs.searchInput.value;
  const searchRes = apiRequest.fetchSearchMovie();

  searchRes.then(res => {
    console.log(res);
    if (!res.length) {
      Notiflix.Notify.failure('Sorry, film is not found. Please try again.');
      return;
    }
    renderList(res);
    refs.searchInput.value = '';
  });
}

function onInput(evt) {
  evt.preventDefault();
  refs.searchBtn.removeAttribute('disabled');
  apiRequest.searchQuery = evt.target.value;
  const searchRes = apiRequest.fetchSearchMovie();
  searchRes.then(res => {
    console.log(res);
    if (!res) {
      Notiflix.Notify.failure(' Please type something.');
      refs.searchInput.value = '';
      refs.searchList.innerHTML = '';
      return;
    }
    if (!res.length) {
      Notiflix.Notify.failure('Sorry, film is not found. Please try again.');
      return;
    }

    // renderSearchPanel(res);
    renderSearchPanel(transformObjUa(res));
  });
  console.log(evt.target.value, refs.searchInput.value);
}

function renderSearchPanel(arrObj) {
  refs.searchList.innerHTML = '';
  const markup = searchPanel(arrObj);
  refs.searchList.insertAdjacentHTML('beforeend', markup);
}
