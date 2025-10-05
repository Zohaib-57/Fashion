import React, { useState } from "react";
import { Mail, Phone, MapPin, X } from "lucide-react";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";

function SocialIcon({ label, href = "#", children }) {
	return (
		<a
			href={href}
			aria-label={label}
			className="text-slate-400 transition hover:text-white"
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
			<div className="mx-auto w-11/12 max-w-7xl px-4 sm:px-6 pt-12 pb-10">
				<h3 className="text-center text-2xl font-semibold sm:text-3xl">
					Stay in Style
				</h3>
				<p className="mx-auto mt-2 max-w-2xl text-center text-slate-300">
					Subscribe to our newsletter and be the first to know about new
					arrivals, exclusive offers, and style tips.
				</p>

				<form
					onSubmit={handleSubmit}
					className="mx-auto mt-6 flex w-full max-w-xl flex-col items-center gap-3 sm:flex-row"
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
						className="h-11 w-full flex-1 rounded-md border border-slate-700 bg-slate-800/70 px-4 text-slate-100 placeholder-slate-400 outline-none focus:border-transparent focus:ring-2 focus:ring-cyan-500"
					/>
					<button
						type="submit"
						className="h-11 w-full rounded-md bg-white px-6 font-medium text-slate-900 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 sm:w-auto"
					>
						Subscribe
					</button>
				</form>
			</div>

			<div className="h-px w-full bg-slate-800" />

			{/* Links + contact */}
			<div className="mx-auto w-11/12 max-w-7xl px-4 sm:px-6 py-10">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-4">
					<div>
						<h4 className="text-xl font-semibold">{brand}</h4>
						<p className="mt-3 text-slate-300">
							Your destination for premium fashion and timeless style. Discover
							carefully curated collections that express your unique
							personality.
						</p>

						<ul className="mt-4 space-y-3 text-slate-300">
							<li className="flex items-start gap-3">
								<Mail
									className="mt-0.5 h-5 w-5 text-slate-400"
									strokeWidth={1.5}
									aria-hidden="true"
								/>
								<a
									href="mailto:support@stylehub.com"
									className="hover:text-white"
								>
									support@fashion.com
								</a>
							</li>
							<li className="flex items-start gap-3">
								<Phone
									className="mt-0.5 h-5 w-5 text-slate-400"
									strokeWidth={1.5}
									aria-hidden="true"
								/>
								<a href="tel:+15551234567" className="hover:text-white">
									+1 (555) 123-4567
								</a>
							</li>
							<li className="flex items-start gap-3">
								<MapPin
									className="mt-0.5 h-5 w-5 text-slate-400"
									strokeWidth={1.5}
									aria-hidden="true"
								/>
								<address className="not-italic">
									123 Fashion Street, NY 10001
								</address>
							</li>
						</ul>
					</div>

					<nav aria-label="Customer Service">
						<h5 className="text-base font-semibold">Customer Service</h5>
						<ul className="mt-4 space-y-3 text-slate-300">
							<li>
								<a className="hover:text-white" href="#">
									Contact Us
								</a>
							</li>
							<li>
								<a className="hover:text-white" href="#">
									FAQ
								</a>
							</li>
							<li>
								<a className="hover:text-white" href="#">
									Size Guide
								</a>
							</li>
							<li>
								<a className="hover:text-white" href="#">
									Shipping Info
								</a>
							</li>
							<li>
								<a className="hover:text-white" href="#">
									Returns & Exchanges
								</a>
							</li>
						</ul>
					</nav>

					<nav aria-label="About">
						<h5 className="text-base font-semibold">About</h5>
						<ul className="mt-4 space-y-3 text-slate-300">
							<li>
								<a className="hover:text-white" href="#">
									Our Story
								</a>
							</li>
							<li>
								<a className="hover:text-white" href="#">
									Careers
								</a>
							</li>
							<li>
								<a className="hover:text-white" href="#">
									Press
								</a>
							</li>
							<li>
								<a className="hover:text-white" href="#">
									Sustainability
								</a>
							</li>
							<li>
								<a className="hover:text-white" href="#">
									Affiliate Program
								</a>
							</li>
						</ul>
					</nav>

					<nav aria-label="Shop">
						<h5 className="text-base font-semibold">Shop</h5>
						<ul className="mt-4 space-y-3 text-slate-300">
							<li>
								<a className="hover:text-white" href="#">
									Men
								</a>
							</li>
							<li>
								<a className="hover:text-white" href="#">
									Women
								</a>
							</li>
							<li>
								<a className="hover:text-white" href="#">
									Accessories
								</a>
							</li>
							<li>
								<a className="hover:text-white" href="#">
									Sale
								</a>
							</li>
							<li>
								<a className="hover:text-white" href="#">
									New Arrivals
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			<div className="border-t border-slate-800">
				<div className="mx-auto w-11/12 max-w-7xl px-4 sm:px-6 py-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
					<p className="text-sm text-slate-400">
						© {year} {brand}. All rights reserved.
					</p>
					<div className="flex items-center gap-5">
						<SocialIcon label="Facebook" href="#">
							<SiFacebook size={20} />
						</SocialIcon>
						<SocialIcon label="X (Twitter)" href="#">
							<X size={20} />
						</SocialIcon>
						<SocialIcon label="Instagram" href="#">
							<SiInstagram size={20} />
						</SocialIcon>
						<SocialIcon label="YouTube" href="#">
							<SiYoutube size={20} />
						</SocialIcon>
					</div>
				</div>
			</div>
		</footer>
	);
}
