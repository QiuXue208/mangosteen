
import { AxiosResponse } from "axios"
import { getUserInfo } from "../service/modules/login"

export let mePromise: Promise<AxiosResponse<{
  resource: {
      email: string;
      id: number;
      name?: string | undefined;
  };
}, any>>

export const refreshMe = () => {
  mePromise = getUserInfo()
  return mePromise
}

export const fetchMe = refreshMe