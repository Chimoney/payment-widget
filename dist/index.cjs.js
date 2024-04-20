'use strict';

/**
 * Creates an instance of ChimoneyWidget.
 *
 * @class ChimoneyWidget
 * @param {Object} options - Configuration options for the widget.
 * @param {string} options.paymentLink - The URL to the Chimoney payment page, required for initializing the widget. This must be a valid URL.
 * @param {string} [options.brandColor='#000'] - Customize the primary color of the payment widget to match your brand theme. Default is black.
 * @param {string} [options.brandName='Chimoney'] - Your brand's name, which will be displayed on the widget to enhance trust. Default is 'Chimoney'.
 * @param {boolean} [options.backgroundColor="#ffffff"] - The background color.
 *
 * @throws {Error} Throws an error if the paymentLink is not provided or is invalid.
 *
 * @example
 * const chimoneyPay = new ChimoneyWidget({
 *   paymentLink: 'https://dash.chimoney.io/pay?issueID=your_unique_issue_id',
 *   brandColor: '#FF5722',
 *   brandName: 'Your Brand'
 * });
 */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ChimoneyWidget = /*#__PURE__*/function () {
  /**
   * Constructs the ChimoneyWidget with user-provided options.
   * Validates the mandatory `paymentLink` parameter.
   * Initializes modal and iframe components.
   *
   * @param {Object} options - Configuration options for the widget.
   * @param {string} options.paymentLink - The URL to the Chimoney payment page.
   * @param {string} [options.brandColor='#000'] - Primary color of the widget, default is black.
   * @param {string} [options.brandName='Chimoney'] - Name of the brand, default is 'Chimoney'.
   * @param {boolean} [options.turnOffNotification=false] - If true, disables notifications from Chimoney.
   * @param {Object} [options.meta] - Metadata for tracking or additional purposes.
   * @param {boolean} [options.backgroundColor="#ffffff"] - The background color.
   * @throws {Error} If `paymentLink` is not provided or invalid.
   */
  function ChimoneyWidget() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, ChimoneyWidget);
    this.validateOptions(options);
    this.options = options;
    this.modal = null;
    this.iframe = null;
    this.createModal();
  }

  /**
   * Validates the options object, particularly the `paymentLink`.
   * @param {Object} options - The options provided to the constructor.
   * @throws {Error} If the `paymentLink` is missing or invalid.
   */
  return _createClass(ChimoneyWidget, [{
    key: "validateOptions",
    value: function validateOptions(options) {
      if (!options.paymentLink || !this.isValidUrl(options.paymentLink)) {
        throw new Error('Invalid or missing paymentLink.');
      }
    }

    /**
     * Checks if a URL is valid.
     * @param {string} url - The URL to validate.
     * @returns {boolean} True if the URL is valid, false otherwise.
     */
  }, {
    key: "isValidUrl",
    value: function isValidUrl(url) {
      try {
        URL(url);
        return true;
      } catch (e) {
        return false;
      }
    }

    /**
     * Creates and appends the modal element to the DOM.
     * The modal serves as a container for the iframe.
     */
  }, {
    key: "createModal",
    value: function createModal() {
      var _this = this;
      var modalHTML = "\n            <div id=\"chimoneyModal\" style=\"display:none; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.4);\">\n                <div style=\"background-color: #fefefe; margin: 15% auto; padding: 20px; border: 1px solid #888; width: 80%; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);\">\n                    <span id=\"closeModal\" style=\"color: #aaa; float: right; font-size: 28px; font-weight: bold; cursor: pointer;\">&times;</span>\n                    <iframe id=\"chimoneyPaymentFrame\" style=\"width:100%; height:500px; border:none; border-radius: 5px;\"></iframe>\n                </div>\n            </div>\n        ";
      document.body.insertAdjacentHTML('beforeend', modalHTML);
      this.modal = document.getElementById('chimoneyModal');
      this.iframe = document.getElementById('chimoneyPaymentFrame');
      document.getElementById('closeModal').addEventListener('click', function () {
        return _this.close();
      });
    }

    /**
     * Opens the modal containing the iframe.
     * This method makes the modal visible, showing the payment interface.
     */
  }, {
    key: "open",
    value: function open(paymentLink) {
      this.applyBranding(); // Apply branding styles if any
      this.iframe.style.width = '100%';
      this.iframe.style.height = '100%';
      this.iframe.src = this.appendCustomizations(paymentLink);
      this.modal.style.display = 'block';
    }

    /**
     * Closes the modal containing the iframe.
     * This method hides the modal, effectively closing the payment interface.
     */
  }, {
    key: "close",
    value: function close() {
      this.modal.style.display = 'none';
    }
  }, {
    key: "applyBranding",
    value: function applyBranding() {
      if (this.options.brandColor) {
        this.modal.querySelector('div').style.borderColor = this.options.brandColor;
      }
      if (this.options.modalBackground) {
        this.modal.style.backgroundColor = this.options.modalBackground;
      }
    }
  }, {
    key: "appendCustomizations",
    value: function appendCustomizations(url) {
      // Assuming the Chimoney API can handle URL parameters for customization
      var urlParams = new URLSearchParams(this.options).toString();
      return "".concat(url, "?").concat(urlParams);
    }
  }]);
}();
exports.PaymentWidget = ChimoneyWidget;
//# sourceMappingURL=index.cjs.js.map
