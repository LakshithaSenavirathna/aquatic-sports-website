// Function to scroll smoothly to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Add smooth scrolling to all navigation links that start with '#'
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Demo handler for the main contact form submission
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We\'ll get back to you soon. (This is a demo form)');
        this.reset(); // Optionally reset the form fields
    });
}

// Demo handler for the individual service booking buttons
document.querySelectorAll('.service-btn').forEach(button => {
    button.addEventListener('click', function() {
        const serviceCard = this.closest('.relative.z-10');
        const serviceName = serviceCard.querySelector('h3').textContent;
        
        // You could also grab the price here if needed
        // const price = serviceCard.querySelector('div[class*="text-"]').textContent;

        alert(`Great choice! To book "${serviceName}", please contact us via the form below or call us at +94 77 123 4567.`);
        
        // Optionally, scroll to the contact form and pre-fill the dropdown
        scrollToSection('contact');
        const serviceSelect = document.querySelector('select[class*="w-full"]');
        if (serviceSelect) {
            // Find the option that matches the service name
            for (let i = 0; i < serviceSelect.options.length; i++) {
                if (serviceSelect.options[i].text === serviceName) {
                    serviceSelect.selectedIndex = i;
                    break;
                }
            }
        }
    });
});
