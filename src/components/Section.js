export default class Section {
  constructor(containerSelector, {renderer}) {
    this._renderer = renderer;
    this._containerElement = document.querySelector(containerSelector);
  }

    renderItems(initialCards) {
      initialCards.forEach(item => {
        this.addItem(item);
      });
    }

    addItem(item) {
      const card = this._renderer(item);
      this._containerElement.prepend(card);
    }

    addItemAppend(item) {
      this._containerElement.append(item);
    }

    addItemPrepend(item) {
      this._containerElement.prepend(item);
    }
  }
