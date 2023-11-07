import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import BookCard from "../../components/BookCard/BookCard";

const CategoryBooks = () => {
  const { categoryName } = useParams();
  console.log(categoryName);
  const [books, setBooks] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    axios
      .get(`/books/${categoryName}`)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [axios, categoryName]);

  return (
    <div>
      <h1 className=" text-center font-bold text-3xl md:text-4xl mt-24 mb-6 underline ">
        Books Of {categoryName ? categoryName : "Selected book"}
      </h1>

      <div className=" container flex flex-col md:flex-row gap-4 mx-auto">
        {books?.map((book) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryBooks;
