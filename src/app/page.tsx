'use client';
import Head from 'next/head';
import { BsFillMoonFill } from 'react-icons/bs';
import { AiFillMail, AiFillLinkedin, AiFillGithub, } from 'react-icons/ai';
import Image from 'next/image';
import Deved from '../../public/perfil.png';
import { useState } from 'react';
import Carousel from '@/components/carousel';
import AboutMe from '@/components/AboutMe';
import Footer from '@/components/footer';
import OtrosDatos from '@/components/OtrosDatos';
import Estudios from '@/components/estudios';




export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const images = ['worcsGame.png', 'BDD.png', '2248.png', 'minishell.png', 'snake.png'];
  const descripcion = [
    'Proyecto académico realizado con Java, respetando los principios SOLID y algunos patrones de diseño(entre ellos el patrón de diseño MVC, observer, singleton, etc).', 
    'Proyecto académico realizado utilizando Java (con JDBC) y SQL para la base de datos. Simula un sistema de parquimetros con diferentes roles de acceso', 
    'Proyecto realizado utilizando React, Javascript, HTML, combinado con el lenguaje de programación lógica Prolog. Consiste en una versión del juego 2248 con funciones específicas', 
    'Proyecto de programación en C, combinando diversos conocimientos de sistemas operativos, como por ejemplo la sincronización de procesos, la exclusión mutua, la compartición de memoria, etc.', 
    'Proyecto académico realizado con Java, respetando los principios SOLID y algunos patrones de diseño(entre ellos el patrón de diseño MVC, observer, singleton, etc).', 
  ];
  const urls = [
    'https://github.com/Guidoreale/worcs-game', 
    'https://github.com/drg-dcic-uns/proyectobd2023-gatti-reale', 
    'https://github.com/tobiasgatti02/Proyecto-Prolog-React', 
    'https://github.com/martoAs/OS-Project', 
    'https://github.com/Guidoreale/snake_', 
  ];
  return (
    
    <div className={darkMode ? "dark w-screen" : "w-screen"}>
      <Head>
        <title>Guido Reale Portfolio</title>
        <meta name="description" content="Guido Reale Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' bg-gray-300 px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
      <section className="min-h-screen flex flex-col justify-center items-center">
        <nav className="py-10 mb-12 flex flex-wrap justify-center items-center w-full max-w-4xl">
          <h1 className="w-full text-center text-xl font-sans dark:text-white mb-4 md:mb-0">DesarrolladoPorGuido</h1>
          <ul className="flex flex-wrap justify-center items-center w-full md:w-auto">
            <li><a href="#sobre-mi" className="px-4 py-1 hover:text-white dark:hover:text-white">Sobre Mi</a></li>
            <li><a href="#proyectos" className="px-4 py-1 hover:text-white dark:hover:text-white">Proyectos</a></li>
            <li><a href="#estudios" className="px-4 py-1 hover:text-white dark:hover:text-white">Estudios</a></li>
            <li><a href="#otros-datos" className="px-4 py-1 hover:text-white dark:hover:text-white">Otros Datos</a></li>
          </ul>
          <div className="flex justify-center items-center">
            <BsFillMoonFill className="w-8 h-8 cursor-pointer text-2xl" onClick={() => setDarkMode(!darkMode)} />
          </div>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Guido Reale</h2>
          <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-400">Desarrollador De Software</h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg dark:text-gray-400">
            Estudiante de Ingeniería en Sistemas de Información. Mi objetivo es crear soluciones únicas y de calidad.
          </p>
        </div>
        <div className="flex justify-center gap-16 py-3 text-gray-600">
          <a href="https://github.com/Guidoreale" target="_blank" rel="noopener noreferrer" className="hover:border-solid hover:bg-gray-400 hover:border hover:border-gray-400 rounded p-2">
            <AiFillGithub className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/guidoreale/" target="_blank" rel="noopener noreferrer" className="hover:border-solid hover:bg-gray-400 hover:border hover:border-gray-400 rounded p-2">
            <AiFillLinkedin className="w-8 h-8" />
          </a>
          <a href="mailto:realeguido1@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:border-solid hover:bg-gray-400 hover:border hover:border-gray-400 rounded p-2">
            <AiFillMail className="w-8 h-8" />
          </a>
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 md:h-96 md:w-96 overflow-hidden">
          <Image src={Deved} priority={true} alt="MyPicture" layout="fill" objectFit="cover" />
        </div>
      </section>

        <section id='sobre-mi'>
          <AboutMe/>
        </section>
        <section id='proyectos'>
          <div className='pt-20'>
            <Carousel images={images} descripcion={descripcion} urls={urls} autoplay={true}/>
          </div>
        </section>
        <section id='estudios'>
          <Estudios/>
        </section>
        <section id='otros-datos'>
          <OtrosDatos/>
        </section>
        <section className='py-4 mt-20'>
          <Footer />
        </section>
      </main>
    </div>
  );
}
