document.getElementById('btn-show-skills').addEventListener('click', function() {
    // Toggle the display of the "skills" section to inline-block
    const skillsSection = document.getElementById('skills');
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        // skillsSection.style.display = 'inline-block';
    } else {
        skillsSection.style.display = 'none';
    }
});


const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

function showSlide(slideId) {
    testimonials.forEach((testimonial) => {
        testimonial.style.display = 'none';
    });

    const currentSlide = document.getElementById(slideId);
    currentSlide.style.display = 'block';

    // Set the active dot
    dots.forEach((dot) => {
        dot.classList.remove('active1');
        if (dot.getAttribute('data-slide-id') === slideId) {
            dot.classList.add('active1');
        }
    });
}

function nextSlide() {
    const currentSlide = Array.from(testimonials).find((testimonial) => {
        return testimonial.style.display === 'block';
    });

    const currentIndex = Array.from(testimonials).indexOf(currentSlide);
    let nextIndex = currentIndex + 1;
    if (nextIndex === testimonials.length) {
        nextIndex = 0;
    }

    const nextSlide = testimonials[nextIndex];
    const nextSlideId = nextSlide.id;
    showSlide(nextSlideId);
}

// Automatically switch to the next slide every 3 seconds
setInterval(nextSlide, 3000);

// Manually switch to a slide when a dot is clicked
dots.forEach((dot) => {
    dot.addEventListener('click', () => {
        const slideId = dot.getAttribute('data-slide-id');
        showSlide(slideId);
    });
});

// Show the first slide initially
showSlide('slide1');


// Get the filter buttons and gallery items
const filters = document.querySelectorAll("#filters a");
const galleryItems = document.querySelectorAll("#gallery .item");

// Add click event listeners to filter buttons
filters.forEach((filter) => {
    filter.addEventListener("click", (event) => {
        event.preventDefault();

        // Remove the "selected" class from all filter buttons
        filters.forEach((f) => {
            f.classList.remove("selected");
        });

        // Add the "selected" class to the clicked filter button
        filter.classList.add("selected");

        const filterValue = filter.getAttribute("data-filter");

        // Show or hide gallery items based on the filter value
        galleryItems.forEach((item) => {
            const itemClass = item.getAttribute("class");

            if (filterValue === "*" || itemClass.includes(filterValue.slice(1))) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});



// Get all the progress bars
const progressBars = document.querySelectorAll('.progress-bar');

// Iterate through each progress bar and set the width based on data-value
progressBars.forEach((progressBar) => {
    const dataValue = progressBar.getAttribute('data-value');
    progressBar.style.width = dataValue;
});


// JavaScript to add and remove the 'scrolled' class when scrolling
window.addEventListener('scroll', function() {
    const header = document.getElementById('site-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



// // JavaScript to add and remove the 'active' class when clicking on navigation links
// const navLinks = document.querySelectorAll('#mainmenu li a');

// navLinks.forEach(link => {
//     link.addEventListener('click', function(event) {
//         // Remove the 'active' class from all links
//         navLinks.forEach(link => {
//             link.classList.remove('active');
//         });

//         // Add the 'active' class to the clicked link
//         this.classList.add('active');
//     });
// });


// JavaScript to add and remove the 'active' class when clicking on navigation links
const navLinks = document.querySelectorAll('#mainmenu li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Remove the 'active' class from all links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add the 'active' class to the clicked link
        this.classList.add('active');

        // Get the target section and the previous section
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const previousSection = targetSection.previousElementSibling;

        // Scroll to the end of the previous section
        const offset = previousSection.offsetTop + previousSection.clientHeight;
        window.scrollTo({
            top: offset,
            behavior: 'smooth',
        });
    });
});




// JavaScript to toggle the menu on button click
const menuBtn = document.getElementById('menu-btn');
const mainMenu = document.getElementById('mainmenu');

menuBtn.addEventListener('click', function() {
    if (mainMenu.style.display === 'block') {
        mainMenu.style.display = 'none';
        document.body.style.overflow = 'auto';
    } else {
        mainMenu.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
});


// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
getYear();










