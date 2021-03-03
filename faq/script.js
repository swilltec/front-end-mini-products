const  faqToggle = document.querySelectorAll('.faq-toggle')


faqToggle.forEach(btn => {
    btn.addEventListener('click', () => btn.parentNode.classList.toggle('active'))

})
