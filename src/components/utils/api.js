const API_URL = "http://localhost:3000";

export async function apiRequest(endpoint, options = {}) {
	const token = localStorage.getItem("token");

	const headers = {
		"Content-Type": "application/json",
		...(token ? { Authorization: `Bearer ${token}` } : {}),
		...(options.headers || {}),
	};

	const response = await fetch(API_URL + endpoint, {
		...options,
		headers,
	});

	const text = await response.text();

	let data;
	try {
		data = text ? JSON.parse(text) : {};
	} catch {
		data = { message: text || "Server Error" };
	}

	if (!response.ok) {
		console.log("API ERROR:", response.status, data);
		throw new Error(
			Array.isArray(data.message)
				? data.message.join(" | ")
				: data.message || "Server Error"
		);
	}

	return data;
}
