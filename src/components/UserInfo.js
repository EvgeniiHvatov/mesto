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
    this.changeUserInfo({userName, userAbout});
    this.setUserAvatar({userAvatar});
    this._userId = userId;
  }

  changeUserInfo({userName, userAbout}) {
    this._profileTitleElement.textContent = userName;
    this._profileSubtitleElement.textContent = userAbout;
  }

  setUserAvatar({userAvatar}) {
    this._profileAvatarElement.src = userAvatar;
  }

  getUserId() {
    return this._userId;
  }
}
