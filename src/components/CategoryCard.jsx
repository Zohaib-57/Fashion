import React from "react";

const CategoryCard = ({ image, title }) => {
	return (
		<div className="relative group rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 cursor-pointer">
			{/* Image */}
			<img
				src={image}
				alt={title}
				className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
			/>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>

			{/* Text */}
			<div className="absolute bottom-4 left-4 text-white">
				<h3 className="text-lg font-semibold">{title}</h3>
				<p className="text-sm flex items-center gap-1">Explore Collection →</p>
			</div>
		</div>
	);
};

export default CategoryCard;
