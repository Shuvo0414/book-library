import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";

const BookDetails = ({ book }) => {
  const [bookDetails, setBookDetails] = useState({});
  const lodadata = useLoaderData();
  const { bookId } = useParams();
  const { user } = useContext(AuthContext);
  const [returnDate, setReturnDate] = useState("");

  //   console.log(returnDate);
  //   console.log(user);

  useEffect(() => {
    const bookDetails = lodadata.find((book) => book._id === bookId);
    setBookDetails(bookDetails);
  }, [bookId, lodadata]);

  return (
    <div className=" container mx-auto  mt-24 mb-6">
      <div className="card mx-auto md:mx-0   w-[300px] h-[450px]  ">
        <img
          src={bookDetails.image}
          alt="Shoes"
          className="rounded-lg w-[286px] h-[286px] m-[7px]"
        />
        <div className=" p-4 space-y-1">
          <h2 className="card-title">{bookDetails.name}</h2>

          <p className=" text-[17px] font-medium">
            Author : {bookDetails.author}
          </p>
          <p className="text-[17px] font-medium">
            Category : {bookDetails.categoryName}
          </p>
          <p className="text-[17px] font-medium">
            Quantity : {bookDetails.quantity}
          </p>
        </div>
      </div>
      <p className=" p-6 md:w-[600px] mx-auto md:mx-0">
        {bookDetails.shortDescription}
      </p>
      <div className="card-actions flex  mt-2 p-6">
        <div>
          <button
            className=" px-4 py-2 bg-[#29307d] text-white rounded-lg"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Borrow
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg text-center">
                Email: {user.email}
              </h3>
              <p className="py-4 text-center text-base font-medium">
                Name: {user.displayName}
              </p>
              <div className=" flex justify-between mt-4">
                <form>
                  <label>
                    Return Date:
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                    />
                  </label>
                </form>
                <button className=" py-2 px-4 rounded-md bg-[#29307d] text-white">
                  Submit
                </button>
              </div>
            </div>
          </dialog>
        </div>
        <Link to={`/readBook/${bookDetails._id}`}>
          <button className="px-6 py-2 bg-[#29307d] text-white rounded-lg">
            Read
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;
