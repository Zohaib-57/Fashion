import React from "react";
import { Star } from "lucide-react";
import jacketImage from "../assets/images/leather-jacket.jpg";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
	return (
		<>
			<section className="bg-gradient-to-br from-blue-50 to-cyan-50 min-h-screen flex items-center px-4 sm:px-8 md:px-12 lg:px-20 py-12">
				<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
					{/* Left Content */}
					<div className="space-y-6 text-center md:text-left">
						{/* Badge */}
						<div className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium">
							<Star size={16} color="currentColor" />
							premium collection
						</div>

						{/* Heading */}
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
							Discover Your <br className="hidden sm:block" /> Perfect Style
						</h1>

						{/* Subheading */}
						<p className="text-gray-600 text-base sm:text-lg max-w-md mx-auto md:mx-0">
							Luxurious wool coat perfect for any season. Crafted with premium
							materials for ultimate comfort and style.
						</p>

						{/* Product Card */}
						<div className="bg-white shadow-md rounded-xl p-6 border space-y-4 max-w-sm mx-auto md:mx-0">
							<div className="flex items-center justify-between">
								<h3 className="font-semibold text-lg text-gray-900">
									Premium Wool Coat
								</h3>
								<span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded">
									33% OFF
								</span>
							</div>

							{/* Price */}
							<div className="flex items-baseline gap-2">
								<span className="text-2xl font-bold text-gray-900">
									$199.99
								</span>
								<span className="line-through text-gray-400">$299.99</span>
							</div>

							{/* Buttons */}
							<div className="flex flex-col sm:flex-row gap-3">
								<button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium flex items-center justify-center gap-2">
									Shop Now →
								</button>
								<button className="border border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-5 py-2 rounded-lg font-medium">
									View Details
								</button>
							</div>
						</div>

						{/* Features */}
						<div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium pt-2">
							<span className="flex items-center gap-2 text-green-600">
								<span className="h-2 w-2 bg-green-500 rounded-full"></span>
								Free Shipping
							</span>
							<span className="flex items-center gap-2 text-blue-600">
								<span className="h-2 w-2 bg-blue-500 rounded-full"></span>
								Easy Returns
							</span>
							<span className="flex items-center gap-2 text-purple-600">
								<span className="h-2 w-2 bg-purple-500 rounded-full"></span>
								24/7 Support
							</span>
						</div>
					</div>

					{/* Right Product Image */}
					<div className="flex justify-center md:justify-end">
						<img
							src={jacketImage}
							alt="Leather Jacket"
							className="rounded-2xl shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg h-120"
						/>
					</div>
				</div>
			</section>

			<Categories />
			<FeaturedProducts />
		</>
	);
};

export default Home;
