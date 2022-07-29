import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
	return {
		title: "Tow USA - Discover your next tow truck ",
		description: "The most complete source of tow trucks for sale near you",
	};
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
	return (
		<div>
			<Banner></Banner>
			{/* list of tow trucks underneath with different filters */}
			Tow truck posts here
		</div>
	);
}

// BANNER IMAGE HERE PULLED FROM A NEXT JS PROJECT
// NEEDS TO BE REMIXED WITH LINK COMPONENTS AND IMAGE ADDED
function Banner() {
	return (
		<section className="relative h-[32rem] bg-gradient-to-r from-cyan-500 to-blue-500">
			<div className="absolute w-full h-full bg-black opacity-70"></div>
			<div className="absolute w-full h-full">
				<div className="relative flex text-white  flex-col gap-6 h-full justify-center items-center max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col gap-2 text-center">
						<h1 className="text-3xl md:text-5xl lg:text-6xl  text-center font-bold">
							Discover your next tow truck
						</h1>
						<span className="text-lg">
							With the most complete source of tow trucks for sale near you
						</span>
					</div>
					<div className="flex gap-4 flex-col sm:flex-row flex-wrap md:px-32 lg:px-60  w-full">
						<a
							className="flex sm:flex-1 font-bold justify-center py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#EF0914]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							href="">
							Shop Used
						</a>
						<a
							className="flex sm:flex-1 font-bold justify-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#EF0914]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							href="">
							Shop New
						</a>
						<Link
							to="sell-my-truck"
							className="flex sm:basis-full font-bold justify-center px-6 py-3 border border-2 border-[#EF0914] shadow-sm text-base font-medium rounded-md text-white   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Sell My Tow Truck
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
