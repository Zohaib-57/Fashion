import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
	const [products, setProducts] = useState([]);

	const UNSPLASH_ACCESS_KEY = "JxlkepYdADL3DGZwlS7ho3Y4w_0zVACJ-kAmOcZMynQ";

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const res = await fetch(
					`https://api.unsplash.com/search/photos?query=fashion+clothes&per_page=12&client_id=${UNSPLASH_ACCESS_KEY}`
				);
				const data = await res.json();

				const formatted = data.results.map((item, i) => ({
					id: i,
					image: item.urls.small,
					title: item.alt_description
						? item.alt_description.slice(0, 25)
						: "Stylish Product",
					price: (Math.random() * 100 + 20).toFixed(2),
					oldPrice: (Math.random() * 150 + 70).toFixed(2),
					reviews: Math.floor(Math.random() * 200 + 20),
					rating: Math.floor(Math.random() * 5),
					isSale: Math.random() > 0.6,
					isNew: Math.random() > 0.7,
				}));

				setProducts(formatted);
			} catch (err) {
				console.error("Error fetching Unsplash images:", err);
			}
		};

		fetchProducts();
	}, []);

	return (
		<section className="py-16 px-6 bg-gray-50">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
					Featured Products
				</h2>

				{products.length === 0 ? (
					<p className="text-center text-gray-500">Loading products...</p>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
						{products.map((p) => (
							<ProductCard key={p.id} {...p} />
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default FeaturedProducts;
