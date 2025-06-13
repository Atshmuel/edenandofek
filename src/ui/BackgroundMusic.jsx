import { useRef, useEffect, useState } from 'react';

export function BackgroundMusic() {
    const audioRef = useRef(null);
    const [canPlay, setCanPlay] = useState(false);

    useEffect(() => {
        const handleFirstInteraction = () => {
            setCanPlay(true);
            // הסר את המאזינים אחרי האינטראקציה הראשונה
            document.removeEventListener('click', handleFirstInteraction);
            document.removeEventListener('keydown', handleFirstInteraction);
            document.removeEventListener('touchstart', handleFirstInteraction);
        };

        document.addEventListener('click', handleFirstInteraction);
        document.addEventListener('keydown', handleFirstInteraction);
        document.addEventListener('touchstart', handleFirstInteraction);

        return () => {
            document.removeEventListener('click', handleFirstInteraction);
            document.removeEventListener('keydown', handleFirstInteraction);
            document.removeEventListener('touchstart', handleFirstInteraction);
        };
    }, []);

    useEffect(() => {
        if (canPlay && audioRef.current) {
            audioRef.current.volume = 0.1;
            audioRef.current.play().catch(console.error);
            audioRef.current.currentTime = 11;
        }
    }, [canPlay]);

    return (
        <audio
            ref={audioRef}
            loop
            preload="auto"
        >
            <source src="./music.mp3" type="audio/mpeg" />
        </audio>
    );
}