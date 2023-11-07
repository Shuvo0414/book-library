import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import AllBookCard from "../../components/AllBookCard";

const AllBooks = () => {
  const axios = useAxios();

  const [allBook, setAllBook] = useState([]);

  useEffect(() => {
    axios
      .get("/books")
      .then((res) => {
        // console.log(res.data);
        setAllBook(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [axios]);

  return (
    <div>
      <div className="container grid grid-cols-1 lg:grid-cols-4 gap-4 mx-auto">
        {allBook.map((book) => (
          <AllBookCard key={book._id} book={book}></AllBookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
