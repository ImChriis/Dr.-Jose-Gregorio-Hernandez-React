import React from "react";
import main from "../assets/main.jpg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Welcome: React.FC = () => {
    const textRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

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
        <div className="w-full h-full flex flex-row justify-center items-center gap-4 mt-30">
            <div className="text-center" ref={textRef}>
                <h1 className="text-7xl font-bold">Historia de</h1>
                <h1 className="text-7xl">José Gregorio Hernández</h1>
                <h2 className="text-4xl">La vida y obra de un hombre de ciencia y fé</h2>
            </div>
            <img ref={imgRef} src={main} alt="Main" className="w-[50%] h-full object-cover" />
        </div>
    );
}

export default Welcome;