const ScrollEvent = document.querySelectorAll('a[href^="#"]');
for (let i = 0;i < ScrollEvent.length;i++) {
    ScrollEvent[i].addEventListener('click',(e) => {
        e.preventDefault();
        let link = ScrollEvent[i].getAttribute('href');
        
        let Element = document.getElementById(link.replace('#',''));

        const element_here = Element.getBoundingClientRect().top;

        const height = window.pageYOffset;

        const top = element_here - height;

        window.scrollTo({
            top: top,
            behavior: 'smooth',
        });
    });
}

