import Image from 'next/image'
import { useEffect, useLayoutEffect, useRef } from 'react'
import Link from 'next/link'

// ? IMAGES
import Chris from '@/public/Chris.png'
import Leo from '@/public/Leo.png'
import Nacho from '@/public/Nacho.png'

// ? STYLES
import style from '@/styles/Home.module.scss'

// ? FONTS
import { black, bold, medium, light } from '@/fonts/fonts'

// ? GSAP
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function CharactersHome() {

    const leoReveral = useRef(null);
    const text_1_leoReveral = useRef(null);
    const text_2_leoReveral = useRef(null);
    const text_1_chrisReveral = useRef(null);
    const chrisReveral = useRef(null);
    const nachoReveral = useRef(null);
    const nacho2Reveral = useRef(null);
    const text_1_nachoReveral = useRef(null);
    const text_2_nachoReveral = useRef(null);
    const text_3_nachoReveral = useRef(null);
    const contentReveral = useRef(null);
    const buttonReveal = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.add(() => {
            const iamge = leoReveral.current;
            if (iamge) {
                gsap.to(iamge, {
                    width: "100%",
                    duration: 1,
                    ease: "power2.inOut",
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
            const iamge = chrisReveral.current;
            if (iamge) {
                gsap.to(iamge, {
                    width: "100%",
                    duration: 1,
                    ease: "power2.inOut",
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
            const iamge = nachoReveral.current;
            if (iamge) {
                gsap.to(iamge, {
                    width: "100%",
                    duration: 1,
                    ease: "power2.inOut",
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
            const iamge = nacho2Reveral.current;
            if (iamge) {
                gsap.to(iamge, {
                    width: "100%",
                    duration: 1,
                    ease: "power2.inOut",
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
            if (text_1_leoReveral.current) {
                gsap.fromTo(
                    text_1_leoReveral.current,
                    { x: '-50px', opacity: 0, duration: 1, },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        delay: .7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: text_1_leoReveral.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 1);
        tl.add(() => {
            if (text_2_leoReveral.current) {
                gsap.fromTo(
                    text_2_leoReveral.current,
                    { x: '-50px', opacity: 0, duration: 1, },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        delay: .7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: text_2_leoReveral.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 1);
        tl.add(() => {
            if (text_1_chrisReveral.current) {
                gsap.fromTo(
                    text_1_chrisReveral.current,
                    { x: '50px', opacity: 0, duration: 1, },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        delay: .7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: text_1_chrisReveral.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 1);
        tl.add(() => {
            if (text_1_nachoReveral.current) {
                gsap.fromTo(
                    text_1_nachoReveral.current,
                    { y: '-50px', opacity: 0, duration: 1, },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        delay: .7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: text_1_nachoReveral.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 1);
        tl.add(() => {
            if (text_2_nachoReveral.current) {
                gsap.fromTo(
                    text_2_nachoReveral.current,
                    { y: '50px', opacity: 0, duration: 1, },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        delay: .7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: text_2_nachoReveral.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 1);
        tl.add(() => {
            if (text_3_nachoReveral.current) {
                gsap.fromTo(
                    text_3_nachoReveral.current,
                    { y: '50px', opacity: 0, duration: 1, },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        delay: .7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: text_3_nachoReveral.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 1);

        tl.add(() => {
            if (contentReveral.current) {
                gsap.fromTo(
                    contentReveral.current,
                    { y: '-50px', opacity: 0, duration: 1, },
                    {
                        y: 0,
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
        }, 1);

        tl.add(() => {
            if (buttonReveal.current) {
                gsap.fromTo(
                    buttonReveal.current,
                    { opacity: 0, duration: 1, },
                    {
                        opacity: 1,
                        duration: 1,
                        delay: .7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: buttonReveal.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        },);



    }, []);

    return (
        <div className={style.framer_1cnz6cl}>
            <div className={style.framer_iexeth}>

                <div className={style.framer_4hg74o}>

                    <div className={style.framer_1x3nvsb}>

                        {/* //! |||||||||||||||||| LEO |||||||||||||||||| */}
                        <div className={style.framer_ofhgbl}>

                            <div className={style.framer_1ovrlpx}>
                                <div className={style.framer_p98od}>
                                    <h1 ref={text_1_leoReveral} className={`${style.framer_text} ${style.framer_styles_preset_19b9xal} ${bold.className} ${style.display_yellow}`}>
                                        Leo
                                    </h1>
                                </div>

                                <div className={style.framer_1pbrtzq}>
                                    <Image
                                        src={Leo}
                                        alt="Leo Rojas"
                                        className={style.person}
                                        ref={leoReveral}
                                    />
                                </div>
                            </div>

                            <div className={style.framer_nm1a1j}>
                                <h1 ref={text_2_leoReveral} className={`${style.framer_text} ${style.framer_styles_preset_19b9xal} ${bold.className}`}>
                                    Rojas
                                </h1>
                            </div>

                        </div>

                        {/* //! |||||||||||||||||| CHIRS |||||||||||||||||| */}
                        <div className={style.framer_ipr8cr}>

                            <div className={style.framer_17oz12f}>
                                <h1 ref={text_1_chrisReveral} className={`${style.framer_text} ${style.framer_styles_preset_19b9xal} ${bold.className}`}>
                                    <span className={style.display_yellow}>Chris</span> Andrade&nbsp;
                                </h1>
                            </div>

                            <div className={style.framer_1s6fiqv}>

                                <div className={style.framer_d41dtl}>
                                    <Image
                                        src={Chris}
                                        alt="Chris Andrade"
                                        className={style.person}
                                        ref={chrisReveral}
                                    />
                                </div>

                                <div className={style.framer_1j13o6e}>
                                    <h1 className={`${style.framer_text} ${style.framer_styles_preset_19b9xal} ${bold.className}`}>
                                        &nbsp;
                                    </h1>
                                </div>

                            </div>

                        </div>

                        {/* //! |||||||||||||||||| NACHO |||||||||||||||||| */}
                        <div className={`${style.framer_ofhgbl} ${style.nacho_laptop}`}>

                            <div className={style.framer_1ovrlpx}>
                                <div className={style.framer_p98od}>
                                    <h1 className={`${style.framer_text} ${style.framer_styles_preset_19b9xal} ${bold.className}`}>
                                        &nbsp;
                                    </h1>
                                </div>

                                <div className={style.framer_1pbrtzq}>
                                    <Image
                                        src={Nacho}
                                        alt="Nacho Redondo"
                                        className={style.person}
                                        ref={nachoReveral}
                                    />
                                </div>
                            </div>

                            <div className={style.framer_nm1a1j}>
                                <h1 ref={text_1_nachoReveral} className={`${style.framer_text} ${style.framer_styles_preset_19b9xal} ${bold.className}`}>
                                    <span className={style.display_yellow}>Nacho</span> Redondo
                                </h1>
                            </div>

                        </div>

                        <div className={`${style.framer_ofhgbl} ${style.nacho_movil}`}>

                            <div className={style.framer_1ovrlpx}>
                                <div className={style.framer_p98od}>
                                    <h1 ref={text_2_nachoReveral} className={`${style.framer_text} ${style.framer_styles_preset_19b9xal} ${bold.className} ${style.display_yellow}`}>
                                        Nacho
                                    </h1>
                                </div>

                                <div className={style.framer_1pbrtzq}>
                                    <Image
                                        src={Nacho}
                                        alt="Nacho Redondo"
                                        className={style.person}
                                        ref={nacho2Reveral}
                                    />
                                </div>
                            </div>

                            <div className={style.framer_nm1a1j}>
                                <h1 ref={text_3_nachoReveral} className={`${style.framer_text} ${style.framer_styles_preset_19b9xal} ${bold.className}`}>
                                    Redondo
                                </h1>
                            </div>

                        </div>

                    </div>

                    <div className={style.framer_12ytnr3}>
                        <h5 ref={contentReveral} className={`${style.framer_text} ${style.framer_styles_preset_11eajrx} ${light.className}`}>
                            Podcast de comedia improvisada presentado por Leo Rojas, Chris Andrade y Nacho Redondo.
                            Y si quieres un episodio exclusivo los viernes y contenido extra
                            (Lado B EDN & Friends, Scringeshot, Examen Oral y Recomendaciones)
                            los martes, suscríbete a nuestro Patreon por tan solo $6.
                        </h5>
                    </div>

                </div>

                <div className={style.framer_1ffg2r1}>
                    <div className={style.framer_n1488x_container}>
                        <Link
                            href="https://www.patreon.com/escueladenada"
                            target='_blank'
                            className={`${style.framer_1ig4pwk} ${style.framer_dinwst}`}
                            ref={buttonReveal}
                        >
                            <div className={style.framer_13df5d9}>
                                <p className={`${style.framer_text} ${style.framer_styles_preset_1vgciuk} ${bold.className}`}>
                                    Pantreon
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CharactersHome