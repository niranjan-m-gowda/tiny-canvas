function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { LitElement, html, css } from '../web_modules/lit-element.js';
import { Workbox, messageSW } from '../web_modules/workbox-window.js';
import '../web_modules/@material/mwc-drawer.js';
import '../web_modules/@material/mwc-icon-button.js';
import '../web_modules/@material/mwc-snackbar.js';
import '../web_modules/@material/mwc-top-app-bar.js';
import './toolbar.js';
import './info-panel.js';
export class MainApplication extends LitElement {
  firstUpdated() {
    this._drawer = this.shadowRoot.querySelector('#drawer');

    if (this._drawer) {
      const container = this._drawer.parentNode;
      container.addEventListener('MDCTopAppBar:nav', () => {
        this._drawer.open = !this._drawer.open;
      });
    }

    this._canvas = this.shadowRoot.querySelector('#canvas');
    if (this._canvas && this._canvas.getContext) this._context = this._canvas.getContext('2d'); // Check that we have a valid context to draw on/with before adding event handlers

    if (!this._context) {
      console.error('Your browser doesn\'t support canvas, this demo won\'t work');
      return;
    }

    this._snackbar = this.shadowRoot.querySelector('#snackbar');

    this._snackbar.addEventListener('MDCSnackbar:closed', event => {
      if (event.detail.reason === "action") {
        this._wb.addEventListener('controlling', () => {
          window.location.reload();
          this._wbRegistration = undefined;
        }); // Send a message to the waiting service worker instructing
        // it to skip waiting, which will trigger the `controlling`
        // event listener above.


        if (this._wbRegistration && this._wbRegistration.waiting) {
          messageSW(this._wbRegistration.waiting, {
            type: 'SKIP_WAITING'
          });
        }
      }
    }); // Check that service workers are supported


    if ('serviceWorker' in navigator) {
      // Use the window load event to keep the page load performant
      window.addEventListener('load', async () => {
        this._wb = new Workbox('./sw.js');

        this._wb.addEventListener('waiting', () => this._showSnackbar());

        this._wb.addEventListener('externalwaiting', () => this._showSnackbar());

        this._wbRegistration = await this._wb.register();
      });
    }

    this._infoButton = this.shadowRoot.querySelector('#info-button');
    this._infoButton.onpointerdown = this._toggleInfoPanel.bind(this);
    this._clearButton = this.shadowRoot.querySelector('#clear-button');
    this._clearButton.onpointerdown = this._clearCanvas.bind(this);
    this._canvas.onpointerdown = this._onPointerDown.bind(this);
    this._canvas.onpointermove = this._onPointerMove.bind(this);
    this._canvas.onpointerup = this._onPointerUp.bind(this);
    const style = window.getComputedStyle(this._canvas);
    this._canvas.width = parseInt(style.width, 10);
    this._canvas.height = parseInt(style.height, 10);
    this._predictionCanvas = this.shadowRoot.querySelector('#prediction-canvas');
    this._predictionCanvas.style.left = style.left + 'px';
    this._predictionCanvas.style.top = style.top + 'px';
    this._predictionCanvas.width = this._canvas.width;
    this._predictionCanvas.height = this._canvas.height;
    this._predictionCanvasContext = this._predictionCanvas.getContext('2d');
    this._context.lineCap = this._predictionCanvasContext.lineCap = 'round';
    this._context.lineJoin = this._predictionCanvasContext.lineJoin = 'round';
    this._context.shadowBlur = this._predictionCanvasContext.shadowBlur = 2;
    this._infoPanel = this.shadowRoot.querySelector('#info-panel');
    this._infoPanel.style.visibility = 'hidden';
    window.addEventListener('resize', this._onResize);
    console.log(window.navigator.usi);
  }

  constructor() {
    super();

    _defineProperty(this, "_pointerDown", false);

    _defineProperty(this, "_pointerMoved", false);

    _defineProperty(this, "_currentColor", '#000000');

    _defineProperty(this, "_points", []);

    _defineProperty(this, "_predicted_points", []);

    _defineProperty(this, "_clearCanvas", async event => {
      this._context.clearRect(0, 0, this._context.canvas.width, this._context.canvas.height);

      this._predictionCanvasContext.clearRect(0, 0, this._predictionCanvasContext.canvas.width, this._predictionCanvasContext.canvas.height);
    });

    _defineProperty(this, "_onPointerDown", async event => {
      this._pointerDown = true;
      this._pointerId = event.pointerId;

      this._canvas.setPointerCapture(this._pointerId);

      this._points.push(this._getRelativeCoordinates(event));

      this._updateInfoPanel(event);

      event.preventDefault();
    });

    _defineProperty(this, "_onPointerMove", async event => {
      if (event.clientY < 0 || event.clientX < 0 || event.clientX > window.innerWidth || event.clientY > window.innerHeight) {
        this._pointerDown = false;
        return;
      }

      if (this._pointerDown) {
        this._pointerMoved = true; // This will clear the canvas (which include the previous predictions).

        if (this._drawPredictedEvents) this._predictionCanvasContext.clearRect(0, 0, this._predictionCanvasContext.canvas.width, this._predictionCanvasContext.canvas.height);

        if (event.getCoalescedEvents && this._drawCoalescedEvents) {
          if (event.getCoalescedEvents().length > 0) {
            for (let e of event.getCoalescedEvents()) this._points.push(this._getRelativeCoordinates(e));
          } else {
            this._points.push(this._getRelativeCoordinates(event));
          }
        } else {
          this._points.push(this._getRelativeCoordinates(event));
        }

        if (this._drawPointsOnly) this._drawPoints(event, this._context);else this._drawStroke(event, this._context);

        if (this._drawPredictedEvents && event.getPredictedEvents) {
          // number of points from slider should be between 1 - 10
          if (this._numOfPredictionPoints > 0 && this._numOfPredictionPoints <= 10) this._predicted_points = event.getPredictedEvents().slice(0, this._numOfPredictionPoints);else this._predicted_points = event.getPredictedEvents();
          if (this._predicted_points.length > 0) this._strokePredictedEvents(event, this._predictionCanvasContext);
        } // Drop all previous coalesced pointer events except for the last one
        // which is used for the next start position for the stroke.  If
        // coalesced events were not used, then the last point will always be
        // the current x y position of pointerMove event.


        this._points.splice(0, this._points.length - 1);

        this._predicted_points = [];

        this._updateInfoPanel(event);

        event.preventDefault();
      }
    });

    _defineProperty(this, "_onPointerUp", async event => {
      if (this._drawPredictedEvents) this._predictionCanvasContext.clearRect(0, 0, this._predictionCanvasContext.canvas.width, this._predictionCanvasContext.canvas.height);
      if (!this._pointerMoved) {
        if (this._drawPointsOnly) this._drawPoints(event, this._context);else this._drawStroke(event, this._context);
      } else this._pointerMoved = false;
      this._pointerDown = false;

      this._canvas.releasePointerCapture(this._pointerId);

      this._predicted_points = [];
      this._points = [];

      this._updateInfoPanel(event);
    });

    _defineProperty(this, "_onResize", async event => {
      const style = window.getComputedStyle(this._canvas);
      this._canvas.width = this._predictionCanvas.width = parseInt(style.width, 10);
      this._canvas.height = this._predictionCanvas.height = parseInt(style.height, 10);
    });

    this._drawWithPreferredColor = false;
    this._drawWithPressure = false;
    this._drawPredictedEvents = false;
    this._highlightPredictedEvents = false;
    this._drawCoalescedEvents = false;
    this._drawPointsOnly = false;
    this._currentLineWidth = 8; // By default, the number of points slider is set to 2, because the first 2
    // predictions seems to be a good number, the other predictions are very far off.

    this._numOfPredictionPoints = 2;
  }

  _showSnackbar() {
    this._snackbar.show();
  }

  _toggleInfoPanel() {
    this._infoPanel.style.visibility = this._infoPanel.style.visibility === 'hidden' ? 'visible' : 'hidden';
  }

  _getRelativeCoordinates(event) {
    const rect = this._canvas.getBoundingClientRect();

    return {
      x: event.clientX,
      y: event.clientY - rect.top,
      pressure: event.pressure
    };
  }

  _drawStroke(event, context) {
    if (this._points.length < 2) {
      context.beginPath();
      context.fillStyle = this._getCurrentColor(event);
      let radius;
      if (this._drawWithPressure) radius = this._currentLineWidth * event.pressure * 2;else radius = this._currentLineWidth / 2;
      context.arc(this._getRelativeCoordinates(event).x, this._getRelativeCoordinates(event).y, radius, 0, Math.PI * 2, true);
      context.fill();
      return;
    }

    let i;

    for (i = 0; i < this._points.length - 1; i++) {
      let startWidth, endWidth; // Varying brush size based on pressure, convert from pressure range of 0 to 1
      // to a scale factor of 0 to 2

      if (this._drawWithPressure) {
        startWidth = this._currentLineWidth * this._points[i].pressure * 2;
        endWidth = this._currentLineWidth * this._points[i + 1].pressure * 2;
      } else {
        startWidth = endWidth = this._currentLineWidth;
      }

      let path = this._createPath(this._points[i].x, this._points[i].y, this._points[i + 1].x, this._points[i + 1].y, startWidth, endWidth);

      context.fillStyle = this._getCurrentColor(event);
      context.fill(path);
    }
  }

  _drawPoints(event, context) {
    if (this._points.length < 2) {
      context.beginPath();
      context.fillStyle = this._getCurrentColor(event);
      context.arc(this._getRelativeCoordinates(event).x, this._getRelativeCoordinates(event).y, 3, 0, Math.PI * 2, true);
      context.fill();
      return;
    }

    let i;

    for (i = 1; i < this._points.length - 1; i++) {
      context.beginPath();
      context.fillStyle = '#FF0000';
      context.arc(this._points[i].x, this._points[i].y, 2, 0, Math.PI * 2, true);
      context.fill();
    }

    context.beginPath();
    context.fillStyle = this._getCurrentColor(event);
    context.arc(this._points[i].x, this._points[i].y, 3, 0, Math.PI * 2, true);
    context.fill();
  }

  _createPath(x1, y1, x2, y2, startWidth, endWidth) {
    const vectorX = x2 - x1,
          vectorY = y2 - y1;
    const vectorAngle = Math.atan2(vectorY, vectorX) + Math.PI / 2;
    const path = new Path2D();
    path.arc(x1, y1, startWidth / 2, vectorAngle, vectorAngle + Math.PI);
    path.arc(x2, y2, endWidth / 2, vectorAngle + Math.PI, vectorAngle);
    path.closePath();
    return path;
  }

  _strokePredictedEvents(event, context) {
    // Varying brush size based on pressure, convert from pressure range of 0 to 1
    // to a scale factor of 0 to 2
    if (this._drawWithPressure) context.lineWidth = this._currentLineWidth * event.pressure * 2;else context.lineWidth = this._currentLineWidth;
    context.beginPath();
    context.moveTo(this._points[this._points.length - 1].x, this._points[this._points.length - 1].y);
    if (this._highlightPredictedEvents) context.strokeStyle = 'red';else context.strokeStyle = this._getCurrentColor(event);

    for (let e of this._predicted_points) {
      const coordinate = this._getRelativeCoordinates(e);

      context.lineTo(coordinate.x, coordinate.y);
    }

    context.stroke();
  }

  _updateInfoPanel(event) {
    this._infoPanel.eventType = event.type;
    this._infoPanel.pointerType = event.pointerType;
    this._infoPanel.pointerId = event.pointerId;
    this._infoPanel.isPrimary = event.isPrimary;
    this._infoPanel.width = event.width;
    this._infoPanel.height = event.height;
    this._infoPanel.positionX = this._roundDecimal(event.x, 4);
    this._infoPanel.positionY = this._roundDecimal(event.y, 4);
    this._infoPanel.preferredColor = event.preferredColor;
    this._infoPanel.pressure = this._roundDecimal(event.pressure, 4);
    this._infoPanel.tangentialPressure = this._roundDecimal(event.tangentialPressure, 4);
    this._infoPanel.tiltX = this._roundDecimal(event.tiltX, 4);
    this._infoPanel.tiltY = this._roundDecimal(event.tiltY, 4);
    this._infoPanel.twist = this._roundDecimal(event.twist, 4);
  }

  _roundDecimal(value, numOfDecimalPlaces) {
    const factor = Math.pow(10, numOfDecimalPlaces);
    return Math.round(value * factor) / factor;
  }

  _getCurrentColor(event) {
    if (event.preferredColor && this._drawWithPreferredColor) return event.preferredColor;else return this._currentColor;
  }

  _colorChanged(event) {
    this._currentColor = event.detail.color;
    this._drawWithPreferredColor = false;
  }

  _lineWidthChanged(event) {
    this._currentLineWidth = event.detail.lineWidth;
  }

  _drawWithPreferredColorChanged(event) {
    this._drawWithPreferredColor = event.detail.drawWithPreferredColor;
  }

  _pressureEventsEnabledChanged(event) {
    this._drawWithPressure = event.detail.pressureEventsEnabled;
  }

  _predictedEventsEnabledChanged(event) {
    this._drawPredictedEvents = event.detail.predictedEventsEnabled;
  }

  _predictedEventsHighlightEnabledChanged(event) {
    this._highlightPredictedEvents = event.detail.predictedEventsHighlightEnabled;
  }

  _numOfPredictionPointsChanged(event) {
    this._numOfPredictionPoints = event.detail.numOfPredictionPoints;
  }

  _coalescedEventsEnabledChanged(event) {
    this._drawCoalescedEvents = event.detail.coalescedEventsEnabled;
  }

  _drawPointsOnlyEnabledChanged(event) {
    this._drawPointsOnly = event.detail.drawPointsOnlyEnabled;
  }

  render() {
    return html`
    <mwc-drawer id="drawer" hasHeader type="modal">
      <span slot="title" class="header">Toolbar</span>
      <div class="drawer-content">
        <tiny-toolbar @color-changed=${this._colorChanged}
          @lineWidth-changed=${this._lineWidthChanged}
          @drawWithPreferredColor-changed=${this._drawWithPreferredColorChanged}
          @pressureEventsEnabled-changed=${this._pressureEventsEnabledChanged}
          @predictedEventsEnabled-changed=${this._predictedEventsEnabledChanged}
          @predictedEventsHighlightEnabled-changed=${this._predictedEventsHighlightEnabledChanged}
          @numOfPredictionPoints-changed=${this._numOfPredictionPointsChanged}
          @coalescedEventsEnabled-changed=${this._coalescedEventsEnabledChanged}
          @drawPointsOnlyEnabled-changed=${this._drawPointsOnlyEnabledChanged}>
        </tiny-toolbar>
      </div>
      <div slot="appContent">
        <mwc-top-app-bar>
          <mwc-icon-button slot="navigationIcon" icon="menu"></mwc-icon-button>
          <div slot="title">TinyCanvas</div>
          <mwc-icon-button slot="actionItems" id="info-button" icon="info"></mwc-icon-button>
          <mwc-icon-button slot="actionItems" id="clear-button" icon="clear"></mwc-icon-button>
        </mwc-top-app-bar>
        <canvas id="canvas"></canvas>
        <canvas id="prediction-canvas"></canvas>
        <info-panel id="info-panel"></info-panel>
      </div>
    </mwc-drawer>
    <mwc-snackbar id="snackbar" labelText="A newer version of the application is available.">
    <mwc-button slot="action">RELOAD</mwc-button>
      <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
    </mwc-snackbar>`;
  }

}

_defineProperty(MainApplication, "styles", css`
    :host {
      width: 100vw;
      height: 100vh;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    mwc-snackbar {
      --mdc-snackbar-action-color: #2d89ef;
    }

    mwc-drawer {
      --mdc-drawer-width: 384px;
    }

    .drawer-content {
      width: 100%;
      height: 80vh;
    }

    .header {
      text-align: center;
      width: 100%;
      font-size: 1.5em;
      height: 30px;
      font-weight: bold;
    }

    tiny-toolbar{
      width: 20vw;
      height: 100vh;
    }

    #canvas {
      position: absolute;
      width: 100vw;
      height: 100vh;
      user-select: none;
      touch-action: none;
      z-index: 1;
    }

    #prediction-canvas {
      position: absolute;
      pointer-events: none;
      user-select: none;
      touch-action: none;
      z-index: 2;
    }

    info-panel {
      position: relative;
      top: 20px;
      left: 20px;
      width: 250px;
      height: 400px;
    }
  `);

customElements.define("main-application", MainApplication);