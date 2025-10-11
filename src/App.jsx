import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";

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
