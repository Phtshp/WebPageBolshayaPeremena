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
      {cover: 'images/cover1.jpg', title: 'Свет города', genre: 'Электроника', audio: "audio/track1.mp3"},
      {cover: 'images/cover3.jpg', title: 'Мечта', genre: 'Хип-хоп', audio: "audio/track2.mp3"},
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
      {cover: 'images/cover2.jpg', title: 'Заря', genre: 'Техно', audio: "audio/track3.mp3"},
      {cover: 'images/cover1.jpg', title: 'Город засыпает', genre: 'EDM', audio: "audio/track4.mp3"},
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
      {cover: 'images/cover3.jpg', title: 'Весна', genre: 'Хип-хоп', audio: "audio/track5.mp3"},
    ],
  }
};

const allTracks = [
  {cover: 'images/cover1.jpg', artist: 'DJ_Anna', title: 'Свет города', genre: 'Техно', audio: "audio/track1.mp3"},
  {cover: 'images/cover2.jpg', artist: 'SoundBoy', title: 'Заря', genre: 'Хип-хоп', audio: "audio/track2.mp3"},
  {cover: 'images/cover3.jpg', artist: 'BeatMaker', title: 'Весна', genre: 'Инди', audio: "audio/track3.mp3"},
  {cover: 'images/cover1.jpg', artist: 'Алексей Музыкантов', title: 'Мечта', genre: 'Электроника', audio: "audio/track4.mp3"},
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
    document.getElementById('tracks').innerHTML = allTracks.map((t, idx) => `
      <div class="track-card" data-idx="${idx}">
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

    // --- Плеер ---
    document.querySelectorAll('.track-card').forEach(card => {
      card.onclick = () => {
        const idx = card.getAttribute('data-idx');
        playTrack(allTracks[idx]);
      };
    });
  });
}

// --- Глобальный плеер ---
function playTrack(track) {
  const player = document.getElementById('musicPlayer');
  const audio = document.getElementById('audioElem');
  document.getElementById('playerCover').src = track.cover;
  document.getElementById('playerTitle').textContent = track.title;
  document.getElementById('playerArtist').textContent = track.artist;
  audio.src = track.audio;
  player.style.display = 'flex';
  audio.play();
}

// --- Профиль ---
if (document.getElementById('profileSection')) {
  document.addEventListener('DOMContentLoaded', () => {
    const uid = localStorage.getItem('nw_user');
    const user = users[uid] || users['alexey'];
    document.getElementById('profileSection').innerHTML = `
      <div style="text-align:center;">
        <img src="${user.avatar}" class="avatar-large" alt="Аватар">
        <h2>${user.name}</h2>
        <div>${user.city}</div>
        <div style="color:#1db954;">${user.genres}</div>
        <ul class="achievements">
          ${user.achievements.map(a => `<li>${a}</li>`).join('')}
        </ul>
      </div>
      <h3 style="margin-top:32px;">Треки пользователя</h3>
      <div class="profile-tracks">
        ${user.tracks.map((t, idx) => `
          <div class="track-card" onclick="playTrack({
            cover: '${t.cover}', 
            artist: '${user.name}', 
            title: '${t.title}', 
            genre: '${t.genre}',
            audio: '${t.audio || ""}'
          })">
            <img src="${t.cover}" alt="Обложка">
            <div><b>${user.name}</b> — ${t.title}</div>
            <div style="font-size:0.95em;color:#1db954;margin:6px 0;">${t.genre}</div>
          </div>
        `).join('')}
      </div>
    `;
  });
}

// --- Learning (mentors/events) ---
if (document.getElementById('mentorsList')) {
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('mentorsList').innerHTML = mentors.map(m => `
      <div class="mentor-card">
        <img src="${m.img}" alt="">
        <div class="mentor-info">
          <div style="font-weight:bold;">${m.name}</div>
          <div>${m.desc}</div>
        </div>
      </div>
    `).join('');
  });
}
if (document.getElementById('eventsList')) {
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('eventsList').innerHTML = events.map(e => `<li>${e}</li>`).join('');
  });
}

// --- Форум (чат) ---
if (document.getElementById('chatForm')) {
  document.getElementById('chatForm').onsubmit = e => {
    e.preventDefault();
    const msg = document.getElementById('chatInput').value.trim();
    if (!msg) return;
    const messages = document.getElementById('messages');
    messages.innerHTML += `<div class="message"><b>Вы:</b> ${msg}</div>`;
    document.getElementById('chatInput').value = '';
    messages.scrollTop = messages.scrollHeight;
  };
}