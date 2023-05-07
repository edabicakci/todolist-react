const API_URL = "https://63fpbddxa4.execute-api.eu-central-1.amazonaws.com/dev/todos";

export const service = {
  get: async (url) => {
    let result = [];
    await fetch(API_URL + url)
      .then((res) => res.json())
      .then((data) => (result = data));
    return result;
  },
  post: async (url, data) => {
    let result = {};
    let requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    await fetch(API_URL + url, requestOptions)
      .then((res) => res.json())
      .then((data) => (result = data));
    return result;
  },
  delete: async (url) => {
    let result = {};
    let requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    };
    await fetch(API_URL + url, requestOptions)
      .then((res) => res.json())
    return result;
  }
};
