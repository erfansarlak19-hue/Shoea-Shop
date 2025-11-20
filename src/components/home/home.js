import { El } from "../utils/el";
import { router } from "../utils/router";
import { Footer } from "./footer";
import { Header } from "./header";

export function Home() {
	return El({
		element: "div",
		className: "flex flex-col",
		children: [
			Header(),
			El({
				element: "div",
				className: "h-213 flex flex-col gap-5",
				children: [
					El({
						element: "div",
						className: "flex justify-between pt-39 pl-5 pr-5",
						children: [
							El({
								element: "p",
								className: "font-bold text-[#152536] ",
								innerText: "Most Popular",
							}),
							El({
								element: "p",
								className: "font-semibold text-[#152536]",
								innerText: "See All",
							}),
						],
					}),
					El({
						element: "div",
						className: "flex pl-5 gap-3 overflow-x-auto hide-scrollbar h-14",
						children: [
							El({
								element: "button",
								className:
									"shrink-0 border-2 border-[#343a40] h-10 w-15 text-[#343a40] text-center font-bold rounded-3xl",
								innerText: "All",
							}),
						],
					}),
					El({
						element: "div",
						className:
							" pl-5 pr-5 grid grid-cols-2 gap-5 overflow-auto hide-scrollbar",
						children: [
							El({
								element: "div",
								className: "h-61 w-46 flex flex-col gap-2",
								eventListener:[
									{
										event:"click",
										callback:()=>{
											router.navigate("/product")
										}
									}
								],
								children: [
									El({
										element: "div",
										className:
											"w-46 h-46 rounded-3xl  bg-[#f3f3f3] flex justify-center items-center",
										children: [
											El({
												element: "img",
												src: "",
												className:
													"w-36 h-36 object-contain rounded-3xl",
											}),
										],
									}),
									El({
										element: "div",
										className: "flex flex-col gap-1",
										children: [
											El({
												element: "p",
												className:
													"text-[18px] font-bold text-[#152536] truncate",
												innerText: "K-Swiss ista Train saer",
											}),
											El({
												element: "p",
												className: "text-[16px] font-semibold text-[#152536]",
												innerText: "$ 85.00",
											}),
										],
									}),
								],
							}),
						],
					}),
				],
			}),
			Footer(),
		],
	});
}
