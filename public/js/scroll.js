const ScrollEvent = document.querySelectorAll('a[href^="#"]');
for (let i = 0;i < ScrollEvent.length;i++) {
    ScrollEvent[i].addEventListener('click',(e) => {

        e.preventDefault();

        let link = ScrollEvent[i].getAttribute('href');
        
        let Element = document.getElementById(link.replace('#',''));

        // 要素の位置座標
        const element_here = Element.getBoundingClientRect().top;

        // 現時点の高さ
        const height = window.pageYOffset;

        // 要素の移動配置
        const top = element_here + height;

        window.scrollTo({
            top: top,
            behavior: 'smooth',
        });
    });
}

