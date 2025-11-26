import { El } from "../utils/el";
import { router } from "../utils/router";

export function Product(){
	const stored = localStorage.getItem("selectedSneaker");
		let product = null;

		try {
			product = stored ? JSON.parse(stored) : null;
		} catch (e) {
			product = null;
		}

	const productName = product?.name || "Running Sportwear";
	const productImage = product?.imageURL || "./";
	let selectedSize = null;
	let selectedColor = null;
	let quantity = 0;
	let quantityValueEl;
	let totalPriceValueEl;
	const sizeButtons = [];
	const colorButtons = [];

	function updateTotalPrice() {
		const total = (product?.price || 0) * quantity;
		totalPriceValueEl.innerText = "$ " + total.toFixed(2);
	}

	function updateSizeStyles() {
			sizeButtons.forEach((btn) => {
				if (btn.dataset.size === String(selectedSize)) {
					btn.className =
						"w-10 h-10 rounded-full border-2 border-black flex items-center justify-center font-semibold bg-black text-white";
				} else {
					btn.className =
						"w-10 h-10 rounded-full border border-[#c4c4c4] flex items-center justify-center font-semibold text-[#212121]";
				}
			});
		}

		function createSizeButton(size) {
			const btn = El({
				element: "button",
				innerText: size,
				className:
					"w-10 h-10 rounded-full border border-[#c4c4c4] flex items-center justify-center font-semibold text-[#212121]",
				eventListener: [
					{
						event: "click",
						callback: () => {
							selectedSize = size;
							updateSizeStyles();
						},
					},
				],
			});
			btn.dataset.size = String(size);
			sizeButtons.push(btn);
			return btn;
		}

		function updateColorStyles() {
			colorButtons.forEach((btn) => {
				if (btn.dataset.color === selectedColor) {
					btn.className =
						"shrink-0 w-10 h-10 rounded-full flex items-center justify-center relative " +
						btn.dataset.baseClass;
					btn._check.classList.remove("hidden");
				} else {
					btn.className =
						"shrink-0 w-10 h-10 rounded-full flex items-center justify-center relative " +
						btn.dataset.baseClass;
					btn._check.classList.add("hidden");
				}
			});
		}



			function createColorButton(colorClass, colorName) {
				const check = El({
					element: "span",
					innerText: "✓",
					className: "text-white font-bold hidden ",
				});

				const btn = El({
					element: "button",
					className:
						"shrink-0 w-10 h-10 rounded-full flex items-center justify-center " +
						colorClass,
					children: [check],
					eventListener: [
						{
							event: "click",
							callback: () => {
								selectedColor = colorName;
								updateColorStyles();
							},
						},
					],
				});
				btn.dataset.color = colorName;
				btn.dataset.baseClass = colorClass;
				btn._check = check;
				colorButtons.push(btn);
				return btn;
			}

  quantityValueEl = El({
		element: "span",
		className: "w-6 text-center",
		innerText: String(quantity),
	});

	totalPriceValueEl = El({
		element: "p",
		className: "font-bold text-2xl",
		innerText: "$ 0.00",
	});

	const minusBtn = El({
			element: "button",
			className:
				"flex items-center justify-center text-xl",
			innerText: "−",
			eventListener: [
				{
					event: "click",
					callback: () => {
						if (quantity > 0) {
							quantity--;
							quantityValueEl.innerText = String(quantity);
							updateTotalPrice();
						}
					},
				},
			],
		});

		const plusBtn = El({
			element: "button",
			className:
				"flex items-center justify-center text-xl",
			innerText: "+",
			eventListener: [
				{
					event: "click",
					callback: () => {
						quantity++;
						quantityValueEl.innerText = String(quantity);
						updateTotalPrice();
					},
				},
			],
		});

		const quantityRow = El({
			element: "div",
			className: "flex items-center justify-center gap-4 bg-[#f0f0f0] w-30 h-12 rounded-4xl",
			children: [minusBtn, quantityValueEl, plusBtn],
		});

const addToCartBtn = El({
	element: "button",
	className:
		"w-full h-15 rounded-full bg-black text-white font-semibold flex items-center justify-center gap-2 shadow-md mr-6",
	children: [
		El({
			element: "span",
			className:"pl-4",
			innerText: "Add to Cart",
		}),
	],
	eventListener: [
		{
			event: "click",
			callback: () => {
				if (!selectedSize && !selectedColor) {
					alert("لطفاً قبل از ادامه، سایز و رنگ را انتخاب کنید.");
					return;
				}
				if (!selectedSize) {
					alert("لطفاً ابتدا سایز را انتخاب کنید.");
					return;
				}
				if (!selectedColor) {
					alert("لطفاً ابتدا رنگ را انتخاب کنید.");
					return;
				}
				if (quantity <= 0) {
					alert("لطفاً حداقل یک عدد از محصول را انتخاب کنید.");
					return;
				}
				alert(
					"سفارش با موفقیت ثبت شد"
				);
			},
		},
	],
});

  return El({
		element: "div",
		className: "",
		children: [
			El({
				element: "div",
				className: "h-99 flex flex-col items-center",
				children: [
					El({
						element: "div",
						className: "absolute h-12 pt-4 mr-90",
						children: [
							El({
								element: "img",
								className: "w-6",
								src: "./public/svg/arrow-left-svgrepo-com.svg",
								eventListener: [
									{
										event: "click",
										callback: () => {
											router.navigate("/home");
										},
									},
								],
							}),
						],
					}),
					El({
						element: "div",
						className: " w-full h-95 flex  justify-center items-center",
						children: [
							El({
								element: "img",
								className: "",
								src: productImage,
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				className: "flex flex-col",
				children: [
					El({
						element: "div",
						className: "flex justify-between p-6",
						children: [
							El({
								element: "div",
								className: "flex flex-col gap-4 w-85",
								children: [
									El({
										element: "h1",
										className: "font-bold text-3xl text-[#212121] truncate",
										innerText: productName,
									}),
									El({
										element: "div",
										className: "flex gap-3",
										children: [
											El({
												element: "p",
												className:
													"w-22 h-8 text-center text-[13px] rounded-xl pt-1.5 bg-[#f3f3f3] text-[#38363b]",
												innerText: "5,371sold",
											}),
											El({
												element: "img",
												className: "w-5 pb-1 ",
												src: "./public/svg/star-half-stroke-filled-svgrepo-com.svg",
											}),
											El({
												element: "p",
												className: "text-[#434344] text-sm pt-1",
												innerText: "4.3(5.389 reviews)",
											}),
										],
									}),
								],
							}),
							El({
								element: "img",
								className: "w-6 pb-11",
								src: "./public/svg/heart-shape-outline-svgrepo-com (1).svg",
							}),
						],
					}),
					El({
						element: "div",
						className:
							"absolute bottom-95 right-5 w-95 mx-auto h-px bg-[#eeefef] my-4",
					}),
					El({
						element: "div",
						className: "absolute bottom-68 flex flex-col p-6 gap-2",
						children: [
							El({
								element: "h1",
								innerText: "Description",
								className: "text-[#202020] font-bold text-xl",
							}),
							El({
								element: "div",
								className: "flex",
								children: [
									El({
										element: "p",
										className: "text-[#717171]",
										innerText:
											"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore nostrum harum fuga ",
									}),
									El({
										element: "p",
										className:
											"font-semibold text-[#414142] absolute bottom-6 right-17",
										innerText: "view more...",
									}),
								],
							}),
						],
					}),
					El({
						element: "div",
						className: "flex mt-24 p-6 gap-13",
						children: [
							El({
								element: "div",
								className: "flex flex-col gap-2 w-40",
								children: [
									El({
										element: "p",
										className: "font-semibold text-[18px] text-[#212121]",
										innerText: "Size",
									}),
									El({
										element: "div",
										className: "flex gap-3",
										children: [
											createSizeButton(40),
											createSizeButton(41),
											createSizeButton(42),
										],
									}),
								],
							}),
							El({
								element: "div",
								className: "flex  flex-col gap-2 w-50",
								children: [
									El({
										element: "p",
										className: "font-semibold text-[18px] text-[#212121]",
										innerText: "Color",
									}),
									El({
										element: "div",
										className: "flex gap-3 overflow-x-auto hide-scrollbar",
										children: [
											createColorButton("bg-black", "black"),
											createColorButton("bg-orange-500", "orange"),
											createColorButton("bg-blue-600", "blue"),
											createColorButton("bg-red-600", "red"),
											createColorButton("bg-amber-400", "yellow"),
										],
									}),
								],
							}),
						],
					}),
					El({
						element: "div",
						className: "flex gap-5 items-center pl-6",
						children: [
							El({
								element: "p",
								className: "font-semibold",
								innerText: "Quantity",
							}),
							quantityRow,
						],
					}),
					El({
						element: "div",
						className:
							"absolute bottom-24 right-5 w-95 mx-auto h-px bg-[#eeefef] my-4",
					}),
					El({
						element: "div",
						className: "flex mt-11 pl-6 gap-12",
						children: [
							El({
								element: "div",
								className: "flex flex-col w-45",
								children: [
									El({
										element: "p",
										className: "text-[12px] text-[#717171]",
										innerText: "Total price",
									}),
									totalPriceValueEl,
								],
							}),
							addToCartBtn,
							El({
								element: "img",
								className: "absolute right-47 bottom-12.5 w-5",
								src: "./public/svg/bag-4-svgrepo-com.svg",
							}),
						],
					}),
				],
			}),
		],
	});
}