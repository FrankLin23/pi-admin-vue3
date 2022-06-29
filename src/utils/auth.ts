import Cookies from "js-cookie";

const TokenKey = "Admin-Token";
const UserKey = "Current_User";

const defaultUser: CurrentUser = {
	id: null,
	username: null,
	nickname: null,
	headImg: null,
	email: null,
	phone: null,
	remark: null,
};

export function getToken() {
	return Cookies.get(TokenKey);
}

export function setToken(token: string) {
	return Cookies.set(TokenKey, token);
}

export function removeToken() {
	return Cookies.remove(TokenKey);
}

export function getCurrentUser() {
	const user = Cookies.get(UserKey);
	return user === undefined ? defaultUser : JSON.parse(user);
}

export function setCurrentUser(currrentUser: CurrentUser) {
	return Cookies.set(UserKey, JSON.stringify(currrentUser));
}

export function removeCurrentUser() {
	return Cookies.remove(UserKey);
}
