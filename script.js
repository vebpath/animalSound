let cards = document.querySelectorAll('.card')


cards.forEach(card=>{
  card.addEventListener('click',()=>PlaySound(card))
})
  

function PlaySound(card){
  let animalSound = document.getElementById(card.dataset.sound)
  animalSound.play()
  animalSound.currentTime= 0
  card.classList.add('active')

  animalSound.addEventListener('ended',()=>{
    card.classList.remove("active")
  })

}