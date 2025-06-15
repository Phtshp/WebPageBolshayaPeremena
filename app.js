const allTracks = [
  {cover: 'images/cover1.jpg', artist: 'DJ_Anna', title: 'Свет города', genre: 'Техно'},
  {cover: 'images/cover2.jpg', artist: 'SoundBoy', title: 'Заря', genre: 'Хип-хоп'},
  {cover: 'images/cover3.jpg', artist: 'BeatMaker', title: 'Весна', genre: 'Инди'},
  {cover: 'images/cover1.jpg', artist: 'Алексей Музыкантов', title: 'Мечта', genre: 'Электроника'},
  {cover: 'images/cover3.jpg', artist: 'DJ_Anna', title: 'Пульс ночи', genre: 'Техно'},
  {cover: 'images/cover2.jpg', artist: 'Максим Иванов', title: 'Голос', genre: 'Вокал'},
];

const lessons = [
  {img: 'images/mentor1.jpg', title: 'Введение в саунд-дизайн'},
  {img: 'images/mentor2.jpg', title: 'Сведение вокала'},
  {img: 'images/mentor3.jpg', title: 'Промоушен артиста'},
  {img: 'images/mentor1.jpg', title: 'Создание ремиксов'},
  {img: 'images/mentor2.jpg', title: 'Работа с лейблами'},
];

const playlists = [
  {title: 'Летний вайб', cover: 'images/cover1.jpg', tracks: 12},
  {title: 'Русский рэп', cover: 'images/cover2.jpg', tracks: 15},
  {title: 'Инди-открытия', cover: 'images/cover3.jpg', tracks: 9},
];

const releases = [
  {title: 'В движении', artist: 'DJ_Anna', date: '2025-06-01', cover: 'images/cover2.jpg'},
  {title: 'Город засыпает', artist: 'SoundBoy', date: '2025-05-28', cover: 'images/cover1.jpg'},
  {title: 'Пульс ночи', artist: 'DJ_Anna', date: '2025-05-22', cover: 'images/cover3.jpg'},
];

const news = [
  {date: '2025-06-10', text: 'Открыта регистрация на летний музыкальный лагерь!'},
  {date: '2025-06-08', text: 'Добавлен новый ментор: DJ Smash.'},
  {date: '2025-06-05', text: 'Появились новые жанры для загрузки треков.'},
];

const reviews = [
  {user: 'DJ_Anna', text: 'Отличная платформа для начинающих!'},
  {user: 'Максим Иванов', text: 'Нашёл новых друзей и менторов!'},
  {user: 'SoundBoy', text: 'Загрузил свой первый трек и получил фидбек!'},
  {user: 'Ирина Петрова', text: 'Классные уроки, очень удобно!'},
];

document.addEventListener('DOMContentLoaded', () => {
  // Рекомендации для тебя
  const tracksBlock = document.getElementById('tracks');
  if (tracksBlock) {
    tracksBlock.innerHTML = allTracks.map(t => `
      <div class="track-card">
        <img src="${t.cover}" alt="Обложка">
        <div><b>${t.artist}</b> — ${t.title}</div>
        <div style="font-size:0.95em;color:#1db954;margin:6px 0;">${t.genre}</div>
      </div>
    `).join('');
  }
  // Обучение и мастер-классы
  const lessonsBlock = document.getElementById('lessons');
  if (lessonsBlock) {
    lessonsBlock.innerHTML = lessons.map(l => `
      <div class="lesson-card">
        <img src="${l.img}" alt="Ментор">
        <div>${l.title}</div>
      </div>
    `).join('');
  }
  // Популярные плейлисты
  const playlistsBlock = document.getElementById('playlists');
  if (playlistsBlock) {
    playlistsBlock.innerHTML = playlists.map(p =>
      `<div class="playlist-card">
        <img src="${p.cover}" alt="Плейлист">
        <div><b>${p.title}</b></div>
        <div>${p.tracks} треков</div>
      </div>`
    ).join('');
  }
  // Новые релизы
  const releasesBlock = document.getElementById('releases');
  if (releasesBlock) {
    releasesBlock.innerHTML = releases.map(r =>
      `<div class="release-card">
        <img src="${r.cover}" alt="Релиз">
        <div><b>${r.title}</b></div>
        <div>by ${r.artist}</div>
        <div style="font-size:0.9em;color:#bbb;">${r.date}</div>
      </div>`
    ).join('');
  }
  // Новости
  const newsList = document.getElementById('newsList');
  if (newsList) {
    newsList.innerHTML = news.map(n =>
      `<li><b>${n.date}:</b> ${n.text}</li>`
    ).join('');
  }
  // Отзывы участников
  const reviewsBlock = document.getElementById('reviewsBlock');
  if (reviewsBlock) {
    reviewsBlock.innerHTML = reviews.map(r =>
      `<div class="review-card"><b>${r.user}</b>: ${r.text}</div>`
    ).join('');
  }
  // Видео мастер-классы
  const videosBlock = document.getElementById('videos');
  if (videosBlock) {
    videosBlock.innerHTML = `
      <iframe width="350" height="197" src="https://www.youtube.com/embed/ysz5S6PUM-U" frameborder="0" allowfullscreen></iframe>
      <iframe width="350" height="197" src="https://www.youtube.com/embed/jNQXAC9IVRw" frameborder="0" allowfullscreen></iframe>
    `;
  }
});