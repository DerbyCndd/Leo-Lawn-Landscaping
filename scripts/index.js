document.addEventListener('DOMContentLoaded', function () {
  const content =
    'We’ve been in business for over 20 years now. Not only do we pride ourselves on our quality of work, but also in attending to the specific needs of each individual client.'

  function typeWriter(element, text, speed) {
    let i = 0
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i)
        i++
        setTimeout(type, speed)
      } else {
        // Remove the border after the typing animation is complete
        element.style.borderRight = 'none'
      }
    }
    type()
  }

  typeWriter(document.querySelector('.content'), content, 100)
  setTimeout()
})
