import React, { useState } from "react";
import {
	Mail,
	Phone,
	MapPin,
	Clock,
	Send,
	MessageCircle,
	ChevronDown,
	ChevronUp,
} from "lucide-react";
import Footer from "../components/Footer";
// imports
import { Facebook, Instagram, Twitter } from "lucide-react";
import { FaPinterest } from "react-icons/fa";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);
	const [openFaq, setOpenFaq] = useState(null);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1500));

		setSubmitStatus("success");
		setIsSubmitting(false);
		setFormData({ name: "", email: "", subject: "", message: "" });

		setTimeout(() => setSubmitStatus(null), 5000);
	};

	const toggleFaq = (index) => {
		setOpenFaq(openFaq === index ? null : index);
	};

	const contactInfo = [
		{
			icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
			title: "Phone",
			details: "+1 (555) 123-4567",
			description: "Mon to Fri 9am to 6pm",
			color: "bg-blue-500",
		},
		{
			icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
			title: "Email",
			details: "support@fashion.com",
			description: "Send us your query anytime!",
			color: "bg-indigo-500",
		},
		{
			icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
			title: "Office",
			details: "123 Fashion Street",
			description: "New York, NY 10001",
			color: "bg-purple-500",
		},
		{
			icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
			title: "Hours",
			details: "Monday - Friday",
			description: "9:00 AM - 8:00 PM EST",
			color: "bg-cyan-500",
		},
	];

	const faqs = [
		{
			question: "How long does shipping take?",
			answer:
				"Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery.",
		},
		{
			question: "What is your return policy?",
			answer:
				"We offer 30-day returns on all items in original condition with tags attached.",
		},
		{
			question: "Do you ship internationally?",
			answer:
				"Yes, we ship to over 50 countries worldwide. Shipping costs vary by location.",
		},
		{
			question: "How can I track my order?",
			answer:
				"You'll receive a tracking number via email once your order ships. You can also track it from your account.",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
			{/* Header Section */}
			<section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto text-center">
					<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
						Get In Touch
					</h1>
					<p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
						We'd love to hear from you. Send us a message and we'll respond as
						soon as possible.
					</p>
					<div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-indigo-500 mx-auto rounded-full"></div>
				</div>
			</section>

			{/* Contact Cards & Form Section */}
			<section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
						{/* Contact Information - Mobile First */}
						<div className="lg:col-span-1">
							<div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 lg:sticky lg:top-8">
								<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
									<MessageCircle className="text-indigo-600 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
									Contact Info
								</h2>

								<div className="space-y-4 sm:space-y-6">
									{contactInfo.map((item, index) => (
										<div
											key={index}
											className="flex items-start gap-3 sm:gap-4 group cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-all duration-300"
										>
											<div
												className={`${item.color} text-white p-2 sm:p-3 rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
											>
												{item.icon}
											</div>
											<div className="min-w-0 flex-1">
												<h3 className="font-semibold text-gray-900 text-base sm:text-lg truncate">
													{item.title}
												</h3>
												<p className="text-gray-900 font-medium text-sm sm:text-base truncate">
													{item.details}
												</p>
												<p className="text-gray-600 text-xs sm:text-sm truncate">
													{item.description}
												</p>
											</div>
										</div>
									))}
								</div>

								{/* Social Media Links */}
								<div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
									<h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
										Follow Us
									</h3>

									<div className="flex flex-row flex-wrap justify-start items-center gap-3 overflow-x-auto sm:overflow-visible">
										{[
											{
												name: "Facebook",
												icon: <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />,
											},
											{
												name: "Instagram",
												icon: <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />,
											},
											{
												name: "Twitter",
												icon: <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />,
											},
											{
												name: "Pinterest",
												icon: <FaPinterest className="w-5 h-5 sm:w-6 sm:h-6" />,
											},
										].map((social) => (
											<button
												key={social.name}
												className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-indigo-100 text-gray-600 hover:text-indigo-600 p-2 sm:p-3 rounded-lg transition-all duration-300 transform hover:scale-110 flex-shrink-0"
											>
												{social.icon}
												<span className="hidden sm:inline font-medium text-sm">
													{social.name}
												</span>
											</button>
										))}
									</div>
								</div>
							</div>
						</div>

						{/* Contact Form & FAQ */}
						<div className="lg:col-span-2 space-y-6 sm:space-y-8">
							{/* Contact Form */}
							<div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
								<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
									Send us a Message
								</h2>
								<p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
									Fill out the form below and we'll get back to you within 24
									hours.
								</p>

								{/* Success Message */}
								{submitStatus === "success" && (
									<div className="bg-green-50 border border-green-200 text-green-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg mb-4 sm:mb-6 transition-all duration-300 text-sm sm:text-base">
										✅ Thank you for your message! We'll get back to you soon.
									</div>
								)}

								<form
									onSubmit={handleSubmit}
									className="space-y-4 sm:space-y-6"
								>
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
										<div>
											<label
												htmlFor="name"
												className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
											>
												Full Name *
											</label>
											<input
												type="text"
												id="name"
												name="name"
												required
												value={formData.name}
												onChange={handleChange}
												className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
												placeholder="Enter your full name"
											/>
										</div>
										<div>
											<label
												htmlFor="email"
												className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
											>
												Email Address *
											</label>
											<input
												type="email"
												id="email"
												name="email"
												required
												value={formData.email}
												onChange={handleChange}
												className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
												placeholder="Enter your email"
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="subject"
											className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
										>
											Subject *
										</label>
										<select
											id="subject"
											name="subject"
											required
											value={formData.subject}
											onChange={handleChange}
											className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
										>
											<option value="">Select a subject</option>
											<option value="general">General Inquiry</option>
											<option value="order">Order Support</option>
											<option value="return">Returns & Exchanges</option>
											<option value="wholesale">Wholesale Inquiry</option>
											<option value="other">Other</option>
										</select>
									</div>

									<div>
										<label
											htmlFor="message"
											className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
										>
											Message *
										</label>
										<textarea
											id="message"
											name="message"
											required
											rows="4"
											value={formData.message}
											onChange={handleChange}
											className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
											placeholder="Tell us how we can help you..."
										></textarea>
									</div>

									<button
										type="submit"
										disabled={isSubmitting}
										className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-3 sm:py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
									>
										{isSubmitting ? (
											<>
												<div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
												Sending...
											</>
										) : (
											<>
												<Send className="w-4 h-4 sm:w-5 sm:h-5" />
												Send Message
											</>
										)}
									</button>
								</form>
							</div>

							{/* FAQ Section */}
							<div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
								<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
									Frequently Asked Questions
								</h2>
								<div className="space-y-3 sm:space-y-4">
									{faqs.map((faq, index) => (
										<div
											key={index}
											className="border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors duration-300 overflow-hidden"
										>
											<button
												onClick={() => toggleFaq(index)}
												className="w-full text-left p-3 sm:p-4 font-semibold text-gray-900 flex justify-between items-center gap-3 text-sm sm:text-base"
											>
												<span className="flex-1 text-left">{faq.question}</span>
												{openFaq === index ? (
													<ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 flex-shrink-0" />
												) : (
													<ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 flex-shrink-0" />
												)}
											</button>
											{openFaq === index && (
												<div className="px-3 sm:px-4 pb-3 sm:pb-4 text-gray-600 text-sm sm:text-base leading-relaxed">
													{faq.answer}
												</div>
											)}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Map Section */}
			<section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
						<div className="grid grid-cols-1 lg:grid-cols-3">
							{/* Map */}
							<div className="lg:col-span-2 h-64 sm:h-80 lg:h-96">
								<iframe
									title="Google Map"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.988004506688!2d-74.00594118459457!3d40.71277597933047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316b3f0b15%3A0x2e3b2c983a7ad28d!2s123%20Fashion%20St%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sus!4v1696878982054!5m2!1sen!2sus"
									className="w-full h-full border-0 rounded-lg"
									allowFullScreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								></iframe>
							</div>

							{/* Store Info */}
							<div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-indigo-50 to-purple-50">
								<h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
									Visit Our Store
								</h3>
								<div className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
									<p className="flex items-start gap-2 sm:gap-3">
										<MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
										<span>123 Fashion Street, New York, NY 10001</span>
									</p>
									<p className="flex items-start gap-2 sm:gap-3">
										<Clock className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
										<span>
											Mon-Fri: 9:00 AM - 8:00 PM
											<br />
											Sat-Sun: 10:00 AM - 6:00 PM
										</span>
									</p>
									<p className="flex items-start gap-2 sm:gap-3">
										<Phone className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
										<span>+1 (555) 123-4567</span>
									</p>
								</div>
								<button className="w-full mt-4 sm:mt-6 bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold py-2 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
									Get Directions
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default Contact;
