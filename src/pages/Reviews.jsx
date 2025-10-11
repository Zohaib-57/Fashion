// ReviewPage.jsx
import React, { useState } from "react";
import {
	Heart,
	MessageCircle,
	Share,
	Camera,
	Hash,
	Calendar,
} from "lucide-react";
import Footer from "../components/Footer";

const ReviewPage = () => {
	const [activeFilter, setActiveFilter] = useState("all");
	const [likedPosts, setLikedPosts] = useState(new Set());
	const [commentInputs, setCommentInputs] = useState({});

	const stylePosts = [
		{
			id: 1,
			user: {
				name: "Emma Thompson",
				avatar:
					"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
				verified: true,
			},
			image:
				"https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=500&h=600&fit=crop",
			products: [
				{ name: "Premium Wool Coat", price: "$199.99" },
				{ name: "Designer Handbag", price: "$159.99" },
			],
			hashtags: ["#WinterStyle", "#FashionFinds", "#OOTD"],
			description:
				"Love how this wool coat pairs with my new bag! Perfect for chilly days ❄️",
			likes: 142,
			comments: [
				{ user: "Mike Chen", text: "Great outfit! Where are the boots from?" },
				{ user: "Emma Wilson", text: "You look stunning! 🔥" },
			],
			timestamp: "2 hours ago",
			featured: true,
		},
		{
			id: 2,
			user: {
				name: "Alex Rodriguez",
				avatar:
					"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
				verified: false,
			},
			image:
				"https://images.unsplash.com/photo-1505022610485-0249ba5b3675?w=500&h=600&fit=crop",
			products: [
				{ name: "Classic Denim Jacket", price: "$89.99" },
				{ name: "Casual Sneakers", price: "$129.99" },
			],
			hashtags: ["#StreetStyle", "#DenimLove", "#FashionFinds"],
			description: "Casual Friday vibes with my favorite denim jacket 👖",
			likes: 89,
			comments: [{ user: "Lisa Park", text: "Love this casual look! 😍" }],
			timestamp: "1 day ago",
			featured: false,
		},
		{
			id: 3,
			user: {
				name: "Emma Wilson",
				avatar:
					"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
				verified: true,
			},
			image:
				"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=600&fit=crop",
			products: [
				{ name: "Evening Dress", price: "$149.99" },
				{ name: "Elegant Heels", price: "$119.99" },
			],
			hashtags: ["#EveningWear", "#ElegantStyle", "#OOTD"],
			description: "Ready for a night out! This dress fits like a dream ✨",
			likes: 256,
			comments: [
				{ user: "Sarah Johnson", text: "Absolutely beautiful! 💫" },
				{ user: "FashionLover", text: "Where is this dress from? Stunning!" },
			],
			timestamp: "3 days ago",
			featured: true,
		},
		{
			id: 4,
			user: {
				name: "Mike Chen",
				avatar:
					"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
				verified: true,
			},
			image:
				"https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500&h=600&fit=crop",
			products: [
				{ name: "Business Suit", price: "$299.99" },
				{ name: "Leather Shoes", price: "$179.99" },
			],
			hashtags: ["#BusinessStyle", "#ProfessionalLook", "#FashionFinds"],
			description: "Power dressing for important meetings today 💼",
			likes: 167,
			comments: [{ user: "Alex Rodriguez", text: "Sharp look! 🔥" }],
			timestamp: "4 days ago",
			featured: false,
		},
		{
			id: 5,
			user: {
				name: "Lisa Park",
				avatar:
					"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
				verified: false,
			},
			image:
				"https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500&h=600&fit=crop",
			products: [
				{ name: "Summer Dress", price: "$79.99" },
				{ name: "Straw Hat", price: "$49.99" },
			],
			hashtags: ["#SummerVibes", "#BeachStyle", "#OOTD"],
			description: "Beach day essentials! Loving this flowy summer dress 🌊",
			likes: 203,
			comments: [
				{ user: "Emma Wilson", text: "Perfect for summer! ☀️" },
				{ user: "Sarah Johnson", text: "The hat is so cute with this outfit!" },
			],
			timestamp: "1 week ago",
			featured: true,
		},
		{
			id: 6,
			user: {
				name: "David Kim",
				avatar:
					"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
				verified: true,
			},
			image:
				"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop",
			products: [
				{ name: "Casual Blazer", price: "$129.99" },
				{ name: "Chino Pants", price: "$69.99" },
			],
			hashtags: ["#SmartCasual", "#WeekendStyle", "#FashionFinds"],
			description: "Perfect smart-casual look for weekend brunches 🥂",
			likes: 98,
			comments: [{ user: "Mike Chen", text: "Great combination! 👌" }],
			timestamp: "1 week ago",
			featured: false,
		},
	];

	const filters = [
		{ id: "all", name: "All Styles", count: stylePosts.length },
		{
			id: "featured",
			name: "Featured",
			count: stylePosts.filter((post) => post.featured).length,
		},
		{
			id: "ootd",
			name: "Outfit of the Day",
			count: stylePosts.filter((post) => post.hashtags.includes("#OOTD"))
				.length,
		},
		{
			id: "trending",
			name: "Trending",
			count: stylePosts.filter((post) => post.likes > 150).length,
		},
	];

	const filteredPosts = stylePosts.filter((post) => {
		if (activeFilter === "all") return true;
		if (activeFilter === "featured") return post.featured;
		if (activeFilter === "ootd") return post.hashtags.includes("#OOTD");
		if (activeFilter === "trending") return post.likes > 150;
		return true;
	});

	const handleLike = (postId) => {
		setLikedPosts((prev) => {
			const newLiked = new Set(prev);
			if (newLiked.has(postId)) {
				newLiked.delete(postId);
			} else {
				newLiked.add(postId);
			}
			return newLiked;
		});
	};

	const handleCommentChange = (postId, text) => {
		setCommentInputs((prev) => ({
			...prev,
			[postId]: text,
		}));
	};

	const addComment = (postId) => {
		const comment = commentInputs[postId];
		if (!comment?.trim()) return;

		// In a real app, you would send this to your backend
		console.log(`Adding comment to post ${postId}: ${comment}`);

		// Clear the input
		setCommentInputs((prev) => ({
			...prev,
			[postId]: "",
		}));
	};

	const sharePost = (post) => {
		if (navigator.share) {
			navigator.share({
				title: `${post.user.name}'s Style`,
				text: post.description,
				url: window.location.href,
			});
		} else {
			// Fallback for browsers that don't support Web Share API
			navigator.clipboard.writeText(window.location.href);
			alert("Link copied to clipboard!");
		}
	};

	const StylePost = ({ post }) => {
		const isLiked = likedPosts.has(post.id);
		const currentComment = commentInputs[post.id] || "";

		return (
			<div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
				{/* User Header */}
				<div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100">
					<div className="flex items-center gap-3">
						<img
							src={post.user.avatar}
							alt={post.user.name}
							className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-indigo-200"
						/>
						<div>
							<div className="flex items-center gap-2">
								<h3 className="font-semibold text-gray-900 text-sm sm:text-base">
									{post.user.name}
								</h3>
								{post.user.verified && (
									<span className="bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-full">
										✓
									</span>
								)}
							</div>
							<p className="text-gray-500 text-xs sm:text-sm flex items-center gap-1">
								<Calendar size={12} />
								{post.timestamp}
							</p>
						</div>
					</div>
					{post.featured && (
						<span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
							Featured
						</span>
					)}
				</div>

				{/* Post Image */}
				<div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
					<img
						src={post.image}
						alt={`Style by ${post.user.name}`}
						className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
					/>
					{/* Outfit of the Day Badge */}
					{post.hashtags.includes("#OOTD") && (
						<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
							🎯 OOTD
						</div>
					)}
				</div>

				{/* Post Content */}
				<div className="p-4 sm:p-6">
					{/* Action Buttons */}
					<div className="flex items-center justify-between mb-4">
						<div className="flex items-center gap-4">
							<button
								onClick={() => handleLike(post.id)}
								className={`flex items-center gap-2 transition-all duration-300 ${
									isLiked
										? "text-red-500 scale-110"
										: "text-gray-600 hover:text-red-500"
								}`}
							>
								<Heart size={20} fill={isLiked ? "currentColor" : "none"} />
								<span className="text-sm font-semibold">
									{post.likes + (isLiked ? 1 : 0)}
								</span>
							</button>
							<button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300">
								<MessageCircle size={20} />
								<span className="text-sm font-semibold">
									{post.comments.length}
								</span>
							</button>
						</div>
						<button
							onClick={() => sharePost(post)}
							className="text-gray-600 hover:text-green-600 transition-colors duration-300"
						>
							<Share size={20} />
						</button>
					</div>

					{/* Description */}
					<p className="text-gray-800 text-sm sm:text-base mb-4 leading-relaxed">
						{post.description}
					</p>

					{/* Products Used */}
					<div className="mb-4">
						<h4 className="font-semibold text-gray-900 text-sm mb-2">
							Products in this look:
						</h4>
						<div className="space-y-2">
							{post.products.map((product, index) => (
								<div
									key={index}
									className="flex justify-between items-center text-sm"
								>
									<span className="text-gray-700">{product.name}</span>
									<span className="font-semibold text-blue-600">
										{product.price}
									</span>
								</div>
							))}
						</div>
					</div>

					{/* Hashtags */}
					<div className="flex flex-wrap gap-2 mb-4">
						{post.hashtags.map((hashtag, index) => (
							<span
								key={index}
								className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors duration-300 cursor-pointer"
							>
								<Hash size={12} />
								{hashtag}
							</span>
						))}
					</div>

					{/* Comments Section */}
					<div className="space-y-3">
						{post.comments.slice(0, 2).map((comment, index) => (
							<div key={index} className="flex items-start gap-3">
								<div className="w-6 h-6 bg-gray-300 rounded-full flex-shrink-0"></div>
								<div className="flex-1">
									<p className="text-sm">
										<span className="font-semibold text-gray-900">
											{comment.user}
										</span>
										<span className="text-gray-700 ml-2">{comment.text}</span>
									</p>
								</div>
							</div>
						))}
						{post.comments.length > 2 && (
							<button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
								View all {post.comments.length} comments
							</button>
						)}
					</div>

					{/* Add Comment */}
					<div className="flex gap-2 mt-4">
						<input
							type="text"
							value={currentComment}
							onChange={(e) => handleCommentChange(post.id, e.target.value)}
							placeholder="Add a comment..."
							className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all duration-300"
						/>
						<button
							onClick={() => addComment(post.id)}
							className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold text-sm"
						>
							Post
						</button>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
			{/* Header Section */}
			<section className="pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto text-center">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Style Community
					</h1>
					<p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
						Discover real outfits from our community and share your own style
					</p>
					<div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full mb-8"></div>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<button className="bg-indigo-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
							<Camera size={20} />
							Share Your Style
						</button>
						<button className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 rounded-lg hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300 font-semibold">
							Community Guidelines
						</button>
					</div>
				</div>
			</section>

			{/* Filters */}
			<section className="py-6 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm sticky top-0 z-10 shadow-sm">
				<div className="max-w-7xl mx-auto">
					<div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
						{filters.map((filter) => (
							<button
								key={filter.id}
								onClick={() => setActiveFilter(filter.id)}
								className={`px-4 sm:px-6 py-2 rounded-full transition-all duration-300 font-semibold text-sm sm:text-base ${
									activeFilter === filter.id
										? "bg-indigo-600 text-white shadow-lg transform scale-105"
										: "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
								}`}
							>
								{filter.name}
								<span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">
									{filter.count}
								</span>
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Style Gallery */}
			<section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					{/* Stats Bar */}
					<div className="flex flex-wrap justify-between items-center mb-8 p-4 bg-white rounded-2xl shadow-lg">
						<div className="text-center">
							<div className="text-2xl sm:text-3xl font-bold text-gray-900">
								{stylePosts.length}
							</div>
							<div className="text-gray-600 text-sm">Style Posts</div>
						</div>
						<div className="text-center">
							<div className="text-2xl sm:text-3xl font-bold text-gray-900">
								{stylePosts.reduce((sum, post) => sum + post.likes, 0)}+
							</div>
							<div className="text-gray-600 text-sm">Likes</div>
						</div>
						<div className="text-center">
							<div className="text-2xl sm:text-3xl font-bold text-gray-900">
								{stylePosts.reduce(
									(sum, post) => sum + post.comments.length,
									0
								)}
								+
							</div>
							<div className="text-gray-600 text-sm">Comments</div>
						</div>
						<div className="text-center">
							<div className="text-2xl sm:text-3xl font-bold text-gray-900">
								50+
							</div>
							<div className="text-gray-600 text-sm">Active Members</div>
						</div>
					</div>

					{/* Posts Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
						{filteredPosts.map((post) => (
							<StylePost key={post.id} post={post} />
						))}
					</div>

					{/* Load More */}
					{filteredPosts.length > 0 && (
						<div className="flex justify-center mt-12">
							<button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
								Load More Styles
							</button>
						</div>
					)}
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default ReviewPage;
