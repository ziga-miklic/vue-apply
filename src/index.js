const VueApply = {
  install(Vue) {
    Vue.directive('apply', {
      bind(el, binding, vnode) {
        let modifier = ''
        let indentation = 0
        let styles = binding.value || vnode.context.$options.style

        styles.split('\n').forEach(item => {
          const cleanedItem = item.trim()
          const itemIndentation = item.length - item.trimStart().length
          const isModifier = cleanedItem.slice(-1) === ':'

          // Reset modifier
          if (itemIndentation < indentation) {
            modifier = ''
          }

          if (isModifier) {
            // Set modifier, skip adding class
            modifier = cleanedItem
          } else if (cleanedItem) {
            // Apply class name to element
            el.classList.add(`${modifier}${cleanedItem}`)
          }

          // Set indentation
          if (indentation !== itemIndentation) {
            indentation = itemIndentation
          }
        })
      }
    })

    Vue.mixin({
      created() {
        this.addStyleProperties()
      },
      methods: {
        addStyleProperties() {
          // Makes the styles available in the template
          const { styles } = this.$options;

          if (styles) {
            Object.keys(styles).forEach((name) => {
              this[name] = styles[name]
            })
          }
        }
      }
    })
  }
}

export default VueApply;
