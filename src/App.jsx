import { useEffect, useRef, useState } from "react";
import "./index.css";
import Timer from "./ui/Timer";
import Navbar from "./ui/Navbar";
import Image from "./ui/Image";
import Sections from "./ui/Sections";
import MenuItem from "./ui/MenuItem";

const foccach = "https://static.wixstatic.com/media/309aeb_8275e2278b9a4e6ca875ef4d5fe36cce~mv2.jpg/v1/fit/w_728,h_1300,q_90,enc_avif,quality_auto/309aeb_8275e2278b9a4e6ca875ef4d5fe36cce~mv2.jpg"
const dessert = "https://static.wixstatic.com/media/309aeb_e150e3835b604bb2bdfcdfbb0c4f2b34~mv2.jpg/v1/fit/w_728,h_1300,q_90,enc_avif,quality_auto/309aeb_e150e3835b604bb2bdfcdfbb0c4f2b34~mv2.jpg";


//imgs
import forthImg from "./assets/imgs/image5.jpeg";

import firstImgCompressed from "./assets/imgs/image1.jpeg";
import secImgCompressed from "./assets/imgs/image3.jpeg"; //
import thirdImgCompressed from "./assets/imgs/image6.jpeg"; //
import sixthImgCompressed from "./assets/imgs/image4.jpeg"; //

//food
import meat from "./assets/food/meat.jpg";
import mainDish from "./assets/food/main.webp";

//compressed
import Drinks from "./ui/Drinks";
import { TbBrandGoogleMaps } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook, CiHeart } from "react-icons/ci";
import { FaWaze } from "react-icons/fa6";
import { BackgroundMusic } from "./ui/BackgroundMusic";


const starters = {
  // ביס פוקאצ'יות מהטאבון
  focaccia: {
    category: "ביס פוקאצ'יות מהטאבון",
    description: "פוקאצ'ה נפוליטנית מהטאבון עם חטיף עגבניות עם גבינת ועלי בזיליקום, רוטב פסטו, דבש, שמנת טבעונית, גבינת צהובה טבעונית, פרמז׳ן טבעוני, גבינת בולגרית טבעונית, שמן זית ואורגנו, עלי אורגנו ובזיליקום, עלי רוקט ועגבניות שרי קלויות, בצל אדום קלוי, זוקיני קלוי, חצילים מטוגנים, ארטישוק בתחמיץ וזיתי קלמטה"
  },

  // ביס מעולם הדגים
  fishDish: {
    category: "ביס מעולם הדגים",
    description: "מנת דגים מגוונת עם חסה לאליק, סקורדליה, בצל ירוק, סלט משוויה, שישיות לימון איקרה לבנה מחבל הבלקן, סלמון מעושן סקוטי, פילה מקרל מעושן, הרינג הולנדי, איולי לימון כבוש ופלפל שושקה, איולי טרטר וצלפים, צ'ימיצ'ורי, כוסברה ומיני פרנה"
  },

  // ביס יווני
  greekDish: {
    category: "ביס יווני",
    description: "מנת סגנון יווני עם עלי גפן בלימון שמן זית ואורגנו, צזיקי עם מלפפון, שום, שמיר ונענע, זיתים יווניים מתובלים, פאווה עם בצל אדום, צלפים, שישיות לימון, פלפל ירוק חריף פרוס וגירוס יווני עם שום ואורגנו"
  },

  // ביס אסאדו וקורנביף
  asadoCornedBeef: {
    category: "ביס אסאדו וקורנביף",
    description: "אסאדו וקורנביף עם עצם מתובלים בבישול ארוך, רוטב ציר של עצמו, איולי בזיליקום, רוטב קארי, מלפפון חמוץ, פלחי עגבניות, בצל אדום וחאסה לאליק לצד באן"
  },

  // ביס של עוף
  chickenDish: {
    category: "ביס של עוף",
    description: "עוף שלם במרינדה של מדורה, רוטב קארי-קוקוס בנגיעות אריסה יפנית, אטריות ביצים, ירקות ירוקים, אדממה, אפונה ירוקה, עלי בוקצוי, שעועית ירוקה, זוקני, עלי נענע, בזיליקום ומעט אריסה יפנית"
  },

  // ביס קבב
  kebabDish: {
    category: "ביס קבב",
    description: "קבב בקר מתובל בנדיבות יחד עם עשבי תיבול, צרוב על פלאנצת גריל, פילה של חצילים צלויים, סחינה פיסטוק, עלי כוסברה ולחוח"
  },

  // ביס צלי בקר
  beefRoastDish: {
    category: "ביס צלי בקר",
    description: "תבשיל בקר עם חומוס, פלפל צילי על מגדרה של בורגול וסלט עלים ירוקים"
  }
}
const firsts = {
  centerSalads: {
    category: "חצילים",
    description: "חציל שלם שרוף עם טחינה גולמית, שמן זית מתובל בשום ומרווה, סומק, מיץ לימון, זרעי עגבניות, קשיו קלוי ובצל ירוק"
  },

  // חומוס-חומוס
  hummus: {
    category: "חומוס-חומוס",
    description: "עם חצילים מטוגנים, ויינגרט, שום, לימון פלפל שיפקה, פטרוזיליה, צנוברים קלויים, טחינה וגרגירי חומוס"
  },

  // סלט כרוב אסייתי-אצות ואקמה
  asianCabbageSalad: {
    category: "סלט כרוב אסייתי-אצות ואקמה",
    description: "איטריות שעועית, בדר גוליאן, אפונה, שעועית ירוקה, על נענע, על כוסברה בצל ירוק, פפאיה ירוקה, פלפל צ'ילי אדום, גינגר כבוש, פטריות שיטאקי, חסב, כרוב לבן, כרוב אדום, בוטנים וסומום קלוי"
  },

  // סלט עגבניות שרי
  cherryTomatoSalad: {
    category: "סלט עגבניות שרי",
    description: "שרי צבעוני ובזיליקום - מיקס שרי, על בזיליקום, זיתי קלמטה, נבעות זיתונות, רצועת מלפפון ירוק בתיבול שום שמן ולימון"
  },

  // קרפצ'יו בקר
  beefCarpaccio: {
    category: "קרפצ'יו בקר",
    description: "סינטה פרוסה, סקורדליה, שמן בצל ירוק, נקטר בלסמי, קרם עגבניות, על מיקרן אפונה"
  },

  // סלט פיצוחים
  nutSalad: {
    category: "סלט פיצוחים",
    description: "רוקט, נענע, פטרוזיליה, כוסברה, בזיליקום, פיצוחים פיקנטיים מקורמלים, שמן זית, מיץ לימון, סוכר, בורגול ירק קצוץ, פטרוזיליה, כוסברה, בצל ירוק, נענע, מלפפון, עגבניות"
  },

  burgulSalad: {
    category: "סלט בורגול",
    description: "ירק קצוץ, פטרוזיליה, כוסברה, בצל ירוק, נענע, מלפפון ועגבניה"
  },

  centers: {
    category: "מטבלים ולחמים",
    description: "לחם הבית, מוגש לצד לזיתים מתובלים, פלפל חריף וחצילים בתחמיץ",
  }
};
const mains = {
  mainDish: {
    category: "פילה דניס צלוי בשמן זית ואורגנו",
    description: "מוגש על מצע של ציזיקי לצד עלי גפן, זיתים מתובלים, שמן בצל ירוק, לימון על הגריל, סלסה עגבניות ולימון כבוש"
  },

  beefWithTruffle: {
    category: "פילה בקר לצד פירה כמהין",
    description: "באן אסאדו וקרם גזר פיקנטי"
  },

  mulidOnSweetPotato: {
    category: "מולארד על מצע של קרם בטטה",
    description: ""
  },

  chickenInSumac: {
    category: "פרגית בסומק על מצע ריזוטו",
    description: ""
  },

  veganRavioliArtichoke: {
    category: "רביולי ארטישוק ברוטב פטריות - טבעוני",
    description: ""
  },
};
const spacialDesserts = {
  category: "מתוקים ומפנקים",
  description: "שלל קינוחים מפנקים מוגשים לרחבת הריקודים בליווי מגוון פירות העונה"
}
const afterParty = {
  category: "אפטר פארטי",
  portions: "1 חנות",
  description: "בורקס טורקי - בורקס במבחר טעמים, אריסה, ביצה קשה, מלפפון חמוץ, חצילים, לצד רסק עגבניות פיקנטי, חמוצי הבית, טחינה ועמבה"
}
const cocktails = {
  whiskeySourNY: {
    category: "וויסקי סוואר ניו יורק טוויסט",
    description: "בורבון איכותי, מיץ לימון טרי, סירופ סוכר, תוספת של יין אדום יבש לשכבה עליונה וארומה מודרנית"
  },
  tacoMargarita: {
    category: "טאקו מרגריטה",
    description: "טקילה אגבה, ליקר תפוזים, מיץ ליים, סירופ צ'ילי קלוי, מלח ופלפל על השפה – טעמים חריפים ומלוחים שמזכירים טאקו מקסיקני"
  },
  greyGarden: {
    category: "גרייק גארדן",
    description: "ג'ין יבש, ליקר סיגליות, תה יסמין מצונן, סירופ לבנדר, ומי טוניק – קוקטייל פרחוני, מרענן ואלגנטי"
  },
  jasmine: {
    category: "גזמין",
    description: "וודקה וניל, מיץ אשכוליות לבן, סירופ יסמין, מי ורדים ולימון – שילוב ארומטי ועדין של פרחים והדרים"
  }
};

const fullMenu = {
  starters: {
    stars: Object.values(starters).map(
      item => `${item.category} ${item.description.length ? "-" : ""} ${item.description}`),
  },
  firsts: {
    items: Object.values(firsts).map(
      item => `${item.category} ${item.description.length ? "-" : ""} ${item.description}`
    )

  },
  mains: {
    items: Object.values(mains).map(
      item => `${item.category} ${item.description.length ? "-" : ""} ${item.description}`
    )
  },
  desserts: {
    regularDesserts: [`${spacialDesserts.category} ${spacialDesserts.description.length ? "-" : ""} ${spacialDesserts.description}`],
  },
  afterParty: {
    items: [`${afterParty.description}`],
  },
  drinks: {
    items: Object.values(cocktails).map(
      item => `${item.category} ${item.description.length ? "-" : ""} ${item.description}`
    ),
  },
};



function App() {
  const [menuDisplay, setMenuDisplay] = useState(false);
  const [timerOnTop, setTimerOnTop] = useState(false);
  const width = window.innerWidth;
  const timerRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      const windowYPos = window.scrollY || window.pageYOffset;
      if (windowYPos >= 500) {
        if (isElementAtTop()) {
          setTimerOnTop(true);
        }
      } else {
        setTimerOnTop(false);
      }
    };

    const isElementAtTop = () => {
      const timer = timerRef.current;
      if (!timer) return false;
      const timerRect = timer.getBoundingClientRect();
      if (timerOnTop) return;
      return timerRect.top <= 0;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [timerOnTop]);

  function handleShowMenu() {
    setMenuDisplay((display) => !display);
  }

  return (
    <main className="relative font-bds">
      <BackgroundMusic startTime={11} />
      <Sections id={"sec-1"} type="header" styles="h-screen mb-10 pb-5">
        <div
          className={`flex flex-row justify-start py-1 items-center md:justify-start  border-b-2`}
        >
          <div>
            <div
              onClick={handleShowMenu}
              className={`${timerOnTop
                ? "fixed top-2 right-4 content-center"
                : "relative content-start"
                }  z-40 size-10 pt-2 space-y-2  cursor-pointer transition-transform`}
            >
              <p
                className={`w-full rounded-md h-0.5 md:h-1 bg-slate-900 duration-150 ${menuDisplay ? `absolute top-4 rotate-45` : ""
                  }`}
              ></p>
              <p
                className={`w-4/6 rounded-md h-0.5  md:h-1 bg-slate-900 ${menuDisplay ? "hidden" : ""
                  }`}
              ></p>
              <p
                className={`w-full rounded-md h-0.5 md:h-1 bg-slate-900 duration-150 ${menuDisplay ? "absolute top-2 -rotate-45" : ""
                  }`}
              ></p>
            </div>
          </div>
          <h2 className="duration-150 h-fit text-xl mr-[20%] sm:mx-[41.5%]  md:text-3xl font-extrabold">
            EDEN
            <span className="font-script text-2xl pr-2 pl-1  md:text-5xl">
              and
            </span>
            OFEK
          </h2>
        </div>
        <div className="mt-2 md:my-16 flex flex-wrap md:flex-nowrap overflow-hidden content-center md:h-auto  sm:justify-center md:justify-evenly">
          {width < 435 ? (
            <Image
              styles={`w-[100%] sm:h-[49%] sm:w-[31%]  ml-1 md:w-[24%] sm:m-3 md:m-0`}
              src={[forthImg]}
              overLay="WE’RE GETTING MARRIED"
            />
          ) : (
            <Image
              styles={`w-[100%] sm:h-[49%] sm:w-[31%] mb-1 ml-1 md:w-[24%] sm:m-3 md:m-0`}
              src={[forthImg]}
            />
          )}
          <Image
            styles={`hidden sm:block sm:h-[49%] sm:w-[31%] md:w-[24%] sm:m-3 md:m-0 `}
            src={[secImgCompressed]}
          />
          <Image
            styles={`hidden sm:block sm:h-[49%] sm:w-[31%] mb-1 md:max-w-full md:w-[24%] sm:m-3 md:m-0`}
            src={[sixthImgCompressed]}
          />
          <Image
            styles={`hidden sm:block sm:h-[49%] sm:w-[31%] ml-1 md:w-[24%] sm:m-3 md:m-0 `}
            src={[thirdImgCompressed]}
          />
        </div>
        <div
          ref={timerRef}
          className={`${timerOnTop && "fixed top-0 left-0 bg-slate-50 z-10 shadow-md pb-1"
            } w-full flex justify-center mb-5`}
        >
          <Timer styles={timerOnTop} />
        </div>
        <div className={`flex sm:hidden justify-evenly mt-10`}>
          <Image
            styles={`w-28 h-32`}
            src={[sixthImgCompressed]}
            overLay="25"
            overLayType="bottom"
          />
          <Image
            styles={`w-28 h-32`}
            src={[thirdImgCompressed]}
            overLay="07"
            overLayType="bottom"
          />
          <Image
            styles={`w-28 h-32 `}
            src={[secImgCompressed]}
            overLay="10"
            overLayType="bottom"
          />
        </div>
      </Sections>
      <section
        id="sec-2"
        className={`border-t text-slate-600 mb-10 mt-10 md:mt-0 pt-10 flex flex-col justify-between`}
      >
        <div className="sm:flex justify-evenly items-center text-lg md:text-lg sm:m-10">
          <div className="space-y-12 sm:mt-0">
            <div className="mx-auto  text-center space-y-3 ">
              <h2 className="text-xl md:text-2xl font-bold text-gray-950">תאריך</h2>
              <p>
                יום חמישי<span className=" font-sans">,</span> י&quot;ד בתמוז התשפ&quot;ה <br />
                10.07.2025
              </p>
            </div>
            <div className="mx-auto text-center  space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-950">שעה</h2>
              <p>
                קבלת פנים 19:30
                <br />
                חופה וקידושין 20:30
              </p>
            </div>
            <div className="mx-auto text-center  space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-950">מיקום</h2>
              <p>׳אודאון׳
                <br />
                עמק חפר
              </p>
            </div>
            <div className="flex gap-14 justify-center">

              <div className="text-center">
                <p className="pb-2">הוראות הגעה</p>
                <div className="flex flex-row gap-10">
                  <a
                    target="blank"
                    href="https://www.google.com/maps/search/?api=1&query=אודאון"
                  >
                    <p className="flex flex-col items-center hover:text-slate-900 hover:font-semibold ">
                      <TbBrandGoogleMaps />
                      <span className="text-[0.7rem] md:text-sm">Maps</span>
                    </p>
                  </a>
                  <a
                    target="blank"
                    href="https://www.waze.com/he/live-map/directions?from=place.w.22872388.228723880.171699"
                  >
                    <p className="flex flex-col items-center hover:text-slate-900 hover:font-semibold">
                      <FaWaze />
                      <span className="text-[0.7rem] md:text-sm">Waze</span>
                    </p>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>
      <Sections id={"sec-3"} styles="py-3 border-t-2 my-2">
        <h2 className="text-center font-script text-6xl md:text-9xl mt-4 mb-8 decoration-slate-400/20">
          Menu
        </h2>
        <div className="md:flex md:mt-10 md:py-2 md:justify-between">
          <MenuItem
            menuItem={[
              fullMenu.starters.stars,
            ]}
            topHeader={"Welcome Buffet"}
            header={["ביסים"]}
          />
          <Image
            type="below"
            rootMargin={100}
            src={[foccach]}
            styles={`mx-auto md:rounded-md self-center size-/12 mb-6 md:mx-0 md:mb-0 md:size-3/12 transition-all duarion-300`}
          />
        </div>

        <div>
          <div className="md:flex md:flex-row-reverse md:mt-10 md:gap-10 md:border-y-2 md:py-2 md:justify-between">
            <MenuItem
              menuItem={[fullMenu.firsts.items]}
              topHeader={"Let's Begin"}
              header={["פתיחה"]}
            />
            <Image
              type="below"
              rootMargin={100}
              src={[meat]}
              styles={`mx-auto md:rounded-md self-center size-9/12 mb-6 md:mx-2 md:mb-0 md:size-3/12 transition-all duarion-300`}
            />
          </div>
          <>
            <div className="md:flex md:mt-10 md:border-b-2 md:py-2 md:justify-between">
              <MenuItem
                menuItem={[fullMenu.mains.items]}
                topHeader={"The Main Event"}
                header={["עיקריות"]}
              />
              <Image
                type="below"
                rootMargin={100}
                src={[mainDish]}
                styles={`mx-auto md:rounded-md self-center size-9/12 mb-6 md:mx-0 md:mb-0 md:size-3/12 transition-all duarion-300`}
              />
            </div>
            <div className="md:flex md:flex-row-reverse md:mt-10 md:py-2 md:justify-end md:gap-10">
              <MenuItem
                menuItem={[fullMenu.desserts.regularDesserts, fullMenu.afterParty.items]}
                topHeader={"Midnight Cravings"}
                header={["סיום מתוק", "אפטר פרטי"]}
              />

              <Image
                type="below"
                rootMargin={100}
                src={[dessert]}
                styles={`mx-auto md:rounded-md self-center size-9/12 mb-6 md:mx-0 md:mb-0 md:size-3/12 transition-all duarion-300`}
              />

            </div>
          </>
        </div>
      </Sections>
      <Sections id={"sec-4"} styles="py-3 border-t-2 my-2">
        <Drinks
          menuItem={[fullMenu.drinks.items]}
          header={["קוקטיילים"]}
          topHeader={"Shake It"}
        />
      </Sections>
      <section className="border-t-2 py-2">
        <div className="flex flex-col-reverse relative items-center gap-3 mt-2 md:flex-row md:justify-evenly md:p-3">
          <div className="flex flex-row-reverse h-full mb-3 justify-center gap-x-3 text-3xl font-semibold md:text-9xl md:space-y-14 md:mb-0 md:mr-28 md:block">
            <p>10</p>
            <p>07</p>
            <p>25</p>
          </div>
          <Image
            styles="w-full sm:w-[33%] md:mr-10 "
            src={[firstImgCompressed]}
          />
          <div className="text-center text-4xl md:text-7xl md:mr-5">
            <p>The</p>
            <p>Wedding</p>
          </div>
        </div>
      </section>
      <footer className="mt-4 mb-8">
        <div>
          <div className="flex flex-row-reverse justify-center mt-4 mb-6 md:text-3xl">
            <span className="pr-2 font-bold ">See You Soon</span>
            <span className="text-sm">
              <CiHeart />
            </span>
          </div>

          <div className="flex flex-row-reverse justify-center space-x-8 md:text-xl">
            <a target="blank" href="https://www.instagram.com/edeni_hindi/">
              <p className="flex flex-col items-center hover:text-slate-900 hover:font-semibold">
                <FaInstagram />
                <span className="text-[0.6rem] md:text-sm">Instagram</span>
              </p>
            </a>
            <a target="blank" href="https://www.facebook.com/dnhyndy">
              <p className="flex flex-col items-center hover:text-slate-900 hover:font-semibold">
                <CiFacebook />
                <span className="text-[0.6rem] md:text-sm">Facebook</span>
              </p>
            </a>
          </div>
        </div>

        <div className="mt-5 text-[0.7rem] flex gap-x-2 flex-row-reverse mx-auto w-fit">
          <span className="">Made with</span>
          <span className="pt-[0.2rem]"><CiHeart /></span>
          <span> by <a target="_blank" href="tel:+972507984525" >Ofek Ben Avraham & Shmuel Atar</a></span>
        </div>
      </footer>

      {menuDisplay && <Navbar onClick={handleShowMenu} />}
    </main>
  );
}

export default App;
