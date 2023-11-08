import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import AllBookCard from "../../components/AllBookCard";

const AllBooks = () => {
  const axios = useAxios();
  const [allBooks, setAllBooks] = useState([]);
  const [showAvailableBooks, setShowAvailableBooks] = useState(false);

  useEffect(() => {
    axios
      .get("/books")
      .then((res) => {
        setAllBooks(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [axios]);

  const filteredBooks = showAvailableBooks
    ? allBooks.filter((book) => book.quantity > 0)
    : allBooks;

  return (
    <div className=" container mx-auto mt-10 mb-5">
      <button
        onClick={() => setShowAvailableBooks(!showAvailableBooks)}
        className="bg-[#29307d] text-white rounded p-2"
      >
        {showAvailableBooks ? "Show All Books" : "Show Available Books"}
      </button>
      <div className="container grid grid-cols-1 lg:grid-cols-4 gap-4 mx-auto">
        {filteredBooks.map((book) => (
          <AllBookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
