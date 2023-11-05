import { Swiper, SwiperSlide } from "swiper/react";
import "./banner.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";
import banner1 from "../../assets/book-slide-1.jpeg";
import banner2 from "../../assets/book-slide-2.jpeg";
import banner3 from "../../assets/book-slide-3.jpeg";
const Banner = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className=" relative w-full ">
            <img src={banner1} className="w-full object-fill " />
            <div className="absolute flex items-center left-0 top-0  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
              <div className=" text-white md:space-y-7 md:pl-24 md:w-1/2 ">
                <p className="  font-normal  text-sm md:text-base px-4 ">
                  THE LIBRARY IS A PLACE FOR EVERYONE <br /> TO EXPLORE THE
                  WORLD OF READING
                </p>
                <h1 className=" text-4xl px-4 font-bold md:text-6xl">
                  Small Stories by Sam Wilson
                </h1>
                <p className=" px-4">OCTOBER 15, 2022</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative w-full ">
            <img src={banner2} className="w-full object-fill " />
            <div className="absolute flex items-center left-0 top-0  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
              <div className=" text-white md:space-y-7 md:pl-24 md:w-1/2 ">
                <p className="  font-normal  text-sm md:text-base px-4 ">
                  THE LIBRARY IS A PLACE FOR EVERYONE <br /> TO EXPLORE THE
                  WORLD OF READING
                </p>
                <h1 className=" text-4xl px-4 font-bold md:text-6xl">
                  New Little World by Chris Awdry
                </h1>
                <p className=" px-4">NOVEMBER 07, 2022</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative w-full ">
            <img src={banner3} className="w-full object-fill " />
            <div className="absolute flex items-center left-0 top-0  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
              <div className=" text-white md:space-y-7 md:pl-24 md:w-1/2 ">
                <p className="  font-normal  text-sm md:text-base px-4 ">
                  THE LIBRARY IS A PLACE FOR EVERYONE <br /> TO EXPLORE THE
                  WORLD OF READING
                </p>
                <h1 className=" text-4xl px-4 font-bold md:text-6xl">
                  Ascendant by Jack Campbell
                </h1>
                <p className=" px-4">NOVEMBER 09, 2022</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
