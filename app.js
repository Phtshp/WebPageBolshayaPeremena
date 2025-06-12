// ...существующие demo-данные...

const playlists = [
  {title: 'Летний вайб', cover: 'images/cover1.jpg', tracks: 12},
  {title: 'Русский рэп', cover: 'images/cover2.jpg', tracks: 15},
  {title: 'Инди-открытия', cover: 'images/cover3.jpg', tracks: 9},
];

const releases = [
  {title: 'В движении', artist: 'DJ_Anna', date: '2025-06-01', cover: 'images/cover2.jpg'},
  {title: 'Город засыпает', artist: 'SoundBoy', date: '2025-05-28', cover: 'images/cover1.jpg'},
];

const news = [
  {date: '2025-06-10', text: 'Открыта регистрация на летний музыкальный лагерь!'},
  {date: '2025-06-08', text: 'Добавлен новый ментор: DJ Smash.'},
  {date: '2025-06-05', text: 'Появились новые жанры для загрузки треков.'},
];

// ...DOMContentLoaded для новых разделов...
if (document.getElementById('playlists')) {
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('playlists').innerHTML = playlists.map(p =>
      `<div class="playlist-card">
        <img src="${p.cover}" alt="Плейлист">
        <div><b>${p.title}</b></div>
        <div>${p.tracks} треков</div>
      </div>`
    ).join('');
  });
}
if (document.getElementById('releases')) {
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('releases').innerHTML = releases.map(r =>
      `<div class="release-card">
        <img src="${r.cover}" alt="Релиз">
        <div><b>${r.title}</b></div>
        <div>by ${r.artist}</div>
        <div style="font-size:0.9em;color:#bbb;">${r.date}</div>
      </div>`
    ).join('');
  });
}
if (document.getElementById('newsList')) {
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('newsList').innerHTML = news.map(n =>
      `<li><b>${n.date}:</b> ${n.text}</li>`
    ).join('');
  });
}

// Профиль: дополнительные блоки
if (document.getElementById('profileBio')) {
  document.addEventListener('DOMContentLoaded', () => {
    const uid = localStorage.getItem('nw_user');
    const bios = {
      alexey: "Музыкант, битмейкер. Люблю экспериментировать со звуком. Открыт для коллабов.",
      anna: "Пишу техно и EDM, преподаю саунд-дизайн. Веду YouTube-канал.",
      maksim: "Вокалист, участвую в фестивалях, даю уроки ритмики.",
    };
    document.getElementById('profileBio').innerHTML = `
      <h3>Биография</h3>
      <div>${bios[uid] || "Биография не указана."}</div>
    `;
  });
}
if (document.getElementById('profilePlaylists')) {
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('profilePlaylists').innerHTML = `
      <h3>Мои плейлисты</h3>
      <ul>
        <li>Летний вайб</li>
        <li>Мотивирующая подборка</li>
      </ul>
    `;
  });
}
if (document.getElementById('profileReviews')) {
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('profileReviews').innerHTML = `
      <h3>Отзывы</h3>
      <div class="review-card"><b>SoundBoy</b>: Алексей помог разобраться с битами — респект!</div>
      <div class="review-card"><b>DJ_Anna</b>: Позитив, поддержка и советы от Максима!</div>
    `;
  });
}