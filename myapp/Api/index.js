import { API_URLS } from "../utils/constants";

const customFetch = async (url, { body, ...customConfig }) => {
  // Headers
  /* The `const headers` block is creating an object that represents the headers for the HTTP request.
  It includes a default header `'Content-Type'` with the value
  `'application/x-www-form-urlencoded'`. This header specifies the format of the data being sent in
  the request body. */
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded', // Change to x-www-form-urlencoded
    ...customConfig.headers,
  };

 /* The `config` object is being created to store the configuration options for the HTTP request. It is
 a combination of the `customConfig` object passed as an argument to the `customFetch` function and
 the `headers` object. */
  // Config
  const config = {
    ...customConfig,
    headers: headers,
  };

  // Body
 /* The code block is responsible for converting the `body` object into a URL-encoded string and
 assigning it to the `config.body` property. */
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

    throw new Error(data.message);
  } catch (error) {
    console.error(error);
    return {
      message: error.message,
      success: false,
    };
  }
};



//create
export const register = (n,p,cp) => {
  return customFetch(API_URLS.createAccount(), {
    method: 'POST',
    body:{name:n,password:p,Confirmpassword:cp}
  });
};

//login from db
export const getIn = (n,p) => {
    return customFetch(API_URLS.login(), {
      method: 'POST',
      body:{name:n,password:p}
    });
  };



