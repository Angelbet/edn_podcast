import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

// ? STYLES
import style from '@/styles/Home.module.scss'

// ? FONTS
import { black, bold, medium, light } from '@/fonts/fonts'

// ? GSAP
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function EyesHome() {

    const content_1Reveral = useRef(null);
    const eye_Reveral = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.add(() => {
            if (content_1Reveral.current) {
                gsap.fromTo(
                    content_1Reveral.current,
                    { x: '-100px', opacity: 0, duration: 1, },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        delay: .7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: content_1Reveral.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        },);

        tl.add(() => {
            if (eye_Reveral.current) {
                gsap.fromTo(
                    eye_Reveral.current,
                    { opacity: 0, duration: 1, },
                    {
                        opacity: 1,
                        duration: 1,
                        delay: .7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: eye_Reveral.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                        },
                    }
                );
            }
        }, 2);




    }, []);

    const eyeLeft = useRef(null);
    const eyeRight = useRef(null);
    const pupilLeft = useRef(null);
    const pupilRight = useRef(null);

    useEffect(() => {
        const eyes = [eyeLeft.current, eyeRight.current];
        const pupils = [pupilLeft.current, pupilRight.current];

        const handleMouseMove = (event: MouseEvent) => {

            const target = event.target as HTMLElement;

            if (target) {
                const bounds = target.getBoundingClientRect();
                const mouseX = (event.clientX - bounds.left - bounds.width / 2) * 0.1;
                const mouseY = (event.clientY - bounds.top - bounds.height / 2) * 0.1;

                const maxPupilX = 10; // Máximo desplazamiento horizontal de la pupila
                const maxPupilY = 10; // Máximo desplazamiento vertical de la pupila

                const clampedMouseX = Math.min(Math.max(mouseX, -maxPupilX), maxPupilX);
                const clampedMouseY = Math.min(Math.max(mouseY, -maxPupilY), maxPupilY);

                gsap.to(eyes, {
                    x: mouseX,
                    y: mouseY,
                    duration: 0.5,
                });

                gsap.to(pupils, {
                    x: clampedMouseX,
                    y: clampedMouseY,
                    duration: 0.5,
                });
            }

        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className={style.footer}>
            <div className={style.section}>
                <div className={style.ready_to_start}>
                    <div className={style.container}>
                        <h2 ref={content_1Reveral} className={`${style.ready_to_start_the_project} ${black.className}`}>
                            NO TE VEO
                            <br />
                            PAGANDO
                            <br />
                            EL PANTREON
                        </h2>
                    </div>
                    <div ref={eye_Reveral} className={style.footer_eyes} >
                        <div ref={eyeLeft} className={style.footer_eye}>
                            <Image
                                src="https://res.cloudinary.com/drg26w50h/image/upload/v1710120425/edn/images/Eye-Path-White.svg"
                                alt="eye"
                                width={158}
                                height={119}
                                className={style.footer_eye_image}
                            />
                            <div ref={pupilLeft} className={style.footer_eye_inside}>
                                <div
                                    className={style.footer_eye_light_reflection} />
                            </div>
                        </div>
                        <div ref={eyeRight} className={`${style.footer_eye} ${style._2}`}>
                            <Image
                                src="https://res.cloudinary.com/drg26w50h/image/upload/v1710120425/edn/images/Eye-Path-White.svg"
                                alt="eye"
                                width={158}
                                height={119}
                                className={style.footer_eye_image}
                            />
                            <div ref={pupilRight} className={style.footer_eye_inside}>
                                <div className={style.footer_eye_light_reflection} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EyesHome