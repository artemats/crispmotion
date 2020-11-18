import { TweenLite, Power3 } from 'gsap';

let moving = true;

export const mouseFollowLink = () => {

    const boxes = document.querySelectorAll('.circle-box');

    for(let i = 0; i < boxes.length; i++){

        const link = boxes[i].querySelector('.circle-box-link');
        const linkWidth = link.clientWidth;
        const linkHeight = link.clientHeight;

        boxes[i].addEventListener('mousemove', function (event) {
            if(moving) {
                TweenLite.to(link, 1.5, {
                    left: event.offsetX - ( linkWidth / 2 ),
                    top: event.offsetY - ( linkHeight / 2 ),
                    ease: Power3.easeOut
                });
            }
        });
    }
};

export const disableMoving = () => {
    moving = false;
};

export const enableMoving = () => {
    moving = true;
};