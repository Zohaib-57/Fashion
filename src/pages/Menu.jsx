// MenuPage.jsx
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MenuPage = () => {
	const [activeCategory, setActiveCategory] = useState("all");
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [cart, setCart] = useState([]);
	const [selectedFilters, setSelectedFilters] = useState({
		price: "",
		size: "",
		color: "",
		sort: "featured",
	});

	const categories = [
		{ id: "all", name: "All Products", count: 156, icon: "🛍️" },
		{ id: "women", name: "Women", count: 67, icon: "👚" },
		{ id: "men", name: "Men", count: 45, icon: "👔" },
		{ id: "accessories", name: "Accessories", count: 32, icon: "🕶️" },
		{ id: "sale", name: "Sale", count: 23, icon: "🏷️" },
		{ id: "new", name: "New Arrivals", count: 18, icon: "🆕" },
	];

	const filters = {
		price: [
			{ value: "0-50", label: "Under $50" },
			{ value: "50-100", label: "$50 - $100" },
			{ value: "100-200", label: "$100 - $200" },
			{ value: "200+", label: "Over $200" },
		],
		size: ["XS", "S", "M", "L", "XL", "XXL"],
		color: [
			{ name: "Black", value: "bg-black" },
			{ name: "White", value: "bg-white border" },
			{ name: "Navy", value: "bg-blue-900" },
			{ name: "Beige", value: "bg-amber-100" },
			{ name: "Gray", value: "bg-gray-400" },
			{ name: "Brown", value: "bg-amber-800" },
			{ name: "Green", value: "bg-green-600" },
			{ name: "Red", value: "bg-red-600" },
		],
	};

	// Mock API fetch
	useEffect(() => {
		const fetchProducts = async () => {
			setLoading(true);
			await new Promise((resolve) => setTimeout(resolve, 1500));

			const mockProducts = [
				{
					id: 1,
					name: "Premium Wool Coat",
					category: "women",
					price: 199.99,
					originalPrice: 299.99,
					discount: 33,
					image:
						"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=600&fit=crop",
					rating: 4.8,
					reviews: 142,
					sizes: ["S", "M", "L", "XL"],
					colors: ["Black", "Camel", "Navy"],
					isNew: false,
					onSale: true,
					description: "Luxurious winter essential crafted from premium wool",
				},
				{
					id: 2,
					name: "Classic Denim Jacket",
					category: "men",
					price: 89.99,
					originalPrice: 129.99,
					discount: 31,
					image:
						"https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop",
					rating: 4.6,
					reviews: 89,
					sizes: ["S", "M", "L", "XL", "XXL"],
					colors: ["Blue", "Black", "Light Wash"],
					isNew: true,
					onSale: false,
					description: "Timeless denim jacket for casual wear",
				},
				{
					id: 3,
					name: "Silk Evening Dress",
					category: "women",
					price: 149.99,
					originalPrice: 199.99,
					discount: 25,
					image:
						"https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500&h=600&fit=crop",
					rating: 4.9,
					reviews: 67,
					sizes: ["XS", "S", "M", "L"],
					colors: ["Black", "Navy", "Burgundy"],
					isNew: false,
					onSale: true,
					description: "Elegant silk dress for special occasions",
				},
				{
					id: 4,
					name: "Leather Crossbody Bag",
					category: "accessories",
					price: 79.99,
					originalPrice: 99.99,
					discount: 20,
					image:
						"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=600&fit=crop",
					rating: 4.7,
					reviews: 203,
					sizes: ["One Size"],
					colors: ["Black", "Brown", "Tan"],
					isNew: true,
					onSale: false,
					description: "Premium leather bag with adjustable strap",
				},
				{
					id: 5,
					name: "Cashmere Sweater",
					category: "men",
					price: 129.99,
					originalPrice: 179.99,
					discount: 28,
					image:
						"https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop",
					rating: 4.8,
					reviews: 94,
					sizes: ["S", "M", "L", "XL"],
					colors: ["Gray", "Navy", "Burgundy"],
					isNew: false,
					onSale: true,
					description: "Soft cashmere sweater for ultimate comfort",
				},
				{
					id: 6,
					name: "Designer Sunglasses",
					category: "accessories",
					price: 159.99,
					originalPrice: 199.99,
					discount: 20,
					image:
						"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=600&fit=crop",
					rating: 4.5,
					reviews: 156,
					sizes: ["One Size"],
					colors: ["Black", "Brown", "Tortoise"],
					isNew: false,
					onSale: true,
					description: "Luxury sunglasses with UV protection",
				},
			];

			setProducts(mockProducts);
			setLoading(false);
		};

		fetchProducts();
	}, []);

	const handleFilterChange = (filterType, value) => {
		setSelectedFilters((prev) => ({
			...prev,
			[filterType]: value === prev[filterType] ? "" : value,
		}));
	};

	const clearFilters = () => {
		setSelectedFilters({
			price: "",
			size: "",
			color: "",
			sort: "featured",
		});
	};

	const addToCart = (product) => {
		setCart((prev) => {
			const existingItem = prev.find((item) => item.id === product.id);
			if (existingItem) {
				return prev.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			}
			return [...prev, { ...product, quantity: 1 }];
		});

		// Show notification
		const notification = document.createElement("div");
		notification.className =
			"fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300";
		notification.textContent = "Added to cart!";
		document.body.appendChild(notification);

		setTimeout(() => {
			notification.classList.remove("translate-x-full");
			notification.classList.add("translate-x-0");
		}, 100);

		setTimeout(() => {
			notification.classList.remove("translate-x-0");
			notification.classList.add("translate-x-full");
			setTimeout(() => document.body.removeChild(notification), 300);
		}, 2000);
	};

	const filteredProducts = products.filter((product) => {
		if (activeCategory !== "all" && product.category !== activeCategory)
			return false;
		if (selectedFilters.price) {
			const [min, max] = selectedFilters.price.split("-");
			if (max === "+") {
				if (product.price < parseInt(min)) return false;
			} else {
				if (product.price < parseInt(min) || product.price > parseInt(max))
					return false;
			}
		}
		if (selectedFilters.size && !product.sizes.includes(selectedFilters.size))
			return false;
		if (
			selectedFilters.color &&
			!product.colors.includes(selectedFilters.color)
		)
			return false;
		return true;
	});

	const sortedProducts = [...filteredProducts].sort((a, b) => {
		switch (selectedFilters.sort) {
			case "price-low":
				return a.price - b.price;
			case "price-high":
				return b.price - a.price;
			case "rating":
				return b.rating - a.rating;
			case "newest":
				return b.id - a.id;
			default:
				return 0;
		}
	});

	const ProductCard = ({ product }) => {
		const [isHovered, setIsHovered] = useState(false);
		const [imageLoaded, setImageLoaded] = useState(false);

		return (
			<div
				className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div className="relative bg-gray-100 h-80 overflow-hidden">
					{!imageLoaded && (
						<div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
							<div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
						</div>
					)}
					<img
						src={product.image}
						alt={product.name}
						className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
							imageLoaded ? "opacity-100" : "opacity-0"
						}`}
						onLoad={() => setImageLoaded(true)}
					/>

					<div className="absolute top-3 right-3 flex flex-col gap-2">
						{product.onSale && (
							<span className="bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded-full shadow-lg transform group-hover:scale-110 transition-transform">
								-{product.discount}%
							</span>
						)}
						{product.isNew && (
							<span className="bg-green-500 text-white px-3 py-1 text-sm font-semibold rounded-full shadow-lg transform group-hover:scale-110 transition-transform">
								NEW
							</span>
						)}
					</div>

					<div
						className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
							isHovered
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-4"
						}`}
					>
						<button
							onClick={() => addToCart(product)}
							className="w-full bg-black text-white py-3 font-semibold rounded-lg hover:bg-gray-800 transition-colors shadow-lg transform hover:scale-105 active:scale-95"
						>
							Add to Cart
						</button>
					</div>
				</div>

				<div className="p-6">
					<h3 className="font-semibold text-gray-900 text-lg mb-2 heading group-hover:text-blue-600 transition-colors">
						{product.name}
					</h3>
					<p className="text-gray-600 text-sm mb-3 line-clamp-2">
						{product.description}
					</p>

					<div className="flex items-center justify-between mb-3">
						<div className="flex items-center space-x-2">
							<span className="text-gray-900 font-bold text-xl">
								${product.price}
							</span>
							{product.originalPrice && (
								<span className="text-gray-400 text-sm line-through">
									${product.originalPrice}
								</span>
							)}
						</div>
						<div className="flex items-center text-sm text-gray-600">
							<div className="flex text-yellow-400 mr-1">
								{"★".repeat(Math.floor(product.rating))}
								{"☆".repeat(5 - Math.floor(product.rating))}
							</div>
							<span>({product.reviews})</span>
						</div>
					</div>

					<div className="flex items-center justify-between text-xs text-gray-500">
						<div className="flex space-x-1">
							{product.sizes.slice(0, 3).map((size) => (
								<span key={size} className="px-2 py-1 bg-gray-100 rounded">
									{size}
								</span>
							))}
							{product.sizes.length > 3 && (
								<span className="px-2 py-1 bg-gray-100 rounded">
									+{product.sizes.length - 3}
								</span>
							)}
						</div>
						<div className="flex space-x-1">
							{product.colors.slice(0, 2).map((color) => (
								<div
									key={color}
									className="w-3 h-3 rounded-full border"
									style={{
										backgroundColor:
											color.toLowerCase() === "white"
												? "#fff"
												: color.toLowerCase() === "navy"
												? "#000080"
												: color.toLowerCase() === "camel"
												? "#c19a6b"
												: color.toLowerCase() === "burgundy"
												? "#800020"
												: color.toLowerCase() === "tan"
												? "#d2b48c"
												: color.toLowerCase() === "tortoise"
												? "#964b00"
												: color,
									}}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="text-center mb-12">
					<h1 className="text-5xl font-light text-gray-900 mb-4 heading">
						Our Collection
					</h1>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Discover premium fashion pieces carefully curated for your unique
						style
					</p>
				</div>

				<div className="flex flex-col lg:flex-row gap-8">
					{/* Filters Sidebar */}
					<div className="lg:w-80 flex-shrink-0">
						<div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
							<div className="flex justify-between items-center mb-6">
								<h3 className="text-xl font-semibold text-gray-900 heading">
									Filters
								</h3>
								<button
									onClick={clearFilters}
									className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
								>
									Clear All
								</button>
							</div>

							{/* Categories */}
							<div className="mb-8">
								<h4 className="font-semibold text-gray-900 mb-4 heading text-lg">
									Categories
								</h4>
								<div className="space-y-2">
									{categories.map((category) => (
										<button
											key={category.id}
											onClick={() => setActiveCategory(category.id)}
											className={`flex items-center justify-between w-full text-left p-3 rounded-xl transition-all duration-200 ${
												activeCategory === category.id
													? "bg-blue-50 text-blue-700 shadow-md"
													: "text-gray-700 hover:bg-gray-50 hover:shadow-sm"
											}`}
										>
											<div className="flex items-center space-x-3">
												<span className="text-xl">{category.icon}</span>
												<span className="font-medium">{category.name}</span>
											</div>
											<span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
												{category.count}
											</span>
										</button>
									))}
								</div>
							</div>

							{/* Price Filter */}
							<div className="mb-8">
								<h4 className="font-semibold text-gray-900 mb-4 heading text-lg">
									Price Range
								</h4>
								<div className="space-y-3">
									{filters.price.map((price) => (
										<label
											key={price.value}
											className="flex items-center group cursor-pointer"
										>
											<input
												type="radio"
												name="price"
												value={price.value}
												checked={selectedFilters.price === price.value}
												onChange={(e) =>
													handleFilterChange("price", e.target.value)
												}
												className="text-blue-600 focus:ring-blue-500 transform group-hover:scale-110 transition-transform"
											/>
											<span className="ml-3 text-gray-700 group-hover:text-gray-900 transition-colors">
												{price.label}
											</span>
										</label>
									))}
								</div>
							</div>

							{/* Size Filter */}
							<div className="mb-8">
								<h4 className="font-semibold text-gray-900 mb-4 heading text-lg">
									Size
								</h4>
								<div className="flex flex-wrap gap-2">
									{filters.size.map((size) => (
										<button
											key={size}
											onClick={() => handleFilterChange("size", size)}
											className={`px-4 py-2 text-sm font-medium border-2 rounded-lg transition-all duration-200 transform hover:scale-105 ${
												selectedFilters.size === size
													? "border-blue-600 bg-blue-600 text-white shadow-md"
													: "border-gray-300 text-gray-700 hover:border-gray-400 hover:shadow-sm"
											}`}
										>
											{size}
										</button>
									))}
								</div>
							</div>

							{/* Color Filter */}
							<div className="mb-8">
								<h4 className="font-semibold text-gray-900 mb-4 heading text-lg">
									Color
								</h4>
								<div className="flex flex-wrap gap-3">
									{filters.color.map((color) => (
										<button
											key={color.name}
											onClick={() => handleFilterChange("color", color.name)}
											className={`w-8 h-8 rounded-full shadow-md transition-all duration-200 transform hover:scale-110 ${
												color.value
											} ${
												selectedFilters.color === color.name
													? "ring-2 ring-offset-2 ring-blue-600"
													: ""
											}`}
											title={color.name}
										/>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Products Area */}
					<div className="flex-1">
						{/* Toolbar */}
						<div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
							<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
								<div className="text-gray-600">
									Showing{" "}
									<span className="font-semibold text-gray-900">
										{sortedProducts.length}
									</span>{" "}
									of{" "}
									<span className="font-semibold text-gray-900">
										{products.length}
									</span>{" "}
									products
								</div>
								<div className="flex items-center space-x-4">
									<select
										value={selectedFilters.sort}
										onChange={(e) => handleFilterChange("sort", e.target.value)}
										className="border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 shadow-sm px-4 py-2"
									>
										<option value="featured">Featured</option>
										<option value="newest">Newest</option>
										<option value="price-low">Price: Low to High</option>
										<option value="price-high">Price: High to Low</option>
										<option value="rating">Highest Rated</option>
									</select>
								</div>
							</div>
						</div>

						{/* Products Grid */}
						{loading ? (
							<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
								{[...Array(6)].map((_, index) => (
									<div
										key={index}
										className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse"
									>
										<div className="bg-gray-200 h-80"></div>
										<div className="p-6 space-y-3">
											<div className="h-4 bg-gray-200 rounded w-3/4"></div>
											<div className="h-3 bg-gray-200 rounded w-1/2"></div>
											<div className="h-6 bg-gray-200 rounded w-1/3"></div>
										</div>
									</div>
								))}
							</div>
						) : (
							<>
								<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
									{sortedProducts.map((product) => (
										<ProductCard key={product.id} product={product} />
									))}
								</div>

								{/* No Products Found */}
								{sortedProducts.length === 0 && (
									<div className="text-center py-16">
										<div className="text-8xl mb-6">🛍️</div>
										<h3 className="text-2xl font-semibold text-gray-900 mb-4 heading">
											No products found
										</h3>
										<p className="text-gray-600 mb-6 max-w-md mx-auto">
											Try adjusting your filters or browse different categories
											to find what you're looking for.
										</p>
										<button
											onClick={clearFilters}
											className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg transform hover:scale-105 active:scale-95"
										>
											Clear All Filters
										</button>
									</div>
								)}

								{/* Load More */}
								{sortedProducts.length > 0 && (
									<div className="flex justify-center mt-12">
										<button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-semibold shadow-sm hover:shadow-md transform hover:scale-105 active:scale-95">
											Load More Products
										</button>
									</div>
								)}
							</>
						)}
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default MenuPage;
