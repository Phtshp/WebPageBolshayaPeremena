// --- Демо-мероприятия ---
const allEvents = [
  {id: 1, title: 'Мастер-класс по битмейкингу', genres: ['Хип-хоп','Электроника'], levels: ['novice','intermediate']},
  {id: 2, title: 'Вокальный интенсив', genres: ['Вокал'], levels: ['novice','intermediate','pro']},
  {id: 3, title: 'EDM Production Pro', genres: ['EDM'], levels: ['intermediate','pro']},
  {id: 4, title: 'Сценическая подача для артистов', genres: ['Хип-хоп','Вокал','EDM'], levels: ['any']},
];

// --- Регистрация ---
if (location.pathname.endsWith('register.html')) {
  document.getElementById('registerForm').onsubmit = function(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(this).entries());
    if (!data.name || !data.email || !data.level || !data.genre) {
      document.getElementById('registerStatus').textContent = "Заполните все поля!";
      return;
    }
    const user = {
      name: data.name,
      email: data.email.toLowerCase(),
      level: data.level,
      genre: data.genre,
      participation: [],
      progress: [],
    };
    localStorage.setItem('nw_user', JSON.stringify(user));
    location.href = 'index.html';
  }
}

// --- Вход ---
if (location.pathname.endsWith('login.html')) {
  document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();
    const email = this.email.value.trim().toLowerCase();
    const stored = JSON.parse(localStorage.getItem('nw_user') || '{}');
    if (stored && stored.email === email) {
      location.href = 'index.html';
    } else {
      document.getElementById('loginStatus').textContent = "Пользователь не найден. Зарегистрируйтесь.";
    }
  }
}

// --- Проверка входа ---
if (!location.pathname.endsWith('login.html') && !location.pathname.endsWith('register.html')) {
  const user = JSON.parse(localStorage.getItem('nw_user') || 'null');
  if (!user) location.href = 'login.html';
  // Логаут
  document.addEventListener('DOMContentLoaded', ()=> {
    const logoutLink = document.getElementById('logoutLink');
    if (logoutLink) logoutLink.onclick = e => {
      e.preventDefault(); localStorage.removeItem('nw_user'); location.href = 'login.html';
    };
  });
}

// --- Главная: подборка мероприятий и заявки ---
if (document.getElementById('eventsList')) {
  document.addEventListener('DOMContentLoaded', ()=> {
    const user = JSON.parse(localStorage.getItem('nw_user'));
    document.getElementById('userName').textContent = user.name;
    document.getElementById('userLevel').textContent =
      user.level === 'novice' ? 'Новичок' : user.level === 'intermediate' ? 'Любитель' : 'Профессионал';
    document.getElementById('userGenre').textContent = user.genre;

    // Подборка по уровню и направлению
    const filtered = allEvents.filter(ev =>
      (ev.levels.includes(user.level) || ev.levels.includes('any')) &&
      (ev.genres.some(g => user.genre.toLowerCase().includes(g.toLowerCase())) || ev.genres.includes('any'))
    );
    const eventsHTML = filtered.map(ev => {
      const applied = (user.participation||[]).includes(ev.id);
      return `<div class="event-card">
        <b>${ev.title}</b> <span class="badge">${ev.genres.join(', ')}</span>
        <button ${applied ? "disabled" : ""} onclick="applyToEvent(${ev.id})">
          ${applied ? "Заявка подана" : "Подать заявку"}
        </button>
      </div>`;
    }).join('');
    document.getElementById('eventsList').innerHTML = eventsHTML;

    // Прогресс
    document.getElementById('userProgress').textContent =
      (user.participation && user.participation.length)
      ? `Вы подали заявки на ${user.participation.length} мероприятий.`
      : "Вы ещё не подавали заявки на мероприятия.";
    // Следующие шаги
    const steps = [
      "Подавайте заявки на новые мероприятия",
      "Посетите мастер-классы",
      "Получите обратную связь от экспертов",
      "Растите свой уровень — переходите на следующий!"
    ];
    document.getElementById('nextSteps').innerHTML = steps.map(s=>`<li>${s}</li>`).join('');
  });
  // Глобальная функция для кнопок
  window.applyToEvent = function(id) {
    const user = JSON.parse(localStorage.getItem('nw_user'));
    user.participation = user.participation || [];
    if (!user.participation.includes(id)) user.participation.push(id);
    localStorage.setItem('nw_user', JSON.stringify(user));
    location.reload();
  }
}

// --- Профиль: история участия и рекомендации ---
if (document.getElementById('profileSection')) {
  document.addEventListener('DOMContentLoaded', ()=> {
    const user = JSON.parse(localStorage.getItem('nw_user'));
    document.getElementById('profileSection').innerHTML = `
      <h2>${user.name}</h2>
      <div>Email: ${user.email}</div>
      <div>Уровень: ${user.level === 'novice' ? 'Новичок' : user.level === 'intermediate' ? 'Любитель' : 'Профессионал'}</div>
      <div>Направление: ${user.genre}</div>
    `;
    // История участия
    const his = user.participation ? user.participation.map(id => {
      const ev = allEvents.find(e=>e.id===id);
      return `<li>${ev ? ev.title : '(мероприятие удалено)'}</li>`;
    }).join('') : '';
    document.getElementById('userHistory').innerHTML = `
      <h3>История участия</h3>
      <ul>${his || '<li>Нет участия</li>'}</ul>`;
    // Дальнейшие шаги
    document.getElementById('profileNext').innerHTML = `
      <h3>Рекомендуем для развития:</h3>
      <ul>
        <li>Выберите новое мероприятие на главной</li>
        <li>Получите сертификат участника</li>
        <li>Рассмотрите индивидуальные занятия с ментором</li>
      </ul>`;
  });
}