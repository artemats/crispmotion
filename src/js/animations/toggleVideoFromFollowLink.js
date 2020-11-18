import { TweenLite, Power4 } from 'gsap';
import {locoScroll} from "../smooth-scroll/smoothScroll";
import {disableMoving} from "./mouseFollowLink";

export const toggleVideoFromFollowLink = () => {

    const videoLinks = document.querySelectorAll('.circle-box-video');

    for(let i = 0; i < videoLinks.length; i++) {

        const poster = videoLinks[i].querySelector('.video-poster');

        videoLinks[i].addEventListener('click', function (link) {

            disableMoving();

            let topLoco = locoScroll.scroll.instance.scroll.y;

            let screen = {
                x: link.screenX,
                y: link.screenY,
            };
            let page = {
              x: link.pageX,
              y: link.pageY
            };
            let position = {
                x: link.x,
                y: link.y
            };
            let client = {
                x: link.clientX,
                y: link.clientY
            };

            console.log('screen - ', screen);
            console.log('page - ', page);
            console.log('position - ', position);
            console.log('client - ', client);
            console.log(topLoco);
            console.log(link);

            TweenLite.to(poster, 1,
                {
                    left: ( 0 - page.x ),
                    top: ( 0 - page.y ),
                    width: '100vw',
                    height: '100vh',
                    borderRadius: 0,
                    opacity: 1,
                    ease: Power4.easeOut,
                    onComplete: locoScroll.stop()
                });

        });

    }

};