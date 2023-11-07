import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ReadBook = ({ book }) => {
  const { bookId } = useParams();
  const [readBook, setReadBook] = useState({});
  const lodadata = useLoaderData();

  useEffect(() => {
    const bookDetails = lodadata.find((book) => book._id === bookId);
    setReadBook(bookDetails);
  }, [bookId, lodadata]);

  return (
    <div className="container mx-auto px-8 md:px-10 lg:px-24 p-5 my-10">
      <div>
        <div>
          <div className=" relative">
            <img className="w-[400px]" src={readBook.image} alt="" />
          </div>
        </div>
        <h1 className="text-[20px] md:text-[40px] font-bold mt-7 md:mt-14">
          {readBook.name}
        </h1>
        <p className=" text-base font-normal text-[#0B0B0B70] mt-3 md:mt-6">
          {readBook.bookContent}
        </p>
      </div>
    </div>
  );
};

export default ReadBook;
