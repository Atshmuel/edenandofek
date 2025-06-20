import Image from "./Image";

import greak from "../assets/cocktails/greak.jpeg";
import jesmin from "../assets/cocktails/jesmin.jpeg";
import ny from "../assets/cocktails/ny.jpg";
import tako from "../assets/cocktails/tako.jpg";

const imgs = [
  [ny],
  [tako],
  [greak],
  [jesmin],
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
                          "w-20 h-20  rounded-full transition-all duration-300"
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
