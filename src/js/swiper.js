import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

let availableSwiper = null;

function updatePagination(swiper) {
  const bullets = swiper.pagination.bullets;

  bullets.forEach((bullet) => {
    bullet.classList.remove(
      'bullet-large',
      'bullet-medium',
      'bullet-small'
    );
  });

  const active = swiper.realIndex;
  const total = bullets.length;

  bullets[active]?.classList.add('bullet-large');
  bullets[(active + 1) % total]?.classList.add('bullet-medium');
  bullets[(active + 2) % total]?.classList.add('bullet-small');
}

function initAvailableSwiper() {
  const isDesktop = window.innerWidth >= 1440;

  if (isDesktop) {
    if (availableSwiper) {
      availableSwiper.destroy(true, true);
      availableSwiper = null;
    }
    return;
  }

  if (availableSwiper) return;

  availableSwiper = new Swiper('.available-swiper', {
    modules: [Pagination],

    slidesPerView: 1,
    spaceBetween: 16,
    speed: 600,

    pagination: {
      el: '.available-pagination',
      clickable: true,
    },

    on: {
      init(swiper) {
        updatePagination(swiper);
      },

      slideChange(swiper) {
        updatePagination(swiper);
      },
    },
  });
}

initAvailableSwiper();

window.addEventListener('resize', initAvailableSwiper);