function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { LitElement, html, css } from '../web_modules/lit-element.js';
export class InfoPanel extends LitElement {
  static get properties() {
    return {
      eventType: {
        type: String,
        reflectToAttribute: true,
        attribute: true
      },
      pointerType: {
        type: String,
        reflectToAttribute: true,
        attribute: true
      },
      pointerId: {
        type: Number,
        reflectToAttribute: true,
        attribute: true
      },
      isPrimary: {
        type: Boolean,
        reflectToAttribute: true,
        attribute: true
      },
      width: {
        type: Number,
        reflectToAttribute: true,
        attribute: true
      },
      height: {
        type: Number,
        reflectToAttribute: true,
        attribute: true
      },
      positionX: {
        type: Number,
        reflectToAttribute: true,
        attribute: true
      },
      positionY: {
        type: Number,
        reflectToAttribute: true,
        attribute: true
      },
      preferredColor: {
        type: String,
        reflectToAttribute: true,
        attribute: true
      },
      pressure: {
        type: Number,
        reflectToAttribute: true,
        attribute: true
      },
      tangentialPressure: {
        type: Number,
        reflectToAttribute: true,
        attribute: true
      },
      tiltX: {
        type: Number,
        reflectToAttribute: true,
        attribute: true
      },
      tiltY: {
        type: Number,
        reflectToAttribute: true,
        attribute: true
      },
      Twist: {
        type: Number,
        reflectToAttribute: true,
        attribute: true
      }
    };
  }

  set eventType(eventType) {
    let oldEventType = this._eventType;
    this._eventType = eventType;
    this.requestUpdate('eventType', oldEventType);
  }

  get eventType() {
    return this._eventType;
  }

  set pointerType(pointerType) {
    let oldPointerType = this._pointerType;
    this._pointerType = pointerType;
    this.requestUpdate('pointerType', oldPointerType);
  }

  get pointerType() {
    return this._pointerType;
  }

  set pointerId(pointerId) {
    let oldPointerId = this._pointerId;
    this._pointerId = pointerId;
    this.requestUpdate('pointerId', oldPointerId);
  }

  get pointerId() {
    return this._pointerId;
  }

  set isPrimary(isPrimary) {
    let oldIsPrimary = this._isPrimary;
    this._isPrimary = isPrimary;
    this.requestUpdate('isPrimary', oldIsPrimary);
  }

  get isPrimary() {
    return this._isPrimary;
  }

  set width(width) {
    let oldWidth = this._pointerId;
    this._width = width;
    this.requestUpdate('width', oldWidth);
  }

  get width() {
    return this._width;
  }

  set height(height) {
    let oldHeight = this._height;
    this._height = height;
    this.requestUpdate('height', oldHeight);
  }

  get height() {
    return this._height;
  }

  set positionX(positionX) {
    let oldPositionX = this._positionX;
    this._positionX = positionX;
    this.requestUpdate('positionX', oldPositionX);
  }

  get positionX() {
    return this._positionX;
  }

  set positionY(positionY) {
    let oldPositionY = this._positionY;
    this._positionY = positionY;
    this.requestUpdate('positionY', oldPositionY);
  }

  get positionY() {
    return this._positionY;
  }

  set preferredColor(preferredColor) {
    let oldPreferredColor = this._preferredColor;
    this._preferredColor = preferredColor;
    this.requestUpdate('preferredColor', oldPreferredColor);
  }

  get preferredColor() {
    return this._preferredColor;
  }

  set pressure(pressure) {
    let oldPressure = this._pressure;
    this._pressure = pressure;
    this.requestUpdate('pressure', oldPressure);
  }

  get pressure() {
    return this._pressure;
  }

  set tangentialPressure(tangentialPressure) {
    let oldTangentialPressure = this._tangentialPressure;
    this._tangentialPressure = tangentialPressure;
    this.requestUpdate('tangentialPressure', oldTangentialPressure);
  }

  get tangentialPressure() {
    return this._tangentialPressure;
  }

  set tiltX(tiltX) {
    let oldTiltX = this._tiltX;
    this._tiltX = tiltX;
    this.requestUpdate('tiltX', oldTiltX);
  }

  get tiltX() {
    return this._tiltX;
  }

  set tiltY(tiltY) {
    let oldTiltY = this._tiltY;
    this._tiltY = tiltY;
    this.requestUpdate('tiltY', oldTiltY);
  }

  get tiltY() {
    return this._tiltY;
  }

  set twist(twist) {
    let oldTwist = this._twist;
    this._twist = twist;
    this.requestUpdate('twist', oldTwist);
  }

  get twist() {
    return this._twist;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="name">Event type</div><div class="value">${String(this._eventType)}</div>
      <div class="name">Pointer type</div><div class="value">${String(this._pointerType)}</div>
      <div class="name">Pointer id</div><div class="value">${String(this._pointerId)}</div>
      <div class="name">IsPrimary</div><div class="value">${String(this._isPrimary)}</div>
      <div class="name">Width</div><div class="value">${String(this._width)}</div>
      <div class="name">Height</div><div class="value">${String(this._height)}</div>
      <div class="name">Position x</div><div class="value">${String(this._positionX)}</div>
      <div class="name">Position y</div><div class="value">${String(this._positionY)}</div>
      <div class="name">Preferred color</div><div class="value">${String(this._preferredColor)}</div>
      <div class="name">Pressure</div><div class="value">${String(this._pressure)}</div>
      <div class="name">Tangential pressure</div><div class="value">${String(this._tangentialPressure)}</div>
      <div class="name">Tilt x</div><div class="value">${String(this._tiltX)}</div>
      <div class="name">Tilt y</div><div class="value">${String(this._tiltY)}</div>
      <div class="name">Twist</div><div class="value">${String(this._twist)}</div>`;
  }

}

_defineProperty(InfoPanel, "styles", css`
    :host {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 10px;
      font-size: 12px;
      text-align: left;
      background-color: whitesmoke;
      border-radius: 20px;
      user-select: none;
      touch-action: none;
      z-index: 3;
    }

    .name {
      padding: 5px;
    }

    .value {
      padding: 5px;
      font-weight: bold;
    }
  `);

customElements.define("info-panel", InfoPanel);