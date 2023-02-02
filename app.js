
let orderNow = document.querySelector('.orderNow')
let success = document.querySelector('orderSuccess')
let ordered = document.querySelector('.livraison')

orderNow.addEventListener('click', (e) => {
  e.preventDefault();

  ordered.textContent = ('Votre commande a été prise en compte')
  ordered.classList.add('order')

})

let meeting = document.querySelector('.condiments')
let meetChef = document.querySelector('.meet')
let replace = document.querySelector('.replace')
let iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/_GuOjXYl5ew" title="YouTube video player" frameborder="0"; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'

meetChef.addEventListener('click', () => {
  replace.innerHTML = iframe
  console.log(replace)
})

let count = document.querySelector('.count')
let counter = document.querySelector('.counter')
let number = 5

counter.addEventListener('click', () => {
  number += 1
  count.innerHTML = number
})


let random = document.querySelector('.random')
let number1 = document.querySelector('.number1')
let number2 = document.querySelector('.number2')
let number3 = document.querySelector('.number3')

random.addEventListener('click', () => {
  number1.innerHTML = Math.ceil(Math.random() * ((99999 - 1) + 1))
})

random.addEventListener('click', () => {
  number2.innerHTML = Math.ceil(Math.random() * ((99999 - 1) + 1))
})

random.addEventListener('click', () => {
  number3.innerHTML = Math.ceil(Math.random() * ((99999 - 1) + 1))
})

let mail = document.querySelector('.writingMail')
let valider = document.querySelector('.subscribe')

valider.addEventListener('click', (e) => {

  e.preventDefault();

  if (!mail.value) {
    return ''
  } else {
    return mail.value = 'Merci EMAIL'
  }
})
    mail.style.color = '#6415ff'

let burger = document.querySelector('.burger')
let navbar2 = document.querySelector('.navbar2')

burger.addEventListener('click', () => {
  navbar2.classList.toggle('navbar2')
})