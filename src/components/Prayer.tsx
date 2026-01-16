import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Prayer: React.FC = () => {
    const textRef = useRef<HTMLDivElement>(null);
    const imgRefs = [useRef<HTMLImageElement>(null), useRef<HTMLImageElement>(null), useRef<HTMLImageElement>(null)];

    useEffect(() => {
        if (textRef.current) {
            gsap.fromTo(
                textRef.current,
                { opacity: 0, y: -100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 80%",
                        toggleActions: "restart none none none",
                        onLeaveBack: () => {
                            gsap.set(textRef.current, { opacity: 0, y: -100 });
                        }
                    }
                }
            );
        }
        imgRefs.forEach((imgRef, i) => {
            if (imgRef.current) {
                gsap.fromTo(
                    imgRef.current,
                    { opacity: 0, y: 100 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        delay: 0.2 * i,
                        scrollTrigger: {
                            trigger: imgRef.current,
                            start: "top 90%",
                            toggleActions: "restart none none none",
                            onLeaveBack: () => {
                                gsap.set(imgRef.current, { opacity: 0, y: 100 });
                            }
                        }
                    }
                );
            }
        });
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div id="prayer" className="w-full min-h-screen p-8 space-y-4 flex items-center flex-col gap-32">
            <h1 className="text-4xl font-bold text-white">Oración</h1>
            <div className="flex flex-col space-y-4 text-wrap w-full px-4" ref={textRef}>
                <p className="text-wrap-normal text-lg">
                    Una oración a José Gregorio Hernández pide su intercesión como "Médico de los Pobres" para sanar cuerpo y alma, obtener fortaleza y fe, y ayuda para la patria, invocando su caridad, ciencia y virtud para superar enfermedades, dificultades y construir un mundo de justicia y paz, a menudo finalizando con un Padre Nuestro y Ave María. 
                </p>
                <p className="text-wrap-normal text-lg">Oración de intercesión para la salud y la patria</p>
                <p className="text-wrap-normal text-lg">
                    ¡Oh, Señor Dios mío, Todopoderoso! Que tanto has bendecido a tu amado siervo José Gregorio, y que por tu gran misericordia le has dado el poder de curar enfermos y socorrer a los necesitados, concédele Señor la gracia de curarme, como médico espiritual de mi alma y de mi cuerpo, si ha de ser para tu gloria.
                </p>
                <p className="text-wrap-normal text-lg">
                    Padre bueno, por intercesión de San José Gregorio Hernández, te pedimos nos des salud de cuerpo y alma para ser testigos de fe, esperanza y caridad, comprometidos en la construcción de un mundo donde reine tu verdad, justicia y paz.
                </p>
                <p className="text-wrap-normal text-lg">
                    Desde Isnotú, tierra que te vio nacer, intercede para que Venezuela nazca a la libertad, sane sus heridas de hambre, exilio y división, y florezca con educación, salud y esperanza para todos.
                </p>
                <p className="text-wrap-normal text-lg">Ruega por nosotros, ¡San José Gregorio!</p>
                <p className="text-wrap-normal text-lg">
                    Señor Jesucristo, que infundiste en el Dr. José Gregorio Hernández constancia en la virtud, la pureza en sus acciones, un gran amor por ti, a tu Santísima Madre y al prójimo, haz que yo, imitando sus virtudes, me acerque más a ti, y por los méritos de tu Pasión y Muerte, concédeme la gracia que te pido: (se pide la gracia).
                </p>
                <p className="text-wrap-normal text-lg">Amén.</p>
                <p className="text-wrap-normal text-lg">~ Récese un Padre Nuestro, un Ave María y un Gloria ~.</p>
                <p className="text-wrap-normal text-lg">Petición específica por la salud</p>
                <p className="text-wrap-normal text-lg">
                    Oh, amado José Gregorio Hernández, médico de los cuerpos y de las almas, hombre de ciencia y de fe, escucha mi súplica en este momento de dolor y fragilidad. Pide al divino médico que toque con su mano sanadora cada herida en mí y en mis seres queridos. Enséñame a aceptar con serenidad las pruebas y a creer en el poder del amor de Dios. Amén.
                </p>
            </div>
        </div>
    );
}

export default Prayer;