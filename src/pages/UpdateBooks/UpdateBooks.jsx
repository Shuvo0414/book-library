import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";

const UpdateBooks = () => {
  const { id } = useParams();
  const axios = useAxios();

  const handleUpdateBook = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;

    const author = form.author.value;
    const categoryName = form.categoryName.value;
    const rating = form.rating.value;

    const updateBook = {
      image,
      name,
      author,
      categoryName,
      rating,
    };
    console.log(updateBook);

    // send data to server side

    axios
      .put(`/books/${id}`, updateBook)
      .then((response) => {
        console.log("Book added successfully:", response.data);
        toast.success("Book Updated successfully");
      })
      .catch((error) => {
        console.error("Error Updating book:", error);
      });
  };

  return (
    <div>
      <div className="p-4 bg-gray-200 mt-20 mb-20 lg:h-[65vh]">
        <h2 className="text-4xl font-bold text-center mb-4 mt-4">
          Update Book
        </h2>
        <form onSubmit={handleUpdateBook}>
          <div className="md:flex gap-4">
            <div className="form-control mb-4 md:w-1/2">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                required
                type="text"
                name="name"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control mb-4 md:w-1/2">
              <label htmlFor="author" className="label">
                Author Name
              </label>
              <input
                required
                type="text"
                name="author"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="md:flex gap-4">
            <div className="form-control mb-4 md:w-1/2">
              <label htmlFor="category" className="label">
                Category
              </label>
              <select
                name="categoryName"
                className="select select-bordered w-full"
              >
                <option value="Novel">Novel</option>
                <option value="Thriller">Thriller</option>
                <option value="History">History</option>
                <option value="Drama">Drama</option>
              </select>
            </div>
            <div className="form-control mb-4 md:w-1/2">
              <label htmlFor="rating" className="label">
                Rating
              </label>
              <input
                type="text"
                name="rating"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control mb-4 md:w-full">
            <label htmlFor="image" className="label">
              Image
            </label>
            <input
              type="img"
              name="image"
              className="input input-bordered w-full"
            />
          </div>

          <input
            className="btn btn-block bg-[#29307d] hover:bg-[#444db5] text-white"
            type="submit"
            value="Add Book"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateBooks;
