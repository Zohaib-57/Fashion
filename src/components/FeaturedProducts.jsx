import React from "react";
import ProductCard from "./ProductCard";

// Import all your local images
import tshirtImg from "../assets/images/tshirt.jpg";
import dressImg from "../assets/images/dress.jpg";
import bagImg from "../assets/images/bag.jpg";
import shoesImg from "../assets/images/shoes.jpg";
import jacketImg from "../assets/images/jacket.jpg";
import watchImg from "../assets/images/watch.jpg";
import hoodieImg from "../assets/images/hoodie.jpg";
import sunglassesImg from "../assets/images/sunglasses.jpg";
import jeansImg from "../assets/images/jeans.jpg";
import perfumeImg from "../assets/images/perfume.jpg";
import sneakersImg from "../assets/images/sneakers.jpg";
import handbagImg from "../assets/images/handbag.jpg";

const FeaturedProducts = () => {
	return (
		<section className="py-16 px-6 bg-gray-50">
			<div className="max-w-6xl mx-auto">
				{/* Heading */}
				<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
					Featured Products
				</h2>

				{/* Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					<ProductCard
						image={tshirtImg}
						title="Classic White T-Shirt"
						price="29.99"
						oldPrice="39.99"
						reviews="128"
						rating={4}
						isSale={true}
					/>
					<ProductCard
						image={dressImg}
						title="Elegant Black Dress"
						price="89.99"
						reviews="89"
						rating={4}
						isNew={true}
					/>
					<ProductCard
						image={bagImg}
						title="Leather Crossbody Bag"
						price="149.99"
						oldPrice="199.99"
						reviews="156"
						rating={5}
						isSale={true}
					/>
					<ProductCard
						image={sneakersImg}
						title="Stylish Sneakers"
						price="79.99"
						reviews="210"
						rating={4}
					/>
					<ProductCard
						image={jacketImg}
						title="Premium Leather Jacket"
						price="229.99"
						oldPrice="299.99"
						reviews="102"
						rating={5}
						isSale={true}
						isOutofStock={true}
					/>
					<ProductCard
						image={watchImg}
						title="Modern Smart Watch"
						price="129.99"
						reviews="76"
						rating={4}
					/>
					<ProductCard
						image={hoodieImg}
						title="Casual Grey Hoodie"
						price="49.99"
						reviews="88"
						rating={4}
						isNew={true}
					/>
					<ProductCard
						image={sunglassesImg}
						title="Trendy Sunglasses"
						price="59.99"
						reviews="134"
						rating={5}
						isSale={true}
					/>
					<ProductCard
						image={jeansImg}
						title="Denim Blue Jeans"
						price="69.99"
						reviews="178"
						rating={4}
					/>
					<ProductCard
						image={perfumeImg}
						title="Luxury Perfume"
						price="99.99"
						oldPrice="129.99"
						reviews="92"
						rating={5}
						isSale={true}
						isOutofStock={true}
					/>
					<ProductCard
						image={shoesImg}
						title="Running Shoes"
						price="109.99"
						reviews="250"
						rating={5}
					/>
					<ProductCard
						image={handbagImg}
						title="Elegant Handbag"
						price="189.99"
						reviews="67"
						rating={4}
						isNew={true}
					/>
				</div>
			</div>
		</section>
	);
};

export default FeaturedProducts;
