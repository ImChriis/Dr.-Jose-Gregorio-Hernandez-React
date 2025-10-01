import React, { useRef, useEffect } from "react";
import beatification from '../assets/beatification.jpg';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Beatification: React.FC = () => {
    const textRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (textRef.current) {
            gsap.fromTo(
                textRef.current,
                { opacity: 0, x: -100 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 80%",
                        toggleActions: "restart none none none",
                        onLeaveBack: () => {
                            gsap.set(textRef.current, { opacity: 0, x: -100 });
                        }
                    }
                }
            );
        }
        if (imgRef.current) {
            gsap.fromTo(
                imgRef.current,
                { opacity: 0, x: 100 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: imgRef.current,
                        start: "top 80%",
                        toggleActions: "restart none none none",
                        onLeaveBack: () => {
                            gsap.set(imgRef.current, { opacity: 0, x: 100 });
                        }
                    }
                }
            );
        }
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div id="beatification" className="w-full min-h-screen p-8 space-y-4 flex justify-center flex-col items-center gap-32">
            <h1 className="text-4xl font-bold text-white">Beatificación</h1>
            <div className="flex flex-row space-y-4 text-wrap w-[90%] gap-8">
                <div className="flex flex-col space-y-4 text-wrap w-[50%]" ref={textRef}>
                    <p className="text-wrap-normal text-lg">
                        El 30 de abril de 2021, la Iglesia Católica lo proclamó Beato en una ceremonia solemne realizada en Caracas, un acontecimiento histórico que no solo fue transmitido a nivel nacional, sino que también llegó a millones de hogares en toda Latinoamérica. Para el pueblo venezolano, este día representó la confirmación oficial de algo que había estado vivo en el corazón colectivo por más de un siglo: la certeza de que la vida de José Gregorio Hernández fue un testimonio auténtico de santidad, fe y servicio al prójimo.
                    </p>
                    <p className="text-wrap-normal text-lg">
                        La beatificación, presidida por representantes del Vaticano y acompañada por una multitud de fieles, no fue solamente un acto religioso, sino también un símbolo de esperanza en medio de tiempos difíciles para el país. Fue el reconocimiento de que un hombre humilde, médico y profesor, había logrado unir la ciencia y la fe en un camino de servicio desinteresado hacia los más necesitados.
                    </p>
                    <p className="text-wrap-normal text-lg">
                        Este reconocimiento marcó un paso decisivo hacia su futura canonización, abriendo la posibilidad de que en un futuro cercano sea declarado Santo. Desde entonces, la devoción hacia el Beato José Gregorio Hernández ha continuado creciendo, inspirando a nuevas generaciones que ven en su figura un ejemplo vivo de cómo se puede servir a Dios y a la humanidad con amor, sacrificio y entrega total.
                    </p>
                </div>
                <img ref={imgRef} src={beatification} alt="José Gregorio Hernández" className="w-[50%] h-[100%]" />
            </div>
        </div>
    );
}

export default Beatification;