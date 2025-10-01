import React, { useRef, useEffect } from "react";
import doctor from '../assets/doctor.png';
import science from '../assets/science.jpg';
import culture from '../assets/culture.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Legacy: React.FC = () => {
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
        <div id="legacy" className="w-full min-h-screen p-8 space-y-4 flex items-center flex-col gap-32">
            <h1 className="text-4xl font-bold text-white">Legado</h1>
            <div className="flex flex-col space-y-4 text-wrap w-[90%]" ref={textRef}>
                <p className="text-wrap-normal text-lg">
                    El nombre de José Gregorio Hernández trascendió más allá de su tiempo y de su labor médica. Su memoria se convirtió en símbolo de esperanza, fe y consuelo para millones de personas en Venezuela y toda Latinoamérica. En los hogares más humildes, en hospitales y capillas, su imagen es venerada como intercesor ante Dios, especialmente por los enfermos y necesitados. Miles de testimonios dan cuenta de favores y milagros atribuidos a su intercesión, lo que afianzó su fama de santidad.
                </p>
                <p className="text-wrap-normal text-lg"></p>
                <p className="text-wrap-normal text-lg">
                    Hoy, más de cien años después de su fallecimiento, sigue vivo en el corazón de su pueblo como El médico de los pobres, un hombre que dedicó su existencia a sanar cuerpos y almas, y cuyo legado inspira a vivir con fe, humildad y amor hacia el prójimo.
                </p>
                <div className="flex items-center justify-center gap-4">
                    <img ref={imgRefs[0]} src={doctor} className="w-1/3 h-auto" alt="" />
                    <img ref={imgRefs[1]} src={culture} className="w-1/3 h-auto" alt="" />
                    <img ref={imgRefs[2]} src={science} className="w-1/3 h-auto" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Legacy;