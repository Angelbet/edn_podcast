import React, { useEffect, useRef } from 'react';

// ? GSAP
import gsap from 'gsap';

// ? STYLES
import style from '@/components/preloaderHome.module.scss'

// ? FONTS
import { black, bold, medium, light, regular } from '@/fonts/fonts'

function PreloaderHome() {

    const preloaderRef = useRef(null);

    useEffect(() => {
        const preloader = preloaderRef.current;

        const tl = gsap.timeline();
        tl.to(preloader, { duration: 5, y: 0, ease: 'power1.out' }) // Mantiene el preloader estático por 1 segundo
            .to(preloader, { duration: 1, y: '100%', ease: 'power1.out' }) // Desplaza el preloader hacia abajo en 2 segundos
            .set(preloader, { display: 'none' }); // Oculta el preloader

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div
            className={style.page_loading}
            ref={preloaderRef}
            style={{ display: "flex" }}
        >
            <div
                className={style.loading_overlay}
                style={{
                    transform:
                        "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d"
                }}
            />
        </div>

    )
}

export default PreloaderHome