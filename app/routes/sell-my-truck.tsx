import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Form } from "@remix-run/react";
import type { Vin } from "~/models/post.server";
import { getVin } from "~/models/post.server";

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
	return {
		title: "List your Tow Truck for sale on Tow USA",
		description: "The most complete source of tow trucks for sale near you",
	};
};

// Load data from post model
// watched this tutorial: https://www.youtube.com/watch?v=HOlYQu_r4Io
export const loader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url);
	const vin = url.searchParams.get("vin");

	return getVin(vin);
};

// Must be logged in to see this view
// IF USER  IS NOT LOGGED IN, REIDRECT THEM TO THE SELL MY TRUCK LANDING PAGE (WILL NEED MIDDLEWARE TO DO THIS)
// https://remix.run/guides/routing
export default function SellMyTruck() {
	const specs = useLoaderData<Vin>();
	return (
		<div className="container flex flex-col gap-6 mx-auto border-2 border-emerald-500 py-6">
			<div className="text-center">
				<h1 className="text-3xl font-medium mb-2">Sell My Truck</h1>
				<p className="text-lg">
					Post your tow truck for sale for thousands to see
				</p>
			</div>

			{/* STEP 1 - GET VIN# DATA */}
			<div className="">
				<Form method="get" className="flex justify-center">
					<div className="flex gap-4">
						<input
							type="text"
							name="vin"
							placeholder="Enter Vin Number"
							className="shadow-sm focus:ring-indigo-500 py-3 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
						/>
						<button
							type="submit"
							className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500
                            ">
							Submit
						</button>
					</div>
				</Form>
			</div>
			{/* Loader Data */}
			<div className="flex gap-6 text-center">
				<div className="flex-1">
					<h2 className="font-bold">Example Vin Data:</h2>
					<p>
						Need to fetch: Vin, Year, Make, Model, Fuel Type, maybe a couple
						more
					</p>
					<p className="font-semibold">
						Now pass vin data off to another page like autonation or step form
						here?
					</p>
				</div>
				<div className="flex-1">
					{specs.ModelYear} {specs.Make} {specs.Model}
				</div>
			</div>
		</div>
	);
}
