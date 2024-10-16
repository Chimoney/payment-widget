/**
 * Creates an instance of ChimoneyWidget.
 *
 * @class ChimoneyWidget
 * @param {Object} options - Configuration options for the widget.
 * @param {string} options.paymentLink - The URL to the Chimoney payment page, required for initializing the widget. This must be a valid URL.
 * @param {string} options.onPaymentSuccess - The callback after payment is completed. This must be a valid function.
 * @param {string} options.onWidgetClosed - The callback when modal is closed. This must be a valid function.
 * @param {string} [options.brandColor='#000'] - Customize the primary color of the payment widget to match your brand theme. Default is black.
 * @param {string} [options.brandName='Chimoney'] - Your brand's name, which will be displayed on the widget to enhance trust. Default is 'Chimoney'.
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

class ChimoneyWidget {
  /**
   * Constructs the ChimoneyWidget with user-provided options.
   * Validates the mandatory `paymentLink` parameter.
   * Initializes modal and iframe components.
   *
   * @param {Object} options - Configuration options for the widget.
   * @param {string} options.paymentLink - The URL to the Chimoney payment page.
   * @param {string} options.onPaymentSuccess - The callback after payment is completed.
   * @param {string} options.onWidgetClosed - The callback when modal is closed.
   * @param {string} [options.brandColor='#000'] - Primary color of the widget, default is black.
   * @param {string} [options.brandName='Chimoney'] - Name of the brand, default is 'Chimoney'.
   * @throws {Error} If `paymentLink` is not provided or invalid.
   */
  constructor (options = {}) {
    this.validateOptions(options);
    this.options = options;
    this.modal = null;
    this.iframe = null;
    this.loadingIndicator = null;
    this.createModal();
  }

  /**
   * Validates the options object, particularly the `paymentLink`.
   * @param {Object} options - The options provided to the constructor.
   * @throws {Error} If the `paymentLink` is missing or invalid.
   */
  validateOptions (options) {
    if (!options.paymentLink || !this.isValidUrl(options.paymentLink)) {
      throw new Error('Invalid or missing paymentLink.');
    }

    if (
      typeof options.onPaymentSuccess !== 'undefined' &&
      typeof options.onPaymentSuccess !== 'function'
    ) {
      throw new Error(
        'Invalid or missing onPaymentSuccess function. Must be a function.'
      );
    }

    if (
      typeof options.onWidgetClosed !== 'undefined' &&
      typeof options.onWidgetClosed !== 'function'
    ) {
      throw new Error(
        'Invalid or missing onWidgetClosed function. Must be a function.'
      );
    }
  }

  /**
   * Checks if a URL is valid.
   * @param {string} url - The URL to validate.
   * @returns {boolean} True if the URL is valid, false otherwise.
   */
  isValidUrl (url) {
    try {
      url = new URL(url);

      return url;
    } catch (e) {
      return false;
    }
  }

  /**
   * Creates and appends the modal element to the DOM.
   * The modal serves as a container for the iframe.
   */
  createModal () {
    const modalHTML = `
            <div id="chimoneyModal" style="display:none; position: fixed; z-index: 10000; left: 0; top: 0; width: 100%; min-height:70vh; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.8);">
                <div style="background-color: #ffffff; margin: 2% auto; padding: 0px; padding-bottom: 0px; border: 1px solid #dddddd; width: 90%; height: 90%; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); max-width:550px;">
                    <span id="closeModal" style="color: #aaa; float: right; font-size: 28px; font-weight: bold; cursor: pointer;padding-right: 10px;">&times;</span>
                    <iframe sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox" allow="clipboard-write clipboard-paste" id="chimoneyPaymentFrame" style="width:100%; min-height:500px; border:none; border-radius: 5px; z-index: 1000"></iframe>
                    <div id="loadingIndicator" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: block;">
                      <img src="https://imagedelivery.net/FWOxhF6qUOoRrmL6RllgbQ/519deb7a-a00a-4d41-24ce-9c46d17f7f00/public" alt="Loading..." style="width: 270px; height: 180px;">
                    </div>
                </div>
            </div>
        `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    this.modal = document.getElementById('chimoneyModal');
    this.modal.style.minHeight = '80vh';
    this.iframe = document.getElementById('chimoneyPaymentFrame');
    this.loadingIndicator = document.getElementById('loadingIndicator');

    // Show loading indicator until the iframe is fully loaded
    this.iframe.addEventListener('load', () => {
      this.loadingIndicator.style.display = 'none';
    });

    document
      .getElementById('closeModal')
      .addEventListener('click', () => this.close());

    const handleIframeMessage = (e) => {
      const data = e.data;
      if (!data || !data.status) return;

      if (
        data.status === 'success' &&
        typeof data.issueID === 'string' &&
        data.issueID.length > 0
      ) {
        if (typeof this.options.onPaymentSuccess === 'function') {
          this.options.onPaymentSuccess();
        }
        this.close();
      }
    };

    window.addEventListener('message', handleIframeMessage, false);
  }

  /**
   * Opens the modal containing the iframe.
   * This method makes the modal visible, showing the payment interface.
   */
  open () {
    this.loadingIndicator.style.display = 'block'; // Show loading indicator
    this.applyBranding();
    this.iframe.style.width = '100%';
    this.iframe.style.height = '90%';
    this.iframe.src = this.appendCustomizations(this.options.paymentLink);
    this.modal.style.display = 'block';
    this.iframe.addEventListener('mousemove', () => {
      this.loadingIndicator.style.display = 'none';
    });
  }

  /**
   * Closes the modal containing the iframe.
   * This method hides the modal, effectively closing the payment interface.
   */
  close () {
    this.modal.style.display = 'none';
    this.loadingIndicator.style.display = 'none';
    this.iframe.src = '';

    if (typeof this.options.onWidgetClosed === 'function') {
      this.options.onWidgetClosed();
    }
  }

  applyBranding () {
    if (this.options.brandColor) {
      this.modal.querySelector('div').style.borderColor =
        this.options.brandColor;
    }
  }

  appendCustomizations (url) {
    const urlParams = decodeURIComponent(
      new URLSearchParams(this.options).toString()
    );
    return `${url}&${urlParams}`;
  }
}

export default ChimoneyWidget;
