const accessToken = "0d160d0f-71cd-48b0-801f-2fc9cabd2157";
const BASE_URL = "https://content.guardianapis.com";
const config = {
  method: "GET",
  headers: new Headers({
    "Content-Type": "application/json"
  })
};

function _objToParams(obj) {
  if (!obj) return "";

  return (
    "?" +
    Object.keys(obj)
      .filter(key => {
        return (
          obj[key] !== "" &&
          (!Array.isArray(obj[key]) || typeof obj[key][0] !== "undefined")
        ); // remove empty strings and arrays
      })
      .map(key => {
        return Array.isArray(obj[key])
          ? `${key}=${encodeURIComponent(obj[key].join(","))}`
          : `${key}=${encodeURIComponent(obj[key])}`;
      })
      .join("&")
  );
}

async function _extractJson(response) {
  const contentType = response.headers.get("content-type");
  return contentType && contentType.includes("application/json")
    ? response.json()
    : {};
}

// HTTP methods
// GET
export async function get(endpoint, params) {
  const url = BASE_URL + endpoint + _objToParams(params) + '&api-key=0d160d0f-71cd-48b0-801f-2fc9cabd2157';

  const config = {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json"
    })
  };

  const response = await fetch(url, config);
  const responseJson = await _extractJson(response);

//   if (responseJson.status !== "ok") throw new Error("Erro response.success FALSE");

  return responseJson;
}
