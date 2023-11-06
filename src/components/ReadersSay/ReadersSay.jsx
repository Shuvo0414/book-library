import readerssay from "../../assets/readerssay.jpeg";
import { ImQuotesLeft } from "react-icons/im";
const ReadersSay = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:h-[480px] mt-24 mb-12">
      <div className=" flex justify-center items-center bg-white">
        <img src={readerssay} alt="" />
      </div>

      <div className=" bg-[#2a2a2a] text-white flex items-center">
        <div className=" bg-[#2a2a2a]  p-4">
          <h1 className="text-[36px] font-bold md:ml-5 mb-5">
            What Readers Say
          </h1>
          <p></p>
          <p className=" relative text-xl font-normal md:ml-20 box-content w-[370px]">
            <ImQuotesLeft className=" hidden lg:block absolute -ml-8"></ImQuotesLeft>
            Meeting rooms of your library are very comfortable and they have all
            necessary equipment required for my business purposes.
          </p>

          <h1 className="text-base font-bold my-6  md:ml-20 text-[#76bd42]">
            WILL ADAMS, STUDENT
          </h1>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ReadersSay;
