import { El } from "../utils/el";
import { router } from "../utils/router";

export function Product(){
  return El({
		element: "div",
		className: "",
		children: [
			El({
				element: "div",
				className: "bg-[#f3f3f3] h-99 flex flex-col items-center",
				children: [
					El({
						element: "div",
						className: "h-12 pt-4 mr-90",
						children: [
							El({
								element: "img",
								className: "w-6",
								src: "./public/svg/arrow-left-svgrepo-com.svg",
								eventListener: [
									{
										event: "click",
										callback: () => {
											router.navigate("/home");
										},
									},
								],
							}),
						],
					}),
					El({
						element: "div",
						className: " h-92 w-100 flex  justify-center items-center",
						children: [
							El({
								element: "img",
								className: "",
								src: "./",
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				className: "flex flex-col",
				children: [
					El({
						element: "div",
						className: "flex justify-between p-6",
						children: [
							El({
								element: "div",
								className: "flex flex-col gap-4",
								children: [
									El({
										element: "h1",
										className: "font-bold text-3xl text-[#212121]",
										innerText: "Running Sportwear",
									}),
									El({
										element: "div",
										className: "flex gap-3",
										children: [
											El({
												element: "p",
												className:
													"w-22 h-8 text-center text-[13px] rounded-xl pt-1.5 bg-[#f3f3f3] text-[#38363b]",
												innerText: "5,371sold",
											}),
											El({
												element: "img",
												className: "w-5 pb-1 ",
												src: "./public/svg/star-half-stroke-filled-svgrepo-com.svg",
											}),
											El({
												element: "p",
												className: "text-[#434344] text-sm pt-1",
												innerText: "4.3(5.389 reviews)",
											}),
										],
									}),
								],
							}),
							El({
								element: "img",
								className: "w-6 pb-11",
								src: "./public/svg/heart-shape-outline-svgrepo-com (1).svg",
							}),
						],
					}),
					El({
						element: "div",
						className:
							"absolute bottom-95 right-5 w-95 mx-auto h-px bg-[#eeefef] my-4",
					}),
					El({
						element: "div",
						className: "absolute bottom-68 flex flex-col p-6 gap-2",
						children: [
							El({
								element: "h1",
								innerText: "Description",
								className: "text-[#202020] font-bold text-xl",
							}),
							El({
								element: "div",
								className: "flex",
								children: [
									El({
										element: "p",
										className: "text-[#717171]",
										innerText:
											"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore nostrum harum fuga ",
									}),
									El({
										element: "p",
										className:
											"font-semibold text-[#414142] absolute bottom-6 right-17",
										innerText: "view more...",
									}),
								],
							}),
						],
					}),
					El({
						element: "div",
						className: "flex mt-24 p-6 gap-4",
						children: [
							El({
								element: "div",
								className: "flex flex-col gap-2 w-40",
								children: [
									El({
										element: "p",
										className: "font-semibold text-[18px] text-[#212121]",
										innerText: "Size",
									}),
									El({
										element: "div",
										className: "flex gap-3 overflow-x-auto hide-scrollbar",
										children: [
											El({
												element: "button",
												className:
													"shrink-0 border-2 border-[#717171] text-[#717171] h-10 w-10 rounded-full",
												innerText: "40",
											}),
										],
									}),
								],
							}),
							El({
								element: "div",
								className: "flex flex-col gap-2",
								children: [
									El({
										element: "p",
										className: "font-semibold text-[18px] text-[#212121]",
										innerText: "Color",
									}),
									El({
										element: "div",
										className: "flex gap-3 overflow-x-auto hide-scrollbar",
										children: [
											El({
												element: "button",
												className:
													"shrink-0  bg-amber-500 border-[#717171] h-10 w-10 font-bold rounded-3xl",
												innerText: "",
											}),
										],
									}),
								],
							}),
						],
					}),
					El({
						element: "div",
						className: "flex gap-5 items-center pl-6",
						children: [
							El({
								element: "p",
								className: "font-semibold",
								innerText: "Quantity",
							}),
							El({
								element: "div",
								className:
									"flex w-33 h-12 rounded-3xl justify-center items-center gap-5 bg-[#f3f3f3]",
								children: [
									El({
										element: "p",
										className: " text-3xl pb-7",
										innerText: "_",
									}),
									El({
										element: "p",
										className: "font-semibold",
										innerText: "0",
									}),
									El({
										element: "p",
										className: "text-2xl pb-2",
										innerText: "+",
									}),
								],
							}),
						],
					}),
					El({
						element: "div",
						className:
							"absolute bottom-24 right-5 w-95 mx-auto h-px bg-[#eeefef] my-4",
					}),
					El({
						element: "div",
						className: "flex mt-11 pl-6 gap-12",
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
								className: "bg-[#101010] w-60 h-14 pl-8 rounded-4xl text-white shadow-lg",
								innerText: "Add to Cart",
							}),
              El({
                element:"img",
                className:"absolute right-47 bottom-12.5 w-5",
                src:"./public/svg/bag-4-svgrepo-com.svg"
              })
						],
					}),
				],
			}),
		],
	});
}