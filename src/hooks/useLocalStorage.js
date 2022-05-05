import { useState } from "react";

export default function useLocalStorage(key, initialValue) {

	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		}

    catch (error) {
			console.log(error);
			return initialValue;
		}
	});

	const setValue = (value) => {
		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			window.localStorage.setItem(key, JSON.stringify(valueToStore));

		}

    catch (error) {
			console.log(error);
		}
	};

	return [storedValue, setValue];
}

// get username
const userKey = "auth";

export function getUsername() {
	const user = getFromStorage(userKey);

	if (user) {
			return user.user_display_name;
	}
	return null;
}

export function getFromStorage(key) {
	const value = localStorage.getItem(key);

	if (!value) {
			return [];
	}
	else {
			return JSON.parse(value);
	}
}
