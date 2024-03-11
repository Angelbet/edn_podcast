import Head from "next/head";

// ? STYLES
import styles from "@/styles/Home.module.scss";

// ? COMPONENTS
import HeroHome from "@/components/heroHome";
import HeroAboutHome from "@/components/heroAboutHome";
import CharactersHome from "@/components/charactersHome";
import FooterHome from "@/components/footerHome";
import EyesHome from "@/components/eyesHome";
import NavbarHome from "@/components/navbarHome";
import PreloaderHome from "@/components/preloaderHome";

export default function Home() {
  return (
    <>
      <Head>
        <title>Escuela de Nada - EDN Podcast</title>
        <meta name="description" content="Podcast de comedia improvisada presentado por Leo Rojas, Chris Andrade y Nacho Redondo. Episodios nuevos todos los miércoles, jueves y domingos." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Escuela de Nada Podcast" />
        <meta property="og:description" content="Podcast de comedia improvisada presentado por Leo Rojas, Chris Andrade y Nacho Redondo." />
        <meta property="og:image" content="https://res.cloudinary.com/drg26w50h/image/upload/v1710157074/edn/images/1200_x_630_gfgmrp.jpg" />
        <meta property="og:url" content="https://ednpodcast.netlify.app" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Escuela de Nada - EDN Podcast" />
        <meta name="twitter:description" content="Podcast de comedia improvisada presentado por Leo Rojas, Chris Andrade y Nacho Redondo." />
        <meta name="twitter:image" content="https://res.cloudinary.com/drg26w50h/image/upload/v1710157074/edn/images/1200_x_630_gfgmrp.jpg" />
      </Head>
      <div className={styles.body_noise} />

      <PreloaderHome />

      <NavbarHome />
      <HeroAboutHome />
      <HeroHome />
      <CharactersHome />
      <EyesHome />
      <FooterHome />



    </>
  );
}
