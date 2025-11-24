import { El } from "../utils/el";
import { router } from "../utils/router";
import { store } from "../utils/store";
import { PaymentSuccessModal } from "./payment-success-modal";

export function PaymentMethods() {
	return El({
		element: "div",
		className: "flex flex-col",
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
								className: "w-6",
								src: "./public/svg/arrow-left-svgrepo-com.svg",
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
								element: "p",
								className: "font-semibold text-2xl",
								innerText: "Payment Methods",
							}),
						],
					}),
					El({
						element: "img",
						className: "w-7",
						src: "./public/svg/plus-square-svgrepo-com.svg",
					}),
				],
			}),
			El({
				element: "div",
				className:
					"mt-22 bg-[#f9f9fa] text-[#424242] pl-6 pr-6 flex flex-col gap-5 pb-50",
				innerText: "Select the payment methods you want to use.",
				children: [
					El({
						element: "div",
						className:
							"flex justify-between items-center pl-4 pr-4 h-22 rounded-3xl bg-white",
						children: [
							El({
								element: "div",
								className: "flex items-center gap-4",
								children: [
									El({
										element: "div",
										className: " flex items-center justify-center",
										children: [
											El({
												element: "img",
												className: "w-9",
												src: "./public/svg/wallet-svgrepo-com.svg",
											}),
										],
									}),
									El({
										element: "p",
										className: "font-bold text-black",
										innerText: "My Wallet",
									}),
								],
							}),
							El({
								element: "div",
								className: "flex gap-4  justify-center items-center pr-1",
								children: [
									El({
										element: "p",
										className: "font-bold",
										innerText: "$9.379",
									}),
									El({
										element: "input",
										className: "w-5 h-5 accent-black",
										type: "radio",
									}),
								],
							}),
						],
					}),
					El({
						element: "div",
						className:
							"flex justify-between items-center pl-4 pr-4 h-22 rounded-3xl bg-white",
						children: [
							El({
								element: "div",
								className: "flex items-center gap-4",
								children: [
									El({
										element: "div",
										className: " flex items-center justify-center",
										children: [
											El({
												element: "img",
												className: "w-9",
												src: "./public/svg/paypal-svgrepo-com (1).svg",
											}),
										],
									}),
									El({
										element: "p",
										className: "font-bold text-black",
										innerText: "My Wallet",
									}),
								],
							}),
							El({
								element: "div",
								className: "flex gap-4  justify-center items-center pr-1",
								children: [
									El({
										element: "p",
										className: "font-bold",
										innerText: "",
									}),
									El({
										element: "div",
										className: "w-5 h-5 border rounded-full",
									}),
								],
							}),
						],
					}),
					El({
						element: "div",
						className:
							"flex justify-between items-center pl-4 pr-4 h-22 rounded-3xl bg-white",
						children: [
							El({
								element: "div",
								className: "flex items-center gap-4",
								children: [
									El({
										element: "div",
										className: " flex items-center justify-center",
										children: [
											El({
												element: "img",
												className: "w-9",
												src: "./public/svg/google-svgrepo-com.svg",
											}),
										],
									}),
									El({
										element: "p",
										className: "font-bold text-black",
										innerText: "My Wallet",
									}),
								],
							}),
							El({
								element: "div",
								className: "flex gap-4  justify-center items-center pr-1",
								children: [
									El({
										element: "p",
										className: "font-bold",
										innerText: "",
									}),
									El({
										element: "div",
										className: "w-5 h-5 border rounded-full",
									}),
								],
							}),
						],
					}),
					El({
						element: "div",
						className:
							"flex justify-between items-center pl-4 pr-4 h-22 rounded-3xl bg-white",
						children: [
							El({
								element: "div",
								className: "flex items-center gap-4",
								children: [
									El({
										element: "div",
										className: " flex items-center justify-center",
										children: [
											El({
												element: "img",
												className: "w-9",
												src: "./public/svg/apple-svgrepo-com.svg",
											}),
										],
									}),
									El({
										element: "p",
										className: "font-bold text-black",
										innerText: "My Wallet",
									}),
								],
							}),
							El({
								element: "div",
								className: "flex gap-4  justify-center items-center pr-1",
								children: [
									El({
										element: "p",
										className: "font-bold",
										innerText: "",
									}),
									El({
										element: "div",
										className: "w-5 h-5 border rounded-full",
									}),
								],
							}),
						],
					}),
					El({
						element: "div",
						className:
							"flex justify-between items-center pl-4 pr-4 h-22 rounded-3xl bg-white",
						children: [
							El({
								element: "div",
								className: "flex items-center gap-4",
								children: [
									El({
										element: "div",
										className: " flex items-center justify-center",
										children: [
											El({
												element: "img",
												className: "w-9",
												src: "./public/svg/mastercard-svgrepo-com.svg",
											}),
										],
									}),
									El({
										element: "p",
										className: "font-bold text-black",
										innerText: "My Wallet",
									}),
								],
							}),
							El({
								element: "div",
								className: "flex gap-4  justify-center items-center pr-1",
								children: [
									El({
										element: "p",
										className: "font-bold",
										innerText: "",
									}),
									El({
										element: "div",
										className: "w-5 h-5 border rounded-full",
									}),
								],
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				className:
					"flex justify-center shadow pl-6 pr-6 rounded-t-4xl items-center fixed bottom-0 bg-white w-full h-30",
				children: [
					El({
						element: "button",
						className: "bg-[#101010] h-14 rounded-4xl w-full text-white",
						innerText: "Confirm Payment",
						eventListener: [
							{
								event: "click",
								callback: () => {
									store.setState("isPaymentSuccessOpen", true);
								},
							},
						],
					}),
				],
			}),
			PaymentSuccessModal(),
		],
	});
}
