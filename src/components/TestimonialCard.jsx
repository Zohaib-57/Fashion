import React from "react";

const TestimonialCard = () => {
	return (
		<section className="py-20 px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
			<div className="max-w-7xl mx-auto">
				{/* Header Section */}
				<div className="text-center mb-14">
					<h2 className="text-4xl font-extrabold text-gray-900 mb-3">
						What Our Customers Say
					</h2>
					<p className="text-lg text-gray-700 max-w-2xl mx-auto">
						Hear from our happy customers who love shopping with us
					</p>
				</div>

				{/* Divider */}
				<div className="w-24 h-1 bg-indigo-500 mx-auto mb-14 rounded-full"></div>

				{/* Testimonial Cards */}
				<div className="flex flex-wrap justify-center gap-10">
					{/* Testimonial 1 */}
					<div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 border-t-8 border-indigo-500 w-[340px] hover:scale-105 hover:shadow-indigo-200 transition-all duration-300">
						<div className="flex items-center mb-5">
							<span className="text-yellow-400 text-2xl">★★★★★</span>
							<span className="ml-2 text-gray-700 font-semibold">5/5</span>
						</div>
						<p className="text-gray-800 text-base leading-relaxed mb-5">
							Absolutely love the dress! Great fit and the delivery was super
							fast. Will order again soon.
						</p>
						<div className="flex items-center">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s"
								alt="Sarah Johnson"
								className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-indigo-400"
							/>
							<div>
								<p className="font-semibold text-gray-900 text-sm">
									Sarah Johnson
								</p>
								<p className="text-green-600 text-xs flex items-center">
									<span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
									Verified Customer
								</p>
							</div>
						</div>
					</div>

					{/* Testimonial 2 */}
					<div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 border-t-8 border-indigo-500 w-[340px] hover:scale-105 hover:shadow-indigo-200 transition-all duration-300">
						<div className="flex items-center mb-5">
							<span className="text-yellow-400 text-2xl">★★★★★</span>
							<span className="ml-2 text-gray-700 font-semibold">5/5</span>
						</div>
						<p className="text-gray-800 text-base leading-relaxed mb-5">
							Love the minimalist design and premium quality. Customer support
							was very helpful!
						</p>
						<div className="flex items-center">
							<img
								src="https://images.unsplash.com/photo-1560250097-0b93528c311a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0"
								alt="Mike Chen"
								className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-indigo-400"
							/>
							<div>
								<p className="font-semibold text-gray-900 text-sm">Mike Chen</p>
								<p className="text-green-600 text-xs flex items-center">
									<span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
									Verified Customer
								</p>
							</div>
						</div>
					</div>

					{/* Testimonial 3 */}
					<div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 border-t-8 border-indigo-500 w-[340px] hover:scale-105 hover:shadow-indigo-200 transition-all duration-300">
						<div className="flex items-center mb-5">
							<span className="text-yellow-400 text-2xl">★★★★★</span>
							<span className="ml-2 text-gray-700 font-semibold">5/5</span>
						</div>
						<p className="text-gray-800 text-base leading-relaxed mb-5">
							Very smooth shopping experience. The product quality exceeded my
							expectations!
						</p>
						<div className="flex items-center">
							<img
								src="https://images.squarespace-cdn.com/content/v1/56799419df40f3a52654773e/1517445206687-CP76LXN0LL1KHLVU9YHA/classic+style+woman+social+profile+photo+executive+photos+nyc.JPG"
								alt="Emma Wilson"
								className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-indigo-400"
							/>
							<div>
								<p className="font-semibold text-gray-900 text-sm">
									Emma Wilson
								</p>
								<p className="text-green-600 text-xs flex items-center">
									<span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
									Verified Customer
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialCard;
