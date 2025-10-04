import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

// function Home() {
// 	return <h1>Home Page</h1>;
// }

function Menu() {
	return <h1>Menu Page</h1>;
}

function Contact() {
	return <h1>Contact Page</h1>;
}
function Reviews() {
	return <h1>Reviews Page</h1>;
}

function App() {
	return (
		<BrowserRouter>
			{/* Navigation */}
			<Navbar />
			{/* Routes */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/review" element={<Reviews />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
