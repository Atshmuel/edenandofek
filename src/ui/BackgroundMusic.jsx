import { useRef, useEffect } from 'react';

export function BackgroundMusic() {
    const audioRef = useRef(null);

    useEffect(() => {
        const handleFirstInteraction = () => {
            const audio = audioRef.current;
            if (audio) {
                audio.volume = 0.3;
                audio.currentTime = 10;
                audio.play().catch(console.error);
            }

            // הסר את המאזינים אחרי ההפעלה
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
