document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-button');
    const iconContainer = menuBtn.querySelector('.icon');
    const modalMenu = document.querySelector('.modal');
    const menuItem = document.querySelectorAll('.menu-list-item');
    const header = document.querySelector('.header');
  
    let isMenuOpen = false;
  
    const burgerIcon = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_6_592)">
    <path d="M5.33301 8H26.6663" stroke="#00D9FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5.33301 16H26.6663" stroke="#00D9FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5.33301 24H26.6663" stroke="#00D9FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_6_592">
      <rect width="32" height="32" fill="white" />
    </clipPath>
  </defs>
</svg>
    `;
  
    const crossIcon = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_6_560)">
    <path d="M24 8L8 24" stroke="#00D9FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8 8L24 24" stroke="#00D9FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_6_560">
      <rect width="32" height="32" fill="white" />
    </clipPath>
  </defs>
</svg>
    `;
  
    menuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      iconContainer.innerHTML = isMenuOpen ? crossIcon : burgerIcon;
      isMenuOpen ? openModal() : closeModal();
    });
  
    menuItem.forEach(item =>
      item.addEventListener('click', () => {
        closeModal();
        iconContainer.innerHTML = burgerIcon;
        isMenuOpen = false;
      })
    );
  
    window.addEventListener('scroll', blurHeader);
  
    function openModal() {
      modalMenu.style.display = 'block';
    }
  
    function closeModal() {
      modalMenu.style.display = 'none';
    }
  
    function blurHeader() {
      if (!header) return;
      if (window.scrollY > 60) {
        header.classList.add('header-scroll');
      } else {
        header.classList.remove('header-scroll');
      }
    }
  });