import { El } from "../utils/el";
import { router } from "../utils/router";

export function ShippingAddres() {
	return El({
		element: "div",
		className: "flex flex-col bg-[#f8f8f8] w-full h-232",
		children: [
			El({
				element: "div",
				className: "  h-22 flex justify-between pl-6 pr-6 items-center ",
				children: [
					El({
						element: "div",
						className: "flex gap-5 items-center",
						children: [
							El({
								element: "img",
								className: "w-6",
								src: "./public/svg/arrow-left-svgrepo-com.svg",
								eventListener: [
									{
										event: "click",
										callback: () => {
											router.navigate("/checkout");
										},
									},
								],
							}),
							El({
								element: "p",
								className: "font-semibold text-2xl",
								innerText: "Shipping Address",
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				className: " flex flex-col gap-5 w-full bg-[#f8f8f8] pl-6 pr-6",
				children: [
					El({
						element: "div",
						className:
							"flex justify-between items-center pl-4 pr-4 h-22 rounded-3xl bg-white",
						children: [
							El({
								element: "div",
								className: "flex gap-3",
								children: [
									El({
										element: "div",
										className:
											"bg-[#dfdfdf] rounded-full w-13 h-13 flex items-center justify-center",
										children: [
											El({
												element: "img",
												className: "bg-black rounded-full w-9 p-2",
												src: "./public/svg/location-pin-filled-svgrepo-com.svg",
											}),
										],
									}),
									El({
										element: "div",
										className: "flex flex-col gap-2",
										children: [
											El({
												element: "div",
												className: "flex gap-2 items-center",
												children: [
													El({
														element: "p",
														className: "font-bold",
														innerText: "Home",
													}),
													El({
														element: "div",
														className:
															"bg-[#e8e8e8] h-6 w-14 rounded-md flex justify-center items-center",
														children: [
															El({
																element: "p",
																className: "text-[12px] text-[#3a3c40]",
																innerText: "Default",
															}),
														],
													}),
												],
											}),
											El({
												element: "p",
												className: "text-sm text-[#605f5d]",
												innerText: "61480 Sunbrook Park, PC 5679",
											}),
										],
									}),
								],
							}),
							El({
								element: "input",
								className: "w-5 h-5 accent-black",
								type: "radio",
							}),
						],
					}),
					El({
						element: "div",
						className:
							"flex justify-between items-center pl-4 pr-4 h-22 rounded-3xl bg-white",
						children: [
							El({
								element: "div",
								className: "flex gap-3",
								children: [
									El({
										element: "div",
										className:
											"bg-[#dfdfdf] rounded-full w-13 h-13 flex items-center justify-center",
										children: [
											El({
												element: "img",
												className: "bg-black rounded-full w-9 p-2",
												src: "./public/svg/location-pin-filled-svgrepo-com.svg",
											}),
										],
									}),
									El({
										element: "div",
										className: "flex flex-col gap-2",
										children: [
											El({
												element: "p",
												className: "font-bold",
												innerText: "Office",
											}),
											El({
												element: "p",
												className: "text-sm text-[#605f5d]",
												innerText: "6993 Meadow Valley Terra, pc 3637",
											}),
										],
									}),
								],
							}),
							El({
								element: "div",
								className: "w-5 h-5 border rounded-full",
							}),
						],
					}),
					El({
						element: "div",
						className:
							"flex justify-between items-center pl-4 pr-4 h-22 rounded-3xl bg-white",
						children: [
							El({
								element: "div",
								className: "flex gap-3",
								children: [
									El({
										element: "div",
										className:
											"bg-[#dfdfdf] rounded-full w-13 h-13 flex items-center justify-center",
										children: [
											El({
												element: "img",
												className: "bg-black rounded-full w-9 p-2",
												src: "./public/svg/location-pin-filled-svgrepo-com.svg",
											}),
										],
									}),
									El({
										element: "div",
										className: "flex flex-col gap-2",
										children: [
											El({
												element: "p",
												className: "font-bold",
												innerText: "Apartment",
											}),
											El({
												element: "p",
												className: "text-sm text-[#605f5d]",
												innerText: "21833 Clyde Gallagher, PC 4662",
											}),
										],
									}),
								],
							}),
							El({
								element: "div",
								className: "w-5 h-5 border rounded-full",
							}),
						],
					}),
					El({
						element: "div",
						className:
							"flex justify-between items-center pl-4 pr-4 h-22 rounded-3xl bg-white",
						children: [
							El({
								element: "div",
								className: "flex gap-3",
								children: [
									El({
										element: "div",
										className:
											"bg-[#dfdfdf] rounded-full w-13 h-13 flex items-center justify-center",
										children: [
											El({
												element: "img",
												className: "bg-black rounded-full w-9 p-2",
												src: "./public/svg/location-pin-filled-svgrepo-com.svg",
											}),
										],
									}),
									El({
										element: "div",
										className: "flex flex-col gap-2",
										children: [
											El({
												element: "p",
												className: "font-bold",
												innerText: "Parent's House",
											}),
											El({
												element: "p",
												className: "text-sm text-[#605f5d]",
												innerText: "61480 Blue Bill Park, PC 4627",
											}),
										],
									}),
								],
							}),
							El({
								element: "div",
								className: "w-5 h-5 border rounded-full",
							}),
						],
					}),
					El({
						element: "button",
						className: "bg-[#e7e7e7] font-semibold h-14 rounded-4xl",
						innerText: "Add New Address",
					}),
				],
			}),
			El({
				element: "div",
				className:
					"flex justify-center shadow pl-6 pr-6 rounded-t-4xl items-center fixed bottom-0 bg-white w-full h-30",
				children: [
					El({
						element: "button",
						className: "bg-[#101010] h-14 rounded-4xl w-full text-white",
						innerText: "Apply",
					}),
				],
			}),
		],
	});
}
