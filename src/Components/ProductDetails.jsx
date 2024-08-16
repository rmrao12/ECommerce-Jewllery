import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import starFilled from '../Images/starFilled.png';
import starEmpty from '../Images/starNotFilled.png';
import '../CssFiles/ProductDetail.css'; // Ensure this CSS file is imported
import { useCart } from "../Contexts/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart(); // Destructure addToCart from context
  const [activeTab, setActiveTab] = useState("description");
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: "",
    email: "",
    rating: 0,
    comment: "",
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const productDetails = JSON.parse(localStorage.getItem("productDetails"));
  const product = productDetails[id];
  
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(storedReviews.filter(review => review.productId === id));
  }, [id]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const { name, email, rating, comment } = newReview;
    if (!name || !email || !rating || !comment) return;

    const newReviews = [...reviews, { ...newReview, productId: id }];
    setReviews(newReviews);
    localStorage.setItem("reviews", JSON.stringify(newReviews));

    setNewReview({ name: "", email: "", rating: 0, comment: "" });
  };

  const handleStarClick = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  const handleAddToCart = () => {
    const numericPrice = parseFloat(product.price.replace(/[^0-9.-]+/g, ''));
    console.log('Adding to cart:', { ...product, price: numericPrice,id, quantity });
    addToCart({ ...product, price: numericPrice, id: id }, quantity);
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const renderStars = (rating) => (
    <div className="flex mb-4">
      {Array.from({ length: 5 }, (_, i) => (
        <img
          key={i}
          src={i < rating ? starFilled : starEmpty}
          alt="star"
          className="w-8 h-8 cursor-pointer"
          onMouseEnter={() => setHoverRating(i + 1)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => handleStarClick(i + 1)}
        />
      ))}
    </div>
  );

  const renderContent = () => {
    if (activeTab === "description") {
      return (
        <div>
          <h2 className="text-2xl font-bold mb-3">Description</h2>
          <p className="text-gray-800">{product.description}</p>
        </div>
      );
    } else if (activeTab === "additional") {
      return (
        <div>
          <h2 className="text-2xl font-bold mb-3">Additional Information</h2>
          <ul className="list-disc pl-5 text-gray-800">
            <li><strong>Material:</strong> {product.additionalInfo.material}</li>
            <li><strong>{product.additionalInfo.dimensions ? "Dimensions:" : product.additionalInfo.length ? "Length:" : "Size:"}</strong> {product.additionalInfo.dimensions || product.additionalInfo.length || product.additionalInfo.size}</li>
            <li><strong>Weight:</strong> {product.additionalInfo.weight}</li>
            <li><strong>Origin:</strong> {product.additionalInfo.origin}</li>
          </ul>
        </div>
      );
    } else if (activeTab === "reviews") {
      return (
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 pr-4">
            <h2 className="text-2xl font-bold mb-3">Reviews</h2>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index} className="mb-4 p-4 border rounded">
                  <div className="flex items-center mb-2">
                    {renderStars(review.rating)}
                    <p className="ml-3 font-semibold">{review.name}</p>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
          <div className="w-full md:w-1/2 pl-4">
            <h2 className="text-2xl font-bold mb-3">Write a Review</h2>
            <form onSubmit={handleReviewSubmit} className="flex flex-col space-y-4">
              <div>
                <label htmlFor="name" className="block font-semibold mb-1">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold mb-1">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={newReview.email}
                  onChange={(e) => setNewReview({ ...newReview, email: e.target.value })}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Rating:</label>
                {renderStars(hoverRating || newReview.rating)}
              </div>
              <div>
                <label htmlFor="comment" className="block font-semibold mb-1">Comment:</label>
                <textarea
                  id="comment"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="w-full p-2 border rounded"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
            </form>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex flex-col lg:flex-row">
        {/* Image and Info Section */}
        <div className="w-full lg:w-1/2 pr-4 mb-5 lg:mb-0">
          <div className="zoom-container">
            <img
              src={product.image}
              alt={product.name}
              className="zoom-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/300";
              }}
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold mb-5">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-5">{product.price}</p>
          <p className="text-gray-800">{product.description}</p>
          <div className="flex items-center mb-5">
            <button
              onClick={decrementQuantity}
              className="px-3 py-1 bg-gray-200 text-gray-800 rounded-l"
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-12 text-center border-t border-b border-gray-300"
            />
            <button
              onClick={incrementQuantity}
              className="px-3 py-1 bg-gray-200 text-gray-800 rounded-r"
            >
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mb-5"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mb-5">
        <div className="flex border-b border-gray-300 mb-5">
          <button
            className={`mr-5 py-2 px-4 font-semibold text-gray-700 border-b-2 ${activeTab === "description" ? "border-blue-500 text-blue-500" : "border-transparent hover:text-blue-500 hover:border-blue-500"}`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`mr-5 py-2 px-4 font-semibold text-gray-700 border-b-2 ${activeTab === "additional" ? "border-blue-500 text-blue-500" : "border-transparent hover:text-blue-500 hover:border-blue-500"}`}
            onClick={() => setActiveTab("additional")}
          >
            Additional Information
          </button>
          <button
            className={`py-2 px-4 font-semibold text-gray-700 border-b-2 ${activeTab === "reviews" ? "border-blue-500 text-blue-500" : "border-transparent hover:text-blue-500 hover:border-blue-500"}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default ProductDetail;
