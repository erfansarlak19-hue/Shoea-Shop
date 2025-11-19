import { El } from "../utils/el";
import { router } from "../utils/router";


export function OnboardingPage2() {
	const root = El({
		element: "div",
		className: " flex flex-col justify-end  ",
		children: [
			El({
				element: "div",
				className:
					"absolute inset-0 bg-[url('public/svg/WallpaperDog-205346101.jpg')] bg-cover bg-center",
			}),
			El({
				element: "div",
				className: "absolute inset-0 h-full bg-linear-to-t from-black/80",
			}),
			El({
				element: "div",
				className:
					"absolute bottom-4 px-9 pb-18 flex flex-col gap-3 text-white",
				children: [
					El({
						element: "span",
						className: "text-[35px] font-bold",
						innerText: "Welcome to 👋",
					}),
					El({
						element: "h1",
						className: "text-[65px] font-bold",
						innerText: "Shoea",
					}),
					El({
						element: "p",
						className: "text-[15px] max-w-80 ",
						innerText:
							"The best sneakers & shoes e-commerce app of the century for your fashion needs!",
					}),
				],
			}),
		],
	});
	setTimeout(() => {
		router.navigate("/onboarding3");
	}, 3000);
	return root;
}

