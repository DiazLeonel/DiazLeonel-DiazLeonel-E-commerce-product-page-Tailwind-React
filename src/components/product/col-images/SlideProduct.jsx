import { useEffect, useRef, useState } from "react";
import PreviousIcon from "@/components/icons/PreviousIcon";
import NextIcon from "@/components/icons/NextIcon";
import CloseIcon from "../../icons/CloseIcon";

export default ({
    ARRAY_IMGS = [],
    ARRAY_IMG_SMALL = [],
    isOpenModal = false,
    handleCloseModal = null,
    handleOpenModal = () => { },
    ...props }) => {


    const btnSlider = useRef(null)
    const [index, setIndex] = useState(0)

    /* useEffect(() => {
        isOpenModal && btnSlider.current.classList.remove("md:hidden") 
    }, [isOpenModal]) */


    const handleClickNext = () => {
        index === ARRAY_IMGS.length - 1 ? setIndex(0) : setIndex(index + 1);
    };

    const handleClickPrev = () => {
        index === 0 ? setIndex(ARRAY_IMGS.length - 1) : setIndex(index - 1);
    };

    return (
        <section  {...props}>
            {
                isOpenModal && (<button onClick={handleCloseModal} className="md:col-span-4 text-right">x</button>/* <CloseIcon onClick={handleCloseModal} className="md:col-span-4 relative right-0"/> */
                )}
            <div className="relative col-span-4">
                <img
                    src={ARRAY_IMGS[index]}
                    alt=""
                    className="aspect-[16/13] w-full md:aspect-[16/17] md:rounded-md md:cursor-pointer"
                    onClick={handleOpenModal}
                />
                <div ref={btnSlider} className={`absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4 ${!isOpenModal && "md:hidden"}`}>
                    <button
                        className=" grid h-10 w-10 place-items-center rounded-full bg-white-primary"
                        onClick={handleClickPrev}>
                        <PreviousIcon />
                    </button>
                    <button
                        className=" grid h-10 w-10 place-items-center rounded-full bg-white-primary"
                        onClick={handleClickNext}>
                        <NextIcon />
                    </button>
                </div>
            </div>
            {ARRAY_IMG_SMALL.map((smallImg, i) => (
                <div className="relative rounded-md overflow-hidden cursor-pointer group" onClick={() => { setIndex(i) }} key={i}>
                    <img
                        src={smallImg}
                        alt=""
                        className="hidden md:block md:rounded-md "
                    />
                    <span className={`absolute top-0 h-full w-full hover:bg-[rgba(255,255,255,0.5)] ${i === index && "bg-[rgba(255,255,255,0.5)] border-orage-primary border-[3px] " }`} ></span>
                </div>
            ))}
        </section>
    );
};
