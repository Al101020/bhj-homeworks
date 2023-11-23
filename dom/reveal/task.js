const reveal = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', function() {
  for (let i = 0; i < reveal.length; i++ ) {
  let {top, bottom} = reveal[i].getBoundingClientRect();
  
  if (top > 0 && bottom < window.innerHeight) {
      
      reveal[i].classList.toggle('reveal_active');
      return;
      };

      reveal[i].classList.remove('reveal_active');
  }
});