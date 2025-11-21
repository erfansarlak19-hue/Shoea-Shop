import { El } from "../utils/el";
import { router } from "../utils/router";

export function Footer(){
  return El({
		element: "div",
		className:
			"flex fixed bottom-0 h-17 w-107 justify-center items-center gap-9",
		children: [
			El({
				element: "img",
				className: "w-10 h-10",
				src: "./public/svg/Group 1.svg",
			}),
			El({
				element: "img",
				className: "w-10 h-10 opacity-50 hover:opacity-100",
				src: "./public/svg/Group 2.svg",
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
	});
}