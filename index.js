import WButton from './src/components/button/button'
import WCheckbox from './src/components/checkbox/checkbox'
import WDate from './src/components/date/date'
import WInput from './src/components/input/input'
import WRadio from './src/components/radio/radio'
import WSwitch from './src/components/switch/switch'
import WSelect from './src/components/select/select'
import WForm from './src/components/form/form'

const components = [
  WButton,
  WCheckbox,
  WDate,
  WInput,
  WRadio,
  WSwitch,
  WSelect,
  WForm,
]

const WElement = {
  install: function(Vue) {
    components.forEach((component) => {
      Vue.component(component.name, component)
    })
  },
}

export default WElement
