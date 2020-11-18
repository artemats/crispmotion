import gsap, { Power4 } from 'gsap';

export const photoParallax = () => {

    const photos = document.querySelectorAll('.person-photo img');

    for(let i = 0; i < photos.length; i++) {

        const photoTl = gsap.timeline({
            scrollTrigger: {
                trigger: photos[i],
                scroller: '#wrapper',
                scrub: false,
            }
        });

        photoTl
            .set(photos[i], {
                scale: 1.6,
                opacity: 0,
            })
            .fromTo(photos[i], {
                scale: 1.6,
                opacity: 0,
            }, {
                scale: 1,
                opacity: 1,
                duration: 4,
                ease: Power4.easeOut
            });

    }

};