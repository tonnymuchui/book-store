const apiBaseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const appKey = 'buTN0wMinFmTFxVR2atj/';
const apiURL = apiBaseURL + appKey;

const addAPI = async (data) => {
  const response = await fetch(`${apiURL}books/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  }).then((response) => response.text());
  return response;
};

const removeAPI = async (id) => {
  const response = await fetch(`${apiURL}books/${id}`, {
    method: 'DELETE',
  }).then((response) => response.text());
  return response;
};

const fetchAPI = async () => {
  const fetchedData = await fetch(`${apiURL}books/`)
    .then((response) => response.json());
  return fetchedData;
};

export { addAPI, fetchAPI, removeAPI };
