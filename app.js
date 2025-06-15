const users = {
  alexey: {
    id: 'alexey',
    name: 'Алексей Музыкантов',
    city: 'Москва',
    genres: 'Электроника, Хип-хоп',
    avatar: 'images/user_avatar.png',
    achievements: [
      '🏆 Лучший трек недели (Март 2025)',
      '🎤 Участник мастер-класса с DJ Smash',
      '🥇 Победитель битвы битмейкеров (2025)',
    ],
    tracks: [
      {cover: 'images/cover1.jpg', title: 'Свет города', genre: 'Электроника'},
      {cover: 'images/cover2.jpg', title: 'Мечта', genre: 'Хип-хоп'},
    ],
  },
  anna: {
    id: 'anna',
    name: 'DJ_Anna',
    city: 'Казань',
    genres: 'Техно, EDM',
    avatar: 'images/mentor1.jpg',
    achievements: [
      '🏅 Приз зрительских симпатий (2024)',
      '🎹 Наставник по электронной музыке',
      '🎧 Топ-5 диджеев России (2024)',
    ],
    tracks: [
      {cover: 'images/cover1.jpg', title: 'Заря', genre: 'Техно'},
      {cover: 'images/cover3.jpg', title: 'Город засыпает', genre: 'EDM'},
    ],
  },
  maksim: {
    id: 'maksim',
    name: 'Максим Иванов',
    city: 'Санкт-Петербург',
    genres: 'Вокал, Хип-хоп, Ритмика',
    avatar: 'images/mentor2.jpg',
    achievements: [
      '🎤 Лауреат фестиваля "Голос улиц"',
      '🧑‍🏫 Наставник по вокалу',
      '🏅 Приз зрителей на UrbanFest (2025)',
    ],
    tracks: [
      {cover: 'images/cover3.jpg', title: 'Весна', genre: 'Хип-хоп'},
      {cover: 'images/cover2.jpg', title: 'Голос', genre: 'Вокал'},
    ],
  }
};

const allTracks = [
  {cover: 'images/cover1.jpg', artist: 'DJ_Anna', title: 'Свет города', genre: 'Техно'},
  {cover: 'images/cover2.jpg', artist: 'SoundBoy', title: 'Заря', genre: 'Хип-хоп'},
  {cover: 'images/cover3.jpg', artist: 'BeatMaker', title: 'Весна', genre: 'Инди'},
  {cover: 'images/cover1.jpg', artist: 'Алексей Музыкантов', title: 'Мечта', genre: 'Электроника'},
  {cover: 'images/cover3.jpg', artist: 'DJ_Anna', title: 'Пульс ночи', genre: 'Техно'},
  {cover: 'images/cover2.jpg', artist: 'Максим Иванов', title: 'Голос', genre: 'Вокал'},
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

const lessons = [
  {img: 'images/mentor1.jpg', title: 'Введение в саунд-дизайн'},
  {img: 'images/mentor2.jpg', title: 'Сведение вокала'},
  {img: 'images/mentor3.jpg', title: 'Промоушен артиста'},
  {img: 'images/mentor1.jpg', title: 'Создание ремиксов'},
  {img: 'images/mentor2.jpg', title: 'Работа с лейблами'},
];

const mentors = [
  {img: 'images/mentor1.jpg', name: 'Ирина Петрова', desc: 'Саунд-продюсер. Электронная музыка.'},
  {img: 'images/mentor2.jpg', name: 'Максим Иванов', desc: 'Вокал, хип-хоп, ритмика.'},
  {img: 'images/mentor3.jpg', name: 'DJ_Anna', desc: 'Техно, EDM, синтезаторы.'},
  {img: 'images/user_avatar.png', name: 'Алексей Музыкантов', desc: 'Битмейкер, хип-хоп, электроника.'},
];

const events = [
  '12 июня — Введение в саунд-дизайн',
  '14 июня — Сведение и мастеринг: основы',
  '18 июня — Как попасть на фестиваль',
  '20 июня — Вокальный интенсив для всех уровней',
  '25 июня — EDM Production Pro',
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

// --- Авторизация (login.html) ---
if (location.pathname.endsWith('login.html')) {
  document.getElementById('loginBtn').onclick = () => {
    const uid = document.getElementById('userSelect').value;
    localStorage.setItem('nw_user', uid);
    location.href = 'index.html';
  };
}

// --- Проверка авторизации на всех страницах, кроме login.html ---
if (!location.pathname.endsWith('login.html')) {
  let uid = localStorage.getItem('nw_user');
  if (!uid || !users[uid]) {
    location.href = 'login.html';
  }
  document.addEventListener('DOMContentLoaded', () => {
    const mainAvatar = document.getElementById('mainAvatar');
    if (mainAvatar && users[uid]) mainAvatar.src = users[uid].avatar;
    const logoutLink = document.getElementById('logoutLink');
    if (logoutLink) logoutLink.onclick = e => {
      e.preventDefault();
      localStorage.removeItem('nw_user');
      location.href = 'login.html';
    };
  });
}

// --- Главная страница ---
if (document.getElementById('tracks')) {
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('tracks').innerHTML = allTracks.map(t => `
      <div class="track-card">
        <img src="${t.cover}" alt="Обложка">
        <div><b>${t.artist}</b> — ${t.title}</div>
        <div style="font-size:0.95em;color:#1db954;margin:6px 0;">${t.genre}</div>
      </div>
    `).join('');
    document.getElementById('lessons').innerHTML = lessons.map(l => `
      <div class="lesson-card">
        <img src="${l.img}" alt="Ментор">
        <div>${l.title}</div>
      </div>
    `).join('');
    if (document.getElementById('playlists')) {
      document.getElementById('playlists').innerHTML = playlists.map(p =>
        `<div class="playlist-card">
          <img src="${p.cover}" alt="Плейлист">
          <div><b>${p.title}</b></div>
          <div>${p.tracks} треков</div>
        </div>`
      ).join('');
    }
    if (document.getElementById('releases')) {
      document.getElementById('releases').innerHTML = releases.map(r =>
        `<div class="release-card">
          <img src="${r.cover}" alt="Релиз">
          <div><b>${r.title}</b></div>
          <div>by ${r.artist}</div>
          <div style="font-size:0.9em;color:#bbb;">${r.date}</div>
        </div>`
      ).join('');
    }
    if (document.getElementById('newsList')) {
      document.getElementById('newsList').innerHTML = news.map(n =>
        `<li><b>${n.date}:</b> ${n.text}</li>`
      ).join('');
    }
    if (document.getElementById('reviewsBlock')) {
      document.getElementById('reviewsBlock').innerHTML = reviews.map(r =>
        `<div class="review-card"><b>${r.user}</b>: ${r.text}</div>`
      ).join('');
    }
    if (document.getElementById('videos')) {
      document.getElementById('videos').innerHTML = `
        <iframe width="350" height="197" src="https://www.youtube.com/embed/ysz5S6PUM-U" frameborder="0" allowfullscreen></iframe>
        <iframe width="350" height="197" src="https://www.youtube.com/embed/jNQXAC9IVRw" frameborder="0" allowfullscreen></iframe>
      `;
    }
  });
}

// --- Профиль ---
if (document.getElementById('profileSection')) {
  document.addEventListener('DOMContentLoaded', () => {
    const uid = localStorage.getItem('nw_user');
    const user = users[uid] || users['alexey'];
    document.getElementById('profileSection').innerHTML = `
      <img src="${user.avatar}" class="avatar-large">
      <h2>${user.name}</h2>
      <div>Город: ${user.city}</div>
      <div>Жанры: ${user.genres}</div>
      <ul class="achievements">
        ${user.achievements.map(a => `<li>${a}</li>`).join('')}
      </ul>
      <h3 style="margin-top:26px;">Мои треки</h3>
      <div class="profile-tracks">
        ${user.tracks.map(t => `
          <div class="track-card">
            <img src="${t.cover}" alt="Обложка">
            <div>${t.title}</div>
            <div style="font-size:0.92em;color:#1db954;margin:6px 0;">${t.genre}</div>
          </div>
        `).join('')}
      </div>
      <h3 style="margin-top:26px;">Отзывы</h3>
      <div class="reviews">
        <div class="review-card"><b>SoundBoy</b>: ${user.name} помог разобраться с битами — респект!</div>
        <div class="review-card"><b>DJ_Anna</b>: Позитив, поддержка и советы от ${user.name.split(' ')[0]}!</div>
      </div>
    `;
  });
}

// --- Загрузка трека ---
if (document.getElementById('uploadForm')) {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('uploadForm');
    form.onsubmit = e => {
      e.preventDefault();
      document.getElementById('uploadStatus').textContent = '✔️ Трек успешно загружен! (Демо)';
      form.reset();
    }
  });
}

// --- Форум/чат (демо, без сервера) ---
const demoMsgs = [
  {user: 'anna', text: 'Всем привет!', time: '08:00'},
  {user: 'maksim', text: 'Ищу вокалиста для нового трека.', time: '08:01'},
  {user: 'alexey', text: 'Кто идёт на мастер-класс сегодня?', time: '08:05'},
  {user: 'anna', text: 'Рекомендую новый урок по сведению!', time: '08:09'},
];
if (document.getElementById('messages')) {
  document.addEventListener('DOMContentLoaded', () => {
    const messages = document.getElementById('messages');
    const uid = localStorage.getItem('nw_user');
    function renderMsgs() {
      messages.innerHTML = demoMsgs.map(msg => `
        <div class="message">
          <b>${users[msg.user]?.name || msg.user}:</b> ${msg.text}
        </div>
      `).join('');
      messages.scrollTop = messages.scrollHeight;
    }
    renderMsgs();
    document.getElementById('chatForm').onsubmit = e => {
      e.preventDefault();
      const input = document.getElementById('chatInput');
      if (input.value.trim()) {
        const now = new Date();
        demoMsgs.push({
          user: uid,
          text: input.value,
          time: now.getHours().toString().padStart(2,'0') + ':' + now.getMinutes().toString().padStart(2,'0')
        });
        renderMsgs();
        input.value = '';
      }
    };
  });
}

// --- Обучение и менторство ---
if (document.getElementById('mentorsList')) {
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('mentorsList').innerHTML = mentors.map(m => `
      <div class="mentor-card">
        <img src="${m.img}" alt="Ментор">
        <div class="mentor-info">
          <b>${m.name}</b>
          <div style="font-size:0.95em;color:#bbb;">${m.desc}</div>
        </div>
      </div>
    `).join('');
    document.getElementById('eventsList').innerHTML = events.map(e => `<li>${e}</li>`).join('');
  });
}