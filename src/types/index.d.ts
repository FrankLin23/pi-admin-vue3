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

interface CurrentUser {
  id: number | null;
  username: string | null;
  nickname: string | null;
  headImg: string | null;
  email: string | null;
  phone: string | null;
  remark: string | null;
}

interface UserInfoType {
  username: string | null;
  nickname: string | null;
  email: string | null;
  phone: string | null;
  remark: string | null;
}

interface schemaItem {
  field: string;
  label: string;
}
