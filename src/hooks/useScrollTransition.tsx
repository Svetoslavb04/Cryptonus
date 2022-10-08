import { RefObject, useEffect } from "react";

export const useScrollTransition =
    (elementRef: RefObject<HTMLElement>, visibleAfterPixels: number = 50) => {

        useEffect(() => {

            elementRef.current?.classList.add('on-scroll-transition');

            window.addEventListener('scroll', showOnScrollElement.bind(null, elementRef, visibleAfterPixels));


            return () => {

                window.removeEventListener('scroll', showOnScrollElement.bind(null, elementRef, visibleAfterPixels));

            }

        },);

        function showOnScrollElement(elementRef: RefObject<HTMLElement>, elementVisibleAfterPixels: number) {

            const windowHeight = window.innerHeight;

            const elementTop = elementRef.current?.getBoundingClientRect().top;

            if ((elementTop || Number.MAX_SAFE_INTEGER) < windowHeight - elementVisibleAfterPixels) {

                elementRef.current?.classList.add("show-on-scroll");
                elementRef.current?.classList.remove("hide-on-scroll");

            } else {

                elementRef.current?.classList.remove("show-on-scroll");
                elementRef.current?.classList.add("hide-on-scroll");

            }

        }
    }

