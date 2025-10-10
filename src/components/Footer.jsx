import React, { useState } from "react";
import { Mail, Phone, MapPin, X } from "lucide-react";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";

function SocialIcon({ label, href = "#", children }) {
	return (
		<a
			href={href}
			aria-label={label}
			className="text-slate-400 transition hover:text-white p-1"
		>
			{children}
		</a>
	);
}

export default function Footer({
	brand = "Fashion",
	className = "",
	onSubscribe,
}) {
	const [email, setEmail] = useState("");
	const year = new Date().getFullYear();

	function handleSubmit(e) {
		e.preventDefault();
		if (!email.trim()) return;
		onSubscribe ? onSubscribe(email) : console.log("Subscribed:", email);
		setEmail("");
	}

	return (
		<footer className={`relative bg-slate-900 text-slate-100 ${className}`}>
			<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600" />

			{/* Newsletter */}
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 pt-8 sm:pt-10 md:pt-12 pb-6 sm:pb-8 md:pb-10">
				<h3 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold">
					Stay in Style
				</h3>
				<p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-center text-slate-300 text-sm sm:text-base px-2">
					Subscribe to our newsletter and be the first to know about new
					arrivals, exclusive offers, and style tips.
				</p>

				<form
					onSubmit={handleSubmit}
					className="mx-auto mt-4 sm:mt-6 flex w-full max-w-xl flex-col items-center gap-3 sm:flex-row px-2"
				>
					<label htmlFor="footer-email" className="sr-only">
						Enter your email
					</label>
					<input
						id="footer-email"
						type="email"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Enter your email"
						className="h-10 sm:h-11 w-full flex-1 rounded-md border border-slate-700 bg-slate-800/70 px-3 sm:px-4 text-slate-100 placeholder-slate-400 outline-none focus:border-transparent focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base"
					/>
					<button
						type="submit"
						className="h-10 sm:h-11 w-full rounded-md bg-white px-4 sm:px-6 font-medium text-slate-900 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 text-sm sm:text-base sm:w-auto"
					>
						Subscribe
					</button>
				</form>
			</div>

			<div className="h-px w-full bg-slate-800" />

			{/* Links + contact */}
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-6 sm:py-8 md:py-10">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
					{/* Brand Info */}
					<div className="sm:col-span-2 lg:col-span-1">
						<h4 className="text-lg sm:text-xl font-semibold">{brand}</h4>
						<p className="mt-2 sm:mt-3 text-slate-300 text-sm sm:text-base">
							Your destination for premium fashion and timeless style. Discover
							carefully curated collections that express your unique
							personality.
						</p>

						<ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-slate-300 text-sm sm:text-base">
							<li className="flex items-start gap-2 sm:gap-3">
								<Mail
									className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 text-slate-400 flex-shrink-0"
									strokeWidth={1.5}
									aria-hidden="true"
								/>
								<a
									href="mailto:support@stylehub.com"
									className="hover:text-white break-all"
								>
									support@fashion.com
								</a>
							</li>
							<li className="flex items-start gap-2 sm:gap-3">
								<Phone
									className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 text-slate-400 flex-shrink-0"
									strokeWidth={1.5}
									aria-hidden="true"
								/>
								<a href="tel:+15551234567" className="hover:text-white">
									+1 (555) 123-4567
								</a>
							</li>
							<li className="flex items-start gap-2 sm:gap-3">
								<MapPin
									className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 text-slate-400 flex-shrink-0"
									strokeWidth={1.5}
									aria-hidden="true"
								/>
								<address className="not-italic text-sm sm:text-base">
									123 Fashion Street, NY 10001
								</address>
							</li>
						</ul>
					</div>

					{/* Navigation Sections */}
					<nav aria-label="Customer Service">
						<h5 className="text-base font-semibold">Customer Service</h5>
						<ul className="mt-2 sm:mt-4 space-y-2 text-slate-300 text-sm sm:text-base">
							{[
								"Contact Us",
								"FAQ",
								"Size Guide",
								"Shipping Info",
								"Returns & Exchanges",
							].map((item) => (
								<li key={item}>
									<a className="hover:text-white" href="#">
										{item}
									</a>
								</li>
							))}
						</ul>
					</nav>

					<nav aria-label="About">
						<h5 className="text-base font-semibold">About</h5>
						<ul className="mt-2 sm:mt-4 space-y-2 text-slate-300 text-sm sm:text-base">
							{[
								"Our Story",
								"Careers",
								"Press",
								"Sustainability",
								"Affiliate Program",
							].map((item) => (
								<li key={item}>
									<a className="hover:text-white" href="#">
										{item}
									</a>
								</li>
							))}
						</ul>
					</nav>

					<nav aria-label="Shop">
						<h5 className="text-base font-semibold">Shop</h5>
						<ul className="mt-2 sm:mt-4 space-y-2 text-slate-300 text-sm sm:text-base">
							{["Men", "Women", "Accessories", "Sale", "New Arrivals"].map(
								(item) => (
									<li key={item}>
										<a className="hover:text-white" href="#">
											{item}
										</a>
									</li>
								)
							)}
						</ul>
					</nav>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-slate-800">
				<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-4 sm:py-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
					<p className="text-xs sm:text-sm text-slate-400 text-center sm:text-left">
						© {year} {brand}. All rights reserved.
					</p>
					<div className="flex items-center gap-3 sm:gap-4 md:gap-5">
						<SocialIcon label="Facebook" href="#">
							<SiFacebook size={18} className="sm:size-[20px]" />
						</SocialIcon>
						<SocialIcon label="X (Twitter)" href="#">
							<X size={18} className="sm:size-[20px]" />
						</SocialIcon>
						<SocialIcon label="Instagram" href="#">
							<SiInstagram size={18} className="sm:size-[20px]" />
						</SocialIcon>
						<SocialIcon label="YouTube" href="#">
							<SiYoutube size={18} className="sm:size-[20px]" />
						</SocialIcon>
					</div>
				</div>
			</div>
		</footer>
	);
}
