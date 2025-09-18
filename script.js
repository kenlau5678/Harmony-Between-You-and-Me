const carousel = document.querySelector('.featured-carousel');
const items = document.querySelectorAll('.featured-item');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let currentIndex = 0;
const totalItems = items.length;

// 切换到指定索引
function showSlide(index) {
  if (index < 0) index = totalItems - 1;
  if (index >= totalItems) index = 0;
  currentIndex = index;
  const offset = -currentIndex * 100; // 每次移动100%
  carousel.style.transform = `translateX(${offset}%)`;
}

// 按钮控制
leftBtn.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

rightBtn.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

// 自动轮播
setInterval(() => {
  showSlide(currentIndex + 1);
}, 3000); // 每3秒切换
