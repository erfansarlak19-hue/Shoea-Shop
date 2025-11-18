import { El } from "../utils/el";
import { router } from "../utils/router";

export function Onboarding(){
	const root = El({
		element: "div",
		className: "pt-95 w-full flex flex-col items-center justify-center",
		children: [
			El({
				element: "div",
				className: "flex items-center gap-3",
				children: [
					El({
						element: "div",
						className: "bg-black w-15 h-15 rounded-full flex justify-center",
						children: [
							El({
								element: "img",
								className: "p-2",
								src: "./public/svg/logo (1).svg",
							}),
						],
					}),
					El({
						element: "span",
						className: "text-xl font-bold text-[50px]",
						innerText: "Shoea",
					}),
				],
			}),
			El({
				element: "img",
				className: "w-18 pt-80",
				src: "./public/svg/Spinner-1s-200px.svg",
			}),
		],
	});

	setTimeout(() => {
		router.navigate("/onboarding2");
	}, 3000);
	return root;
}

