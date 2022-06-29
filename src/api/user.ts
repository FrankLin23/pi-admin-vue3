import service from "@/utils/request";

export const getCurrentUserInfo = () => {
	return service.get("/user/me");
};
