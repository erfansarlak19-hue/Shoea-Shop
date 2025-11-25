import { El } from "../utils/el";
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
				className: "h-213 pt-38 flex flex-col gap-3",
				children: [
					El({
						element: "div",
						className: "flex justify-between  pl-5 pr-5",
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
				],
			}),
			Footer(),
		],
	});
}
