interface LoginInfo {
  username: string | null;
  password: string | null;
  captchaCode: string | null;
  captchaId: string | null;
}

interface CaptchaCode {
  width: number;
  height: number;
}
