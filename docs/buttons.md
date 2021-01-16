--vars

title: 'Calert | Button options',
description: 'Configuration for buttons and adding multiple buttons for dialogs',
defaultSample: `calert({ confirmButton: true })`,
noButtonSample: `calert({title: 'No Confirm Button',confirmButton: false})`,
cancelButton: `calert({ title: 'with cancel button', cancelButton: true })`,
multipleButtons: `calert({ title: 'Changing Confirm Button Text', confirmButton: 'Try', buttons: { try2: 'try2', try3: 'try3', try4: 'try4', } }).then(result=>{ calert({ text: { innerHTML: '<pre>' + JSON.stringify(result,null,2) + '</pre>' }, contentPosition: 'left' }) })`,

advanceButtons: `calert({ confirmButton: { innerText: 'Green', style: { background: 'green' } }, buttons: { custom: { innerText: 'Custom', style:{ background: 'yellow' } }, custom2: { innerHTML: '<em>Try </em>', style:{ background: 'red', borderRadius: '0' } }, } })`
--

# Calert Buttons Configuration

> The default value is **true**

<div class="sample-container">

<button onclick="@(defaultSample)" class="ca-btn ca-btn-info">Try</button>

```javascript
@(defaultSample)

// equivalent to
calert()
```

</div>

<div class="sample-container">

<button onclick="@(noButtonSample)" class="ca-btn ca-btn-info">Try</button>

```javascript
@(noButtonSample)
```

</div>

<div class="sample-container">

<button onclick="@(cancelButton)" class="ca-btn ca-btn-info">Try</button>

```javascript
@(cancelButton)
```

</div>

<div class="sample-container">

<button onclick="@(multipleButtons)" class="ca-btn ca-btn-info">Try</button>

```javascript
@(multipleButtons)
```

</div>

## Advance Configuration

<div class="sample-container">

<button onclick="@(advanceButtons)" class="ca-btn ca-btn-info">Try</button>

```javascript
@(advanceButtons)
```

</div>

> You can change all the **styling** and **attributes** of buttons
