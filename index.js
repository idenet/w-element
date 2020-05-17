import WButton from './src/components/button/button'
import WCheckbox from './src/components/checkbox/checkbox'

const components = [WButton, WCheckbox]

const WElement = {
  install: function(Vue) {
    components.forEach((component) => {
      Vue.component(component.name, component)
    })
  },
}

export default WElement
