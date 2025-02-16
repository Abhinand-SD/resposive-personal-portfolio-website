//togle

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{

    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            //active section for animation on scroll
            sec.classList.add('show-animate');
        }

        //if want to use Animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animate');
        }

    });

    //sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    //remove toggle and navbar when a link is clicked
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}


//form validation
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const popup = document.getElementById("errorPopup");
    const popupMessage = document.getElementById("popupMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission

        let isValid = true;
        let firstError = null; // Track the first error message

        // Get input values
        let fullName = document.getElementById("fullName");
        let email = document.getElementById("email");
        let mobile = document.getElementById("mobile");
        let subject = document.getElementById("subject");
        let message = document.getElementById("message");

        // Validation rules
        if (fullName.value.trim().length < 3) {
            isValid = false;
            firstError = firstError || "Full Name must be at least 3 characters.";
        }

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            isValid = false;
            firstError = firstError || "Enter a valid email address.";
        }

        let mobileRegex = /^[0-9]{10,15}$/;
        if (!mobileRegex.test(mobile.value.trim())) {
            isValid = false;
            firstError = firstError || "Enter a valid mobile number.";
        }

        if (!isNaN(subject.value.trim())) {
            isValid = false;
            firstError = firstError || "Email Subject cannot be only numbers.";
        }


        if (subject.value.trim().length < 3) {
            isValid = false;
            firstError = firstError || "Email Subject must be at least 3 characters.";
        }

        if (message.value.trim().length < 10) {
            isValid = false;
            firstError = firstError || "Message must be at least 10 characters.";
        }

        // Show popup if there is an error
        if (firstError) {
            popupMessage.textContent = firstError;
            popup.style.display = "block"; 
            setTimeout(() => {
                popup.style.display = "none"; 
            }, 3000);
        }

        // Submit form if valid
        if (isValid) {
            popupMessage.textContent = "Form submitted successfully!";
            popup.style.backgroundColor = "black"; 
            popup.style.color = "green"; 
            popup.style.display = "block";
        
            setTimeout(() => {
                popup.style.display = "none"; 
                form.submit();
                setTimeout(() => {
                    window.location.reload();
                },200)
            }, 3000);
        }
        
    });
});

