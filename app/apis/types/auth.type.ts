import type { BaseResponse } from "./response.type";

export interface User {
  id: string;
  email: string;
  image_url: string;
  user_profile: any;
  custom_data: any;
  created_at: string;
  updated_at: string;
}

export interface GoogleCheckAuthResponse extends BaseResponse {
  user: User;
}
