--vars

title: 'Calert | Positioning',
buttonsPosition: `calert({ 
  confirmButton: true, 
  cancelButton: true,
  buttonsPosition: 'center',
  contentPosition: 'center',
  iconPosition: 'center',
  title: 'Content center', 
  icon: 'info',
})`

--

# Positioning

> All Position is **center** by default

<div class="sample-container">

<div>

Buttons Position

<select id='buttonsPosition'>
  <option value='left'> Left </option>
  <option value='center' selected> Center </option>
  <option value='right'> Right </option>
</select>

Content Position

<select id='contentPosition'>
  <option value='left'> Left </option>
  <option value='center' selected> Center </option>
  <option value='right'> Right </option>
</select>

Icon Position

<select id='iconPosition'>
  <option value='left'> Left </option>
  <option value='center' selected> Center </option>
  <option value='right'> Right </option>
</select>

<button id='tryPosition' class='ca-btn ca-btn-info'> Try </button>

</div>

```javascript
@(buttonsPosition)
```

</div>
