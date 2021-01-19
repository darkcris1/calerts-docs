--vars

title: "Calert Documentation",

description: "calert documentation - calert is tiny but powerful for custom dialogs ",

normalAlert: "alert('hello world')",

calertSample: `calert("Hello world","this is a sample")`,

--

# @(title)

**calert** stands for **custom-alert** and it's a lighweight alternative for sweetalert and native dialogs
with less than **9kb** size

## Alert Comparison

<div class="sample-comparison">

  <div>
  
  <button onclick="@(normalAlert)" class="ca-btn ca-btn-primary">Normal Alert</button>

```javascript
@(normalAlert)
```

  </div>

  <div>

<button onclick='@(calertSample)' class="ca-btn ca-btn-primary">Calert</button>

```javascript
@(calertSample)
```

  </div>

</div>

# Installation

NPM

```bash
npm i calerts
```

Unpkg

```html
<script src="https://unpkg.com/calerts@latest"></script>
```

Unpkg Unbabel version (8kb)

```html
<script src="https://unpkg.com/calerts@latest/dist/calert.unbabel.min.js"></script>
```

# Usage

```javascript
import calert from 'calert'

calert('Error', 'Something error occured', 'error')
```

<button class="ca-btn ca-btn-primary" onclick="calert('Error', 'Something error occured', 'error')">Try</button>

Equivalent to:

```javascript
calert({
  title: 'Error',
  text: 'Something error occured',
  icon: 'error',
})
```
