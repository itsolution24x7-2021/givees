import axios from 'axios';

const createResource = (url, data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}`, data, {
        headers: {
          Authorization: accessToken,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response.data);
        } else {
          reject(response.data);
        }
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });
};

const postWithFormData = (url, data, accessToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: accessToken,
        },
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response.data);
        } else {
          reject(response.data);
        }
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });
};

const getResources = (url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${url}`)
      .then((response) => {
        console.log("🚀 ~ file: simpleApiCall.js ~ line 52 ~ .then ~ response", response)
        if (response.data?.success || response?.data?.status == 'success') {
          resolve(response.data);
        } else {
          reject(response.data);
        }
      })
      .catch((error) => {
        console.log("🚀 ~ file: simpleApiCall.js ~ line 60 ~ returnnewPromise ~ error", error)
        reject(handleError(error));
      });
  });
};

const getResourceWithToken = (api, token) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${api}`, {headers: {'x-auth-token': token}})
      .then((response) => {
        if (response.data.success) {
          resolve(response.data);
        }
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });
};

const updateResource = (api, token, data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${api}`, data, {headers: {'x-auth-token': token}})
      .then((response) => {
        if (response.data.success) {
          resolve(response.data);
        } else {
          reject(response.data);
        }
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });
};

const updateResourceWithFormData = (api, token, data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${api}`, data, {
        headers: {'x-auth-token': token, 'Content-Type': 'multipart/form-data'},
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response.data);
        } else {
          reject(response.data);
        }
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });
};

const deleteResource = (api, token, data) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${api}`, {
        headers: {'x-auth-token': token, 'Content-Type': 'multipart/form-data'},
        data,
      })
      .then((response) => {
        if (response.data.success) {
          resolve(response);
        } else {
          reject(response.data);
        }
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });
};

const handleError = (error) => {
  if (error.response) {
    /*
     * The request was made and the server responded with a
     * status code that falls out of the range of 2xx
     */
    return error.response.data;
  } else if (error.request) {
    /*
     * The request was made but no response was received, `error.request`
     * is an instance of XMLHttpRequest in the browser and an instance
     * of http.ClientRequest in Node.js
     */
    return error.request;
  } else {
    // Something happened in setting up the request and triggered an Error
    return error.message;
  }
};

export {
  createResource,
  getResources,
  getResourceWithToken,
  postWithFormData,
  updateResource,
  deleteResource,
  updateResourceWithFormData,
};
