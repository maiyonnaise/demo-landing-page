const closeBtn = document.querySelector('.nav-close-btn')
const openBtn = document.querySelector('.nav-open-btn')
const navbar = document.querySelector('.navbar')
const header = document.querySelector('.header')
const forwardBtns = document.getElementsByClassName('forward-btn')

const backBtns = document.getElementsByClassName('back-btn')


closeBtn.addEventListener('click', closeSidebar)
openBtn.addEventListener('click', () => {
  navbar.classList.add('active')
})

function closeSidebar() {
  navbar.classList.remove('active')
}

window.onscroll = () => {


  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.style.backgroundColor = 'white'
  } else {
    header.style.backgroundColor = 'transparent'
  }
}

window.addEventListener('resize', () => {
  // if (window.innerWidth >= 1024) {
  //   console.log(forwardBtns)
  // }
})