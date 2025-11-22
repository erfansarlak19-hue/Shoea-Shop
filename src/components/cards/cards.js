import { El } from "../utils/el";
import { router } from "../utils/router";
import { store } from "../utils/store";
import { RemoveModal } from "./remove-modal";

export function Cards() {
	return El({
		element: "div",
		className: "flex flex-col  w-full h-232",
		children: [
			El({
				element: "div",
				className:
					"fixed w-full bg-[#f8f8f8] flex justify-between h-22 pl-6 pr-6 items-center ",
				children: [
					El({
						element: "div",
						className: "flex gap-5 items-center",
						children: [
							El({
								element: "img",
								className: "w-4",
								src: "./public/svg/logo.svg",
							}),
							El({
								element: "p",
								className: "font-bold text-2xl",
								innerText: "My Cart",
							}),
						],
					}),
					El({
						element: "img",
						className: "w-7 ",
						src: "./public/svg/search-svgrepo-com.svg",
						eventListener: [
							{
								event: "click",
								callback: () => {
									router.navigate("/search");
								},
							},
						],
					}),
				],
			}),
			El({
				element: "div",
				className:
					"mt-22 pl-6 bg-[#f8f8f8] flex flex-col h-175 gap-6 pr-6 overflow-auto hide-scrollbar",
				children: [
					El({
						element: "div",
						className:
							"shrink-0 h-42 flex gap-4 pl-5 pr-5 rounded-3xl bg-[#ffffff] items-center",
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
										className: "flex gap-4",
										children: [
											El({
												element: "p",
												className:
													"text-[18px] font-bold text-[#152536] truncate",
												innerText: "K-Swiss ista Train saer",
											}),
											El({
												element: "img",
												className: "w-6",
												src: "./public/svg/trash-bin-2-svgrepo-com.svg",
												eventListener: [
													{
														event: "click",
														callback: () => {
															store.setState("isModalOpen", true);
														},
													},
												],
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
												className: "",
												innerText: "$105.00",
											}),
											El({
												element: "div",
												className:
													"flex bg-[#f3f3f3] justify-center gap-4 items-center w-25 h-9 rounded-3xl",
												children: [
													El({
														element: "div",
														className: "font-semibold mb-3",
														innerText: "_",
													}),
													El({
														element: "div",
														className: "font-semibold",
														innerText: "1",
													}),
													El({
														element: "div",
														className: "font-semibold",
														innerText: "+",
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
				className:
					"fixed bottom-17 bg-[#ffffff] rounded-t-4xl h-25 w-full items-center flex mt-11 pl-6 gap-12",
				children: [
					El({
						element: "div",
						className: "flex flex-col",
						children: [
							El({
								element: "p",
								className: "text-[12px] text-[#717171]",
								innerText: "Total price",
							}),
							El({
								element: "p",
								className: "font-semibold text-2xl",
								innerText: "$240.00",
							}),
						],
					}),
					El({
						element: "button",
						className:
							"bg-[#101010] w-60 h-14 rounded-4xl pr-7 text-white shadow-",
						innerText: "Checkout",
						eventListener:[
							{
								event:"click",
								callback:()=>{
									router.navigate("/checkout")
								}
							}
						]
					}),
					El({
						element: "img",
						className: "absolute right-25 bottom-10.5 w-4",
						src: "./public/svg/turn-right-arrow-svgrepo-com.svg",
					}),
				],
			}),
			El({
				element: "div",
				className:
					"flex fixed bg-[#ffffff] bottom-0 h-17 w-107 justify-center items-center gap-9",
				children: [
					El({
						element: "img",
						className: "w-10 h-10 opacity-50 hover:opacity-100",
						src: "./public/svg/Group 1.svg",
						eventListener: [
							{
								event: "click",
								callback: () => {
									router.navigate("/home");
								},
							},
						],
					}),
					El({
						element: "img",
						className: "w-10 h-10 ",
						src: "./public/svg/Group 2.svg",
					}),
					El({
						element: "img",
						className: "w-10 h-10 opacity-50 hover:opacity-100",
						src: "./public/svg/Group 3.svg",
					}),
					El({
						element: "img",
						className: "w-10 h-10 opacity-50 hover:opacity-100",
						src: "./public/svg/Group 4.svg",
					}),
					El({
						element: "img",
						className: "w-10 h-10 opacity-50 hover:opacity-100",
						src: "./public/svg/Group 5.svg",
					}),
				],
			}),
			RemoveModal(),
		],
	});
}
