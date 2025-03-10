import React,{useState} from 'react';
import ClearIcon from '@mui/icons-material/Clear';


function Reviews() {

    const reviews = [
        { user: "John Doe", review: "Excellent service and very professional!", rating: 4 },
        { user: "Jane Smith", review: "Quick response and highly recommended.", rating: 4 },
        { user: "Alice Brown", review: "Affordable and efficient service.", rating: 4 },
        { user: "Chris Lee", review: "Great experience! Will book again.", rating: 4 },
    ];

    let [showReviewForm, setShowReviewForm] = useState(false);

    const handleSubmitReview = (e) => {
        e.preventDefault();
        setShowReviewForm(false);  // Close the form
    };

    return (

        <div className="bg-white rounded-lg shadow-md p-6">
            
            <div className="mb-4 flex justify-between">
                <h3 className="text-lg font-semibold mb-4">Reviews</h3>
                <button
                    onClick={() => setShowReviewForm(true)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                >
                    Add Review
                </button>
            </div>


            <div className="max-h-60 overflow-y-scroll space-y-4 hide-scrollbar">
                {reviews.map((review, index) => (
                    <div key={index} className="border-b pb-4 relative">
                        <h4 className="font-medium text-gray-900">{review.user}</h4>
                        <p className="text-gray-600 text-sm">{review.review}</p>

                        {/* Star Rating in Bottom Right Corner */}
                        <div className="absolute bottom-0 right-0 mb-2 mr-2 flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill={i < review.rating ? "gold" : "gray"} // Color change based on rating
                                    className="bi bi-star"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.612 15.443c-.396.208-.863-.1-.743-.577L5.07 9.865 1.37 6.343c-.319-.31-.152-.888.283-.94l4.993-.723 2.06-4.931c.198-.478.846-.478 1.044 0l2.06 4.931 4.993.723c.435.052.602.63.283.94l-3.7 3.522 1.201 4.001c.12.477-.347.785-.743.577L8 12.47l-3.657 2.973a.537.537 0 0 1-.731-.073l-1.201-4.001L3.612 15.443z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                ))}
            </div>


            {showReviewForm && (
                <div className="mt-4 pt-4 border-t-2 border-indigo-600">
                    <div className='flex justify-between'>
                        <h4 className="text-lg font-semibold mb-2">Add Your Review</h4>
                        <button onClick={() => setShowReviewForm(false)}><ClearIcon /></button>
                    </div>
                    <form onSubmit={handleSubmitReview} className="space-y-4">
                        
                        <div>
                            <label htmlFor="review" className="block text-sm font-medium text-gray-700">Review</label>
                            <textarea
                                id="review"
                                name="review"
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
                            <select
                                id="rating"
                                name="rating"
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                                Submit Review
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>

    );
}

export default Reviews;