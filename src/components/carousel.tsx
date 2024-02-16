import { useEffect, useState } from "react"
import styled from "styled-components";
import { AiFillGithub, } from 'react-icons/ai';

const CarouselImg = styled.img`
width: 50%;
max-width: 1000px;
height: auto;
max-height: 500px;
opacity: 0;
transition : 1s;
&.loaded {
    opacity: 1;
}
border : 2px solid #000000;`
const CarouselButtonContainer = styled.div`
display: flex;
align-content: center;
flex direction: row;
margin-top: 15px;
`;
const CarouselButton = styled.button`
color: white;
background-color: slategray;
padding: 8px;
`;

interface Props{
    images: string[];
    descripcion: string[];
    urls: string[];
    autoplay?: boolean;
    showButtons?: boolean;
}

export default function Carousel(props: Props) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(props.images[0]);
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        // Una vez que el componente se monte, establece loaded en true después de un breve retraso
        const timer = setTimeout(() => {
            setLoaded(true);
        }, ); // 100 milisegundos es un valor arbitrario, puedes ajustarlo según sea necesario
        // Limpia el temporizador cuando el componente se desmonta para evitar fugas de memoria
        return () => clearTimeout(timer);
    }, []);

    const selectNewImage = (index : number, image : string[], next = true) => {
        setLoaded(false);
        setTimeout(() => {
            const condition = next ? selectedIndex < image.length - 1 : selectedIndex > 0;
            const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : (condition ? selectedIndex - 1 : image.length - 1);
            setSelectedImage(image[nextIndex]);
            setSelectedIndex(nextIndex);
        }, 500);
    }
    const previous = () => {
        selectNewImage(selectedIndex, props.images, false);
    }
    const next = () => {
        selectNewImage(selectedIndex, props.images);
    }

    return <>
        <h3 className='text-3xl py-1 text-teal-600'>Proyectos</h3>
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>
            A lo largo de la carrera universitaria que estoy llevando a cabo he tenido la posibilidad de realizar varios <span className='text-teal-500'>Proyectos de Software </span>
            que me han permitido adquirir experiencia en el desarrollo de sistemas, como tambien en la gestion de proyectos. Aqui algunos de ellos:
        </p>
        
        <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 1s' }} className={loaded ? 'loaded flex flex-col md:flex-row items-center mt-10 bg-gray-800 border-solid border-gray-300 border-2 rounded  shadow-gray-700 shadow-2xl  my-10 dark:shadow-gray-500' : 'flex flex-col md:flex-row items-center mt-10 bg-gray-800 border-solid border-gray-300 border-2 rounded my-10 shadow-gray-700 dark:shadow-gray-500'}>
    <div className="flex flex-col text-center justify-center w-full md:w-1/2">
        <p className="text-white ml-5">
            {props.descripcion[selectedIndex]}
        </p>
        <a href={props.urls[selectedIndex]} target="_blank" className="text-gray-300 hover:text-green-300 dark:text-gray-400">visitar proyecto</a>
    </div>
    <img 
        src={selectedImage}
        alt="proyecto" 
        className="w-full md:w-1/2"
        onLoad={() => setLoaded(true)}
    />
</div>

        <div className="text-left">
    
    <div className="mt-4">
        <CarouselButtonContainer>
            <CarouselButton onClick={previous} className="rounded-full ml-auto mr-1 border-2 border-gray-600 dark:border-white">{'<'}</CarouselButton>
            <CarouselButton onClick={next} className="rounded-full mr-auto ml-1 border-2 border-gray-600 dark:border-white">{'>'}</CarouselButton>
        </CarouselButtonContainer>
    </div>
</div>
    </>
}