const closeBtn = document.querySelector('.nav-close-btn')
const openBtn = document.querySelector('.nav-open-btn')
const navbar = document.querySelector('.navbar')



closeBtn.addEventListener('click', closeSidebar)
openBtn.addEventListener('click', () => {
  navbar.classList.add('active')
})

function closeSidebar() {
  navbar.classList.remove('active')
}

