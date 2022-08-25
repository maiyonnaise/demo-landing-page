const closeBtn = document.querySelector('.nav-close-btn')
const openBtn = document.querySelector('.nav-open-btn')
const navbar = document.querySelector('.navbar')
const header = document.querySelector('.header')
const backBtn = document.querySelector('#back-btn')
const forwardBtn = document.querySelector('#forward-btn')
const clientPhotoContainer = document.querySelector('.client-photo-container')

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

backBtn.onclick = () => {
  console.log('back')
  clientPhotoContainer.scrollLeft -= 35

}
forwardBtn.onclick = () => {
  clientPhotoContainer.scrollLeft += 35
}