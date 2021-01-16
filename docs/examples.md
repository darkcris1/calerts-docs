--vars
title: "Calert | Examples",

inputSample: `calert({ 
    text: 'Type anything',
    inputs: { text: { type: 'text',placeholder: 'anything' }  } ,
    buttonsPosition: 'right',
    contentPosition: 'left',
  })
  .then(value=>{ 
    calert(\`You type \${value.inputs.text}\`)
  })`,

confirmSample: `
  calert('Are you sure you want to buy this ?',{
    cancelButton: true,
    icon: 'question'
  })
  .then(result=> {
    if (result.isConfirmed){
      return calert('Operation Success','','success')
    }else {
      return calert('Cancel','Operation Cancelled','error')
    }
  })
`,
imageSample: `calert({
  image: {
    src: 'https://picsum.photos/200',
    alt: 'Random Photos'
  }}
)`,

timerSample: `calert({
  timer: 2000,
  title: 'This will close automatically',
  confirmButton: false,
  backdropClick: false,
})`,

htmlSample: `calert({
  title: {
    innerHTML: '<em>This is html title</em>'
  },
  text: {
    innerHTML: '<b>This is html text</b>'
  }
})`,
overlaySample: `calert({
  backdropClick: false,
  text: 'outside is not clickable',
  backdrop: {
    background: 'rgba(40,255,40,0.6)',
  }
})`,
modalBoxSample: `calert({
  modalBox: {
    background: 'yellow',
    filter: 'blur(2px)',
  }
})`
--

# Calert Examples

<div class="sample-container">

<button onclick="@(inputSample)" class="ca-btn ca-btn-primary">Try</button>

```javascript
@(inputSample)
```

</div>

<div class="sample-container">

<button onclick="@(confirmSample)" class="ca-btn ca-btn-primary">Try</button>

```javascript
@(confirmSample)
```

</div>

<div class="sample-container">

<button onclick="@(imageSample)" class="ca-btn ca-btn-primary">Try</button>

```javascript
@(imageSample)
```

</div>

<div class="sample-container">

<button onclick="@(timerSample)" class="ca-btn ca-btn-primary">Try</button>

```javascript
@(timerSample)
```

</div>

<div class="sample-container">

<button onclick="@(htmlSample)" class="ca-btn ca-btn-primary">Try</button>

```javascript
@(htmlSample)
```


</div>

### Backdrop manipulation

<div class="sample-container">

<button onclick="@(overlaySample)" class="ca-btn ca-btn-primary">Try</button>

```javascript
@(overlaySample)
```

</div>

> You can change all the **styling** of the overlay

### ModalBox Styling

<div class="sample-container">

<button onclick="@(modalBoxSample)" class="ca-btn ca-btn-primary">Try</button>

```javascript
@(modalBoxSample)
```

</div>

