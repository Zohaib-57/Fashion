import React from "react";
import CategoryCard from "./CategoryCard";

// import your local images
import menImage from "../assets/images/men.jpg";
import womenImage from "../assets/images/women.jpg";
import accessoriesImage from "../assets/images/accessories.jpg";
import saleImage from "../assets/images/sale.jpeg";

const Categories = () => {
	return (
		<section className="bg-gray-50 py-16 px-6">
			<div className="max-w-6xl mx-auto text-center space-y-4">
				{/* Heading */}
				<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
					Shop by Category
				</h2>
				<p className="text-gray-600">
					Explore our diverse collection across different categories
				</p>
			</div>

			{/* Grid of cards */}
			<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
				<CategoryCard image={menImage} title="Men" />
				<CategoryCard image={womenImage} title="Women" />
				<CategoryCard image={accessoriesImage} title="Accessories" />
				<CategoryCard image={saleImage} title="Sale" />
			</div>
		</section>
	);
};

export default Categories;
