import WButton from './src/components/button/button'

const components = [WButton]

const WElement = {
  install: function(Vue) {
    components.forEach((component) => {
      Vue.component(component.name, component)
    })
  },
}

export default WElement
