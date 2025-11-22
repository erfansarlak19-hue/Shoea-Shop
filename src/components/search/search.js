import { El } from "../utils/el";

export function Search(){
  return El({
		element: "div",
		className: "flex flex-col items-center",
		children: [
			El({
				element: "div",
				className: "pt-5 w-full flex justify-center pb-4",
				children: [
          El({
            element:'img',
            className:"w-6 absolute right-10 top-9.5",
            src:"./public/svg/filter-svgrepo-com.svg"
          }),
					El({
						element: "input",
						className: "bg-[#fafafa] w-95 h-15 rounded-2xl px-10 ",
						placeholder: "Search",
					}),
					El({
            element:"img",
            className:"w-6 absolute left-9 top-9.5",
            src:"./public/svg/search-svgrepo-com.svg"
          }),
				],
			}),
		],
	});
}