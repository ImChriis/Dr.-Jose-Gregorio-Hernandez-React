import React, { useEffect, useState } from 'react';

const ScrollToTop: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const [bottomOffset, setBottomOffset] = useState(24); // px

    useEffect(() => {
        const updatePosition = () => {
            setVisible(window.scrollY > 200);
            const footer = document.querySelector('footer');
            const base = 24; // px base distance from bottom
            let offset = base;
            if (footer) {
                const rect = footer.getBoundingClientRect();
                // If footer top is within the viewport, lift the button above it
                if (rect.top < window.innerHeight) {
                    const overlap = window.innerHeight - rect.top; // px height of footer visible
                    offset = base + Math.max(0, overlap);
                }
            }
            setBottomOffset(offset);
        };

        updatePosition();
        window.addEventListener('scroll', updatePosition, { passive: true });
        window.addEventListener('resize', updatePosition);
        return () => {
            window.removeEventListener('scroll', updatePosition);
            window.removeEventListener('resize', updatePosition);
        };
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    if (!visible) return null;

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="fixed right-4 sm:right-6 z-50 w-12 h-12 rounded-full bg-blue-600 text-black shadow-lg backdrop-blur hover:bg-blue-700 cursor-pointer transition-colors flex items-center justify-center"
            style={{ bottom: bottomOffset }}
        >
            <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-6 6m6-6l6 6" />
            </svg>
        </button>
    );
};

export default ScrollToTop;
