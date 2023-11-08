import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";

const BookDetails = ({ book }) => {
  const [bookDetails, setBookDetails] = useState({});
  const lodadata = useLoaderData();
  const { bookId } = useParams();
  const { user } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [disable, setBorrowBtnDisable] = useState();
  const axios = useAxios();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const returnDate = form.date.value;
    // Get the current date in "YYYY-MM-DD" format
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    const { _id, ...newBook } = bookDetails;
    // console.log(bookDetails);
    const borrowBook = {
      ...newBook,
      quantity: newBook.quantity - 1,
      bookId: _id,
      returnDate,
      email: user.email,
      borrowedDate: formattedDate,
    };

    // console.log(borrowBook);

    // console.log(newBook);

    // send to server side
    axios
      .post("/borrowBook", borrowBook)
      .then(() => {
        // console.log(res.data);
        // update quantity
        const updatedQuantity = bookDetails.quantity - 1;
        setBookDetails({ ...bookDetails, quantity: updatedQuantity });

        // patch quantity
        axios
          .patch(`/books/${bookId}`, { quantity: updatedQuantity })
          .then((res) => {
            // console.log(res.data);

            if (res.data.modifiedCount > 0) {
              toast.success("Borrowed Book successfully");
            }

            // Disable the "Borrow" button if the quantity is now 0
            setBorrowBtnDisable(updatedQuantity === 0);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
    // close modal
    setIsModalOpen(false);
  };

  useEffect(() => {
    const bookDetails = lodadata?.find((book) => book._id === bookId);
    setBookDetails(bookDetails);
    setBorrowBtnDisable(bookDetails.quantity === 0);
  }, [bookId, lodadata]);
  // console.log(lodadata);

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
            className={`px-4 py-2 rounded-lg ${
              disable ? "bg-[#5e65b0] text-white" : "bg-[#29307d] text-white"
            }`}
            onClick={() => setIsModalOpen(true)}
            disabled={disable}
          >
            Borrow
          </button>
          <dialog
            open={isModalOpen}
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
              <div className="">
                <form
                  onSubmit={handleSubmit}
                  method="dialog"
                  className=" flex items-center justify-between"
                >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Return Date</span>
                    </label>
                    <input type="date" name="date" id="" />
                  </div>

                  <div>
                    <button
                      className="btn"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Submit
                    </button>
                  </div>
                </form>
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
