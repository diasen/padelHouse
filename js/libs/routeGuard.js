import { getUser } from './localStorageFunctions.js';

if (getUser('jwt') === null) {
  window.location.href = './login.html';
}
