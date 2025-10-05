import React, { useEffect, useMemo, useState } from "react";

// Small countdown hook
function useCountdown(targetDate) {
	const target = useMemo(
		() => (targetDate instanceof Date ? targetDate : new Date(targetDate)),
		[targetDate]
	);
	const [now, setNow] = useState(Date.now());

	useEffect(() => {
		const id = setInterval(() => setNow(Date.now()), 1000);
		return () => clearInterval(id);
	}, []);

	const total = Math.max(0, target.getTime() - now);
	const days = Math.floor(total / (24 * 60 * 60 * 1000));
	const hours = Math.floor((total % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
	const minutes = Math.floor((total % (60 * 60 * 1000)) / (60 * 1000));
	const seconds = Math.floor((total % (60 * 1000)) / 1000);

	return { days, hours, minutes, seconds, done: total === 0 };
}

const GiftIcon = ({ className = "w-6 h-6" }) => (
	<svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
		<path
			d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7m16 0H4m16 0V9a2 2 0 0 0-2-2h-5m-9 5V9a2 2 0 0 1 2-2h5m0 0C8.5 7 8 4 10 4s2 3 2 3m0 0s.5-3 2-3 1.5 3-2 3m0 0v14"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const TruckIcon = ({ className = "w-6 h-6" }) => (
	<svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
		<path
			d="M3 7h11v8H3V7Zm11 3h3.5L20 12.5V15h-3M7 19a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const OfferCard = ({ icon, title, subtitle }) => (
	<div className="rounded-2xl border border-white/25 bg-white/10 p-6 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition hover:bg-white/15">
		<div className="flex items-center gap-3">
			<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-white">
				{icon}
			</div>
		</div>
		<h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
		<p className="mt-1 text-sm text-white/80">{subtitle}</p>
	</div>
);

const TimerBlock = ({ value, label }) => {
	const pad = (n) => String(n).padStart(2, "0");
	return (
		<div className="rounded-xl bg-white/20 px-6 py-4 text-center backdrop-blur-sm">
			<div className="text-3xl font-semibold tabular-nums tracking-widest text-white">
				{pad(value)}
			</div>
			<div className="mt-1 text-xs uppercase tracking-wide text-white/80">
				{label}
			</div>
		</div>
	);
};

export default function SpecialOffers({
	// default: 3 days from now
	deadline = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
	onShopClick,
	onViewAllClick,
}) {
	const { days, hours, minutes, seconds } = useCountdown(deadline);

	return (
		<section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-700 via-teal-700 to-blue-800 text-white m-7">
			{/* Decorative bubbles */}
			<div className="pointer-events-none absolute -top-16 -left-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
			<div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:px-8 md:py-20 lg:grid-cols-2">
				{/* Left content */}
				<div className="max-w-xl">
					<span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white/90">
						Limited Time Offer
					</span>

					<h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
						Special Offers &
					</h2>

					<p className="mt-4 text-white/90">
						Get up to 50% off on selected items. Free shipping on orders over
						$100. Don&apos;t miss out on these amazing deals!
					</p>

					<div className="mt-8 flex flex-wrap items-center gap-6">
						<button
							type="button"
							onClick={onShopClick}
							className="rounded-lg bg-white px-6 py-3 font-medium text-cyan-700 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-cyan-600"
						>
							Shop Sale Items
						</button>

						<button
							type="button"
							onClick={onViewAllClick}
							className="font-medium text-white/90 underline-offset-4 transition hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-cyan-600"
						>
							View All Offers
						</button>
					</div>
				</div>

				{/* Right content */}
				<div className="relative">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
						<OfferCard
							icon={<GiftIcon />}
							title="Free Gift"
							subtitle="With every purchase over $150"
						/>
						<OfferCard
							icon={<TruckIcon />}
							title="Free Shipping"
							subtitle="On orders over $100 worldwide"
						/>
					</div>

					<div className="mt-6 rounded-2xl border border-white/25 bg-white/10 p-6 backdrop-blur-md sm:p-8">
						<div className="mb-4 text-center text-white/90 sm:mb-6">
							<span className="text-base font-semibold">Sale Ends In:</span>
						</div>
						<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
							<TimerBlock value={days} label="Days" />
							<TimerBlock value={hours} label="Hours" />
							<TimerBlock value={minutes} label="Minutes" />
							<TimerBlock value={seconds} label="Seconds" />
						</div>
					</div>

					{/* Floating glow */}
					<div className="pointer-events-none absolute right-16 top-6 h-36 w-36 rounded-full bg-white/20 opacity-40 blur-2xl" />
				</div>
			</div>
		</section>
	);
}
