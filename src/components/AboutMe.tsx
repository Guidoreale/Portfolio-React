import Image from 'next/image';
import code from '../../public/code.png';
import consulting from '../../public/consulting.png';

export default function AboutMe() {
        return <>
            <div>
                <h3 className='text-3xl py-1 pt-10 text-teal-600 dark:text-teal-600'>Sobre Mi</h3>
                <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>
                Luego de un tiempo estudiando Derecho, decidí cambiar de rumbo y dedicarme a lo que realmente me hace feliz: <span className='text-teal-500'>la programación. </span>
                Me considero una persona autodidacta, con facilidades para convivir en un equipo y entorno dinámico aprovechando mis ganas de aprender y mejorar en el mundo de la tecnología, pudiendo así tanto aplicar los conocimientos que fui adquiriendo con el pasar de los años como adquirir muchos otros nuevos.
                estas son algunas de las habilidades que he adquirido:
                </p>
            </div>
            <div className=' lg:flex lg:justify-center gap-10'>
                <div className='text-center text-black shadow-2xl p-10 rounded-xl my-10 dark:text-gray-400 dark:shadow-gray-700'>
                    <Image src={code} alt='' width={100} height={100} className='mx-auto'/>
                    <h3 className='text-lg  font-medium pt-8 pb-2'>Desarrollo de sistemas</h3>
                    <p className='py-2'>Experiencia desarrollando sistemas con diversas tecnologias</p>
                    <h4 className='py-4 text-teal-600 '> Herramientas y Lenguajes:</h4>
                    <p className='text-gray-800 py-1 dark:text-gray-400'> Programación con java (springboot)</p>
                    <p className='text-gray-800 py-1 dark:text-gray-400'> Programación con javascript (react)</p>
                    <p className='text-gray-800 py-1 dark:text-gray-400'> Programación orientada a objetos, patrones de diseño, principios solid, etc</p>
                    <p className='text-gray-800 py-1 dark:text-gray-400'> Programación en C y Prolog (medianamente basicos)</p>
                </div>
                <div className='text-center text-black shadow-2xl p-10 rounded-xl my-10 dark:text-gray-400 dark:shadow-gray-700'>
                    <Image src={consulting} alt='' width={100} height={100} className='mx-auto'/>
                    <h3 className='text-lg font-medium pt-8 pb-2'>Herramientas personales</h3>
                    <p className='py-2'>Aspectos positivos a los que apunto poder aportar a un equipo de trabajo</p>
                    <h4 className='py-4 text-teal-600'> Habilidades blandas:</h4>
                    <p className='text-gray-800 py-1 dark:text-gray-400'> Comunicación efectiva</p>
                    <p className='text-gray-800 py-1 dark:text-gray-400'> Colaboración activa</p>
                    <p className='text-gray-800 py-1 dark:text-gray-400'> Flexibilidad y adaptabilidad</p>
                    <p className='text-gray-800 py-1 dark:text-gray-400'> Actitud de aprendizaje continuo</p>
                </div>
            </div>
        </>
}