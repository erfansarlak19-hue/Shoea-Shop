import { El } from "../utils/el";
import { router } from "../utils/router";
import { getToken, getUser } from "../utils/storage";
import { Footer } from "./footer";
import { Header } from "./header";

function createSneakerCard(sneaker) {
	return El({
		element: "div",
		className: "shrink-0 h-61 w-46 flex flex-col gap-2",
		eventListener: [
			{
				event: "click",
				callback: () => {
					localStorage.setItem("selectedSneaker", JSON.stringify(sneaker));
					router.navigate("/product");
				},
			},
		],
		children: [
			El({
				element: "div",
				className:
					"w-46 h-46 rounded-3xl flex justify-center items-center",
				children: [
					El({
						element: "img",
						src: sneaker.imageURL,
						className: "w-46 h-46 object-contain rounded-3xl",
					}),
				],
			}),
			El({
				element: "p",
				className: "text-[18px] font-bold text-[#152536] truncate",
				innerText: sneaker.name,
			}),
			El({
				element: "p",
				className: "text-[16px] font-semibold text-[#152536]",
				innerText: "$ " + sneaker.price,
			}),
		],
	});
}

export function Home() {
	const token = getToken();
	if (!token) {
		router.navigate("/login");
	}

	const user = getUser();
	const username = user ? user.username : "Guest";

	let allSneakers = [];
	let activeBrand = "All";

	const brandsRow = El({
		element: "div",
		className:
			" flex pl-5 items-center gap-3 overflow-x-auto hide-scrollbar max-h-12 h-120 bg-white",
		children: [createBrandButton("All")],
	});

	const productsGrid = El({
		element: "div",
		className:
			"pl-5 pr-5 h-auto grid grid-cols-2 gap-5 overflow-auto hide-scrollbar",
		children: [],
	});

	function renderProducts() {
		productsGrid.innerHTML = "";
		let filtered = allSneakers;

		if (activeBrand !== "All") {
			filtered = allSneakers.filter((item) => {
				return (
					item.brand && item.brand.toUpperCase() === activeBrand.toUpperCase()
				);
			});
		}
		filtered.forEach((item) => {
			productsGrid.appendChild(createSneakerCard(item));
		});
	}

	function updateBrandStyles() {
		const buttons = brandsRow.children;
		for (let i = 0; i < buttons.length; i++) {
			const btn = buttons[i];
			if (
				(btn.dataset.brand || "").toUpperCase() === activeBrand.toUpperCase()
			) {
				btn.className =
					"shrink-0 border-2 border-[#343a40] h-10 px-4 text-white text-center font-bold rounded-3xl bg-[#343a40]";
			} else {
				btn.className =
					"shrink-0 border-2 border-[#343a40] h-10 px-4 text-[#343a40] text-center font-bold rounded-3xl bg-white";
			}
		}
	}

	function createBrandButton(brand) {
		const btn = El({
			element: "button",
			innerText: brand,
			eventListener: [
				{
					event: "click",
					callback: () => {
						activeBrand = brand;
						updateBrandStyles();
						renderProducts();
					},
				},
			],
		});
		btn.dataset.brand = brand;
		return btn;
	}


	fetch("http://localhost:3000/sneaker/brands", {
		method: "GET",
		headers: {
			Authorization: "Bearer " + token,
		},
	})
		.then((res) => res.json())
		.then((brands) => {
			brands.forEach((brand) => {
				if (brand.toUpperCase() === "ALL") return;
				const btn = createBrandButton(brand);
				brandsRow.appendChild(btn);
			});
			updateBrandStyles();
		}).catch((err) => {
			console.log("خطا در گرفتن برندها:", err);
		});

	fetch("http://localhost:3000/sneaker?page=1&limit=100", {
		method: "GET",
		headers: {
			Authorization: "Bearer " + token,
		},
	})
		.then((res) => res.json())
		.then((data) => {
			allSneakers = data.data || [];
			renderProducts();
		})
		.catch((err) => {
			console.log("خطا در گرفتن محصولات:", err);
		});

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
					brandsRow,
					productsGrid,
				],
			}),
			Footer(),
		],
	});
}
