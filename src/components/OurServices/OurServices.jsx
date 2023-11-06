import "./OurServices.css";
import { BsArrowRight } from "react-icons/bs";

import librarian from "../../assets/librarian.png";
import meeting from "../../assets/meeting.png";
import studyRoom from "../../assets/study-room.png";
import research from "../../assets/research.png";
import exhibitions from "../../assets/exhibitions.png";
import computerclasss from "../../assets/computerclasss.png";

const OurServices = () => {
  return (
    <div className=" container mx-auto mt-24 ">
      <h1 className="  text-2xl md:text-[36px] font-bold px-2">
        Our <span className="text-[#29307d]">Services</span>
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 mt-6 mb-6 gap-1 md:gap-0  ">
        <div className="services  md:border-r-2 space-y-4">
          <img className=" box-icon " src={librarian} alt="" />
          <h3 className=" text-lg md:text-2xl font-bold">Ask a Librarian</h3>
          <p className="services-description">
            Feel free to ask our librarians about any book located at our
            library storage.
          </p>
          <div className=" flex items-center gap-3 font-bold text-base text-[#29307d]">
            <h1 className=" ">READ MORE</h1>
            <BsArrowRight className=" text-lg"></BsArrowRight>
          </div>
        </div>
        {/* 2 */}
        <div className="services   md:border-b-2 space-y-4">
          <img className=" box-icon " src={meeting} alt="" />
          <h3 className=" text-lg md:text-2xl font-bold">Meeting Rooms</h3>
          <p className="services-description">
            Our library provides well-equipped meeting rooms ranging in size
            from 12 to 300.
          </p>
          <div className=" flex items-center gap-3 font-bold text-base text-[#29307d]">
            <h1 className=" ">READ MORE</h1>
            <BsArrowRight className=" text-lg"></BsArrowRight>
          </div>
        </div>
        {/* 3 */}
        <div className="services md:border-l-2 space-y-4">
          <img className=" box-icon " src={studyRoom} alt="" />
          <h3 className=" text-lg md:text-2xl font-bold">Study Rooms</h3>
          <p className="services-description">
            Our study rooms located in library spaces can be reserved up to two
            weeks in advance.
          </p>
          <div className=" flex items-center gap-3 font-bold text-base text-[#29307d]">
            <h1 className=" ">READ MORE</h1>
            <BsArrowRight className=" text-lg"></BsArrowRight>
          </div>
        </div>
        {/* 4 */}
        <div className="services  md:border-t-2 space-y-4">
          <img className=" box-icon " src={research} alt="" />
          <h3 className=" text-lg md:text-2xl font-bold">Research</h3>
          <p className="services-description">
            MagicBook library offers various set of resources for researchers
            and scholar
          </p>
          <div className=" flex items-center gap-3 font-bold text-base text-[#29307d]">
            <h1 className=" ">READ MORE</h1>
            <BsArrowRight className=" text-lg"></BsArrowRight>
          </div>
        </div>
        {/* 5 */}
        <div className="services  md:border-l-2 space-y-4">
          <img className=" box-icon " src={exhibitions} alt="" />
          <h3 className=" text-lg md:text-2xl font-bold">Exhibitions</h3>
          <p className="services-description">
            Feel free to visit any of our regular book exhibitions featuring
            popular authors.
          </p>
          <div className=" flex items-center gap-3 font-bold text-base text-[#29307d]">
            <h1 className=" ">READ MORE</h1>
            <BsArrowRight className=" text-lg"></BsArrowRight>
          </div>
        </div>
        {/* 6 */}
        <div className="services md:border-t-2 md:border-l-2 space-y-4">
          <img className=" box-icon " src={computerclasss} alt="" />
          <h3 className=" text-lg md:text-2xl font-bold">Computer Classes</h3>
          <p className="services-description ">
            Gain access to the immense eBook database using our computer
            classes.
          </p>
          <div className=" flex items-center gap-3 font-bold text-base text-[#29307d]">
            <h1 className=" ">READ MORE</h1>
            <BsArrowRight className=" text-lg"></BsArrowRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
