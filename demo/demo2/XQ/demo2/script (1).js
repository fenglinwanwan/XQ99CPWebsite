/* ===== 星有千千杰 — 星邱CP安利站 JS ===== */

// ===== 星空粒子系统 =====
(function initStarfield() {
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');
  let stars = [];
  let shootingStars = [];
  const STAR_COUNT = 200;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createStars() {
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.3 + 0.05,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        // 银河紫色调
        color: Math.random() > 0.7
          ? `rgba(136, 136, 208, ${Math.random() * 0.6 + 0.2})`
          : Math.random() > 0.5
            ? `rgba(204, 209, 247, ${Math.random() * 0.5 + 0.2})`
            : `rgba(233, 232, 240, ${Math.random() * 0.4 + 0.3})`
      });
    }
  }

  function createShootingStar() {
    if (Math.random() > 0.003) return;
    shootingStars.push({
      x: Math.random() * canvas.width,
      y: 0,
      len: Math.random() * 80 + 40,
      speed: Math.random() * 8 + 4,
      alpha: 1,
      angle: Math.PI / 4 + Math.random() * 0.3
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 绘制星星
    stars.forEach(s => {
      s.twinklePhase += s.twinkleSpeed;
      const twinkle = (Math.sin(s.twinklePhase) + 1) / 2;
      const alpha = s.alpha * (0.5 + twinkle * 0.5);

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.globalAlpha = alpha;
      ctx.fill();

      // 光晕
      if (s.r > 1) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 3, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 3);
        gradient.addColorStop(0, 'rgba(136, 136, 208, 0.15)');
        gradient.addColorStop(1, 'rgba(136, 136, 208, 0)');
        ctx.fillStyle = gradient;
        ctx.globalAlpha = alpha * 0.5;
        ctx.fill();
      }

      // 缓慢漂移
      s.y += s.speed * 0.1;
      if (s.y > canvas.height + 5) {
        s.y = -5;
        s.x = Math.random() * canvas.width;
      }
    });

    // 流星
    createShootingStar();
    shootingStars = shootingStars.filter(ss => {
      ss.x += Math.cos(ss.angle) * ss.speed;
      ss.y += Math.sin(ss.angle) * ss.speed;
      ss.alpha -= 0.015;

      ctx.globalAlpha = ss.alpha;
      ctx.strokeStyle = 'rgba(204, 209, 247, 0.8)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(ss.x, ss.y);
      ctx.lineTo(
        ss.x - Math.cos(ss.angle) * ss.len,
        ss.y - Math.sin(ss.angle) * ss.len
      );
      ctx.stroke();

      // 流星头部发光
      ctx.beginPath();
      ctx.arc(ss.x, ss.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.globalAlpha = ss.alpha;
      ctx.fill();

      return ss.alpha > 0 && ss.x < canvas.width + 100 && ss.y < canvas.height + 100;
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  resize();
  createStars();
  draw();
  window.addEventListener('resize', () => {
    resize();
    createStars();
  });
})();

// ===== 导航栏滚动效果 =====
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  if (window.scrollY > 500) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== 移动端菜单 =====
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});

// ===== 对戒彩蛋 =====
const ringsEgg = document.getElementById('ringsEgg');
ringsEgg.addEventListener('click', () => {
  ringsEgg.classList.toggle('active');

  if (ringsEgg.classList.contains('active')) {
    // 放烟花效果
    createFireworks(
      ringsEgg.getBoundingClientRect().left + 30,
      ringsEgg.getBoundingClientRect().top + 30
    );
  }
});

function createFireworks(x, y) {
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: ${Math.random() > 0.5 ? '#e06070' : '#6080e0'};
      pointer-events: none;
      z-index: 1000;
    `;
    document.body.appendChild(particle);

    const angle = (Math.PI * 2 * i) / 20;
    const velocity = 50 + Math.random() * 80;
    const dx = Math.cos(angle) * velocity;
    const dy = Math.sin(angle) * velocity;

    particle.animate([
      { transform: 'translate(0, 0) scale(1)', opacity: 1 },
      { transform: `translate(${dx}px, ${dy}px) scale(0)`, opacity: 0 }
    ], {
      duration: 800 + Math.random() * 400,
      easing: 'cubic-bezier(0, 0.9, 0.3, 1)'
    }).onfinish = () => particle.remove();
  }
}

// ===== 滚动动画 (IntersectionObserver) =====
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// 观察时间轴条目
document.querySelectorAll('.tl-item').forEach(item => observer.observe(item));

// 观察音乐卡片
document.querySelectorAll('.music-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.1}s`;
  observer.observe(card);
});

// 观察关键词
document.querySelectorAll('.kw').forEach((kw, i) => {
  kw.style.transitionDelay = `${i * 0.1}s`;
  observer.observe(kw);
});

// ===== 数字递增动画 =====
function animateCounters() {
  document.querySelectorAll('.stat-num[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  });
}

// 当 stats 进入视口时触发
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const introStats = document.querySelector('.intro-stats');
if (introStats) statsObserver.observe(introStats);

// ===== 平滑锚点滚动（补偿导航栏高度）=====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== 页面加载完成动画 =====
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});
