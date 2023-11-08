import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";

const AddBook = () => {
  const axios = useAxios();
  const handleAddBook = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;
    const quantity = Math.max(0, form.quantity.value); // Ensure non-negative value
    const author = form.author.value;
    const categoryName = form.categoryName.value;
    const shortDescription = form.shortDescription.value;
    const bookContent = form.bookContent.value;
    const rating = form.rating.value;

    const newBook = {
      image,
      name,
      quantity,
      author,
      categoryName,
      shortDescription,
      bookContent,
      rating,
    };
    console.log(newBook);

    // send data to server side

    axios
      .post("/books", newBook)
      .then((response) => {
        console.log("Book added successfully:", response.data);

        if (response.data.insertedId) {
          toast.success("Book added successfully");
        }
      })
      .catch((error) => {
        console.error("Error adding book:", error);
      });
  };
  return (
    <div className="p-4 bg-gray-200 mt-10 mb-20">
      <h2 className="text-4xl font-bold text-center mb-4 mt-4">
        Add Your Book
      </h2>
      <form onSubmit={handleAddBook}>
        <div className="md:flex gap-4">
          <div className="form-control mb-4 md:w-1/2">
            <label htmlFor="image" className="label">
              Image
            </label>
            <input
              required
              type="img"
              name="image"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control mb-4 md:w-1/2">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="md:flex gap-4">
          <div className="form-control mb-4 md:w-1/2">
            <label htmlFor="quantity" className="label">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control mb-4 md:w-1/2">
            <label htmlFor="author" className="label">
              Author Name
            </label>
            <input
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
              required
              type="text"
              name="rating"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="md:flex gap-4 ">
          <div className="form-control mb-4 md:w-1/2">
            <label htmlFor="shortDescription" className="label">
              Short Description
            </label>
            <textarea
              name="shortDescription"
              className="textarea textarea-bordered w-full h-40"
            />
          </div>
          <div className="form-control mb-4 md:w-1/2">
            <label htmlFor="bookContent" className="label">
              Book Content
            </label>
            <textarea
              name="bookContent"
              className="textarea textarea-bordered w-full h-40"
            />
          </div>
        </div>

        <input
          className="btn btn-block bg-[#29307d] hover:bg-[#444db5] text-white"
          type="submit"
          value="Add Book"
        />
      </form>
    </div>
  );
};

export default AddBook;
