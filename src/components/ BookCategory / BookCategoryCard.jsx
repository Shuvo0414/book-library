import PropTypes from "prop-types";
import "./BookCategory.css";
import { Link } from "react-router-dom";
const BookCategoryCard = ({ categorie }) => {
  const { categoryName, image } = categorie;
  return (
    <div className="bookCategory-card mx-auto mt-6 mb-6">
      <img src={image} alt="" />

      <div className=" card-info">
        <h6 className="category-name text-xl font-bold dark:text-white">
          {categoryName}
        </h6>
      </div>

      <Link to={`/categoryBooks/${categoryName}`}>
        <button className="btn-card">Add to Reading List</button>
      </Link>
    </div>
  );
};

BookCategoryCard.propTypes = {
  categorie: PropTypes.object,
};

export default BookCategoryCard;
