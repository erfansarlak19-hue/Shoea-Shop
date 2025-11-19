import { El } from "../utils/el";

export function Footer(){
  return El({
		element: "div",
		className: "flex fixed bottom-0 h-17 w-107 justify-center gap-9",
		children: [
			El({
				element: "img",
				className: "w-10 h-10",
				src: "./public/svg/Group 1.svg",
			}),
			El({
				element: "img",
				className: "w-10 h-10",
				src: "./public/svg/Group 2.svg",
			}),
			El({
				element: "img",
				className: "w-10 h-10",
				src: "./public/svg/Group 3.svg",
			}),
			El({
				element: "img",
				className: "w-10 h-10",
				src: "./public/svg/Group 4.svg",
			}),
			El({
				element: "img",
				className: "w-10 h-10",
				src: "./public/svg/Group 5.svg",
			}),
		],
	});
}