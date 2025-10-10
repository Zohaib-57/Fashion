import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="w-full">
			{/* Main Navbar */}
			<div className="flex justify-between items-center mx-4 sm:mx-6 my-4 px-4 sm:px-6 py-3 bg-gray-50 shadow-md rounded-lg">
				{/* Logo */}
				<div className="flex-shrink-0">
					<Link className="flex items-center">
						<img
							src="https://i.pinimg.com/736x/7b/5f/d9/7b5fd9f074cf1ec3709271398dcf653a.jpg"
							alt="Fashion"
							className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-cover rounded"
						/>
						<span className="text-xl sm:text-2xl font-bold text-gray-900 ml-2 sm:ml-3">
							Fashion
						</span>
					</Link>
				</div>

				{/* Desktop Nav Links */}
				<div className="hidden md:flex gap-6 lg:gap-8">
					<Link
						to="/"
						className="text-base lg:text-lg font-semibold text-gray-900 hover:text-blue-600 transition"
					>
						Home
					</Link>
					<Link
						to="/menu"
						className="text-base lg:text-lg font-semibold text-gray-900 hover:text-blue-600 transition"
					>
						Menu
					</Link>
					<Link
						to="/review"
						className="text-base lg:text-lg font-semibold text-gray-900 hover:text-blue-600 transition"
					>
						Reviews
					</Link>
					<Link
						to="/contact"
						className="text-base lg:text-lg font-semibold text-gray-900 hover:text-blue-600 transition"
					>
						Contact
					</Link>
				</div>

				{/* Desktop Button & Mobile Menu Button */}
				<div className="flex items-center gap-4">
					{/* Desktop Button */}
					<div className="hidden sm:block">
						<button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer">
							Shop Now
							<ArrowRight size={16} className="sm:size-[18px]" />
						</button>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="md:hidden mx-4 mt-2 bg-white shadow-lg rounded-lg border">
					<div className="flex flex-col p-4 space-y-4">
						<Link
							to="/"
							className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition py-2 px-4 rounded-lg hover:bg-gray-50"
							onClick={() => setIsMenuOpen(false)}
						>
							Home
						</Link>
						<Link
							to="/menu"
							className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition py-2 px-4 rounded-lg hover:bg-gray-50"
							onClick={() => setIsMenuOpen(false)}
						>
							Menu
						</Link>
						<Link
							to="/review"
							className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition py-2 px-4 rounded-lg hover:bg-gray-50"
							onClick={() => setIsMenuOpen(false)}
						>
							Reviews
						</Link>
						<Link
							to="/contact"
							className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition py-2 px-4 rounded-lg hover:bg-gray-50"
							onClick={() => setIsMenuOpen(false)}
						>
							Contact
						</Link>
						{/* Mobile Shop Now Button */}
						<button className="flex items-center justify-center gap-2 bg-blue-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer mt-2">
							Shop Now
							<ArrowRight size={18} />
						</button>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
