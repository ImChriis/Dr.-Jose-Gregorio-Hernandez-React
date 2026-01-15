import React, { useRef, useEffect } from "react";
import santification from '../assets/santification.webp';
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
        <div id="santification" className="w-full min-h-screen p-8 space-y-4 flex justify-center flex-col items-center gap-32">
            <h1 className="text-4xl font-bold text-white">Santificación</h1>
            <div className="flex flex-row space-y-4 text-wrap w-[90%] gap-8">
                <div className="flex flex-col space-y-4 text-wrap w-[50%]" ref={textRef}>
                    <p className="text-wrap-normal text-lg">
                        El camino hacia la santificación de José Gregorio Hernández ha trascendido las fronteras de la religión para convertirse en un fenómeno de identidad nacional y espiritual. Tras su beatificación en 2021, la mirada del mundo católico y de la comunidad científica se mantiene fija en el Vaticano, a la espera del decreto final que lo inscriba oficialmente en el libro de los santos. Este proceso no es solo un trámite eclesiástico; es la culminación de un clamor popular que ha cruzado generaciones, uniendo a creyentes y no creyentes bajo la figura del "Médico de los Pobres".
                    </p>
                    <p className="text-wrap-normal text-lg">
                        La posible canonización representa el reconocimiento universal de una vida donde la excelencia académica y la caridad cristiana no fueron opuestas, sino complementarias. José Gregorio demostró que la ciencia más avanzada de su época podía caminar de la mano con una fe inquebrantable, transformando el consultorio médico en un santuario de sanación tanto física como espiritual. Para el venezolano, su santidad ya es un hecho cotidiano, manifestado en los miles de favores y milagros que se le atribuyen en los rincones más humildes y en las clínicas más prestigiosas.
                    </p>
                    <p className="text-wrap-normal text-lg">
                       Hoy, la figura de José Gregorio Hernández se erige como un puente de reconciliación y unidad. Su ascenso a los altares como santo oficial de la Iglesia no solo honraría su memoria, sino que enviaría un mensaje de resiliencia y bondad al mundo entero. En un tiempo que demanda referentes éticos y humanos, su ejemplo de entrega total sigue siendo la luz que guía a un pueblo que espera, con fe renovada, el repique de campanas que anuncie que su "Venerable" es ya, ante los ojos del mundo, el Santo de Venezuela.
                    </p>
                </div>
                <img ref={imgRef} src={santification} alt="José Gregorio Hernández" className="w-[50%] h-[100%]" />
            </div>
        </div>
    );
}

export default Beatification;