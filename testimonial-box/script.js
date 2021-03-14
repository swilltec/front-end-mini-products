const testimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: "Junyi Chu",
        position: "Marketing",
        photo: "https://randomuser.me/api/portraits/women/65.jpg",
        text: "Most people have never learned that one of the main aims in life is to enjoy it"
    },
    {
        name: "Marcus Aurelius",
        position: "Operations",
        photo: "https://randomuser.me/api/portraits/women/66.jpg",
        text: "Don’t downgrade your dream just to fit your reality. Be so good they can’t ignore you. "
    },
    {
        name: "	Gwenllian Troy",
        position: "Designer",
        photo: "https://randomuser.me/api/portraits/women/68.jpg",
        text: "It’s not about perfect. You are braver than you think, more talented than you know, and capable of more than you imagine. "
    },
]

let idx = 0

function updateTestimonial(){
    const { name, position, photo, text } = testimonials[idx] 
    
    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position
    idx++

    if (idx > testimonials.length -1 ){
        idx = 0
    }
}



setInterval(updateTestimonial, 10000);