
export function saveAuth(token, user) {
	localStorage.setItem("token", token);
	localStorage.setItem("user", JSON.stringify(user));
}

export function getToken() {
	return localStorage.getItem("token");
}

export function getUser() {
	const value = localStorage.getItem("user");
	if (!value) return null;

	try {
		return JSON.parse(value);
	} catch (e) {
		return null;
	}
}

export function clearAuth() {
	localStorage.removeItem("token");
	localStorage.removeItem("user");
}
