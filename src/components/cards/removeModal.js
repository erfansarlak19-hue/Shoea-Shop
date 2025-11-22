import { El } from "../utils/el.js";
import { store } from "../utils/store.js";

export function RemoveModal() {
	const modalRoot = El({
		element: "div",
		className:
			"fixed inset-0 z-40 hidden flex items-end justify-center bg-black/40 backdrop-blur-sm",
	});

	store.subscribe("isModalOpen", (isOpen) => {
		if (isOpen) {
			modalRoot.classList.remove("hidden");
			modalRoot.innerHTML = "";

			const modalBox = El({
				element: "div",
				className:
					"w-full bg-[#fbfbfb] flex flex-col gap-3 rounded-t-4xl h-110 p-6 shadow-2xl",
				children: [
					El({
						element: "h2",
						className: "text-center font-bold text-[20px] ",
						innerText: "Remove From Cart?",
					}),
					El({
						element: "div",
						className: "w-95 mx-auto h-px bg-[#eeefef] my-4",
					}),
					El({
						element: "div",
						className:
							"shrink-0 h-42 flex gap-4 pl-5 pr-5 rounded-3xl bg-[#ffffff] items-center",
						children: [
							El({
								element: "div",
								className:
									"w-42 h-32 rounded-3xl bg-[#f3f3f3] flex justify-center items-center",
								children: [
									El({
										element: "img",
										src: "",
										className: "w-27 h-27 object-contain rounded-3xl",
									}),
								],
							}),
							El({
								element: "div",
								className: "flex flex-col gap-4",
								children: [
									El({
										element: "div",
										className: "flex gap-4",
										children: [
											El({
												element: "p",
												className:
													"text-[18px] font-bold text-[#152536] truncate",
												innerText: "K-Swiss ista Train saer",
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
											}),
											El({
												element: "p",
												className: "text-[#646360] text-sm",
												innerText: "black",
											}),
											El({
												element: "div",
												className: "w-px ml-1 h-4 bg-[#646360] ",
											}),
											El({
												element: "p",
												className: "text-[#646360] text-sm",
												innerText: "size = 42",
											}),
										],
									}),
									El({
										element: "div",
										className: "flex justify-between",
										children: [
											El({
												element: "div",
												className: "",
												innerText: "$105.00",
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
													}),
													El({
														element: "div",
														className: "font-semibold",
														innerText: "1",
													}),
													El({
														element: "div",
														className: "font-semibold",
														innerText: "+",
													}),
												],
											}),
										],
									}),
								],
							}),
						],
					}),
					El({
						element: "div",
						className: "w-95 mx-auto h-px bg-[#eeefef] my-4",
					}),
					El({
						element: "div",
						className: "flex items-center justify-between gap-4",
						children: [
							El({
								element: "button",
								className:
									"flex-1 h-15 rounded-4xl bg-gray-200 text-gray-700 font-semibold",
								innerText: "Cancel",
								eventListener: [
									{
										event: "click",
										callback: () => store.setState("isModalOpen", false),
									},
								],
							}),
							El({
								element: "button",
								className:
									"flex-1 h-15 rounded-4xl bg-black text-white font-semibold",
								innerText: "Yes, Remove",
								eventListener: [
									{
										event: "click",
										callback: () => {
											store.setState("isModalOpen", false);
										},
									},
								],
							}),
						],
					}),
				],
			});
			modalRoot.append(modalBox);
		} else {
			modalRoot.classList.add("hidden");
		}
	});

	return modalRoot;
}
