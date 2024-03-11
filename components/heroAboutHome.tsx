import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';

// ? STYLES
import style from '@/styles/Home.module.scss'

// ? FONTS
import { black, bold, light, medium, regular } from '@/fonts/fonts'

// ? COMPONENTS
import HeroContentHome from './heroContentHome'

// ? GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function HeroAboutHome() {

    const ednReveral = useRef(null);
    const podcastReveral = useRef(null);
    const col_1Reveral = useRef(null);
    const col_2Reveral = useRef(null);
    const col_3Reveral = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.add(() => {
            if (ednReveral.current) {
                gsap.fromTo(
                    ednReveral.current,
                    { y: '-80px', opacity: 0, duration: 2, },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 2,
                        delay: 6,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: ednReveral.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2); // Retraso de 3 segundos antes de ejecutar la animación

        tl.add(() => {
            if (podcastReveral.current) {
                gsap.fromTo(
                    podcastReveral.current,
                    { x: '-50px', opacity: 0, duration: 2, },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 2,
                        delay: 6,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: podcastReveral.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 3);

        tl.add(() => {
            if (col_1Reveral.current) {
                gsap.fromTo(
                    col_1Reveral.current,
                    { y: '-80px', opacity: 0, duration: 2, },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 2,
                        delay: 6,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: col_1Reveral.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);
        tl.add(() => {
            if (col_2Reveral.current) {
                gsap.fromTo(
                    col_2Reveral.current,
                    { y: '80px', opacity: 0, duration: 2, },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 2,
                        delay: 6,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: col_2Reveral.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);
        tl.add(() => {
            if (col_3Reveral.current) {
                gsap.fromTo(
                    col_3Reveral.current,
                    { y: '-80px', opacity: 0, duration: 2, },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 2,
                        delay: 6,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: col_3Reveral.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);

    }, []);

    return (
        <>
            <section className={style.section_home_hero}>

                <div className={style.home_hero_heading_wrapper}>
                    <div className={style.page_padding}>
                        <div className={style.container_xxlarge}>
                            <div className={`${style.padding_top} ${style.padding_large}`}>
                                <div className={style.home_hero_heading_grid}>

                                    {/*  EDN */}
                                    <div ref={ednReveral} className={`${style.home_hero_heading_grid_inner} ${medium.className}`}>
                                        <div className={style.clip}>
                                            <div className={`${style.home_hero_heading} ${style.text_outline}`}>
                                                E
                                            </div>
                                        </div>
                                        <div className={style.clip}>
                                            <div className={`${style.home_hero_heading} ${style.text_outline}`}>
                                                D
                                            </div>
                                        </div>
                                        <div className={style.clip}>
                                            <div className={`${style.home_hero_heading} ${style.text_outline}`}>
                                                N
                                            </div>
                                        </div>
                                    </div>

                                    {/*  PODCAST */}
                                    <div ref={podcastReveral} className={`${style.home_hero_heading_grid_inner} ${light.className}`}>
                                        <div className={style.clip}>
                                            <div className={`${style.home_hero_heading} ${style.text_line_color}`}>
                                                P
                                            </div>
                                        </div>
                                        <div className={style.clip}>
                                            <div className={`${style.home_hero_heading} ${style.text_line_color}`}>
                                                O
                                            </div>
                                        </div>
                                        <div className={style.clip}>
                                            <div className={`${style.home_hero_heading} ${style.text_line_color}`}>
                                                D
                                            </div>
                                        </div>
                                        <div className={style.clip}>
                                            <div className={`${style.home_hero_heading} ${style.text_line_color}`}>
                                                C
                                            </div>
                                        </div>
                                        <div className={style.clip}>
                                            <div className={`${style.home_hero_heading} ${style.text_line_color}`}>
                                                A
                                            </div>
                                        </div>
                                        <div className={style.clip}>
                                            <div className={`${style.home_hero_heading} ${style.text_line_color}`}>
                                                S
                                            </div>
                                        </div>
                                        <div className={style.clip}>
                                            <div className={`${style.home_hero_heading} ${style.text_line_color}`}>
                                                T
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.home_hero}>

                    <div className={style.gradient_top} />
                    <div className={style.gradient_top} />
                    <div className={style.home_hero_inner}>
                        <div className={style.home_hero_grid}>

                            {/* COLUMN 1 */}
                            <div ref={col_1Reveral} className={`${style.home_hero_column}`}>
                                <div className={style.home_hero_video_wrapper}>
                                    <Image
                                        src="https://res.cloudinary.com/drg26w50h/image/upload/v1710105787/edn/images/video_image_1_arehef.webp"
                                        alt="Edn videos"
                                        width={800}
                                        height={761}
                                        className={style.home_hero_video}
                                    />
                                </div>
                                <div className={style.home_hero_video_wrapper}>
                                    <div className={`${style.home_hero_video} ${style.w_background_video} ${style.w_background_video_atom}`}>
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source
                                                src="https://res.cloudinary.com/drg26w50h/video/upload/v1710017949/edn/edn_video_1.mov"
                                            />
                                            <source
                                                src="https://res.cloudinary.com/drg26w50h/video/upload/v1710017949/edn/edn_video_1.mov"
                                            />
                                        </video>
                                    </div>
                                </div>
                                <div className={style.home_hero_video_wrapper}>
                                    <div className={`${style.home_hero_video} ${style.w_background_video} ${style.w_background_video_atom}`}>
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source
                                                src="https://res.cloudinary.com/drg26w50h/video/upload/v1710018561/edn/edn_video_2.mov"
                                            />
                                            <source
                                                src="https://res.cloudinary.com/drg26w50h/video/upload/v1710018561/edn/edn_video_2.mov"
                                            />
                                        </video>
                                    </div>
                                </div>
                                <div className={style.home_hero_video_wrapper}>
                                    <Image
                                        src="https://res.cloudinary.com/drg26w50h/image/upload/v1710105787/edn/images/video_image_2_uilmpz.webp"
                                        alt="Edn videos"
                                        width={1200}
                                        height={965}
                                        className={style.home_hero_video}
                                    />
                                </div>
                            </div>

                            {/* COLUMN 2 */}
                            <div ref={col_2Reveral} className={`${style.home_hero_column}`}>
                                <div className={style.home_hero_video_wrapper}>
                                    <img
                                        src="https://res.cloudinary.com/drg26w50h/image/upload/v1710105787/edn/images/video_image_3_wy5m6o.webp"
                                        alt="Edn videos"
                                        width={300}
                                        height={300}
                                        className={style.home_hero_video}
                                    />
                                </div>
                                <div className={style.home_hero_video_wrapper}>
                                    <div className={`${style.home_hero_video} ${style.w_background_video} ${style.w_background_video_atom}`}>
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source
                                                src="https://res.cloudinary.com/drg26w50h/video/upload/v1710103825/edn/edn_video_4.mov"
                                            />
                                            <source
                                                src="https://res.cloudinary.com/drg26w50h/video/upload/v1710103825/edn/edn_video_4.mov"
                                            />
                                        </video>
                                    </div>
                                </div>
                                <div className={style.home_hero_video_wrapper}>
                                    <div className={`${style.home_hero_video} ${style.w_background_video} ${style.w_background_video_atom}`}>
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            {/* 00000000000000 BANNER 00000000000000 */}
                                            <source
                                                src="https://ednpodcast.com/wp-content/uploads/2024/01/EDN_Patreon-16-9-1.mp4"
                                            />
                                            <source
                                                src="https://ednpodcast.com/wp-content/uploads/2024/01/EDN_Patreon-16-9-1.mp4"
                                            />
                                        </video>
                                    </div>
                                </div>
                                <div className={style.home_hero_video_wrapper}>
                                    <div className={`${style.home_hero_video} ${style.w_background_video} ${style.w_background_video_atom}`}>
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source
                                                src="https://res.cloudinary.com/drg26w50h/video/upload/v1710103328/edn/edn_video_3.mov"
                                            />
                                            <source
                                                src="https://res.cloudinary.com/drg26w50h/video/upload/v1710103328/edn/edn_video_3.mov"
                                            />
                                        </video>
                                    </div>
                                </div>
                                <div className={style.home_hero_video_wrapper}>
                                    <Image
                                        src="https://res.cloudinary.com/drg26w50h/image/upload/v1710105789/edn/images/video_image_6_t9kpg6.webp"
                                        alt="Edn videos"
                                        width={1024}
                                        height={684}
                                        className={style.home_hero_video}
                                    />
                                </div>
                            </div>

                            {/* COLUMN 3 */}
                            <div ref={col_3Reveral} className={`${style.home_hero_column}`}>
                                <div className={style.home_hero_video_wrapper}>
                                    <Image
                                        src="https://res.cloudinary.com/drg26w50h/image/upload/v1710105790/edn/images/video_image_4_ojq14b.webp"
                                        alt="Edn videos"
                                        width={1024}
                                        height={684}
                                        className={style.home_hero_video}
                                    />
                                </div>
                                <div className={style.home_hero_video_wrapper}>
                                    <div className={`${style.home_hero_video} ${style.w_background_video} ${style.w_background_video_atom}`}>
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source
                                                src="https://res.cloudinary.com/drg26w50h/video/upload/v1710104227/edn/edn_video_5.mov"
                                            />
                                            <source
                                                src="https://res.cloudinary.com/drg26w50h/video/upload/v1710104227/edn/edn_video_5.mov"
                                            />
                                        </video>
                                    </div>
                                </div>
                                <div className={style.home_hero_video_wrapper}>
                                    <div className={`${style.home_hero_video} ${style.w_background_video} ${style.w_background_video_atom}`}>
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source
                                                src="https://res.cloudinary.com/drg26w50h/video/upload/v1710104232/edn/edn_video_6.mov"
                                            />
                                            <source
                                                src="https://res.cloudinary.com/drg26w50h/video/upload/v1710104232/edn/edn_video_6.mov"
                                            />
                                        </video>
                                    </div>
                                </div>
                                <div className={style.home_hero_video_wrapper}>
                                    <Image
                                        src="https://res.cloudinary.com/drg26w50h/image/upload/v1710105790/edn/images/video_image_5_oad72s.webp"
                                        alt="Edn videos"
                                        width={1080}
                                        height={1080}
                                        className={style.home_hero_video}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={style.gradient_bottom} />
                </div>
            </section>

            <HeroContentHome />

        </>
    )
}

export default HeroAboutHome