import Image from "./Image";

const foccach = "https://static.wixstatic.com/media/309aeb_8275e2278b9a4e6ca875ef4d5fe36cce~mv2.jpg/v1/fit/w_728,h_1300,q_90,enc_avif,quality_auto/309aeb_8275e2278b9a4e6ca875ef4d5fe36cce~mv2.jpg"


const imgs = [foccach];
function MenuItem({ menuItem = [], topHeader = "", header, imgsToShow = [] }) {
  return (
    <div>
      <h2 className="mx-auto border-b-2 text-2xl font-semibold w-fit my-2">
        {topHeader}
      </h2>
      <div className="mb-4">
        <ul className=" text-stone-600 z-20 divide-y">
          {menuItem.map((item, i) => (
            <div key={i} className="pb-2 ">
              <h2 className="font-bold mt-1 md:text-lg tracking-widest ">
                {header.at(i) && header.at(i)}
              </h2>
              <div
                className={`${imgsToShow.includes(i)
                  ? "flex justify-between items-center "
                  : ""
                  }`}
              >
                <div className="md:pl-6 ">
                  {item
                    ? item.map((el) => (
                      <li
                        className={`text-[0.85rem] sm:text-[1rem] tracking-tighter ${el.length > 180 && "w-[90%]"
                          }`}
                        key={el}
                      >
                        - {el}.
                      </li>
                    ))
                    : null}
                </div>

                {imgsToShow.includes(i) ? (
                  <Image
                    type={"aside"}
                    styles={
                      "size-28 self-end rounded-full transition-all duration-300 mx-2 "
                    }
                    rootMargin={100}
                    src={[imgs.at(i)]}
                  />
                ) : null}
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MenuItem;
