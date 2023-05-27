export default class UserInfo {
  constructor({profileTitle, profileSubtitle, profileAvatar}) {
    this._profileTitleElement = document.querySelector(profileTitle);
    this._profileSubtitleElement = document.querySelector(profileSubtitle);
    this._profileAvatarElement = document.querySelector(profileAvatar);
  }

  getUserInfo() {
    return {
      firstname: this._profileTitleElement.textContent,
      about: this._profileSubtitleElement.textContent
    }
  }

  setUserInfo(userData) {
    const {userName, userAbout, userAvatar, userId} = userData;
    this._profileTitleElement.textContent = userName;
    this._profileSubtitleElement.textContent = userAbout;
    this._profileAvatarElement.src = userAvatar;
    this._userId = userId;
  }

  changeUserInfo({firstname, about}) {
    this._profileTitleElement.textContent = firstname;
    this._profileSubtitleElement.textContent = about;
  }

  setUserAvatar({newAvatar}) {
    this._profileAvatarElement.src = newAvatar;
  }

  getUserId() {
    return this._userId;
  }
}
