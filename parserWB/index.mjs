// index.js
import fetch from 'node-fetch';
import cheerio from 'cheerio';

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // Теперь вы можете использовать $ для доступа к данным на веб-странице
    // Используйте CSS-селекторы для выбора нужных элементов
    const productNmId = $('body').text().trim();

    console.log('Артикул:', productNmId);
  } catch (error) {
    console.error('Произошла ошибка:', error.message);
  }
}

// Вызов функции для выполнения запроса
fetchData();