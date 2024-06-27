import HandImage1 from "../../assets/images/hand1.png";
import HandImage2 from "../../assets/images/hand2.png";
import HandImage3 from "../../assets/images/hand3.png";
import HandImage4 from "../../assets/images/hand4.png";
import HandImage5 from "../../assets/images/hand5.png";
import HandImage6 from "../../assets/images/hand6.svg";

export const HeroSection = () => {
    return(
        <section className=" hero bg-custom-yellow px-20 relative ">
            <svg width="491" height="580" viewBox="0 0 491 682" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-1/4 absolute xl:top-4 left-5 xl:left-20 z-0 ">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M419.633 305.386C415.3 300.316 414.921 292.749 419.223 287.651C491.867 201.556 512.596 99.4273 462.986 41.3737C404.143 -27.4835 268.627 -8.26067 160.303 84.309C51.9793 176.879 11.8668 307.741 70.7095 376.598C75.043 381.669 75.4213 389.236 71.1197 394.334C-1.5244 480.429 -22.2535 582.557 27.3569 640.611C86.1997 709.468 221.715 690.245 330.039 597.676C438.363 505.106 478.476 374.244 419.633 305.386Z" fill="#FEBC0A" fill-opacity="0.7"/>
            </svg>
            <svg width="1200" height="780" viewBox="0 0 1287 972" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3/4 absolute xl:-top-12 xl:right-20 ">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M821.071 13.6675C655.775 -35.0044 482.32 59.5381 433.648 224.834L362.468 466.572C357.473 483.534 338.598 493.236 321.725 487.949C320.341 487.515 318.951 487.093 317.554 486.682C186.398 448.062 48.7678 523.078 10.1484 654.234C-28.471 785.391 46.5449 923.021 177.701 961.64C269.052 988.539 363.543 960.311 425.533 896.384C461.972 858.807 523.422 839.21 573.634 853.995L815.372 925.176C980.668 973.848 1154.12 879.305 1202.8 714.009L1273.98 472.271C1322.65 306.975 1228.11 133.52 1062.81 84.8481L821.071 13.6675Z" fill="#FEBC0A" fill-opacity="0.7"/>
            </svg>
            <h1 className="text-center font-bold text-5xl xl:text-8xl py-32 z-10 relative">Let’s create something <br /> great together.</h1>
            <div className="flex items-center justify-around ">
                <img src={HandImage1} alt="" className=" w-14 xl:w-52 z-20"/>
                <img src={HandImage2} alt="" className="w-14 xl:w-52 z-20"/>
                <img src={HandImage3} alt="" className="w-14 xl:w-52 z-20"/>
                <img src={HandImage4} alt="" className="w-14 xl:w-52 z-20"/>
                <img src={HandImage5} alt="" className="w-14 xl:w-52 z-20"/>
                <img src={HandImage6} alt="" className="w-14 xl:w-52 z-20"/>
            </div>
        </section>
    );
}