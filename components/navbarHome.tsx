import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// ? STYLES
import style from '@/components/navbarHome.module.scss'

// ? FONTS
import { black, bold, medium, light, regular } from '@/fonts/fonts'

// ? ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css"; // estilos base
import { faShirt } from '@fortawesome/free-solid-svg-icons';
import { faPatreon, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFaceKissWinkHeart } from '@fortawesome/free-regular-svg-icons'

// ? GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

function NavbarHome() {

  const logoReveral = useRef(null);
  const menuReveral = useRef(null);
  const menuReveral_b2 = useRef(null);
  const menuReveral_b3 = useRef(null);
  const menuReveral_b4 = useRef(null);
  const pantreonReveral = useRef(null);
  const boxReveral = useRef(null);
  const boxReveral_2 = useRef(null);
  const boxReveral_3 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.add(() => {
      if (logoReveral.current) {
        gsap.fromTo(
          logoReveral.current,
          { y: '50px', opacity: 0, duration: 2, },
          {
            y: 0,
            opacity: 1,
            duration: 2,
            delay: 6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: logoReveral.current,
              start: 'top 80%',
              end: 'bottom 20%',
            },
          }
        );
      }
    },); // Retraso de 3 segundos antes de ejecutar la animación

    tl.add(() => {
      if (pantreonReveral.current) {
        gsap.fromTo(
          pantreonReveral.current,
          { y: '50px', opacity: 0, duration: 2, },
          {
            y: 0,
            opacity: 1,
            duration: 2,
            delay: 6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: pantreonReveral.current,
              start: 'top 80%',
              end: 'bottom 20%',
            },
          }
        );
      }
    },);

    tl.add(() => {
      if (menuReveral.current) {
        gsap.fromTo(
          menuReveral.current,
          { y: '50px', opacity: 0, duration: 2, },
          {
            y: 0,
            opacity: 1,
            duration: 2,
            delay: 6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: menuReveral.current,
              start: 'top 80%',
              end: 'bottom 20%',
            },
          }
        );
      }
    }, 1);
    tl.add(() => {
      if (menuReveral_b2.current) {
        gsap.fromTo(
          menuReveral_b2.current,
          { y: '50px', opacity: 0, duration: 2, },
          {
            y: 0,
            opacity: 1,
            duration: 2,
            delay: 6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: menuReveral_b2.current,
              start: 'top 80%',
              end: 'bottom 20%',
            },
          }
        );
      }
    }, 1);
    tl.add(() => {
      if (menuReveral_b3.current) {
        gsap.fromTo(
          menuReveral_b3.current,
          { y: '50px', opacity: 0, duration: 2, },
          {
            y: 0,
            opacity: 1,
            duration: 2,
            delay: 6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: menuReveral_b3.current,
              start: 'top 80%',
              end: 'bottom 20%',
            },
          }
        );
      }
    }, 1);
    tl.add(() => {
      if (menuReveral_b4.current) {
        gsap.fromTo(
          menuReveral_b4.current,
          { y: '50px', opacity: 0, duration: 2, },
          {
            y: 0,
            opacity: 1,
            duration: 2,
            delay: 6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: menuReveral_b4.current,
              start: 'top 80%',
              end: 'bottom 20%',
            },
          }
        );
      }
    }, 1);

    tl.add(() => {
      const box = boxReveral.current;
      if (box) {
        gsap.to(box, {
          duration: .7,
          ease: "power2.in",
          borderWidth: "2px",
          delay: 6,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom", // inicia la animación cuando el borde superior del elemento entre en la vista
            end: "bottom top", // termina la animación cuando el borde inferior del elemento salga de la vista
            scrub: false, // ajusta la animación a la velocidad de desplazamiento
          },
        });
      }
    }, 2);
    tl.add(() => {
      const box = boxReveral_2.current;
      if (box) {
        gsap.to(box, {
          duration: .7,
          ease: "power2.in",
          borderWidth: "2px",
          delay: 6,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom", // inicia la animación cuando el borde superior del elemento entre en la vista
            end: "bottom top", // termina la animación cuando el borde inferior del elemento salga de la vista
            scrub: false, // ajusta la animación a la velocidad de desplazamiento
          },
        });
      }
    }, 2);
    tl.add(() => {
      const box = boxReveral_3.current;
      if (box) {
        gsap.to(box, {
          duration: .7,
          ease: "power2.in",
          borderWidth: "2px",
          delay: 6,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom", // inicia la animación cuando el borde superior del elemento entre en la vista
            end: "bottom top", // termina la animación cuando el borde inferior del elemento salga de la vista
            scrub: false, // ajusta la animación a la velocidad de desplazamiento
          },
        });
      }
    }, 2);

  }, []);

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    const menu = menuRef.current;

    if (isOpen) {
      gsap.to(line1, {
        rotation: 0,
        y: 5,
        duration: 0.3,
        ease: "power1.out"
      });

      gsap.to(line2, {
        rotation: 0,
        y: -5,
        duration: 0.3,
        ease: "power1.out"
      });
      // Animar el menú desplegable para cerrarlo
      gsap.to(menu, {
        height: '0px',
        display: 'none',
        duration: .4,
        ease: "power2.out"
      });

    } else {
      gsap.to(line1, {
        rotation: -45,
        y: -6,
        duration: 0.3,
        ease: "power1.out"
      });

      gsap.to(line2, {
        rotation: 45,
        y: -8,
        duration: 0.3,
        ease: "power1.out"
      });
      // Animar el menú desplegable para abrirlo
      gsap.fromTo(menu, {
        height: '0px',
        display: 'none',
        ease: "power1.inOut"
      }, {
        height: '2510px', // O una altura específica si la conoces
        display: 'block',
        duration: 1,
        ease: "power1.inOut"
      });
    }
  };


  return (
    <div className={style.body_content}>
      <div className={`${style.navar} ${style.w_nav}`}>

        <div className={`${style.container_nav} ${style.w_container}`}>
          <div
            id={style["w-node-_0831ca9e-984c-3e62-558d-6ae2bb4c888c-bb4c888a"]}
            className={`${style.logo_wrapper_line} `}
            ref={boxReveral}
            style={{
              borderWidth: "0px",
            }}
          >
            <Link
              href="/"
              id={style["w-node-_0831ca9e-984c-3e62-558d-6ae2bb4c888d-bb4c888a"]}
              className={`${style.brand_logo_main} ${style.w_inline_block}`}
            >
              <Image
                src="https://res.cloudinary.com/drg26w50h/image/upload/v1710109787/edn/images/edn-logo_flcqeg.webp"
                width={376.5}
                height={135}
                alt="Escuela de Nada"
                className={`${style.edn_logo} ${style.logo__bg}`}
                ref={logoReveral}
              />
            </Link>
          </div>

          {/* //! |||||||||||||||||| MENU DESK |||||||||||||||||| */}
          <nav
            id={style["w-node-_0831ca9e-984c-3e62-558d-6ae2bb4c8890-bb4c888a"]}
            className={`${style.nav_menu} ${style.w_nav_menu}`}
          >
            <div
              className={`${style.flex_navigation}`}
              ref={boxReveral_2}
              style={{
                borderWidth: "0px",
              }}
            >
              <div className={`${style.navigation_line} ${style.w_inline_block}`}>
                <div ref={menuReveral} className={`${style.z_index}`}>
                  <div className={`${style.button_text_wrapper}`}>
                    <Link
                      href="/"
                      className={`${style.menu} ${style.button_rounded} ${style.w_inline_block} ${style.button_text} ${style.capitalize} ${regular.className}`}>
                      <FontAwesomeIcon icon={faFaceKissWinkHeart} />&nbsp;
                      Inicio
                    </Link>
                  </div>
                </div>
              </div>
              <div className={`${style.navigation_line} ${style.w_inline_block}`}>
                <div ref={menuReveral_b2} className={`${style.z_index}`}>
                  <div className={`${style.button_text_wrapper}`}>
                    <Link
                      href="/"
                      className={`${style.menu} ${style.button_rounded} ${style.w_inline_block} ${style.button_text} ${style.capitalize} ${regular.className}`}>
                      <FontAwesomeIcon icon={faSpotify} />&nbsp;
                      Spotify
                    </Link>
                  </div>
                </div>
              </div>
              <div className={`${style.navigation_line} ${style.w_inline_block}`}>
                <div ref={menuReveral_b3} className={`${style.z_index}`}>
                  <div className={`${style.button_text_wrapper}`}>
                    <Link
                      href="/"
                      className={`${style.menu} ${style.button_rounded} ${style.w_inline_block} ${style.button_text} ${style.capitalize} ${regular.className}`}>
                      <FontAwesomeIcon icon={faYoutube} />&nbsp;
                      Youtube
                    </Link>
                  </div>
                </div>
              </div>
              <div className={`${style.navigation_line} ${style.w_inline_block}`}>
                <div ref={menuReveral_b4} className={`${style.z_index}`}>
                  <div className={`${style.button_text_wrapper}`}>
                    <Link
                      href="/"
                      className={`${style.menu} ${style.button_rounded} ${style.w_inline_block} ${style.button_text} ${style.capitalize} ${regular.className}`}>
                      <FontAwesomeIcon icon={faShirt} />&nbsp;
                      Ropita
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* //! |||||||||||||||||| BUTTON MOBILE |||||||||||||||||| */}
          <div
            id={style["w-node-_0831ca9e-984c-3e62-558d-6ae2bb4c88b2-bb4c888a"]}
            className={`${style.menu_button_main} ${style.w_nav_button}`}
          >
            <div onClick={toggleMenu} className={style.line_wrapper}>
              <div
                className={style.vertical_line_1}
                ref={line1Ref}
              />
              <div
                className={style.verical_line_2}
                ref={line2Ref}
              />
            </div>
          </div>

          {/* //! |||||||||||||||||| PANTREON |||||||||||||||||| */}
          <div
            id={style["w-node-_0831ca9e-984c-3e62-558d-6ae2bb4c88b6-bb4c888a"]}
            className={style.button_nav}
            ref={boxReveral_3}
            style={{
              borderWidth: "0px",
            }}
          >
            <Link
              href="/"
              className={`${style.button_rounded} ${style.w_inline_block} ${style.pantreon}`}
              ref={pantreonReveral}
            >
              <div className={`${style.button_text_wrapper} ${style._20px}`}>
                <div className={`${style.button_text} ${style.small} ${regular.className}`}>
                  <FontAwesomeIcon icon={faPatreon} />&nbsp;
                  Pantreon
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* //! |||||||||||||||||| MENU MOBILE |||||||||||||||||| */}
        <div ref={menuRef} className={style.w_nav_overlay}>
          <nav
            id={style["w-node-_0831ca9e-984c-3e62-558d-6ae2bb4c8890-bb4c888a"]}
            className={`${style.nav_menu} ${style.w_nav_menu} ${style.nav_menu_open}`}
          >
            <div className={style.flex_navigation}>
              <div className={`${style.navigation_line} ${style.w_inline_block}`}>
                <div className={`${style.z_index}`}>
                  <div className={`${style.button_text_wrapper}`}>
                    <Link
                      href="/"
                      className={`${style.menu} ${style.button_rounded} ${style.w_inline_block} ${style.button_text} ${style.capitalize} ${regular.className}`}>
                      <FontAwesomeIcon icon={faFaceKissWinkHeart} />&nbsp;
                      Inicio
                    </Link>
                  </div>
                </div>
                <div className={style.button_line_first} />
              </div>

              <div className={`${style.navigation_line} ${style.w_inline_block}`}>
                <div className={`${style.z_index}`}>
                  <div className={`${style.button_text_wrapper}`}>
                    <Link
                      href="/"
                      className={`${style.menu} ${style.button_rounded} ${style.w_inline_block} ${style.button_text} ${style.capitalize} ${regular.className}`}>
                      <FontAwesomeIcon icon={faSpotify} />&nbsp;
                      Spotify
                    </Link>
                  </div>
                </div>
                <div className={style.button_line_first} />
              </div>

              <div className={`${style.navigation_line} ${style.w_inline_block}`}>
                <div className={`${style.z_index}`}>
                  <div className={`${style.button_text_wrapper}`}>
                    <Link
                      href="/"
                      className={`${style.menu} ${style.button_rounded} ${style.w_inline_block} ${style.button_text} ${style.capitalize} ${regular.className}`}>
                      <FontAwesomeIcon icon={faYoutube} />&nbsp;
                      Youtube
                    </Link>
                  </div>
                </div>
                <div className={style.button_line_first} />
              </div>

              <div className={`${style.navigation_line} ${style.w_inline_block}`}>
                <div className={`${style.z_index}`}>
                  <div className={`${style.button_text_wrapper}`}>
                    <Link
                      href="/"
                      className={`${style.menu} ${style.button_rounded} ${style.w_inline_block} ${style.button_text} ${style.capitalize} ${regular.className}`}>
                      <FontAwesomeIcon icon={faShirt} />&nbsp;
                      Ropita
                    </Link>
                  </div>
                </div>
                <div className={style.button_line_first} />
              </div>

            </div>
          </nav>
        </div>


      </div>
    </div>
  )
}

export default NavbarHome