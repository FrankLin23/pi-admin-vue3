import service from "@/utils/request";

export const getCurrentUserInfo = () => {
  return service.get("/user/me");
};

export const updateUserInfo = (userInfo: UserInfoType) => {
  return service.post("/user/update", userInfo);
};
