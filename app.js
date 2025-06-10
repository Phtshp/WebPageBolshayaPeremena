// --- Демо-данные ---
const users = {
  alexey: {
    id: 'alexey',
    name: 'Алексей Музыкантов',
    city: 'Москва',
    genres: 'Электроника, Хип-хоп',
    avatar: 'images/user_avatar.png',
    achievements: [
      '🏆 Лучший трек недели (Март 2025)',
      '🎤 Участник мастер-класса с DJ Smash'
    ],
    tracks: [
      {cover: 'images/cover1.jpg', title: 'Свет города', genre: 'Электроника'},
      {cover: 'images/cover3.jpg', title: 'Мечта', genre: 'Хип-хоп'},
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
      '🎹 Наставник по электронной музыке'
    ],
    tracks: [
      {cover: 'images/cover2.jpg', title: 'Заря', genre: 'Техно'},
      {cover: 'images/cover1.jpg', title: 'Город засыпает', genre: 'EDM'},
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
      '🧑‍🏫 Наставник по вокалу'
    ],
    tracks: [
      {cover: 'images/cover3.jpg', title: 'Весна', genre: 'Хип-хоп'},
    ],
  }
};

const allTracks = [
  {cover: 'images/cover1.jpg', artist: 'DJ_Anna', title: 'Свет города', genre: 'Техно'},
  {cover: 'images/cover2.jpg', artist: 'SoundBoy', title: 'Заря', genre: 'Хип-хоп'},
  {cover: 'images/cover3.jpg', artist: 'BeatMaker', title: 'Весна', genre: 'Инди'},
  {cover: 'images/cover1.jpg', artist: 'Алексей Музыкантов', title: 'Мечта', genre: 'Электроника'},
];

const lessons = [
  {img: 'images/mentor1.jpg', title: 'Введение в саунд-дизайн'},
  {img: 'images/mentor2.jpg', title: 'Сведение вокала'},
  {img: 'images/mentor3.jpg', title: 'Промоушен артиста'},
];

const mentors = [
  {img: 'images/mentor1.jpg', name: 'Ирина Петрова', desc: 'Саунд-продюсер. Электронная музыка.'},
  {img: 'images/mentor2.jpg', name: 'Максим Иванов', desc: 'Вокал, хип-хоп, ритмика.'},
  {img: 'images/mentor3.jpg', name: 'DJ_Anna', desc: 'Техно, EDM, синтезаторы.'},
];

const events = [
  '12 июня — Введение в саунд-дизайн',
  '14 июня — Сведение и мастеринг: основы',
  '18 июня — Как попасть на фестиваль',
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
  // Подмена аватарки в header
  document.addEventListener('DOMContentLoaded', () => {
    const mainAvatar = document.getElementById('mainAvatar');
    if (mainAvatar && users[uid]) mainAvatar.src = users[uid].avatar;
    // Логаут
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
    // Отображение треков
    document.getElementById('tracks').innerHTML = allTracks.map(t => `
      <div class="track-card">
        <img src="${t.cover}" alt="Обложка">
        <div><b>${t.artist}</b> — ${t.title}</div>
        <div style="font-size:0.95em;color:#1db954;margin:6px 0;">${t.genre}</div>
      </div>
    `).join('');
    // Отображение уроков
    document.getElementById('lessons').innerHTML = lessons.map(l => `
      <div class="lesson-card">
        <img src="${l.img}" alt="Ментор">
        <div>${l.title}</div>
      </div>
    `).join('');
  });
}

// --- Профиль ---
if (document.getElementById('profileSection')) {
  document.addEventListener('DOMContentLoaded', () => {
    const uid = localStorage.getItem('nw_user');
    const user = users[uid] || users['alexey'];
    document.getElementById('profileSection').innerHTML = `
      <img src="${