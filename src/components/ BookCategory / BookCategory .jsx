import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import BookCategoryCard from "./ BookCategoryCard";

function BookCategory() {
  const axios = useAxios();
  const [bookCategories, setBookCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBookCategories() {
      try {
        const res = await axios.get("/book-categories");
        setBookCategories(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchBookCategories();
  }, [axios]);
  // If the data is still loading, display showin a loading spinner
  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  // If an error occurred during the request, display an error message
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto mt-24">
      <h1 className="text-2xl dark:text-white md:text-4xl font-bold px-2">
        Explore
        <span className="text-[#29307d] dark:text-white">Mystery Books</span>
      </h1>

      <div className="  flex flex-col md:flex-row mx-auto gap-8 flex-1">
        {bookCategories.map((categorie) => (
          <BookCategoryCard
            key={categorie._id}
            categorie={categorie}
          ></BookCategoryCard>
        ))}
      </div>
    </div>
  );
}

export default BookCategory;
