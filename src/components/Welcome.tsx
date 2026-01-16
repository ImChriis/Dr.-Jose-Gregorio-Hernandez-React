import React, { useEffect, useRef, useState } from "react";
import main from "../assets/main.webp";
import santification from "../assets/santification.webp";
import medicine from "../assets/medicine.webp";
import religion from "../assets/religion.webp";
import beatification from "../assets/beatification.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Welcome: React.FC = () => {
    const textRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLDivElement>(null);
    const [current, setCurrent] = useState(0);
    const intervalRef = useRef<number | null>(null);

    const slides = [main, santification, medicine, religion, beatification];

    const startAutoPlay = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
    };

    useEffect(() => {
        if (textRef.current) {
            gsap.fromTo(
                textRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 80%",
                        toggleActions: "restart none none none",
                        onLeaveBack: () => {
                            gsap.set(textRef.current, { opacity: 0, y: 50 });
                        }
                    }
                }
            );
        }
        if (imgRef.current) {
            gsap.fromTo(
                imgRef.current,
                { opacity: 0, x: 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    delay: 0.5,
                    scrollTrigger: {
                        trigger: imgRef.current,
                        start: "top 80%",
                        toggleActions: "restart none none none",
                        onLeaveBack: () => {
                            gsap.set(imgRef.current, { opacity: 0, x: 50 });
                        }
                    }
                }
            );
        }
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    useEffect(() => {
        startAutoPlay();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current]);

    const prevSlide = () => {
        startAutoPlay();
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
    const nextSlide = () => {
        startAutoPlay();
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <>
            <div className="w-full h-full flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12 px-4 sm:px-6 lg:px-12 pt-16 lg:pt-24 mt-4 mb-50">
                <div className="w-full lg:w-1/2 text-center lg:text-left space-y-3 lg:space-y-4" ref={textRef}>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">Historia de</h1>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight">José Gregorio Hernández</h1>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-200">La vida y obra de un hombre de ciencia y fé</h2>
                </div>
                <div className="w-full lg:w-4/4">
                    <div ref={imgRef} className="relative w-full rounded-lg overflow-hidden shadow-lg">
                        <div className="relative w-full aspect-[4/3]">
                            {slides.map((src, idx) => (
                                <img
                                    key={src}
                                    src={src}
                                    alt={`Slide ${idx + 1}`}
                                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${idx === current ? 'opacity-100' : 'opacity-0'}`}
                                    aria-hidden={idx !== current}
                                />
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={prevSlide}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
                            aria-label="Anterior"
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            onClick={nextSlide}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
                            aria-label="Siguiente"
                        >
                            ›
                        </button>
                        <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2">
                            {slides.map((_, idx) => (
                                <button
                                    type="button"
                                    key={idx}
                                    onClick={() => {
                                        startAutoPlay();
                                        setCurrent(idx);
                                    }}
                                    className={`h-2 w-2 rounded-full transition-colors ${idx === current ? 'bg-white' : 'bg-white/40'}`}
                                    aria-label={`Ir al slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Welcome;