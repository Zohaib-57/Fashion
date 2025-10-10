import React from "react";

const TestimonialCard = () => {
	const testimonials = [
		{
			id: 1,
			rating: 5,
			text: "Absolutely love the dress! Great fit and the delivery was super fast. Will order again soon.",
			name: "Sarah Johnson",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s",
			verified: true,
		},
		{
			id: 2,
			rating: 5,
			text: "Love the minimalist design and premium quality. Customer support was very helpful!",
			name: "Mike Chen",
			image:
				"https://images.unsplash.com/photo-1560250097-0b93528c311a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0",
			verified: true,
		},
		{
			id: 3,
			rating: 5,
			text: "Very smooth shopping experience. The product quality exceeded my expectations!",
			name: "Emma Wilson",
			image:
				"https://images.squarespace-cdn.com/content/v1/56799419df40f3a52654773e/1517445206687-CP76LXN0LL1KHLVU9YHA/classic+style+woman+social+profile+photo+executive+photos+nyc.JPG",
			verified: true,
		},
	];

	const StarRating = ({ rating }) => {
		return (
			<div className="flex items-center mb-3 sm:mb-4 md:mb-5">
				<span className="text-yellow-400 text-lg sm:text-xl md:text-2xl">
					{"★".repeat(rating)}
					{"☆".repeat(5 - rating)}
				</span>
				<span className="ml-2 text-gray-700 font-semibold text-sm sm:text-base">
					{rating}/5
				</span>
			</div>
		);
	};

	return (
		<section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
			<div className="max-w-7xl mx-auto">
				{/* Header Section */}
				<div className="text-center mb-10 sm:mb-12 md:mb-14">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold sm:font-extrabold text-gray-900 mb-2 sm:mb-3">
						What Our Customers Say
					</h2>
					<p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-2 sm:px-4">
						Hear from our happy customers who love shopping with us
					</p>
				</div>

				{/* Divider */}
				<div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-indigo-500 mx-auto mb-10 sm:mb-12 md:mb-14 rounded-full"></div>

				{/* Testimonial Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-items-center">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.id}
							className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 border-t-4 sm:border-t-8 border-indigo-500 w-full max-w-xs sm:max-w-sm md:max-w-md hover:scale-105 hover:shadow-indigo-200 transition-all duration-300"
						>
							<StarRating rating={testimonial.rating} />

							<p className="text-gray-800 text-sm sm:text-base leading-relaxed sm:leading-loose mb-4 sm:mb-5 md:mb-6 line-clamp-4">
								{testimonial.text}
							</p>

							<div className="flex items-center">
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full mr-3 sm:mr-4 object-cover border-2 border-indigo-400 flex-shrink-0"
									loading="lazy"
								/>
								<div className="min-w-0">
									<p className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base truncate">
										{testimonial.name}
									</p>
									{testimonial.verified && (
										<p className="text-green-600 text-xs flex items-center mt-0.5">
											<span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-1.5 sm:mr-2 flex-shrink-0"></span>
											Verified Customer
										</p>
									)}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Additional Mobile-friendly Features */}
				<div className="mt-8 sm:mt-12 text-center">
					{/* Scroll indicator for mobile */}
					<div className="lg:hidden flex justify-center space-x-1 mb-4">
						{[...Array(3)].map((_, i) => (
							<div
								key={i}
								className="w-2 h-2 bg-indigo-300 rounded-full transition-all duration-300"
							></div>
						))}
					</div>

					{/* CTA Button */}
					<button className="bg-indigo-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95">
						Read More Reviews
					</button>
				</div>
			</div>
		</section>
	);
};

export default TestimonialCard;
