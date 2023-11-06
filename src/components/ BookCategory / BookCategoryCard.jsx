import PropTypes from "prop-types";
import "./BookCategory.css";
const BookCategoryCard = ({ categorie }) => {
  const { categoryName, image } = categorie;
  return (
    <div className="card mx-auto mt-6 mb-6">
      <img src={image} alt="" />

      <div className=" card-info">
        <h6 className="category-name text-xl font-bold  ">{categoryName}</h6>
      </div>

      <button className="btn-card">Add to Reading List</button>
    </div>
  );
};

BookCategoryCard.propTypes = {
  categorie: PropTypes.object,
};

export default BookCategoryCard;
