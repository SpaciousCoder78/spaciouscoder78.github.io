import Head from 'next/head';
import Header from '../components/Header';
import Home from '../components/Home';
import Languages from '../components/Languages'
import Skills from '../components/Skills';
// import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

export default function Index() {
  return (
    <>
    <Head>
      <title>SpaciousCoder78</title>
      <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="title" content="SpaciousCoder78 | Software Developer & Engineering Student" />
      <meta name="description" content="Hi, I'm SpaciousCoder78 and I develop software" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="SpaciousCoder78" />
      <meta property="og:description" content="Hi, I'm SpaciousCoder78 and I develop software" />
      <meta property="og:image" content="/meta.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="SpaciousCoder78" />
      <meta property="twitter:description" content="Hi, I'm SpaciousCoder78 and I develop software" />
      <meta property="twitter:image" content="/meta.png" />
    </Head>
    <Header />
    <Home />
    <Languages />
    <Skills />
    {/* <Projects /> */}
    <Contact />
    <Footer/>
    </>
  )
}