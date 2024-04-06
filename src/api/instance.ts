import axios, {AxiosError, AxiosResponse} from 'axios'
import {fetchRefreshToken} from 'src/store/server/auth/queries'
//수정
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
  headers: {
    'Content-Type': `application/json;charset=UTF-8`,
    Accept: 'application/json',
    'Access-Control-Allow-Credentials': 'true',
    withCredential: true,
  },
})

export default instance

interface ErrorResponse {
  status: string
  severDateTime: string
  errorCode: string
  errorMessage: string
}

export function isServerError(
  error: unknown,
): error is AxiosError<ErrorResponse> {
  return axios.isAxiosError(error)
}

export const httpErrorHandler = async (
  error: AxiosError<ErrorResponse> | Error,
): Promise<Error> => {
  // 401에러인 경우 로그인 페이지로 이동
  if (isServerError(error) && error.response?.status === 401) {
    try {
      // 토큰 갱신 API 요청
      const response = await fetchRefreshToken()
      if (response?.status === 200) {
        window.location.reload()
      }
    } catch (refreshError) {
      console.log(refreshError, '리프레시 에러')
    }
  }
  return Promise.reject(error)
}
instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError<ErrorResponse> | Error) =>
    await httpErrorHandler(error),
)
