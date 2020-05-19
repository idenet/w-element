import WButton from './src/components/button/button'
import WCheckbox from './src/components/checkbox/checkbox'
import WDate from './src/components/date/date'
import WInput from './src/components/input/input'
import WRadio from './src/components/radio/radio'

const components = [WButton, WCheckbox, WDate, WInput, WRadio]

const WElement = {
  install: function(Vue) {
    components.forEach((component) => {
      Vue.component(component.name, component)
    })
  },
}

export default WElement
