# vue-apply

> Currently very early in development. Don't use it in production.

This project adds a custom directive called `v-apply` that allows you to add utility class names in a more structured and DRY way.

## Installation

Import the library and use it as a Vue plugin to enable the functionality globally on all component:

```js
import Vue from 'vue'
import VueApply from 'vue-apply'

Vue.use(VueApply)
```

## Example (single)

```vue
<template>
  <h2 v-apply>Heading</h2>
</template>

<script>
export default {
  style: `
    text-sm
    mb-1
    md:
      text-base
      mb-2
    lg:
      text-xl
      mb-3
  `
}
</script>
```

This above code will render:

```html
<h2 class="text-sm mb-1 md:text-base md:mb-2 lg:text-xl lg:mb-3">Heading</h2>
```

## Example (multiple)

```vue
<template>
  <div>
    <h1 v-apply="heading">Heading</h1>
    <p v-apply="paragraph">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, necessitatibus!
    </p>
  </div>
</template>

<script>
export default {
  styles: {
    heading: `
      text-gray-900
      text-xl
      mb-3
    `,
    paragraph: `
      text-lg
      text-gray-600
      leading-relaxed
    `
  }
}
</script>

</script>
```

This above code will render:

```html
<h1 class="text-gray-900 text-xl mb-3">Heading</h1>
<p class="text-lg text-gray-600 leading-relaxed">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, necessitatibus!
</p>
```