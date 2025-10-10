import React from "react";
import { Star } from "lucide-react";
import jacketImage from "../assets/images/leather-jacket.jpg";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import TestimonialCard from "../components/TestimonialCard";
import SpecialOffers from "../components/SpecialOffers";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-blue-50 to-cyan-50 min-h-screen flex items-start pt-16 md:pt-0 md:items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
				<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
					{/* Text Content */}
					<div className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1">
						<div className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-md text-xs sm:text-sm font-medium mx-auto lg:mx-0">
							<Star size={14} className="sm:size-[16px]" color="currentColor" />
							premium collection
						</div>

						<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight md:leading-[1.15]">
							Discover Your <br className="hidden sm:block" /> Perfect Style
						</h1>

						<p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-md lg:max-w-lg mx-auto lg:mx-0 leading-relaxed">
							Luxurious wool coat perfect for any season. Crafted with premium
							materials for ultimate comfort and style.
						</p>

						{/* Product Card */}
						<div className="bg-white shadow-md rounded-xl p-4 sm:p-5 md:p-6 border space-y-3 sm:space-y-4 w-full max-w-sm md:max-w-md mx-auto lg:mx-0">
							<div className="flex items-center justify-between">
								<h3 className="font-semibold text-base sm:text-lg md:text-xl text-gray-900">
									Premium Wool Coat
								</h3>
								<span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded">
									33% OFF
								</span>
							</div>

							<div className="flex items-baseline gap-2">
								<span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
									$199.99
								</span>
								<span className="line-through text-gray-400 text-sm sm:text-base">
									$299.99
								</span>
							</div>

							<div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
								<button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-2 sm:py-2 rounded-lg font-medium flex items-center justify-center gap-2 w-full text-sm sm:text-base">
									Shop Now →
								</button>
								<button className="border border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-4 sm:px-5 py-2 sm:py-2 rounded-lg font-medium w-full text-sm sm:text-base">
									View Details
								</button>
							</div>
						</div>

						{/* Features */}
						<div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm font-medium pt-2">
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

					{/* Image */}
					<div className="flex justify-center lg:justify-end order-1 lg:order-2">
						<img
							src={jacketImage}
							alt="Leather Jacket"
							className="rounded-2xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover object-center"
							loading="eager"
						/>
					</div>
				</div>
			</section>

			{/* Other Components */}
			<div className="px-4 sm:px-6 lg:px-8">
				<Categories />
				<FeaturedProducts />
				<TestimonialCard />
				<SpecialOffers />
			</div>

			<Footer />
		</>
	);
};

export default Home;