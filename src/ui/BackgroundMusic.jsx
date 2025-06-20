import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic({ startTime = 0 }) {
  const audioRef = useRef(null);
  const [showGate, setShowGate] = useState(true);

  const handleEnter = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = true;
    audio.currentTime = startTime;
    audio
      .play()
      .then(() => fadeIn(audio))
      .catch(() => waitForNextGesture(audio));

    setShowGate(false);
  };

  const fadeIn = (audio) => {
    const step = () => {
      if (audio.volume < 1) {
        audio.volume = Math.min(audio.volume + 0.05, 1);
        requestAnimationFrame(step);
      } else {
        audio.muted = false;
      }
    };
    step();
  };

  const waitForNextGesture = (audio) => {
    const resume = () => {
      audio.muted = false;
      audio.play().catch(console.error);
      window.removeEventListener("click", resume);
      window.removeEventListener("touchstart", resume);
    };
    window.addEventListener("click", resume, { once: true });
    window.addEventListener("touchstart", resume, { once: true });
  };

  useEffect(() => {
    const vis = () =>
      document.hidden
        ? audioRef.current?.pause()
        : !showGate && audioRef.current?.play().catch(() => {});
    document.addEventListener("visibilitychange", vis);
    return () => document.removeEventListener("visibilitychange", vis);
  }, [showGate]);

  return (
    <>
      <audio ref={audioRef} loop preload="auto" playsInline src="/music.mp3" />

      {showGate && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-6 text-center">
          <div className="max-w-md space-y-6" dir="ltr">
            <p className="text-white text-2xl font-semibold leading-snug">
              Hey friends!
              <br />
              We’re <span className="underline">so&nbsp;excited</span> to invite
              you to our wedding and can’t wait to celebrate together.
            </p>
            <button
              onClick={handleEnter}
              className="w-full py-3 rounded-lg bg-white text-black text-lg font-medium shadow-lg hover:scale-105 transition-transform"
            >
              🎉 Go to the site
            </button>
          </div>
        </div>
      )}
    </>
  );
}
