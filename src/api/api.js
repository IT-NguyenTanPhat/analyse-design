const FIREBASE_DOMAIN =
	"https://analyse-design-default-rtdb.asia-southeast1.firebasedatabase.app";

export async function getAllDrugs() {
	const response = await fetch(`${FIREBASE_DOMAIN}/drugs.json`);
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Could not fetch drugs.");
	}

	const transformedDrugs = [];

	for (const item in data) {
		const drug = {
			key: item,
			...data[item],
		};

		transformedDrugs.push(drug);
	}
    
	return transformedDrugs;
}

export async function getDrug(drugKey) {
	const response = await fetch(
		`${FIREBASE_DOMAIN}/drugs/${drugKey}.json`
	);
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Could not fetch drug.");
	}

	const loadedDrug = {
		key: drugKey,
		...data,
	};

	return loadedDrug;
}

export async function addDrug(drugData) {
	const response = await fetch(`${FIREBASE_DOMAIN}/drugs.json`, {
		method: "POST",
		body: JSON.stringify(drugData),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Could not create drug.");
	}

	return null;
}

export async function updateDrug(drugData) {
	const response = await fetch(
		`${FIREBASE_DOMAIN}/drugs/${drugData.key}.json`,
		{
			method: "PATCH",
			body: JSON.stringify(drugData),
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Could not update drug.");
	}

	return null;
}

export async function deleteDrug(drugKey) {
	const response = await fetch(
		`${FIREBASE_DOMAIN}/drugs/${drugKey}.json`,
		{
			method: "DELETE",
			body: JSON.stringify(drugKey),
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Could not delete drug.");
	}

	return null;
}
