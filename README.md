# Chimoney Payment Widget

__Simplify payments within your web application with Chimoney's embedded payment widget.__
<div align="center" id="initial">
  <a href="https://chimoney.io/" target="_blank">
  <picture>
    <img src="https://chimoney.io/assets/icons/chimoney-purple-logo.svg" width="280" alt="Logo"/>
  </picture>
  </a>
</div>


Our widget allows you to integrate a multi-currency payment gateway directly into your web applications, supporting a seamless checkout experience with customization options to match your brand.

Install with:

`$ yarn add chimoney-payment-widget`

For non-module usage, include directly in your HTML:

`<script src="https://cdn.jsdelivr.net/gh/Chimoney/payment-widget/dist/chimoney-payment-widget.umd.js"></script>`.

## Usage

### For Module Bundlers

For projects using module bundlers like Webpack, Rollup, or when using frameworks like React, Vue.js, etc.:


```bash
import PaymentWidget from 'chimoney-payment-widget';

// Initialize the widget with your configuration
const paymentWidget = new PaymentWidget({
  brandColor: '#FF5722',
  brandName: 'Your Brand',
  paymentLink: 'https://dash.chimoney.io/pay?issueID=your_unique_issue_id'
});

// To open the payment modal
paymentWidget.open();

// To close the payment modal
paymentWidget.close();


### For Vanilla JavaScript
For simple HTML/JavaScript applications, include the script and initialize the widget:
```html
<script src="https://cdn.jsdelivr.net/gh/Chimoney/payment-widget/dist/chimoney-payment-widget.umd.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const paymentWidget = new PaymentWidget({
      brandColor: '#FF5722',
      brandName: 'Your Brand',
      paymentLink: 'https://dash.chimoney.io/pay?issueID=your_unique_issue_id'
    });

    // Open the widget on button click
    document.getElementById('payButton').addEventListener('click', function() {
      paymentWidget.open();
    });
  });
</script>
```


### Configuration Options
Configure your widget by passing options during initialization. Here are the configurable options:

- brandColor: String, sets the primary color of the widget to match your brand.
- brandName: String, displays your brand name on the widget.
- paymentLink: String, the unique URL to your Chimoney payment page.

### Customization
Customize the look and feel of the widget to match your website or app:


```js
const paymentWidget = new PaymentWidget({
  brandColor: '#4CAF50', // Green
  brandName: 'GreenTech',
  paymentLink: 'https://dash.chimoney.io/pay?issueID=your_custom_issue_id',
});
```


### More Examples

#### Integration in React

```jsx
import React, { useEffect } from 'react';
import PaymentWidget from 'chimoney-payment-widget';

const PaymentButton = () => {
  useEffect(() => {
    const paymentWidget = new PaymentWidget({
      brandColor: '#673AB7',
      brandName: 'My App',
      paymentLink: 'https://your.payment.url',
    });

    document.getElementById('paymentButton').onclick = function() {
      paymentWidget.open();
    };
  }, []);

  return <button id="paymentButton">Pay with Chimoney</button>;
};

export default PaymentButton;
```

#### Integration in Vue.js

```vue
<template>
  <button @click="openPayment">Pay with Chimoney</button>
</template>

<script>
import PaymentWidget from 'chimoney-payment-widget';

export default {
  methods: {
    openPayment() {
      const paymentWidget = new PaymentWidget({
        brandColor: '#3F51B5',
        brandName: 'VueApp',
        paymentLink: 'https://your.payment.url'
      });

      paymentWidget.open();
    }
  }
}
</script>
```


## What's included?

### Tools / stack

* 🗪 [Babel](https://babeljs.io/) for transpiling
* 🪄 [Standard](https://standardjs.com/) for linting
* ⚗️ [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com) for testing
* 🔍 [c8](https://github.com/bcoe/c8) for code coverage
* 📚 [JSDoc](https://jsdoc.app/) for documentation and [jsdoc-to-markdown](https://www.npmjs.com/package/jsdoc-to-markdown) to create docs as markdown files
* ⚡ [GitHub actions](https://github.com/features/actions) for continuous integration
* 📦 [Rollup](https://rollupjs.org) for bundling

All tools are defined as **`dev-dependencies`**!


## Contributing and development

We provide an [extensive contribution guideline](./CONTRIBUTING.md) and a [code of conduct](./CODE_OF_CONDUCT.md)
to help you in making your contribution a success!

## Security

Please read our [security policy](./SECURITY.md) to get to know which versions are covered.

## License

MIT, see [license file](LICENSE)
