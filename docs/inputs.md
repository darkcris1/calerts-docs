--vars
title: "Calert | Inputs",
description: "Customizing inputs option in calert",
inputSample: `calert({ 
  text: 'Random Text:',
  inputs: {
    text: { 
      type: 'text' ,
      placeholder: 'placeholder'
    }
  }
  }).then(value=>{ 
    return calert(\`You type \${value.inputs.text}\`)
  })`,
formSample: `calert({ 
  title: 'Login',
  inputs: {
    username: { 
      type: 'text' ,
      placeholder: 'Username'
    },
    password: { 
      type: 'password' ,
      placeholder: 'Password'
    },
  },
  form: {
    onSubmit: (e)=>{
      e.preventDefault();
    },
    method: 'POST',
  },
  confirmButton: false,
  })`,
multipleSample: `calert({
  inputs: {
    text: {
      type: 'text'
    },
    description: {
      type: 'text',
    },
    secret: {
      type: 'password',
    }
  }
})`,
typesSample: `calert({
  inputs: {
    range: {
      type: 'range'
    },
    date: {
      type: 'date',
    },
    color: {
      type: 'color',
    },
    number: {
      type: 'number',
    },
    password: {
      type: 'password'
    }
  }
}).then(val=> console.log(val))`,


--

# Calert Inputs

You can **add** many inputs as you can

<div class="sample-container">

<button onclick="@(inputSample)" class="ca-btn ca-btn-primary">Try</button>

```javascript
@(inputSample)
```

</div>
<div class="sample-container">

<button onclick="@(typesSample)" class="ca-btn ca-btn-primary">Try</button>

```javascript
@(typesSample)
```

</div>

## Multiple Inputs

<div class="sample-container">

<button onclick="@(multipleSample)" class="ca-btn ca-btn-primary">Try</button>

```javascript
@(multipleSample)
```

</div>



## Form 

You can manipulate the form element via **form** option

> You can change all the attributes of form

<div class="sample-container">

<button onclick="@(formSample)" class="ca-btn ca-btn-primary">Form</button>

```javascript
@(formSample)
```
