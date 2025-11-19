import { El } from "../utils/el";

export function Header() {
	return El({
		element: "div",
		className: "flex flex-col gap-2 h-39 w-107 fixed top-0",
		children: [
			El({
				element: "div",
				className: " flex justify-between h-20 items-center",
				children: [
					El({
						element: "div",
						className: "flex flex-col pl-6 gap-1",
						children: [
							El({
								element: "p",
								className: "text-[#757475]",
								innerText: "Good Morning 👋",
							}),
							El({
								element: "p",
								className: "font-bold",
								innerText: "Erfan Sarlak",
							}),
						],
					}),
					El({
						element: "div",
						className: "flex pr-7 gap-4  ",
						children: [
							El({
								element: "img",
								className: "w-7 h-8 p-0.5",
								src: "./public/svg/bell.svg",
							}),
							El({
								element: "img",
								className: "w-7 h-8 p-0.5 ",
								src: "./public/svg/heart.svg",
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				className: "flex justify-center relative",
				children: [
					El({
						element: "img",
						className: "absolute top-2 left-8 z-10 cursor-pointer",
						src: "./public/svg/input-prefix (3).svg",
					}),
					El({
						element: "input",
						className: "bg-[#fafafa] h-9 w-95 rounded-sm px-8 py-1",
						placeholder: "Username",
					}),
				],
			}),
		],
	});
}
