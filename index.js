import WButton from './src/components/button/button'
import WCheckbox from './src/components/checkbox/checkbox'
import WDate from './src/components/date/date'

const components = [WButton, WCheckbox, WDate]

const WElement = {
  install: function(Vue) {
    components.forEach((component) => {
      Vue.component(component.name, component)
    })
  },
}

export default WElement
