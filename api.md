## Classes

<dl>
<dt><a href="#ChimoneyWidget">ChimoneyWidget</a></dt>
<dd></dd>
<dt><a href="#ChimoneyWidget">ChimoneyWidget</a></dt>
<dd></dd>
</dl>

## Constants

<dl>
<dt><a href="#exists">exists</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns true of a given parameter is not null and not undefined.</p>
</dd>
</dl>

<a name="ChimoneyWidget"></a>

## ChimoneyWidget
**Kind**: global class  

* [ChimoneyWidget](#ChimoneyWidget)
    * [new ChimoneyWidget(options)](#new_ChimoneyWidget_new)
    * [new ChimoneyWidget(options)](#new_ChimoneyWidget_new)
    * [.validateOptions(options)](#ChimoneyWidget+validateOptions)
    * [.isValidUrl(url)](#ChimoneyWidget+isValidUrl) ⇒ <code>boolean</code>
    * [.createModal()](#ChimoneyWidget+createModal)
    * [.open()](#ChimoneyWidget+open)
    * [.close()](#ChimoneyWidget+close)

<a name="new_ChimoneyWidget_new"></a>

### new ChimoneyWidget(options)
Creates an instance of ChimoneyWidget.

**Throws**:

- <code>Error</code> Throws an error if the paymentLink is not provided or is invalid.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | Configuration options for the widget. |
| options.paymentLink | <code>string</code> |  | The URL to the Chimoney payment page, required for initializing the widget. This must be a valid URL. |
| [options.brandColor] | <code>string</code> | <code>&quot;&#x27;#000&#x27;&quot;</code> | Customize the primary color of the payment widget to match your brand theme. Default is black. |
| [options.brandName] | <code>string</code> | <code>&quot;&#x27;Chimoney&#x27;&quot;</code> | Your brand's name, which will be displayed on the widget to enhance trust. Default is 'Chimoney'. |

**Example**  
```js
const chimoneyPay = new ChimoneyWidget({
  paymentLink: 'https://dash.chimoney.io/pay?issueID=your_unique_issue_id',
  brandColor: '#FF5722',
  brandName: 'Your Brand'
});
```
<a name="new_ChimoneyWidget_new"></a>

### new ChimoneyWidget(options)
Constructs the ChimoneyWidget with user-provided options.
Validates the mandatory `paymentLink` parameter.
Initializes modal and iframe components.

**Throws**:

- <code>Error</code> If `paymentLink` is not provided or invalid.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | Configuration options for the widget. |
| options.paymentLink | <code>string</code> |  | The URL to the Chimoney payment page. |
| [options.brandColor] | <code>string</code> | <code>&quot;&#x27;#000&#x27;&quot;</code> | Primary color of the widget, default is black. |
| [options.brandName] | <code>string</code> | <code>&quot;&#x27;Chimoney&#x27;&quot;</code> | Name of the brand, default is 'Chimoney'. |

<a name="ChimoneyWidget+validateOptions"></a>

### chimoneyWidget.validateOptions(options)
Validates the options object, particularly the `paymentLink`.

**Kind**: instance method of [<code>ChimoneyWidget</code>](#ChimoneyWidget)  
**Throws**:

- <code>Error</code> If the `paymentLink` is missing or invalid.


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options provided to the constructor. |

<a name="ChimoneyWidget+isValidUrl"></a>

### chimoneyWidget.isValidUrl(url) ⇒ <code>boolean</code>
Checks if a URL is valid.

**Kind**: instance method of [<code>ChimoneyWidget</code>](#ChimoneyWidget)  
**Returns**: <code>boolean</code> - True if the URL is valid, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to validate. |

<a name="ChimoneyWidget+createModal"></a>

### chimoneyWidget.createModal()
Creates and appends the modal element to the DOM.
The modal serves as a container for the iframe.

**Kind**: instance method of [<code>ChimoneyWidget</code>](#ChimoneyWidget)  
<a name="ChimoneyWidget+open"></a>

### chimoneyWidget.open()
Opens the modal containing the iframe.
This method makes the modal visible, showing the payment interface.

**Kind**: instance method of [<code>ChimoneyWidget</code>](#ChimoneyWidget)  
<a name="ChimoneyWidget+close"></a>

### chimoneyWidget.close()
Closes the modal containing the iframe.
This method hides the modal, effectively closing the payment interface.

**Kind**: instance method of [<code>ChimoneyWidget</code>](#ChimoneyWidget)  
<a name="ChimoneyWidget"></a>

## ChimoneyWidget
**Kind**: global class  

* [ChimoneyWidget](#ChimoneyWidget)
    * [new ChimoneyWidget(options)](#new_ChimoneyWidget_new)
    * [new ChimoneyWidget(options)](#new_ChimoneyWidget_new)
    * [.validateOptions(options)](#ChimoneyWidget+validateOptions)
    * [.isValidUrl(url)](#ChimoneyWidget+isValidUrl) ⇒ <code>boolean</code>
    * [.createModal()](#ChimoneyWidget+createModal)
    * [.open()](#ChimoneyWidget+open)
    * [.close()](#ChimoneyWidget+close)

<a name="new_ChimoneyWidget_new"></a>

### new ChimoneyWidget(options)
Creates an instance of ChimoneyWidget.

**Throws**:

- <code>Error</code> Throws an error if the paymentLink is not provided or is invalid.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | Configuration options for the widget. |
| options.paymentLink | <code>string</code> |  | The URL to the Chimoney payment page, required for initializing the widget. This must be a valid URL. |
| [options.brandColor] | <code>string</code> | <code>&quot;&#x27;#000&#x27;&quot;</code> | Customize the primary color of the payment widget to match your brand theme. Default is black. |
| [options.brandName] | <code>string</code> | <code>&quot;&#x27;Chimoney&#x27;&quot;</code> | Your brand's name, which will be displayed on the widget to enhance trust. Default is 'Chimoney'. |

**Example**  
```js
const chimoneyPay = new ChimoneyWidget({
  paymentLink: 'https://dash.chimoney.io/pay?issueID=your_unique_issue_id',
  brandColor: '#FF5722',
  brandName: 'Your Brand'
});
```
<a name="new_ChimoneyWidget_new"></a>

### new ChimoneyWidget(options)
Constructs the ChimoneyWidget with user-provided options.
Validates the mandatory `paymentLink` parameter.
Initializes modal and iframe components.

**Throws**:

- <code>Error</code> If `paymentLink` is not provided or invalid.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | Configuration options for the widget. |
| options.paymentLink | <code>string</code> |  | The URL to the Chimoney payment page. |
| [options.brandColor] | <code>string</code> | <code>&quot;&#x27;#000&#x27;&quot;</code> | Primary color of the widget, default is black. |
| [options.brandName] | <code>string</code> | <code>&quot;&#x27;Chimoney&#x27;&quot;</code> | Name of the brand, default is 'Chimoney'. |

<a name="ChimoneyWidget+validateOptions"></a>

### chimoneyWidget.validateOptions(options)
Validates the options object, particularly the `paymentLink`.

**Kind**: instance method of [<code>ChimoneyWidget</code>](#ChimoneyWidget)  
**Throws**:

- <code>Error</code> If the `paymentLink` is missing or invalid.


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options provided to the constructor. |

<a name="ChimoneyWidget+isValidUrl"></a>

### chimoneyWidget.isValidUrl(url) ⇒ <code>boolean</code>
Checks if a URL is valid.

**Kind**: instance method of [<code>ChimoneyWidget</code>](#ChimoneyWidget)  
**Returns**: <code>boolean</code> - True if the URL is valid, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to validate. |

<a name="ChimoneyWidget+createModal"></a>

### chimoneyWidget.createModal()
Creates and appends the modal element to the DOM.
The modal serves as a container for the iframe.

**Kind**: instance method of [<code>ChimoneyWidget</code>](#ChimoneyWidget)  
<a name="ChimoneyWidget+open"></a>

### chimoneyWidget.open()
Opens the modal containing the iframe.
This method makes the modal visible, showing the payment interface.

**Kind**: instance method of [<code>ChimoneyWidget</code>](#ChimoneyWidget)  
<a name="ChimoneyWidget+close"></a>

### chimoneyWidget.close()
Closes the modal containing the iframe.
This method hides the modal, effectively closing the payment interface.

**Kind**: instance method of [<code>ChimoneyWidget</code>](#ChimoneyWidget)  
<a name="exists"></a>

## exists ⇒ <code>boolean</code>
Returns true of a given parameter is not null and not undefined.

**Kind**: global constant  
**Returns**: <code>boolean</code> - true if defined, otherwise false  

| Param | Description |
| --- | --- |
| any | any input is feasible |

