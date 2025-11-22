import { El } from "../utils/el";
import { router } from "../utils/router";

export function Checkout() {
	return El({
		element: "div",
		className: "flex flex-col",
		children: [
			El({
				element: "div",
				className:
					"fixed w-full bg-[#f9f9fa] flex justify-between h-22 pl-6 pr-6 items-center ",
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
											router.navigate("/card");
										},
									},
								],
							}),
							El({
								element: "p",
								className: "font-semibold text-2xl",
								innerText: "Checkout",
							}),
						],
					}),
					El({
						element: "img",
						className: "w-6 border-2 rounded-full",
						src: "./public/svg/more-horizontal-svgrepo-com (2).svg",
					}),
				],
			}),
			El({
				element: "div",
				className:
					" flex flex-col mt-22 mb-28 gap-4 w-full  bg-[#f9f9fa] pl-6 pr-6 overflow-auto hide-scrollbar pb-13 ",
				children: [
					El({
						element: "p",
						className: "font-semibold text-[20px]",
						innerText: "Shipping Address",
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
												innerText: "Home",
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
								element: "img",
								className: "w-5",
								src: "./public/svg/edit-svgrepo-com.svg",
								eventListener: [
									{
										event: "click",
										callback: () => {
											router.navigate("/shipping-address");
										},
									},
								],
							}),
						],
					}),
					El({
						element: "div",
						className: "flex flex-col gap-4",
						children: [
							El({
								element: "div",
								className: "w-95 h-px bg-[#eeefef] my-2",
							}),
							El({
								element: "p",
								className: "font-semibold text-[20px]",
								innerText: "Order List",
							}),
							El({
								element: "div",
								className: " flex flex-col gap-6",
								children: [
									El({
										element: "div",
										className:
											"shrink-0 h-42 flex gap-4 pl-5 pr-5 rounded-3xl bg-[#ffffff] items-center ",
										children: [
											El({
												element: "div",
												className:
													"w-42 h-33 rounded-3xl bg-[#f3f3f3] flex justify-center items-center",
												children: [
													El({
														element: "img",
														src: "",
														className: "w-27 h-27 object-contain rounded-3xl",
													}),
												],
											}),
											El({
												element: "div",
												className: "flex flex-col gap-4",
												children: [
													El({
														element: "div",
														className: "flex",
														children: [
															El({
																element: "p",
																className:
																	"text-[18px] font-bold text-[#152536] truncate",
																innerText: "K-Swiss ista Train saer",
															}),
														],
													}),
													El({
														element: "div",
														className: "flex items-center gap-2",
														children: [
															El({
																element: "div",
																className: "bg-black mt-1 w-4 h-4 rounded-full",
															}),
															El({
																element: "p",
																className: "text-[#646360] text-sm",
																innerText: "black",
															}),
															El({
																element: "div",
																className: "w-px ml-1 h-4 bg-[#646360] ",
															}),
															El({
																element: "p",
																className: "text-[#646360] text-sm",
																innerText: "size = 42",
															}),
														],
													}),
													El({
														element: "div",
														className: "flex justify-between",
														children: [
															El({
																element: "div",
																className: "font-semibold",
																innerText: "$105.00",
															}),
															El({
																element: "div",
																className:
																	"flex bg-[#f3f3f3] justify-center gap-4 items-center w-10 h-10 rounded-3xl",
																children: [
																	El({
																		element: "div",
																		className: "font-semibold",
																		innerText: "1",
																	}),
																],
															}),
														],
													}),
												],
											}),
										],
									}),
								],
							}),
						],
					}),
					El({
						element: "div",
						className: "flex flex-col gap-4",
						children: [
							El({
								element: "div",
								className: "w-95 h-px bg-[#eeefef] my-2",
							}),
							El({
								element: "p",
								className: "font-semibold text-[20px]",
								innerText: "Choose Shipping",
							}),
							El({
								element: "div",
								className:
									"flex bg-white h-17 pr-5 rounded-3xl justify-between items-center ",
								children: [
									El({
										element: "img",
										className: "absolute w-8 left-12",
										src: "./public/svg/truck-svgrepo-com.svg",
									}),
									El({
										element: "p",
										className: "font-semibold text-[18px] pl-16",
										innerText: "Choose Shipping Type",
									}),
									El({
										element: "img",
										className: "w-5",
										src: "./public/svg/arrow-right-333-svgrepo-com.svg",
										eventListener: [
											{
												event: "click",
												callback: () => {
													router.navigate("/choose-shipping");
												},
											},
										],
									}),
								],
							}),
						],
					}),
					El({
						element: "div",
						className: "flex flex-col gap-3",
						children: [
							El({
								element: "div",
								className: "w-95 h-px bg-[#eeefef] my-2",
							}),
							El({
								element: "p",
								className: "font-semibold text-[20px]",
								innerText: "Promo Code",
							}),
							El({
								element: "div",
								className:
									"flex justify-between gap-4 items-center text-center ",
								children: [
									El({
										element: "input",
										className: " flex-1 pl-5 bg-[#f5f5f5] h-14 rounded-2xl",
										placeholder: "Enter Promo Code",
									}),
									El({
										element: "div",
										className:
											" bg-black w-11 h-11 rounded-full text-white pt-0.5 text-2xl",
										innerText: "+",
									}),
								],
							}),
						],
					}),
					El({
						element: "div",
						className: "flex flex-col rounded-2xl gap-5 bg-white p-6",
						children: [
							El({
								element: "div",
								className: "flex justify-between",
								children: [
									El({
										element: "div",
										className: "text-[#605f5d]",
										innerText: "Amount",
									}),
									El({
										element: "div",
										className: "text-[#444340]",
										innerText: "$585.00",
									}),
								],
							}),
							El({
								element: "div",
								className: "flex justify-between",
								children: [
									El({
										element: "div",
										className: "text-[#605f5d]",
										innerText: "Shipping",
									}),
									El({
										element: "div",
										className: "text-[#444340]",
										innerText: "$585.00",
									}),
								],
							}),
							El({
								element: "div",
								className: "w-95 h-px bg-[#eeefef] my-2",
							}),
							El({
								element: "div",
								className: "flex justify-between",
								children: [
									El({
										element: "div",
										className: "text-[#605f5d]",
										innerText: "Total",
									}),
									El({
										element: "div",
										className: "text-[#444340]",
										innerText: "$585.00",
									}),
								],
							}),
						],
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
						innerText: "Continue to Payment",
					}),
				],
			}),
		],
	});
}
