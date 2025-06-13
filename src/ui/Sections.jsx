import useElementOnScreen from "../useElementOnScreen";

function Sections({
  children,
  styles,
  rootMargin = 200,
  threshold = 0.1,
  type = "section",
  id,
}) {
  const { containerRef, isVisible } = useElementOnScreen({
    root: null,
    rootMargin: `${rootMargin}px`,
    threshold: threshold,
  });

  return (
    <>
      {type === "header" ? (
        <header
          id={id}
          className={`${styles}   opacity-0 ${isVisible ? `opacity-100` : `translate-y-20`
            } transition-all duration-700`}
          ref={containerRef}
        >
          {isVisible ? children : null}
        </header>
      ) : type === "section" ? (
        <section
          id={id}
          className={`${styles} opacity-0  ${isVisible ? `opacity-100` : `translate-y-20 h-dvh`
            } transition-all duration-1000 delay-150`}
          ref={containerRef}
        >
          {isVisible ? children : null}
        </section>
      ) : (
        <footer
          id={id}
          className={`${styles}   opacity-0 ${isVisible ? `opacity-100` : `translate-y-20`
            } transition-all duration-1000 delay-150`}
          ref={containerRef}
        >
          {isVisible ? children : null}
        </footer>
      )}
    </>
  );
}

export default Sections;
