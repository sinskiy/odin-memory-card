import { BASE_API_URL } from "./const";

const response = await fetch(BASE_API_URL + "en/codes.json");
export const countries = Object.entries(await response.json());
