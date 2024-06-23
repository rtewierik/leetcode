import axios from "axios";
import "./callMock";
import { BASE_URL } from "./baseUrl";

interface CityWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface CityWeatherResponse {
  main?: CityWeather;
  message?: string;
  code?: number;
}

const OK_RESPONSE_STATUS_CODE = 200;

const cityWeather = async (city: any): Promise<CityWeather> => {
  if (typeof city !== "string") {
    throw new Error("not a string");
  }
  if (!city) {
    throw new Error("string is empty");
  }
  const weatherUrl = `${BASE_URL}&q=${city}`;
  return axios.get<CityWeatherResponse>(weatherUrl)
    .then((response: AxiosResponse<CityWeatherResponse>) => {
      if (response.status !== OK_RESPONSE_STATUS_CODE || !response.data.main) {
        throw new Error(response.data.message ?? "unexpected error occurred");
      }
      return response.data.main;
    })
}

export default cityWeather;
