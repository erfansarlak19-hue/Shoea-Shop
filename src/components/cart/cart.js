import { El } from "../utils/el";
import { router } from "../utils/router";
import { store } from "../utils/store";
import { RemoveModal } from "./remove-modal";

export function Cart() {

	const stored = localStorage.getItem("cart");
	let cartItems = [];

	try {
		cartItems = stored ? JSON.parse(stored) : [];
	} catch (e) {
		cartItems = [];
	}

	const cartListEl = El({
		element: "div",
		className:
			"mt-22 pl-6 bg-[#f9f9fa] flex flex-col h-175 gap-6 pb-10 pr-6 overflow-auto hide-scrollbar",
		children: [],
	});

	const totalPriceEl = El({
		element: "p",
		className: "font-semibold text-2xl",
		innerText: "$0.00",
	});

	function updateTotal() {
		const total = cartItems.reduce((sum, item) => {
			const price = item.price || 0;
			const qty = item.quantity || 0;
			return sum + price * qty;
		}, 0);

		totalPriceEl.innerText = "$" + total.toFixed(2);
	}

	function saveCart() {
		localStorage.setItem("cart", JSON.stringify(cartItems));
	}

function createCartCard(item, index) {
	return El({
		element: "div",
		className:
			"shrink-0 h-42 flex gap-4 pl-5 pr-5 rounded-3xl bg-[#ffffff] items-center",
		children: [
			El({
				element: "div",
				className:
					"w-40 rounded-3xl flex justify-center items-center",
				children: [
					El({
						element: "img",
						src: item.imageURL,
						className: "w-full rounded-3xl",
					}),
				],
			}),
			El({
				element: "div",
				className: "flex flex-col gap-4 w-50",
				children: [
					El({
						element: "div",
						className: "flex gap-4",
						children: [
							El({
								element: "p",
								className: "text-[18px] font-bold text-[#152536] truncate",
								innerText: item.name,
							}),
							El({
								element: "img",
								className: "w-6",
								src: "./public/svg/trash-bin-2-svgrepo-com.svg",
								eventListener: [
									{
										event: "click",
										callback: () => {
											store.setState("isModalOpen", true);
											store.setState("deleteIndex", index);
										},
									},
								],
							}),
						],
					}),
					El({
						element: "div",
						className: "flex items-center gap-2",
						children: [
							El({
								element: "div",
								className: "bg-black mt-1 w-4 h-4 rounded-full",
								style: `background:${item.color};`,
							}),
							El({
								element: "p",
								className: "text-[#646360] text-sm",
								innerText: item.color,
							}),
							El({
								element: "div",
								className: "w-px ml-1 h-4 bg-[#646360] ",
							}),
							El({
								element: "p",
								className: "text-[#646360] text-sm",
								innerText: "size = " + item.size,
							}),
						],
					}),
					El({
						element: "div",
						className: "flex justify-between",
						children: [
							El({
								element: "div",
								innerText: "$" + (item.price * item.quantity).toFixed(2),
							}),
							El({
								element: "div",
								className:
									"flex bg-[#f3f3f3] justify-center gap-4 items-center w-25 h-9 rounded-3xl",
								children: [
									El({
										element: "div",
										className: "font-semibold mb-3",
										innerText: "_",
										eventListener: [
											{
												event: "click",
												callback: () => {
													if (item.quantity > 1) {
														item.quantity--;
														saveCart();
														renderCart();
													}
												},
											},
										],
									}),
									El({
										element: "div",
										className: "font-semibold",
										innerText: String(item.quantity),
									}),
									El({
										element: "div",
										className: "font-semibold",
										innerText: "+",
										eventListener: [
											{
												event: "click",
												callback: () => {
													item.quantity++;
													saveCart();
													renderCart();
												},
											},
										],
									}),
								],
							}),
						],
					}),
				],
			}),
		],
	});
}

function renderCart() {
	cartListEl.innerHTML = "";
	cartItems.forEach((item, index) => {
		cartListEl.appendChild(createCartCard(item, index));
	});
	updateTotal();
}
renderCart();

store.subscribe("cartChanged", () => {
	const again = localStorage.getItem("cart");
	try {
		cartItems = again ? JSON.parse(again) : [];
	} catch (e) {
		cartItems = [];
	}
	renderCart();
});

return El({
	element: "div",
	className: "flex flex-col w-full h-232",
	children: [
		El({
			element: "div",
			className:
				"fixed w-full bg-[#f9f9fa] flex justify-between h-22 pl-6 pr-6 items-center ",
			children: [
				El({
					element: "div",
					className: "flex gap-5 items-center",
					children: [
						El({
							element: "img",
							className: "w-4",
							src: "./public/svg/logo.svg",
						}),
						El({
							element: "p",
							className: "font-bold text-2xl",
							innerText: "My Cart",
						}),
					],
				}),
				El({
					element: "img",
					className: "w-7 ",
					src: "./public/svg/search-svgrepo-com.svg",
					eventListener: [
						{
							event: "click",
							callback: () => {
								router.navigate("/search");
							},
						},
					],
				}),
			],
		}),
		cartListEl,
		El({
			element: "div",
			className:
				"fixed bottom-17 bg-[#ffffff] rounded-t-4xl h-25 w-full items-center flex mt-11 pl-6 gap-12",
			children: [
				El({
					element: "div",
					className: "flex flex-col w-25",
					children: [
						El({
							element: "p",
							className: "text-[12px] text-[#717171]",
							innerText: "Total price",
						}),
						totalPriceEl,
					],
				}),
				El({
					element: "button",
					className:
						"bg-[#101010] w-60 h-14 rounded-4xl pr-7 text-white shadow-",
					innerText: "Checkout",
					eventListener: [
						{
							event: "click",
							callback: () => {
								router.navigate("/checkout");
							},
						},
					],
				}),
				El({
					element: "img",
					className: "absolute right-23 bottom-10.5 w-4",
					src: "./public/svg/turn-right-arrow-svgrepo-com.svg",
				}),
			],
		}),
		El({
			element: "div",
			className:
				"flex fixed bg-[#ffffff] bottom-0 h-17 w-107 justify-center items-center gap-9",
			children: [
				El({
					element: "img",
					className: "w-10 h-10 opacity-50 hover:opacity-100",
					src: "./public/svg/home.svg",
					eventListener: [
						{
							event: "click",
							callback: () => {
								router.navigate("/home");
							},
						},
					],
				}),
				El({
					element: "img",
					className: "w-10 h-10 ",
					src: "./public/svg/Group 2.svg",
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
		}),
		RemoveModal(),
	],
});
}
