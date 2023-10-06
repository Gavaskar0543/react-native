import { API_URLS } from "../Utils/constant";

export const customFetch = async (url, { body, ...customConfig }) => {
 
 
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded', // Change to x-www-form-urlencoded
    ...customConfig.headers,
  };


  const config = {
    ...customConfig,
    headers: headers,
  };


  if (body) {
    const formData = new URLSearchParams();
    for (const key in body) {
      formData.append(key, body[key]);
    }
    config.body = formData.toString();
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();
    if (response.ok) {
      return {
        data: data,
        success: true,
      };
    }

    // throw new Error(data.message);
  } catch (error) {
    console.error(error.message);
    return {
      message: error.message,
      success: false,
    };
  }
};


