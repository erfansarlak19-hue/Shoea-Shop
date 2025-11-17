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
    router.navigate("/onboarding-2");
  }, 4000)
  return root;
}

export function Onboarding2() {
	const root =  El({
		element: "div",
		className:
			" flex flex-col justify-end  ",
		children: [
			El({
				element: "div",
				className:
					"absolute inset-0 bg-[url('public/svg/WallpaperDog-205346101.jpg')] bg-cover bg-center",
			}),
			El({
				element: "div",
				className:
					"absolute inset-0 h-full bg-gradient-to-t from-black/80",
			}),
			El({
				element: "div",
				className: "absolute bottom-4 px-9 pb-18 flex flex-col gap-3 text-white",
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
  return root
}

