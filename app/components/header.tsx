import { Menu } from "@headlessui/react";
import { ChevronDownIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import { Disclosure } from "@headlessui/react";
import { Link } from "@remix-run/react";

function Header() {
	return (
		<header className="">
			<nav
				className="fixed bg-white z-50 w-full left-0 top-0 right-0 p-0 shadow"
				aria-label="Top">
				<div className="w-full py-4 flex items-center justify-between block max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
					{/* Left Side Nav (main nav) */}
					<div className="flex items-center">
						<Link to="/">
							<span className="sr-only">Towusa</span>
							<svg
								width="auto"
								height="1.5rem"
								viewBox="0 0 402 65"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M56 1.69996V17H35.68V62.77H20.27V17H0V1.69996H56Z"
									fill="black"
								/>
								<path
									d="M122.93 32.24C122.969 35.9932 122.664 39.7422 122.02 43.44C121.525 46.3808 120.588 49.2298 119.24 51.89C118.092 54.1312 116.57 56.1603 114.74 57.89C112.887 59.5652 110.741 60.884 108.41 61.78C105.835 62.7903 103.15 63.4918 100.41 63.87C97.2021 64.3062 93.9673 64.5134 90.73 64.49C87.0667 64.527 83.4079 64.2257 79.8 63.59C76.7195 63.0138 73.7494 61.9541 71 60.45C68.3285 59.0179 66.0091 57.0094 64.21 54.57C62.2441 51.7787 60.8163 48.6451 60 45.33C58.938 41.0497 58.4372 36.6494 58.51 32.24C58.3986 27.1632 59.0905 22.1007 60.56 17.24C61.7145 13.4161 63.8605 9.96595 66.78 7.23996C69.6528 4.67827 73.0733 2.80727 76.78 1.76996C81.3333 0.523885 86.0399 -0.0720156 90.76 -3.59984e-05C95.4507 -0.0873608 100.13 0.488326 104.66 1.70996C108.368 2.7433 111.79 4.61477 114.66 7.17996C117.57 9.91197 119.711 13.3603 120.87 17.18C122.349 22.0593 123.045 27.1426 122.93 32.24ZM105.12 40.61C105.846 37.8809 106.182 35.0631 106.12 32.24C106.171 29.4174 105.834 26.6011 105.12 23.87C104.622 21.8858 103.584 20.0787 102.12 18.65C100.774 17.4012 99.1487 16.4926 97.38 16C95.2153 15.4644 92.9896 15.2156 90.76 15.26C88.5371 15.2173 86.3182 15.4661 84.16 16C82.3815 16.4819 80.7431 17.38 79.38 18.62C77.8963 20.043 76.8369 21.8502 76.32 23.84C75.5888 26.5679 75.252 29.3865 75.32 32.21C75.252 35.0334 75.5888 37.852 76.32 40.58C76.8371 42.5668 77.8966 44.3706 79.38 45.79C80.7406 47.0334 82.3799 47.932 84.16 48.41C86.3168 48.9524 88.5364 49.2046 90.76 49.16C92.9671 49.2045 95.1701 48.9522 97.31 48.41C99.0793 47.9272 100.708 47.029 102.06 45.79C103.532 44.3737 104.59 42.5828 105.12 40.61Z"
									fill="black"
								/>
								<path
									d="M193 1.69996H209.81L193 62.77H176.25L166.44 27.17L156.65 62.77H139.86L123.05 1.69996H139.86L149.86 38.11L159.86 1.69996H173L183 38.11L193 1.69996Z"
									fill="black"
								/>
								<path
									d="M212.75 32.24L216.47 1.69996H231.86L228.16 32.24C227.899 33.9669 227.802 35.7147 227.87 37.46C227.931 38.8293 228.088 40.1926 228.34 41.54C228.537 42.6298 228.941 43.6719 229.53 44.61C230.03 45.4193 230.647 46.1505 231.36 46.78C232.073 47.3893 232.889 47.8668 233.77 48.19C234.724 48.5448 235.713 48.7995 236.72 48.95C237.845 49.1181 238.982 49.1983 240.12 49.19C241.711 49.2064 243.3 49.0556 244.86 48.74C246.274 48.4266 247.626 47.879 248.86 47.12C250.151 46.3457 251.279 45.3266 252.18 44.12C253.231 42.6323 254.051 40.9936 254.61 39.26C255.372 36.99 255.878 34.6421 256.12 32.26L259.86 1.69996H275.27L271.55 32.24C271.068 36.7118 270.04 41.1078 268.49 45.33C267.301 48.6716 265.567 51.7936 263.36 54.57C261.417 56.9471 259.042 58.9354 256.36 60.43C253.732 61.9068 250.892 62.9694 247.94 63.58C244.769 64.2059 241.542 64.5075 238.31 64.48C236.59 64.48 234.97 64.4 233.43 64.26C231.912 64.1203 230.402 63.8932 228.91 63.58C227.501 63.2924 226.121 62.8739 224.79 62.33C223.534 61.8036 222.323 61.1748 221.17 60.45C220.004 59.7458 218.938 58.8881 218 57.9C217.062 56.8799 216.234 55.7637 215.53 54.57C214.747 53.2596 214.126 51.8595 213.68 50.4C213.171 48.7674 212.799 47.0948 212.57 45.4C212.303 43.4115 212.186 41.4059 212.22 39.4C212.256 37.0049 212.433 34.6141 212.75 32.24Z"
									fill="#EF0914"
								/>
								<path
									d="M308.5 24.62C312.79 24.79 316.26 25.01 318.91 25.3C321.649 25.5968 324.356 26.1356 327 26.91C329.289 27.4665 331.405 28.5795 333.16 30.15C334.635 31.7047 335.7 33.6015 336.26 35.67C336.989 38.426 337.139 41.3032 336.7 44.12C336.452 46.3228 335.941 48.4881 335.18 50.57C334.526 52.3523 333.627 54.0351 332.51 55.57C331.44 57.0022 330.139 58.246 328.66 59.25C327.149 60.287 325.521 61.1429 323.81 61.8C321.893 62.5226 319.91 63.0584 317.89 63.4C315.651 63.8038 313.39 64.0809 311.12 64.23C308.84 64.39 306.283 64.47 303.45 64.47C299.854 64.5048 296.259 64.3479 292.68 64C289.863 63.7028 287.093 63.0648 284.43 62.1C282.156 61.3451 280.115 60.0195 278.5 58.25C276.995 56.4032 275.965 54.2162 275.5 51.88C274.892 48.7652 274.817 45.5697 275.28 42.43H290.69C290.363 45.1833 291.283 47.0566 293.45 48.05C295.13 48.79 298.363 49.1733 303.15 49.2H309.57C310.5 49.2 311.69 49.13 313.15 49.05C314.243 49.0127 315.329 48.8619 316.39 48.6C317.168 48.3603 317.93 48.0696 318.67 47.73C319.399 47.4379 320.023 46.9325 320.46 46.28C321.2 44.9347 321.404 43.3592 321.03 41.87C320.834 41.2459 320.449 40.6977 319.93 40.3C319.383 39.8739 318.772 39.5364 318.12 39.3C317.283 39.0168 316.418 38.8257 315.54 38.73C314.54 38.6 313.48 38.51 312.46 38.45L308.86 38.28C307.78 38.28 306.97 38.23 306.43 38.2H306.37C302.123 38.0066 298.667 37.7666 296 37.48C293.319 37.1832 290.669 36.6545 288.08 35.9C285.858 35.3747 283.798 34.3138 282.08 32.81C280.645 31.3436 279.611 29.532 279.08 27.55C278.4 24.939 278.26 22.2167 278.67 19.55C278.944 17.149 279.536 14.7952 280.43 12.55C281.197 10.6103 282.343 8.84271 283.8 7.34996C285.196 5.93864 286.793 4.74228 288.54 3.79996C290.515 2.77117 292.621 2.01751 294.8 1.55996C297.294 0.986132 299.822 0.578568 302.37 0.339964C304.95 0.113297 307.89 -3.59993e-05 311.19 -3.59993e-05C314.747 -0.0324896 318.303 0.137787 321.84 0.509964C324.597 0.81438 327.307 1.45238 329.91 2.40996C332.127 3.15318 334.105 4.47547 335.64 6.23996C337.085 8.10305 338.056 10.2889 338.47 12.61C339.023 15.7321 339.07 18.9228 338.61 22.06H323.23C323.56 19.33 322.79 17.49 320.92 16.52C319.41 15.73 316.45 15.32 312.01 15.29H309.35C303.797 15.29 300.173 15.4733 298.48 15.84C295.92 16.4133 294.513 17.6333 294.26 19.5C294.138 20.2646 294.235 21.0482 294.54 21.76C294.833 22.3753 295.327 22.8726 295.94 23.17C296.7 23.5417 297.508 23.8075 298.34 23.96C299.431 24.1581 300.533 24.285 301.64 24.34C302.89 24.41 304.23 24.47 305.64 24.53L308.43 24.62H308.5Z"
									fill="#EF0914"
								/>
								<path
									d="M384.73 62.77L382.82 56H355.72L352.12 62.77H335.27L367.38 1.69996H384.23L401.54 62.77H384.73ZM378.37 40.71L373.24 22.53L363.63 40.71H378.37Z"
									fill="#EF0914"
								/>
							</svg>
						</Link>
						<div className="hidden ml-10 space-x-8 lg:block">
							<a href="#" className="text-base font-medium">
								Buy
							</a>

							<a href="#" className="text-base font-medium">
								Sell
							</a>

							<a href="#" className="text-base font-medium">
								Finance
							</a>

							<a href="#" className="text-base font-medium">
								Research
							</a>
						</div>
					</div>
					{/* Mobile Nav */}

					{/* Right Side Nav (login/advertise) */}
					<div className="hidden md:flex ml-10 space-x-4 items-center">
						<a href="#">Advertise</a>
						<a
							href="#"
							className="inline-block bg-[#EF0914] py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
							Sign in / Register
						</a>
					</div>
					{/* Mobile Nav */}
					<Menu as="div" className="md:hidden">
						{({ open }) => (
							<>
								<Menu.Button className="z-40 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#EF0914]">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Menu.Button>
								<Menu.Items className="absolute bg-white  mt-[4.4rem] left-0 right-0 top-0 flex flex-col  divide-y divide-gray-200  ring-1 ring-black ring-opacity-5 focus:outline-none">
									<Menu.Item>
										<Disclosure>
											{({ open }) => (
												<>
													<Disclosure.Button className="  flex  justify-between p-4">
														Buy
														<ChevronDownIcon
															className={`${
																open ? "transform rotate-180" : ""
															} w-6 h-6`}
														/>
													</Disclosure.Button>

													{open && (
														<div>
															<Disclosure.Panel static>
																<ul className="flex flex-col p-4 gap-4">
																	<li>
																		<a className="" href="">
																			Used Tow Trucks
																		</a>
																	</li>
																	<li>
																		<a href="">New Tow Trucks</a>
																	</li>
																	<li>
																		<a href="">Dealerships</a>
																	</li>
																</ul>
															</Disclosure.Panel>
														</div>
													)}
												</>
											)}
										</Disclosure>
									</Menu.Item>
									<Menu.Item>
										<Disclosure>
											{({ open }) => (
												<>
													<Disclosure.Button className="flex justify-between p-4">
														Sell
														<ChevronDownIcon
															className={`${
																open ? "transform rotate-180" : ""
															} w-6 h-6`}
														/>
													</Disclosure.Button>
													{open && (
														<div>
															<Disclosure.Panel static>
																<ul className="flex flex-col p-4 gap-4">
																	<li>
																		<a href="">Sell My Tow Truck</a>
																	</li>
																	<li>
																		<a href="">Dealership Signup</a>
																	</li>
																</ul>
															</Disclosure.Panel>
														</div>
													)}
												</>
											)}
										</Disclosure>
									</Menu.Item>
									<Menu.Item>
										<Disclosure>
											{({ open }) => (
												<>
													<Disclosure.Button className=" flex justify-between p-4">
														Finance
														<ChevronDownIcon
															className={`${
																open ? "transform rotate-180" : ""
															} w-6 h-6`}
														/>
													</Disclosure.Button>
													{open && (
														<div>
															<Disclosure.Panel static>
																<ul className="flex flex-col p-4 gap-4">
																	<li>
																		<a href="">Prequalify for Finance </a>
																	</li>
																	<li>
																		<a href="">How Does it Work?</a>
																	</li>
																	<li>
																		<a href="">Financing FAQ</a>
																	</li>
																	<li>
																		<a href="">Payment Calculator</a>
																	</li>
																</ul>
															</Disclosure.Panel>
														</div>
													)}
												</>
											)}
										</Disclosure>
									</Menu.Item>
									<Menu.Item>
										<Disclosure>
											{({ open }) => (
												<>
													<Disclosure.Button className="flex justify-between p-4">
														Research
														<ChevronDownIcon
															className={`${
																open ? "transform rotate-180" : ""
															} w-6 h-6`}
														/>
													</Disclosure.Button>
													{open && (
														<div>
															<Disclosure.Panel static>
																<ul className="flex flex-col p-4 gap-4">
																	<li>
																		<a href="">Reviews</a>
																	</li>
																	<li>
																		<a href="">Tips & Adivce</a>
																	</li>
																</ul>
															</Disclosure.Panel>
														</div>
													)}
												</>
											)}
										</Disclosure>
									</Menu.Item>
									<Menu.Item>
										<ul className="flex flex-wrap gap-4 p-4">
											<li className="basis-full">
												<a
													className="block text-center bg-[#EF0914] py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
													href="">
													Sign Up
												</a>
											</li>
											<li className="flex-1">
												<a
													className="block text-center border-2 text-[#EF0914] border-[#EF0914] py-2 px-4   rounded-md text-base font-medium "
													href="">
													Log in
												</a>
											</li>
											<li className="flex-1">
												<a
													className="block text-center border-2 text-[#EF0914] border-[#EF0914] py-2 px-4   rounded-md text-base font-medium "
													href="">
													Advertise
												</a>
											</li>
										</ul>
									</Menu.Item>
								</Menu.Items>
							</>
						)}
					</Menu>
				</div>
			</nav>
		</header>
	);
}

export default Header;
