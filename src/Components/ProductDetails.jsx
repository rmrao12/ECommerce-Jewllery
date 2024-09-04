import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import starFilled from '../Images/starFilled.png';
import starEmpty from '../Images/starNotFilled.png';
import '../CssFiles/ProductDetail.css'; 
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
    <div className="flex mb-4 pt-20">
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
          <h2 className="font-prata font-bold mb-3">Description</h2>
          <p className="text-gray-800">{product.description}</p>
        </div>
      );
    } else if (activeTab === "additional") {
      return (
        <div>
          <h2 className="font-prata font-bold mb-3">Additional Information</h2>
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
            <h2 className="font-prata font-bold mb-3">Reviews</h2>
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
            <h2 className="font-prata font-bold mb-3">Write a Review</h2>
            <form onSubmit={handleReviewSubmit} className="flex flex-col space-y-4">
              <div>
                <label htmlFor="name" className="block font-semibold mb-1">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full p-2 border"
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
                  className="w-full p-2 border"
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
                  className="w-full p-2 border"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="p-4 w-full btn-main text-white">Submit</button>
            </form>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="px-4 py-10 bg-[#f5ece6]">
      <section>
          <div class="container mx-auto mb-8">
            <header>
              <div className="space-x-1">
                <span>
                  <Link to="/" className="text-[#595959] hover:text-[#595959]/[90%] font-lato underline">
                    Home
                  </Link>
                </span>
                <span className="text-[#595959] hover:text-[#595959]/[90%]">/</span>
                <span>
                  <Link to="/shop" className="text-[#595959] hover:text-[#595959]/[90%] font-lato underline">
                    Shop
                  </Link>
                </span>
                <span className="text-[#595959] hover:text-[#595959]/[90%]">/</span>
                <span>
                  <Link to="/${product.category}" className="capitalize text-[#595959] font-lato hover:text-[#595959]/[90%] underline">
                    {product.category}
                  </Link>
                </span>
                <span className="text-[#595959] hover:text-[#595959]/[90%]">/</span>
                <span class="text-[#595959] hover:text-[#595959]/[90%] font-lato">{product.name}</span>
              </div>
            </header>
          </div>        
      </section>
      <section>
        <div class="container mx-auto px-4 py-10 md:px-10 bg-white">
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
              <h1 className="md:text-[38px] text-[#212121] font-prata font-bold mb-5">{product.name}</h1>
              <p className="text-xl text-gray-600 mb-5">{product.price}</p>
              <p className="text-gray-800">{product.description}</p>
              <div className="flex items-center gap-4 my-5">
                <div className="flex items-center ">
                  <div className="flex items-center mb-0 border max-w-[120px] border-gray-300 p-3">
                    <button onClick={decrementQuantity} className="border-0 flex items-center justify-center bg-transparent text-gray-800 rounded-0 w-[30px] h-[30px]">
                      -
                    </button>
                    <input type="text" value={quantity} readOnly className="w-12 text-center border-0 border-gray-300 h-[30px]"/>
                    <button  onClick={incrementQuantity} className="border-0 flex items-center justify-center bg-transparent text-gray-800 rounded-0 w-[30px] h-[30px]">
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="py-4 px-4 btn-main text-white rounded w-full"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-4 pb-10 md:px-10 bg-white">
          <div className="md:border-0 md:p-0 p-4 border border-1 border-[#e7e6e6]">
            <div className=" mb-2 flex md:flex-row flex-col md:border-b justify-center border-gray-300 mb-5 md:gap-8 product-tabs">
              <button
                className={`py-4 md:py-2 px-4 font-semibold text-gray-700 border-b-[1px] md:border-b-[3px] font-lato ${activeTab === "description" ? "border-[#375944] border-b-[3px] text-[#375944]" : "md:border-transparent border-[#e7e6e6] hover:text-[#375944]/[90%] hover:border-[#375944]/[90%]"}`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`py-4 md:py-2 px-4 font-semibold text-gray-700 border-b-[1px] md:border-b-[3px] font-lato ${activeTab === "additional" ? "border-[#375944] border-b-[3px] text-[#375944]" : "md:border-transparent border-[#e7e6e6] hover:text-[#375944]/[90%] hover:border-[#375944]/[90%]"}`}
                onClick={() => setActiveTab("additional")}
              >
                Additional Information
              </button>
              <button
                className={`py-4 md:py-2 px-4 font-semibold text-gray-700 border-b-[1px] md:border-b-[3px] font-lato ${activeTab === "reviews" ? "border-[#375944] border-b-[3px] text-[#375944]" : "md:border-transparent border-[#e7e6e6] hover:text-[#375944]/[90%] hover:border-[#375944]/[90%]"}`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
              </button>
            </div>
            {renderContent()}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
