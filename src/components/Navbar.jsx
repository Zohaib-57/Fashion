import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const Navbar = () => {
	return (
		<nav className="flex justify-between items-center mx-6 my-4 px-6 py-3 bg-gray-50 shadow-md rounded-lg">
			{/* Logo */}
			<div>
				<Link className="flex items-center gap-3">
					<img
						src="https://i.pinimg.com/736x/7b/5f/d9/7b5fd9f074cf1ec3709271398dcf653a.jpg"
						alt="Fashion"
						className="w-14 h-14 object-cover rounded"
					/>
					<span className="text-2xl font-bold text-gray-900">Fashion</span>
				</Link>
			</div>

			{/* Nav Links */}
			<div className="flex gap-8">
				<Link
					to="/"
					className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition"
				>
					Home
				</Link>
				<Link
					to="/menu"
					className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition"
				>
					Menu
				</Link>
				<Link
					to="/review"
					className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition"
				>
					Reviews
				</Link>
				<Link
					to="/contact"
					className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition"
				>
					Contact
				</Link>
			</div>

			{/* Button */}
			<div>
				<button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
					Shop Now
					<ArrowRight size={18} />
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
