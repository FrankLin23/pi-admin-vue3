import service from "@/utils/request";

export const getCaptchaImage = (query: CaptchaCode) => {
  return service.get("/captcha", {
    params: query,
  });
};

export const login = (data: LoginInfo) => {
  return service.post("/login", data);
};
