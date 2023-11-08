import PropTypes from "prop-types";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";

const BorrowedBookCard = ({ book, borrowedBooks, setBorrowedBooks }) => {
  // console.log(book);

  const axios = useAxios();

  const handleReturnBook = (_id) => {
    const updatedQuantity = book.quantity + 1;
    // console.log(book.quantity);

    // console.log(book.bookId);
    axios
      .patch(`/books/${book.bookId}`, { quantity: updatedQuantity })
      .then((res) => {
        // console.log(res);

        // deleted from database
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Return it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axios
              .delete(`/borrowBook/${book._id}`)

              .then((res) => {
                if (res.data.deletedCount > 0) {
                  // toast.success("Book return successfully");

                  Swal.fire("Return!", "Your book has been Return.", "success");
                  const remaining = borrowedBooks?.filter(
                    (b) => b._id !== book._id
                  );
                  setBorrowedBooks(remaining);
                }
              });
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="book-card mx-auto mt-6 mb-6 md:mb-20">
      <img src={book.image} alt="" />
      <div className="card-info">
        <h6 className="category-name text-xl font-bold">{book.name}</h6>
        <p className="text-[17px] font-medium">Author: {book.author}</p>
        <p className="text-[17px] font-medium">Category: {book.categoryName}</p>
        <p className="text-[17px] font-medium">
          {" "}
          Return Date: {book.returnDate}
        </p>
        <p className="text-[17px] font-medium">
          Borrowed Date: {book.borrowedDate}
        </p>
      </div>
      <button onClick={() => handleReturnBook()} className="btn-card">
        Return Book
      </button>
    </div>
  );
};

BorrowedBookCard.propTypes = {
  book: PropTypes.object,
  borrowedBooks: PropTypes.array,
  setBorrowedBooks: PropTypes.func,
};

export default BorrowedBookCard;
