import { El } from "../utils/el";
import { Footer } from "./footer";
import { Header } from "./header";


export function Home(){
  return El({
		element: "div",
		className: "flex flex-col",
		children: [
			Header(),
			El({
				element: "div",
				className: "h-210",
				children: [
					El({
						element: "div",
						className: "flex justify-between pt-39 pl-5 pr-5",
						children: [
							El({
								element: "p",
                className:"font-bold ",
								innerText: "Most Popular",
							}),
							El({
								element: "p",
                className:"font-bold text-sm",
								innerText: "See All",
							}),
						],
					}),
				],
			}),
      Footer()
		],
	});
}