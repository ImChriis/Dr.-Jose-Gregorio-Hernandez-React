import React, { useEffect, useRef, useState } from "react";
import main from "../assets/main.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Welcome: React.FC = () => {
    const textRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const [isOpen, setIsOpen] = useState(false);

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
        };
    }, []);

    return (
        <>
            <div className="w-full h-full flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12 px-4 sm:px-6 lg:px-12 pt-16 lg:pt-24 mt-4 mb-50">
                <div className="w-full lg:w-1/2 text-center lg:text-left space-y-3 lg:space-y-4" ref={textRef}>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">Historia de</h1>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight">José Gregorio Hernández</h1>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-200">La vida y obra de un hombre de ciencia y fé</h2>
                </div>
                <div className="w-full lg:w-4/">
                    <img
                        ref={imgRef}
                        src={main}
                        alt="Main"
                        className="w-full h-auto object-cover rounded-lg shadow-lg cursor-pointer"
                        onClick={() => setIsOpen(true)}
                    />
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-black/70 h-full"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="relative max-w-5xl w-[90%] max-h-[90vh] rounded-lg overflow-hidden flex items-center justify-center p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative inline-flex max-h-[80vh] max-w-[90vw] justify-center">
                            <img src={main} alt="Main enlarged" className="max-w-full max-h-[80vh] object-contain bg-black" />
                            <button
                                className="absolute top-2 right-2 text-white text-2xl font-bold cursor-pointer bg-black/70 rounded-full px-3"
                                onClick={() => setIsOpen(false)}
                            >
                                X
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Welcome;