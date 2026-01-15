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
            <div className="w-full h-full flex flex-row justify-center items-center gap-4 mt-30">
                <div className="text-center" ref={textRef}>
                    <h1 className="text-7xl font-bold">Historia de</h1>
                    <h1 className="text-7xl">José Gregorio Hernández</h1>
                    <h2 className="text-4xl">La vida y obra de un hombre de ciencia y fé</h2>
                </div>
                <img
                    ref={imgRef}
                    src={main}
                    alt="Main"
                    className="w-[50%] h-full object-cover mr-6 cursor-pointer"
                    onClick={() => setIsOpen(true)}
                />
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