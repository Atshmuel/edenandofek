import useElementOnScreen from "../useElementOnScreen";

function Image({
  type = "section",
  styles,
  src = [],
  rootMargin = 0,
  alt,
  lazy = true,
  overLay,
  overLayType = "center",
}) {
  const { containerRef, isVisible } = useElementOnScreen({
    root: null,
    rootMargin: `${rootMargin}px`,
    threshold: 0.2,
  });
  return (
    <>
      {type === "section" && overLay ? (
        <div className="flex relative justify-center">
          <img
            ref={containerRef}
            className={`${styles} ${isVisible ? "" : "blur-md "
              } grayscale hover:grayscale-0`}
            src={isVisible ? src.at(0) : src.at(0) || src.at(0)}
            alt={alt}
            loading={lazy ? "lazy" : ""}
          ></img>
          <p
            style={{ textShadow: "1px 1px 3px #00000074" }}
            className={`absolute ${overLayType === "bottom"
              ? "-bottom-3.5 text-4xl font-extrabold drop-shadow-md"
              : " top-[45%] text-2xl"
              }  text-slate-50 `}
          >
            {overLay}
          </p>
        </div>
      ) : type === "section" ? (
        <img
          ref={containerRef}
          className={`grayscale hover:grayscale-0 ${styles} ${isVisible ? "" : "blur-md"
            }`}
          src={isVisible ? src.at(0) : src.at(1) || src.at(0)}
          alt={alt}
          loading={lazy ? "lazy" : ""}
        ></img>
      ) : src.length > 0 ? (
        <img
          ref={containerRef}
          className={`${styles} ${isVisible ? "" : "blur-md"}`}
          src={isVisible && src.at(0)}
          alt={alt}
          loading={lazy ? "lazy" : ""}
        />
      ) : null}
    </>
  );
}

export default Image;
