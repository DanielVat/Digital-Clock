
import { pad } from './utils.js';


export function myTime() {
  const now = new Date();
  const hrs = pad(now.getHours());
  const min = pad(now.getMinutes());
  const sec = pad(now.getSeconds());

  document.getElementById('hrs').textContent = hrs;
  document.getElementById('min').textContent = min;
  document.getElementById('sec').textContent = sec;
}

document.addEventListener('DOMContentLoaded', () => {
  myTime(); 

  setInterval(() => {
    myTime();
  }, 1000);
});
