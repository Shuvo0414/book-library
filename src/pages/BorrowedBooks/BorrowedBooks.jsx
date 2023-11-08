import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../Provider/AuthProvider";
import useAxios from "../../hooks/useAxios";
import BorrowedBookCard from "../../components/BorrowedBookCard/BorrowedBookCard";

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const axios = useAxios();

  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const url = `/borrowed?email=${user?.email}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        setBorrowedBooks(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [axios, url]);

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-6">
      {borrowedBooks?.length > 0 ? (
        borrowedBooks?.map((book) => (
          <BorrowedBookCard
            key={book._id}
            book={book}
            borrowedBooks={borrowedBooks}
            setBorrowedBooks={setBorrowedBooks}
          />
        ))
      ) : (
        <div className="no-products-message h-[50vh] mt-24">
          <p className="text-2xl font-bold">Your Borrowed Book is empty.</p>
        </div>
      )}
    </div>
  );
};

export default BorrowedBooks;
