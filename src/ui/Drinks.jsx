import Image from "./Image";

import drink1 from "../assets/cocktails/img1.jpg";
import drink2 from "../assets/cocktails/img2.jpg";
import drink3 from "../assets/cocktails/img3.jpg";
import drink4 from "../assets/cocktails/img4.jpg";
import drink5 from "../assets/cocktails/img5.jpg";
import drink6 from "../assets/cocktails/img6.jpg";
import drink7 from "../assets/cocktails/img7.jpg";

const imgs = [
  [drink5],
  [drink4],
  [drink7],
  [drink1],
  [drink3],
  [drink2],
  [drink6],
];

function Drinks({ menuItem = [], topHeader = "", header }) {
  return (
    <>
      <h2 className="mx-auto border-b-2 text-2xl font-semibold w-fit my-2">
        {topHeader}
      </h2>
      <div>
        <h2 className="font-bold mt-1 tracking-widest">
          {header.at(0) && header.at(0)}
        </h2>
        <ul className=" text-stone-600 z-20">
          {menuItem.map((item, i) => (
            <div key={i}>
              <div className={`flex justify-between items-center`}>
                <div className="divide-y md:w-full">
                  {item ? (
                    <div
                      key={item.category}
                      className="flex my-2 py-2 md:justify-between "
                    >
                      <li className="text-[0.85rem]  sm:text-sm tracking-tighter font-semibold">
                         {item.category} - {item.description}.
                      </li>
                      <Image
                        type={"aside"}
                        key={i}
                        styles={
                          "w-20 md:w-30  rounded-full transition-all duration-300"
                        }
                        rootMargin={100}
                        src={[imgs.at(i).at(0)]}
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Drinks;
