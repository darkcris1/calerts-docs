--vars

title: `Calert | Icons`,
description: "Customizing icon option in calert",

infoSample: `calert({ title: 'Hello world', text: 'This is a text', icon: 'info' })`,

errorSample: `calert({ title: 'Failed', text: 'Something failed during the process', icon: 'error' })`,

questionSample: `calert({ title: 'Is it beautiful?', icon: 'question', confirmButton: 'Yes', cancelButton: 'No' })`,

successSample: `calert({ title: 'Login Successfully', icon: 'success' })`,

warningSample: `calert({ title: 'Maintenance', icon: 'warning', confirmButton: false })`,

--

# Calert Icons

<div class="sample-container">

<button onclick="@(infoSample)" class="ca-btn ca-btn-info">Info</button>

```javascript
@(infoSample)
```

</div>

<div class="sample-container">

<button onclick="@(errorSample)" class="ca-btn ca-btn-error">Error</button>

```javascript
@(errorSample)
```

</div>

<div class="sample-container">

<button onclick="@(questionSample)" class="ca-btn ca-btn-question">Question</button>

```javascript
@(questionSample)
```

</div>

<div class="sample-container">

<button onclick="@(successSample)" class="ca-btn ca-btn-success">Success</button>

```javascript
@(successSample)
```

</div>
<div class="sample-container">

<button onclick="@(warningSample)" class="ca-btn ca-btn-warning">Warning</button>

```javascript
@(warningSample)
```

</div>
