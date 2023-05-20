export default class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkAnswer(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`${res.status} ${res.statusText}`);
    }
  }

  getUserInfo() {
    const requestUrl = this._baseUrl + `/users/me`;
    return fetch(requestUrl, {
      headers: this._headers,
    }).then(this._checkAnswer);
  }

  getInitialCards() {
    const requestUrl = this._baseUrl + '/cards';
    return fetch(requestUrl, {
      headers: this._headers,
    }).then(this._checkAnswer);
  }

  getDataFromServer() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  }
}

