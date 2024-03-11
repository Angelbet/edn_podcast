import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// ? STYLES
import style from '@/styles/Home.module.scss'

// ? FONTS
import { black, bold, medium, light } from '@/fonts/fonts'

// ? GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function HeroContentHome() {

    const imageReveal = useRef(null);
    const image_textReveal = useRef(null);
    const contentReveral = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.add(() => {
            if (imageReveal.current) {
                gsap.fromTo(
                    imageReveal.current,
                    { y: '-100px', opacity: 0, duration: 1, },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        delay: .7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: imageReveal.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        },);

        tl.add(() => {
            if (image_textReveal.current) {
                gsap.fromTo(
                    image_textReveal.current,
                    { x: '-100px', opacity: 0, duration: 1, },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        delay: .7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: image_textReveal.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        },);

        tl.add(() => {
            if (contentReveral.current) {
                gsap.fromTo(
                    contentReveral.current,
                    { x: '100px', opacity: 0, duration: 1, },
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

    }, []);

    return (
        <section className={style.section_home_about}>
            <div className={style.home_about_gradient_top} />
            <div className={style.div_block}>
                <div className={style.page_padding}>
                    <div className={style.container_xlarge}>
                        <div className={`${style.margin_bottom} ${style.margin_medium}`}>
                            <div className={style.home_about_lynn_grid}>
                                <Image
                                    src="https://res.cloudinary.com/drg26w50h/image/upload/v1710116581/edn/images/end.webp"
                                    width={176}
                                    height={176}
                                    alt="Escuela de Nada"
                                    className={style.border_radius}
                                    ref={imageReveal}
                                />
                                <div ref={image_textReveal}>
                                    <div className={`${style.margin_bottom} ${style.margin_tiny}`}>
                                        <h2 className={`${style.heading_h4} ${style.text_uppercase} ${bold.className}`}>Un podcast.</h2>
                                    </div>
                                    <div className={`${style.text_meta} ${style.text_color_muted} ${medium.className}`}>
                                        Patreon por tan solo  <strong>$6</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 ref={contentReveral} className={`${style.text_size_huge} ${light.className}`}>

                            Episodios nuevos todos los miércoles y domingos disponibles también en Spotify, iTunes y Google Podcast.
                            <span className={`${style.text_outline} ${medium.className}`}>Explorar ↓</span>{" "}
                        </h3>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HeroContentHome