import { El } from "../utils/el";
import { router } from "../utils/router";

export function ChooseShipping(){
  return El({
		element: "div",
		className: "flex flex-col bg-[#f9f9fa] w-full h-232",
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
								innerText: "Choose Shipping",
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				className: " flex flex-col gap-5 w-full bg-[#f9f9fa] pl-6 pr-6",
				children: [
					El({
						element: "div",
						className:
							"flex justify-between items-center pl-4 pr-4 h-22 rounded-3xl bg-white",
						children: [
							El({
								element: "div",
								className: "flex gap-4",
								children: [
									El({
										element: "div",
										className: " flex items-center justify-center",
										children: [
											El({
												element: "img",
												className: "bg-black rounded-full w-13 p-3",
												src: "./public/svg/box-tick-svgrepo-com (2).svg",
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
												innerText: "Economy",
											}),
											El({
												element: "p",
												className: "text-sm text-[#605f5d]",
												innerText: "Estimated Arrival, Des 20-23",
											}),
										],
									}),
								],
							}),
							El({
								element: "div",
								className: "flex gap-4  justify-center items-center pr-1",
								children: [
									El({
										element: "p",
										className: "font-bold",
										innerText: "$10",
									}),
									El({
										element: "input",
										className: "w-5 h-5 accent-black",
										type: "radio",
									}),
								],
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
								className: "flex gap-4",
								children: [
									El({
										element: "div",
										className: " flex items-center justify-center",
										children: [
											El({
												element: "img",
												className: "bg-black rounded-full w-13 p-3",
												src: "./public/svg/shippingbox-svgrepo-com (1).svg",
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
												innerText: "Regular",
											}),
											El({
												element: "p",
												className: "text-sm text-[#605f5d]",
												innerText: "Estimated Arrival, Des 20-22",
											}),
										],
									}),
								],
							}),
							El({
								element: "div",
								className: "flex gap-4  justify-center items-center pr-1",
								children: [
									El({
										element: "p",
										className: "font-bold",
										innerText: "$15",
									}),
									El({
										element: "div",
										className: "w-5 h-5 border rounded-full",
									}),
								],
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
								className: "flex gap-4",
								children: [
									El({
										element: "div",
										className: " flex items-center justify-center",
										children: [
											El({
												element: "img",
												className: "bg-black rounded-full w-13 p-3",
												src: "./public/svg/truck-svgrepo-com (1).svg",
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
												innerText: "Cargo",
											}),
											El({
												element: "p",
												className: "text-sm text-[#605f5d]",
												innerText: "Estimated Arrival, Des 19-20",
											}),
										],
									}),
								],
							}),
							El({
								element: "div",
								className: "flex gap-4  justify-center items-center pr-1",
								children: [
									El({
										element: "p",
										className: "font-bold",
										innerText: "$20",
									}),
									El({
										element: "div",
										className: "w-5 h-5 border rounded-full",
									}),
								],
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
								className: "flex gap-4",
								children: [
									El({
										element: "div",
										className: " flex items-center justify-center",
										children: [
											El({
												element: "img",
												className: "bg-black rounded-full w-13 p-3",
												src: "./public/svg/fast-delivery-svgrepo-com.svg",
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
												innerText: "Express",
											}),
											El({
												element: "p",
												className: "text-sm text-[#605f5d]",
												innerText: "Estimated Arrival, Des 18-19",
											}),
										],
									}),
								],
							}),
							El({
								element: "div",
								className: "flex gap-4  justify-center items-center pr-1",
								children: [
									El({
										element: "p",
										className: "font-bold",
										innerText: "$30",
									}),
									El({
										element: "div",
										className: "w-5 h-5 border rounded-full",
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
						innerText: "Apply",
					}),
				],
			}),
		],
	});
}