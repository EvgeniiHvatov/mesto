export default class UserInfo {
  constructor({profileTitle, profileSubtitle}) {
    this._profileTitleElement = document.querySelector(profileTitle);
    this._profileSubtitleElement = document.querySelector(profileSubtitle);
  }

  getUserInfo() {
    return {
      firstname: this._profileTitleElement.textContent,
      about: this._profileSubtitleElement.textContent
    }
  }

  setUserInfo({firstname, about}) {
    this._profileTitleElement.textContent = firstname;
    this._profileSubtitleElement.textContent = about;
  }
}
