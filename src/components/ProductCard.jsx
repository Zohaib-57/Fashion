import React from "react";

const ProductCard = ({
	image,
	title,
	price,
	oldPrice,
	reviews,
	rating,
	isSale,
	isNew,
	isOutofStock,
}) => {
	return (
		<div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition-all duration-300 w-[250px] sm:w-[270px] mx-auto">
			{/* Image Container */}
			<div className="relative group">
				<img
					src={image}
					alt={title}
					className="w-full h-70 object-cover group-hover:scale-105 transition-transform duration-500"
				/>

				{/* Sale / New Badge */}
				{/* Sale / New / Out of Stock Badges */}
				<div className="absolute top-3 left-3 flex flex-col gap-2">
					{isSale && (
						<span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
							Sale
						</span>
					)}
					{isNew && (
						<span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
							New
						</span>
					)}
					{isOutofStock && (
						<span className="bg-gray-500 text-white text-xs px-2 py-1 rounded">
							Out of Stock
						</span>
					)}
				</div>

				{/* Add to Cart button */}
				<button className="absolute inset-x-0 bottom-4 mx-auto w-28 bg-white text-blue-600 font-medium text-sm py-1.5 rounded-full shadow hover:bg-blue-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100">
					Add to Cart
				</button>
			</div>

			{/* Product Details */}
			<div className="p-3 space-y-2">
				{/* Title */}
				<h3 className="text-gray-800 font-semibold text-sm truncate">
					{title}
				</h3>

				{/* Rating */}
				<div className="flex items-center gap-2 text-sm text-gray-600">
					<span className="text-yellow-500">
						{"★".repeat(Math.floor(rating))}
					</span>
					<span>({reviews})</span>
				</div>

				{/* Price */}
				<div className="flex items-center gap-2">
					<span className="text-lg font-bold text-gray-900">${price}</span>
					{oldPrice && (
						<span className="text-sm text-gray-400 line-through">
							${oldPrice}
						</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
