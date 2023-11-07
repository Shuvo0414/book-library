import PropTypes from "prop-types";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";

const AllBookCard = ({ book }) => {
  const { _id, image, name, author, categoryName, rating } = book;

  // Convert the string rating to a number
  const numericRating = parseFloat(rating);
  //   console.log(numericRating);

  return (
    <div className="book-card mx-auto mt-6 mb-6 md:mb-20">
      <img src={image} alt="" />

      <div className=" card-info">
        <h6 className="category-name text-xl font-bold  ">{name}</h6>
        <p className=" text-[17px] font-medium">Author: {author}</p>
        <p className=" text-[17px] font-medium">Category: {categoryName}</p>
        <StarRatings
          rating={numericRating} // Set the rating based on the converted numeric rating
          starRatedColor="gold" // Color of the filled-in stars
          changeRating={() => {}}
          numberOfStars={5}
          name="rating"
          starDimension="25px"
        />
      </div>

      <Link to={`/update/${_id}`}>
        <button className="btn-card">Update Book</button>
      </Link>
    </div>
  );
};

AllBookCard.propTypes = {
  book: PropTypes.object,
};

export default AllBookCard;
