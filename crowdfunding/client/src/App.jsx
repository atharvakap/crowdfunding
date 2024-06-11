import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Sidebar, Navbar } from "./components";
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";
import { useSelector } from "react-redux";
// import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

const App = () => {
	const [searchQuery, setSearchQuery] = useState("");
	// const isAuth = Boolean(useSelector((state) => state.token));

	const handleSearch = (query) => {
		setSearchQuery(query);
		// console.log(searchQuery);
	};

	return (
		<div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
			<div className="sm:flex hidden mr-10 relative">
				<Sidebar />
			</div>

			<div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
				<Navbar handleSearch={handleSearch} />

				<Routes>
					{/* <Route path="/" element={isAuth ? <Home searchQuery={searchQuery} /> : <Navigate to="/" />} /> */}
					<Route path="/" element={<Home searchQuery={searchQuery} />} />
					<Route path="/profile" element={<Profile />} />
					{/* <Route path="/create-campaign" element={<CreateCampaign />} /> */}
					<Route path="/campaign-details/:id" element={<CampaignDetails />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;