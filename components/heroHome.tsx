import Image from 'next/image'
import { useEffect, useLayoutEffect, useRef } from 'react'

// ? IMAGES
import heroHome_1 from '@/public/heroHome_1.jpg'
import heroHome_2 from '@/public/heroHome_2.png'
import end_rotation from '@/public/end_rotation.png'

// ? STYLES
import style from '@/styles/Home.module.scss'

// ? FONTS
import { black, bold } from '@/fonts/fonts'

// ? GSAP
import gsap from 'gsap';
import { Linear } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function HeroHome() {

    const contentReveral = useRef(null);
    const ednReveral = useRef(null);
    const image_1Reveal = useRef(null);
    const image_2Reveal = useRef(null);
    const circleReveal = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.add(() => {
            if (contentReveral.current) {
                gsap.fromTo(
                    contentReveral.current,
                    { x: '-100px', opacity: 0, duration: 1, },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        delay: .7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: contentReveral.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        },);

        tl.add(() => {
            if (ednReveral.current) {
                gsap.fromTo(
                    ednReveral.current,
                    { y: '-50px', opacity: 0, duration: 1, },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        delay: .7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: ednReveral.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);

        tl.add(() => {
            const iamge = image_1Reveal.current;
            if (iamge) {
                gsap.to(iamge, {
                    height: "100%",
                    duration: 1,
                    ease: "power1.inOut",
                    delay: 0.1,
                    scrollTrigger: {
                        trigger: iamge,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        scrub: false, // ajusta la animación a la velocidad de desplazamiento
                    },
                });
            }
        },);

        tl.add(() => {
            const iamge2 = image_2Reveal.current;
            if (iamge2) {
                gsap.to(iamge2, {
                    width: "100%",
                    duration: 1,
                    ease: "power1.inOut",
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: iamge2,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        scrub: false, // ajusta la animación a la velocidad de desplazamiento
                    },
                });
            }
        },);

        tl.add(() => {
            if (circleReveal.current) {
                gsap.fromTo(
                    circleReveal.current,
                    { opacity: 0, duration: 1, },
                    {
                        opacity: 1,
                        duration: 1,
                        delay: .7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: circleReveal.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        },);



    }, []);

    const rotationRef = useRef(null);

    useEffect(() => {
        const rotationElement = rotationRef.current;

        const duration = 6; // Controla la duración de la animación aquí

        gsap.to(rotationElement, {
            ease: Linear.easeNone,
            repeat: -1,
            rotation: "+=360",
            duration: duration,
        });

    }, []);

    return (
        <div className={`${style.container} ${style.w_container}`}>
            <div className={`${style.w_layout_grid} ${style.grid}`}>
                <div
                    id={style["w-node-_7bad44ce-1d0e-4a18-f463-b350ca5b71a6-29efbc5c"]}
                    className={style.space_large}
                />
                <div
                    id={style["w-node-a96641a2-b67d-2055-b209-292511de1562-29efbc5c"]}
                    className={style.tag_display}
                    ref={circleReveal}
                >
                    <div className={style.inner_tag}>
                        <Image
                            src={end_rotation}
                            alt="Edn circulo"
                            width={385}
                            height={388}
                            className={style.image}
                            ref={rotationRef}
                        />
                    </div>
                </div>
                <div
                    id={style["w-node-b62751a2-f853-6015-5e9f-5af7fbc74385-29efbc5c"]}
                    className={style.hero_image_small}
                >
                    <Image
                        src={heroHome_1}
                        alt="Escuela de nada integrantes"
                        className={`${style.cover_image} ${style.ef}`}
                        ref={image_1Reveal}
                    />
                </div>
                <div
                    id={style["w-node-_9e66a479-9bc0-04e9-3d3f-420689c419e3-29efbc5c"]}
                    className={style.hero_image_large}
                    ref={image_2Reveal}
                >
                    <Image
                        src={heroHome_2}
                        alt="Escuela de nada integrantes"
                        className={style.cover_image}
                    />
                </div>
                <div
                    id={style["w-node-fa5f3d0b-c605-7c0e-92c9-21243c27f98e-29efbc5c"]}
                    className={style.display_wrapper}
                    ref={contentReveral}
                >
                    <h1 className={`${style.h1_display} ${bold.className}`}>
                        ━&nbsp;&nbsp;Tu&nbsp;&nbsp; dosis&nbsp;&nbsp; semanal{" "}
                        <br />
                        de&nbsp;&nbsp; comedia &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span ref={ednReveral} className={style.display_yellow}>
                            <br />
                            Escuela&nbsp;&nbsp;
                            de&nbsp;&nbsp;&nbsp;
                            <span className={style.black_bg_text_span}>&nbsp;Nada&nbsp;</span>
                        </span>
                    </h1>
                </div>
                <div
                    id={style["w-node-_114abfbd-5a7a-b749-2b7b-22f30f452598-29efbc5c"]}
                    className={style.space_xxlarge}
                />
            </div>
        </div>
    )
}

export default HeroHome