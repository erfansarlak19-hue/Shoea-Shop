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
					"fixed w-full bg-[#f8f8f8] flex justify-between h-22 pl-6 pr-6 items-center ",
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
					" flex flex-col mt-22 gap-5 fixed w-full  bg-[#f8f8f8] pl-6 pr-6",
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
								eventListener:[
									{
										event:"click",
										callback:()=>{
											router.navigate("/shipping-address")
										}
									}
								]
							}),
						],
					}),
				],
			}),
		],
	});
}
