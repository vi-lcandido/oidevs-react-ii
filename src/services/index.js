import { accessKey, BASE_URL } from "./config";

export const getImageFromApi = async (endpoint) => {
  const result = await fetch(`${BASE_URL}/${endpoint}/?client_id=${accessKey}`);
  return result.json();
};

