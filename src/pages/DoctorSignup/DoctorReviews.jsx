import React, { useState, useEffect } from "react";
import DocSideBar from "../../components/DocSideBar";
import Client from "../../assets/images/googlelog.png";
import { FaReply } from 'react-icons/fa';
import { ratingAPI } from '../../services/ratingApi';
import { useApiIntegration } from '../../hooks/useApiIntegration';
import toast from 'react-hot-toast';

const DoctorReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [averageRating, setAverageRating] = useState(0);
    const [totalReviews, setTotalReviews] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("all");
    const [replyingTo, setReplyingTo] = useState(null);
    const [replyText, setReplyText] = useState("");
    const [hoverRating, setHoverRating] = useState(0);

    const { loading } = useApiIntegration();

    useEffect(() => {
        fetchReviews();
    }, [currentPage, filter]);

    const fetchReviews = async () => {
        try {
            const result = await ratingAPI.getRatings({
                page: currentPage,
                limit: 10,
                filter,
                search: searchTerm
            });

            if (result) {
                setReviews(result.data || []);
                setTotalReviews(result.total || 0);
                setTotalPages(Math.ceil((result.total || 0) / 10));

                if (result.data && result.data.length > 0) {
                    const avg = result.data.reduce((sum, review) => sum + (review.rating || 0), 0) / result.data.length;
                    setAverageRating(avg);
                }
            }
        } catch (error) {
            console.error("Failed to fetch reviews:", error);
            toast.error("Failed to load reviews");
        }
    };

    const handleReplySubmit = async (reviewId) => {
        try {
            const result = await ratingAPI.respondToRating(reviewId, { response: replyText });
            if (result) {
                toast.success("Reply submitted successfully");
                setReplyingTo(null);
                setReplyText("");
                fetchReviews();
            }
        } catch (error) {
            console.error("Failed to submit reply:", error);
            toast.error("Failed to submit reply");
        }
    };

    const renderStars = (rating, interactive = false, onRatingChange = null) => {
        return (
            <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        type={interactive ? "button" : undefined}
                        onClick={interactive ? () => onRatingChange(star) : undefined}
                        onMouseEnter={interactive ? () => setHoverRating(star) : undefined}
                        onMouseLeave={interactive ? () => setHoverRating(0) : undefined}
                        className={`text-2xl ${star <= (interactive ? hoverRating || rating : rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        disabled={!interactive}
                    >
                        ★
                    </button>
                ))}
            </div>
        );
    };

    return (
        <>
            <div className="relative text-white px-[4%] lg:px-[7%] md:pt-[10%] pt-[25%] lg:pb-5"
                style={{ position: "fixed", width: "100%", backgroundColor: "#021140", minHeight: "100px" }}>
                <h3 className='pt-3 text-[12px] md:text-14px'>Home / Reviews</h3>
                <h1 className='text-[22px] md:text-[24px] py-2 font-semibold'>Reviews</h1>
            </div>

            <section className='md:py-[20%] lg:top-[15%] py-[50%] w-full bg-[#e2e2e2]'>
                <div className="flex mx-[2%]">
                    <DocSideBar />
                    <div className='bg-white pt-10 px-5 mx-2 border w-full rounded'>
                        {/* Header and Filters */}
                        <div className="md:flex px-3 py-5 items-center">
                            <div className="flex-col py-3 text-[28px] md:w-1/3">
                                <h1>Reviews</h1>
                            </div>
                            <div className="flex-col mb-3 md:w-1/3">
                                <form onSubmit={(e) => { e.preventDefault(); fetchReviews(); }}>
                                    <input
                                        type="text"
                                        placeholder="🔍 Search..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </form>
                            </div>
                            <div className="flex-col text-[14px] md:w-1/3 md:text-right">
                                <span>Sort by: </span>
                                <select
                                    className='text-[14px] text-[#46B8E3] py-2 mx-2'
                                    value={filter}
                                    onChange={(e) => setFilter(e.target.value)}
                                >
                                    <option value="all">All Reviews</option>
                                    <option value="5">5 Stars</option>
                                    <option value="4">4 Stars</option>
                                    <option value="3">3 Stars</option>
                                    <option value="2">2 Stars</option>
                                    <option value="1">1 Star</option>
                                </select>
                            </div>
                        </div>
                        <hr />

                        {/* Rating Overview */}
                        <div className="bg-white p-6 rounded-lg mb-6">
                            <h2 className="text-xl font-bold mb-4">Rating Overview</h2>
                            <div className="flex items-center space-x-4">
                                <div className="text-4xl font-bold text-yellow-500">{averageRating.toFixed(1)}</div>
                                <div>
                                    {renderStars(Math.round(averageRating))}
                                    <p className="text-gray-600">Based on {totalReviews} reviews</p>
                                </div>
                            </div>
                        </div>

                        {/* Reviews List */}
                        {loading ? (
                            <div className="flex justify-center items-center py-20">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                            </div>
                        ) : reviews.length > 0 ? (
                            <>
                                <div className="space-y-6">
                                    {reviews.map((review) => (
                                        <div key={review.id} className="border-b pb-6 last:border-b-0">
                                            <div className="md:flex">
                                                <div className="md:w-[12%] pl-3 mb-4 md:mb-0">
                                                    <img
                                                        src={review.patient?.profileImage || Client}
                                                        alt="Patient"
                                                        className="rounded-full h-[80px] w-[80px] object-cover"
                                                    />
                                                </div>

                                                <div className="w-full px-5">
                                                    <div className="md:flex w-full justify-between">
                                                        <div className="mb-2">
                                                            <h2 className='font-semibold text-lg'>
                                                                {review.patient?.firstName} {review.patient?.lastName}
                                                            </h2>
                                                            <h2 className='text-[#757575] text-sm'>
                                                                reviewed {new Date(review.createdAt).toLocaleDateString()}
                                                            </h2>
                                                        </div>
                                                        <div className="mb-2">
                                                            {renderStars(review.rating)}
                                                        </div>
                                                    </div>

                                                    <div className='text-[#080000] my-3'>
                                                        <blockquote className="italic">"{review.comment}"</blockquote>
                                                    </div>

                                                    {review.response && (
                                                        <div className="mt-3 p-3 bg-gray-50 rounded">
                                                            <p className="text-sm">
                                                                <strong className="text-[#46B8E3]">Your Response:</strong> {review.response}
                                                            </p>
                                                        </div>
                                                    )}

                                                    {!review.response && replyingTo !== review.id && (
                                                        <div className='w-full flex mt-5 justify-between'>
                                                            <button
                                                                onClick={() => setReplyingTo(review.id)}
                                                                className="flex items-center space-x-1 text-[#46B8E3]"
                                                            >
                                                                <FaReply className="h-5 w-5 mr-2" />
                                                                <span>Reply</span>
                                                            </button>
                                                            <button className="text-[#EF4444]">
                                                                Report
                                                            </button>
                                                        </div>
                                                    )}

                                                    {replyingTo === review.id && (
                                                        <div className="mt-4">
                                                            <textarea
                                                                value={replyText}
                                                                onChange={(e) => setReplyText(e.target.value)}
                                                                placeholder="Write your response..."
                                                                className="w-full p-3 border rounded-lg"
                                                                rows="3"
                                                            />
                                                            <div className="flex justify-end space-x-2 mt-2">
                                                                <button
                                                                    onClick={() => {
                                                                        setReplyingTo(null);
                                                                        setReplyText("");
                                                                    }}
                                                                    className="px-4 py-2 border rounded-lg"
                                                                >
                                                                    Cancel
                                                                </button>
                                                                <button
                                                                    onClick={() => handleReplySubmit(review.id)}
                                                                    className="px-4 py-2 bg-[#46B8E3] text-white rounded-lg hover:bg-[#3aa8d1]"
                                                                >
                                                                    Submit Response
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="flex justify-center mt-8 space-x-4">
                                        <button
                                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                            disabled={currentPage === 1}
                                            className={`px-4 py-2 rounded-lg ${
                                                currentPage === 1
                                                    ? 'bg-gray-300 cursor-not-allowed'
                                                    : 'bg-blue-500 text-white hover:bg-blue-600'
                                            }`}
                                        >
                                            Previous
                                        </button>

                                        <span className="px-4 py-2">
                                            Page {currentPage} of {totalPages}
                                        </span>

                                        <button
                                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                            disabled={currentPage === totalPages}
                                            className={`px-4 py-2 rounded-lg ${
                                                currentPage === totalPages
                                                    ? 'bg-gray-300 cursor-not-allowed'
                                                    : 'bg-blue-500 text-white hover:bg-blue-600'
                                            }`}
                                        >
                                            Next
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="py-20 text-center">
                                <p className="text-gray-500">No reviews available yet</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default DoctorReviews;