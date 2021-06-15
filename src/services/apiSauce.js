import {create} from 'apisauce';

const api = create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

class ApiSauce {
  async post(url, payload) {
    const Header = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await api.post(url, payload, Header);
    console.log(response, 'responseresponseresponse');
    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  async postWithFormData(url, payload) {
    const Header = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
    };

    const response = await api.post(url, payload, Header);
    console.log(response, 'responseresponseresponse');
    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  async postWithToken(url, payload, token) {
    const Header = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-auth-token': `${token}`,
      },
    };
    const response = await api.post(url, payload, Header);

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  async get(url) {
    const response = await api.get(url);

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  async getWithToken(url, token) {
    const Header = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-auth-token': `${token}`,
      },
    };

    const response = await api.get(url, {}, Header);

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  async getWithoutToken(url) {
    const Header = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };

    const response = await api.get(url);
    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  async putWithToken(url, payload, token) {
    const Header = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `${token}`,
      },
    };

    const response = await api.put(url, payload, Header);
    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  handlePromise = (resolve, reject, response) => {
    console.log('wwwwwwwwwwwww', response);
    if (
      // response.ok ||
      // response.data &&
      response.status === 200 &&
      response.data.success
      // response.originalError === null
    ) {
      resolve(response.data);
      // reject(response);
    } else if (response.status === 200 && !response.data.success) {
      reject(response);
    } else {
      if (!response.ok && response.originalError) {
        reject(response);
      } else if (
        // response.originalError &&
        // !response.ok &&
        response.problem === 'NETWORK_ERROR'
      ) {
        reject(response);
      } else if (
        response.originalError &&
        !response.ok &&
        response.problem === 'UNKNOWN_ERROR'
      ) {
        reject(response);
      }
    }
  };
}

export default new ApiSauce();
