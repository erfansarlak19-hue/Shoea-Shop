import { El } from "../utils/el";
import { router } from "../utils/router";
import { saveAuth } from "../utils/storage";

export function Login() {
	return El({
		element: "div",
		className: "bg-[#ffffff] flex flex-col",
		children: [
			El({
				element: "div",
				className: "h-14 pt-3 pl-6",
				children: [
					El({
						element: "img",
						className: "w-[25px] ",
						src: "./public/svg/arrow-left-svgrepo-com.svg",
						eventListener: [
							{
								event: "click",
								callback: () => {
									router.navigate("/onboarding3");
								},
							},
						],
					}),
				],
			}),
			El({
				element: "div",
				className: "flex justify-center pt-[76px]",
				children: [
					El({
						element: "img",
						className: "w-[54px] h-[81px]",
						src: "./public/svg/logo.svg",
					}),
				],
			}),
			El({
				element: "div",
				className: "pt-[130px]",
				children: [
					El({
						element: "h1",
						innerText: "Login to Your Account",
						className: "flex justify-center text-[32px] font-bold",
					}),
				],
			}),
			El({
				element: "div",
				className: "flex flex-col gap-5 items-center pt-10",
				children: [
					El({
						element: "div",
						className:
							"flex w-[380px] relative not-placeholder-shown:opacity-100",
						children: [
							El({
								element: "img",
								className: "absolute top-2 left-2 z-10 cursor-pointer",
								src: "./public/svg/input-prefix (2).svg",
							}),
							El({
								element: "input",
								className: "bg-[#fafafa]  rounded-sm w-full px-8 py-1",
								placeholder: "Username",
								id: "username",
							}),
						],
					}),
					El({
						element: "div",
						className: " w-[380px] relative not-placeholder-shown:opacity-100 ",
						children: [
							El({
								element: "img",
								className: "absolute top-2 left-2 z-10 cursor-pointer",
								src: "./public/svg/lock-fill.svg",
								alt: "password",
							}),
							El({
								element: "input",
								className: "bg-[#fafafa]  rounded-sm w-full px-8 py-1",
								placeholder: "Password",
								id: "password",
								type: type,
							}),
							El({
								element: "img",
								className:
									"absolute top-2 right-2 z-10 cursor-pointer opacity-50 hover:opacity-100",
								src: "./public/svg/input-suffix.svg",
								eventListener: [
									{
										event: "click",
										callback: togglePassword,
									},
								],
							}),
						],
					}),
					El({
						element: "a",
						innerText: "Signup",
						className: "cursor-pointer",
						eventListener: [
							{
								event: "click",
								callback: () => {
									router.navigate("/signup");
								},
							},
						],
					}),
				],
			}),
			El({
				element: "div",
				className: "flex justify-center pt-[275px]",
				children: [
					El({
						element: "button",
						className:
							"bg-[#6e7174] cursor-pointer w-[380px] h-[47px] hover:bg-[#212529] text-white rounded-4xl",
						innerText: "Signin",
						eventListener: [
							{
								event: "click",
								callback: handleSignin
							},
						],
					}),
				],
			}),
		],
	});
}

let type = "password";
function togglePassword() {
	if (type === "password") {
		document.getElementById("password").setAttribute("type", "text");
		type = "text";
	} else {
		document.getElementById("password").setAttribute("type", "password");
		type = "password";
	}
}

export async function handleSignin() {
	const usernameInput = document.getElementById("username");
	const passwordInput = document.getElementById("password");

	const username = usernameInput.value.trim();
	const password = passwordInput.value.trim();

	if (!username || !password) {
		alert("نام کاربری و رمز عبور را وارد کنید");
		return;
	}

	try {
		const response = await fetch("http://localhost:3000/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		});

		const data = await response.json();

		if (!response.ok) {
			alert("ورود ناموفق بود: " + data.message);
			return;
		}
		saveAuth(data.token, data.user);
		router.navigate("/home");
	} catch (err) {
		alert("خطا در ارتباط با سرور");
	}
}
