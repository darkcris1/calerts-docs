--vars
title: "Calert | Utils",
description: "Utils that calert uses"
--

# Utils

## ca.utils.tag

```javascript
import calert from 'calerts'

const { tag } = calert.utils

tag('h1')
tag('button', {
  className: "btn",
  appendTo: document.body,
  appendChild: tag("h1")
  onClick: () => {
    alert('Hello world')
  },
})
```

## ca.utils.styles

**styles** will make easier the styling in javascript

> You can use **camelCase** notations on styling

```javascript
import calert from 'calerts'

const { styles } = calert.utils

const button = document.getElementById('btn')
styles(button, {
  backround: 'yellow',
  opacity: 0.9,
  fontSize: '12px', // Camel case
  'font-size': '12px', // You can also use this notations
  '--primary': 'green', // You can change the variables
})
```

## ca.utils.queryAll

**queryAll** is short for document.querySelectorAll

```javascript
const { queryAll } = calert.utils

queryAll('*')
```

## ca.utils.createPromise

**createPromise** allows you to create promise and you can resolve or reject it outside of its scope

```javascript
const { createPromise } = calert.utils

const promise = createPromise()

// return -> { resolve , reject, promise}
```

## ca.utils.edit

**edit** allows you to edit the element

```javascript
const { edit } = calert.utils

const button = document.getElementById('btn')

edit(button, {
  className: 'btn btn-primary',
  styles: {
    background: 'blue',
  },
  onTouchstart: () => {
    // .....
  },
})
```
