import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

function Contact() {
	return <h1>Contact Page</h1>;
}
function Reviews() {
	return <h1>Reviews Page</h1>;
}

function App() {
	return (
		<BrowserRouter>
			<Navbar />
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
