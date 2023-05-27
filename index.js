(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var r=function(){function e(t){var r=t.baseUrl,n=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=r,this._headers=n}var r,n;return r=e,(n=[{key:"_checkAnswer",value:function(e){return e.ok?e.json():Promise.reject("".concat(e.status," ").concat(e.statusText))}},{key:"getUserInfo",value:function(){var e=this._baseUrl+"/users/me";return fetch(e,{headers:this._headers}).then(this._checkAnswer)}},{key:"getInitialCards",value:function(){var e=this._baseUrl+"/cards";return fetch(e,{headers:this._headers}).then(this._checkAnswer)}},{key:"getDataFromServer",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}},{key:"updateUserInfo",value:function(e){var t=this._baseUrl+"/users/me";return fetch(t,{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkAnswer)}},{key:"addNewCard",value:function(e){var t=this._baseUrl+"/cards";return fetch(t,{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._checkAnswer)}},{key:"removeCard",value:function(e){var t=this._baseUrl+"/cards/".concat(e);return fetch(t,{method:"DELETE",headers:this._headers}).then(this._checkAnswer)}},{key:"addCardLike",value:function(e){var t=this._baseUrl+"/cards/likes/".concat(e);return fetch(t,{method:"PUT",headers:this._headers}).then(this._checkAnswer)}},{key:"deleteCardLike",value:function(e){var t=this._baseUrl+"/cards/likes/".concat(e);return fetch(t,{method:"DELETE",headers:this._headers}).then(this._checkAnswer)}},{key:"updateProfileAvatar",value:function(e){var t=this._baseUrl+"/users/me/avatar";return fetch(t,{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkAnswer)}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function e(t){var r=t.cardData,n=t.cardSelector,o=t.userId,i=t.handleCardClick,u=t.handleLikeButton,a=t.handleRemoveButton;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameData=r.name,this._linkData=r.link,this._likes=r.likes,this._dataId=r._id,this._UserId=o,this._isUserCard=o===r.owner._id,this._cardSelector=n,this._handleCardClick=i,this._handleLikeButton=u,this._handleRemoveButton=a}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".places__item").cloneNode(!0)}},{key:"generateCard",value:function(){return this._cardElement=this._getTemplate(),this._cardElementTitle=this._cardElement.querySelector(".places__text"),this._cardElementImage=this._cardElement.querySelector(".places__image"),this._cardElementContainer=this._cardElement.querySelector(".places__image-container"),this._likeButton=this._cardElement.querySelector(".places__like"),this._cardDeleteButton=this._cardElement.querySelector(".places__delete-card"),this._likesIndicator=this._cardElement.querySelector(".places__likes-indicator"),this._likesIndicator.textContent=this._likes.length,this._cardElementTitle.textContent=this._nameData,this._cardElementImage.src=this._linkData,this._cardElementImage.alt=this._nameData,this._setEventListeners(),this._toggleLikesCounter(),this._cardElement}},{key:"_setEventListeners",value:function(){var e=this;this._cardElementContainer.addEventListener("click",(function(){e._handleCardClick(e._nameData,e._linkData)})),this._likeButton.addEventListener("click",(function(){e._handleLikeButton()})),this._isUserCard?this._cardElement.querySelector(".places__delete-card").addEventListener("click",(function(t){e._handleRemoveButton(t)})):(this._cardDeleteButton.remove(),this._cardDeleteButton=null)}},{key:"_toggleLikesCounter",value:function(){this._checkUserLikes()?this.setLike():this.unsetLike()}},{key:"_checkUserLikes",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._UserId}))}},{key:"setLike",value:function(){this._likeButton.classList.add("places__like_active"),this.isLiked=!0}},{key:"unsetLike",value:function(){this._likeButton.classList.remove("places__like_active"),this.isLiked=!1}},{key:"updatelikesCounter",value:function(e){this._likesIndicator.textContent=e.length}},{key:"getCardId",value:function(){return this._dataId}}])&&o(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,s(n.key),n)}}function l(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t,r){return(t=s(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===u(t)?t:String(t)}var f=l((function e(t,r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"_showInputError",(function(e,t){var r=n._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(n._inputErrorClass),r.textContent=t,r.classList.add(n._errorClass)})),c(this,"_hideInputError",(function(e){var t=n._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(n._inputErrorClass),t.classList.remove(n._errorClass),t.textContent=""})),c(this,"_checkInputValidity",(function(e){e.validity.valid?n._hideInputError(e):n._showInputError(e,e.validationMessage)})),c(this,"_hasInvalidInput",(function(){return n._inputList.some((function(e){return!e.validity.valid}))})),c(this,"disableButton",(function(){n._buttonElement.classList.add(n._inactiveButtonClass),n._buttonElement.setAttribute("disabled",!0)})),c(this,"_enableButton",(function(){n._buttonElement.classList.remove(n._inactiveButtonClass),n._buttonElement.removeAttribute("disabled")})),c(this,"_switchButton",(function(){n._hasInvalidInput()?n.disableButton(n._buttonElement):n._enableButton(n._buttonElement)})),c(this,"_setEventListeners",(function(){n._switchButton(),n._inputList.forEach((function(e){e.addEventListener("input",(function(){n._checkInputValidity(e),n._switchButton()}))}))})),c(this,"enableValidation",(function(){n._setEventListeners()})),this._formElement=r,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}));function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==h(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===h(o)?o:String(o)),n)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},v.apply(this,arguments)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(n);if(o){var r=_(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._popupForm=r._popupElement.querySelector(".popup__form"),r._inputsList=r._popupForm.querySelectorAll(".popup__input"),r._submitButtonElement=r._popupElement.querySelector(".popup__submit"),r._handleFormSubmit=t,r}return t=u,(r=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputsList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;v(_(u.prototype),"setEventListeners",this).call(this),this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){v(_(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"renderLoading",value:function(e){this._submitButtonElement.textContent=!0===e?"Сохранение...":"Сохранить"}}])&&m(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==g(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===g(o)?o:String(o)),n)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},k.apply(this,arguments)}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(n);if(o){var r=j(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._elementFullImage=t._popupElement.querySelector(".popup__image"),t._elementFullImageTitle=t._popupElement.querySelector(".popup__heading"),t}return t=u,(r=[{key:"open",value:function(e,t){this._elementFullImageTitle.textContent=e,this._elementFullImage.src=t,this._elementFullImage.alt=e,k(j(u.prototype),"open",this).call(this)}}])&&E(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==C(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===C(o)?o:String(o)),n)}var o}var L=function(){function e(t,r){var n=r.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._containerElement=document.querySelector(t)}var t,r;return t=e,(r=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t.addItem(e)}))}},{key:"addItem",value:function(e){var t=this._renderer(e);this.addItemPrepend(t)}},{key:"addItemAppend",value:function(e){this._containerElement.append(e)}},{key:"addItemPrepend",value:function(e){this._containerElement.prepend(e)}}])&&P(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==I(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===I(o)?o:String(o)),n)}var o}var A=function(){function e(t){var r=t.profileTitle,n=t.profileSubtitle,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileTitleElement=document.querySelector(r),this._profileSubtitleElement=document.querySelector(n),this._profileAvatarElement=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{firstname:this._profileTitleElement.textContent,about:this._profileSubtitleElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.userName,r=e.userAbout,n=e.userAvatar,o=e.userId;this.changeUserInfo({userName:t,userAbout:r}),this.setUserAvatar({userAvatar:n}),this._userId=o}},{key:"changeUserInfo",value:function(e){var t=e.userName,r=e.userAbout;this._profileTitleElement.textContent=t,this._profileSubtitleElement.textContent=r}},{key:"setUserAvatar",value:function(e){var t=e.userAvatar;this._profileAvatarElement.src=t}},{key:"getUserId",value:function(){return this._userId}}])&&T(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function U(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==B(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===B(o)?o:String(o)),n)}var o}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},q.apply(this,arguments)}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(n);if(o){var r=D(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._formElement=t._popupElement.querySelector(".popup__form"),t}return t=u,(r=[{key:"updateSubmitHandler",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;q(D(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()}))}}])&&U(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(d),F=".popup_edit-profile",N=".popup_add-card",V=".popup_edit-avatar",H={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_active"};function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var M=document.querySelector(N),z=document.querySelector(".profile").querySelector(".profile__edit-button"),$=document.querySelector(".profile__avatar-button"),G=document.querySelector(F),K=document.querySelector(V),Q=G.querySelector(".popup__input_text_name"),W=G.querySelector(".popup__input_text_about"),X=new r({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-66",headers:{authorization:"d7dcd0f2-c4b8-4c41-b858-1f8610d52fd1","Content-Type":"application/json"}});X.getDataFromServer().then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,a=[],l=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return J(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?J(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];te.setUserInfo({userName:i.name,userAbout:i.about,userAvatar:i.avatar,userId:i._id}),Y.renderItems(o)})).catch((function(e){console.error(e)}));var Y=new L(".places__list",{renderer:function(e){var t=new i({cardData:e,cardSelector:"#card",userId:te.getUserId(),handleCardClick:function(e,t){ee.open(e,t)},handleLikeButton:function(){t.isLiked?X.deleteCardLike(t.getCardId()).then((function(e){t.unsetLike(),t.updatelikesCounter(e.likes)})).catch((function(e){console.error(e)})):X.addCardLike(t.getCardId()).then((function(e){t.setLike(),t.updatelikesCounter(e.likes)})).catch((function(e){console.error(e)}))},handleRemoveButton:function(e){var r=e.target.closest(".places__item"),n=t.getCardId();Z.open(),Z.updateSubmitHandler((function(){X.removeCard(n).then((function(){r.remove(),Z.close()})).catch((function(e){console.error(e)}))}))}});return t.generateCard()}}),Z=new x(".popup_confirmation");Z.setEventListeners();var ee=new O(".popup_full-image");ee.setEventListeners();var te=new A({profileTitle:".profile__title",profileSubtitle:".profile__subtitle",profileAvatar:".profile__avatar"}),re=new S(F,(function(e){re.renderLoading(!0),X.updateUserInfo({name:e.firstname,about:e.about}).then((function(e){te.changeUserInfo({userName:e.name,userAbout:e.about}),re.close()})).catch((function(e){console.error(e)})).finally((function(){re.renderLoading(!1)}))}));re.setEventListeners();var ne=new f(H,G);ne.enableValidation(),z.addEventListener("click",(function(){var e=te.getUserInfo(),t=e.about,r=e.firstname;Q.value=r,W.value=t,ne.disableButton(),re.open()}));var oe=new S(V,(function(e){oe.renderLoading(!0),X.updateProfileAvatar({avatar:e.url}).then((function(e){te.setUserAvatar({userAvatar:e.avatar}),oe.close()})).catch((function(e){console.error(e)})).finally((function(){oe.renderLoading(!1)}))}));oe.setEventListeners();var ie=new f(H,K);ie.enableValidation(),$.addEventListener("click",(function(){ie.disableButton(),oe.open()}));var ue=new S(N,(function(e){ue.renderLoading(!0),X.addNewCard(e).then((function(e){Y.addItem(e),ue.close()})).catch((function(e){console.error(e)})).finally((function(){ue.renderLoading(!1)}))}));ue.setEventListeners();var ae=new f(H,M);ae.enableValidation(),document.querySelector(".profile__add-button").addEventListener("click",(function(){ae.disableButton(),ue.open()}))})();