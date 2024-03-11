import Link from 'next/link'
import { useEffect, useLayoutEffect, useRef } from 'react'

// ? STYLES
import style from '@/components/footerHome.module.scss'

// ? ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa0, faHippo } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faPatreon, faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css"; // estilos base

// ? FONTS
import { black, bold, light, medium, regular } from '@/fonts/fonts'

// ? GSAP
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

function FooterHome() {

    const logoReveral = useRef(null);
    const contentReveal = useRef(null);
    const socialReveral = useRef(null);
    const col_1Reveal = useRef(null);
    const col_2Reveal = useRef(null);
    const creditsReveal = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.add(() => {
            if (logoReveral.current) {
                gsap.fromTo(
                    logoReveral.current,
                    { y: '100px', opacity: 0, duration: 1, },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        delay: .7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: logoReveral.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        },);

        tl.add(() => {
            if (contentReveal.current) {
                gsap.fromTo(
                    contentReveal.current,
                    { y: '50px', opacity: 0, duration: .6, },
                    {
                        y: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: contentReveal.current,
                            start: 'top bottom',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 1);

        tl.add(() => {
            if (socialReveral.current) {
                gsap.fromTo(
                    socialReveral.current,
                    { x: '100px', opacity: 0, duration: 1, },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        delay: .7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: socialReveral.current,
                            start: 'top bottom',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 1);

        tl.add(() => {
            if (col_1Reveal.current) {
                gsap.fromTo(
                    col_1Reveal.current,
                    { x: '-50px', opacity: 0, duration: .6, },
                    {
                        x: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: col_1Reveal.current,
                            start: 'top bottom',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 1);

        tl.add(() => {
            if (col_2Reveal.current) {
                gsap.fromTo(
                    col_2Reveal.current,
                    { x: '-50px', opacity: 0, duration: .6, },
                    {
                        x: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: col_2Reveal.current,
                            start: 'top bottom',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);

        // ! =====> | Content 3 Reveal | <=====
        tl.add(() => {
            if (creditsReveal.current) {
                gsap.fromTo(
                    creditsReveal.current,
                    { y: '50px', opacity: 0, duration: .6, },
                    {
                        y: '0',
                        opacity: 1,
                        duration: .6,
                        delay: .8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: creditsReveal.current,
                            start: 'top bottom',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 3);

    }, []);
    
    return (
        <footer className={style.footer_wrapper}>
            <div className={`${style.footer_top} ${style.pd_0px}`}>
                <div className={`${style.container_default} ${style.w_container}`}>
                    <div className={`${style.w_layout_grid} ${style.grid_footer_3_columns___footer_v1}`}>
                        <div className={`${style.footer_right_content_wrapper}`}>
                            <Link href="/" className={`${style.footer_logo_wrapper} ${style.w_inline_block}`}>
                                <Image
                                    src="https://res.cloudinary.com/drg26w50h/image/upload/v1710109787/edn/images/edn-logo_flcqeg.webp"
                                    alt="Escuela de Nada"
                                    width={388}
                                    height={135}
                                    ref={logoReveral}
                                    className={style.footer_logo}
                                />
                            </Link>
                            <p ref={contentReveal} className={`${style.mg_bottom_40px} ${style.mg_bottom_24px_tablet} ${regular.className}`}>
                                Es un podcast absurdo sin ley, que involuntariamente
                                enseñamos y aprendemos a través de la comedia.
                            </p>
                            <div ref={socialReveral} className={style.social_media_flex_top}>
                                <a
                                    href="https://www.instagram.com/escueladenada/"
                                    target="_blank"
                                    className={`${style.social_icon_link} ${style.w_inline_block}`}
                                >
                                    <div className={style.social_icon_font}>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </div>
                                </a>
                                <a
                                    href="https://open.spotify.com/show/4xOM98A8Es30eGevw6tYwe"
                                    target="_blank"
                                    className={`${style.social_icon_link} ${style.w_inline_block}`}
                                >
                                    <div className={style.social_icon_font}>
                                        <FontAwesomeIcon icon={faSpotify} />
                                    </div>
                                </a>
                                <a
                                    href="https://www.youtube.com/channel/UCZbq1qvbQzxDGUyuoPnF4LQ"
                                    target="_blank"
                                    className={`${style.social_icon_link} ${style.w_inline_block}`}
                                >
                                    <div className={style.social_icon_font}>
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </div>
                                </a>
                                <a
                                    href="https://www.patreon.com/escueladenada"
                                    target="_blank"
                                    className={`${style.social_icon_link} ${style.w_inline_block}`}
                                >
                                    <div className={style.social_icon_font}>
                                        <FontAwesomeIcon icon={faPatreon} />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div
                            id={style["w-node-_6f60a367-9399-9260-7775-bc890ce11784-91dd5701"]}
                            className={`${style.divider_vertical} ${style.horizontal_tablet}`}
                        />
                        <div
                            id={style["w-node-_6f60a367-9399-9260-7775-bc890ce11785-91dd5701"]}
                            className={style.menu_main_wrapper}
                        >
                            <div ref={col_1Reveal} className={style.menu_wrapper}>
                                <div className={style.mg_bottom_32px}>
                                    <div className={style.title_wrapper}>
                                        <div className={`${style.text_300} ${style.bold} ${style.footer_title} ${light.className}`}>
                                            Páginas Principales
                                        </div>
                                        <div className={`${style.title_line} ${style.footer}`} />
                                    </div>
                                </div>
                                <div className={style.nav_content}>
                                    <ul className={`${style.nav_menu_list_wrapper} ${light.className}`}>
                                        <li className={style.nav_menu_list_item}>
                                            <Link href="/" className={style.nav_link}>
                                                Inicio
                                            </Link>
                                        </li>
                                        <li className={style.nav_menu_list_item}>
                                            <a href="https://linktr.ee/escueladenada" target='_blank' className={style.nav_link}>
                                                Linktree
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className={`${style.nav_menu_list_wrapper} ${light.className}`}>

                                        <li className={style.nav_menu_list_item}>
                                            <a
                                                href="https://www.patreon.com/escueladenada"
                                                target="_blank"
                                                className={`${style.nav_link} ${style.special}`}
                                            >
                                                Pantreon
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div ref={col_2Reveal} className={style.menu_wrapper} >
                                <div className={style.mg_bottom_32px}>
                                    <div className={style.title_wrapper}>
                                        <div className={`${style.text_300} ${style.bold} ${style.footer_title} ${light.className}`}>
                                            Páginas útiles
                                        </div>
                                        <div className={`${style.title_line} ${style.footer}`} />
                                    </div>
                                </div>
                                <div className={style.nav_content}>
                                    <ul className={`${style.nav_menu_list_wrapper} ${light.className}`}>
                                        <li className={style.nav_menu_list_item}>
                                            <a href="https://represent.com/store/escueladenada" className={style.nav_link}>
                                                Ropita
                                            </a>
                                        </li>
                                        <li className={style.nav_menu_list_item}>
                                            <a href="https://open.spotify.com/show/4xOM98A8Es30eGevw6tYwe" className={style.nav_link}>
                                                Spotify
                                            </a>
                                        </li>
                                        <li className={style.nav_menu_list_item}>
                                            <a
                                                href="https://www.youtube.com/channel/UCZbq1qvbQzxDGUyuoPnF4LQ"
                                                className={style.nav_link}
                                            >
                                                Youtube
                                            </a>
                                        </li>

                                        <li className={style.nav_menu_list_item}>
                                            <a href="https://www.instagram.com/escueladenada/" className={style.nav_link}>
                                                Instagram
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className={`${style.nav_menu_list_wrapper} ${light.className}`}>
                                        <li className={style.nav_menu_list_item}>
                                            <a href="https://twitter.com/escueladenada?lang=es" className={style.nav_link}>
                                                Twitter
                                            </a>
                                        </li>
                                        <li className={style.nav_menu_list_item}>
                                            <a href="https://www.facebook.com/escueladenada/" className={style.nav_link}>
                                                Facebook
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.footer_bottom}>
                <div className={`${style.container_default} ${style.w_container}`}>
                    <p ref={creditsReveal} className={`${style.mg_bottom_0} ${light.className}`}>
                        Copyright © {new Date().getFullYear()} EDN Podcast | Designed by{" "}
                        <a
                            href="https://angelbev.vercel.app/"
                            target="_blank"
                        >
                            <strong>Angeldev</strong>
                        </a>{" "}
                    </p>
                </div>
            </div>
        </footer>

    )
}

export default FooterHome