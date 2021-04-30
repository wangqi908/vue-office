import { createVNode, render } from 'vue'
import MessageConstructor from './index.vue'

let instance = {}
export function close () {
  const proxy = instance?.vm?.component?.proxy
  if (proxy) {
    proxy.visible = false
  }
}

const Message = function (opts) {
  if (typeof opts === 'string') {
    opts = {
      message: opts
    }
  }

  const options = opts

  const container = document.createElement('div')
  const vm = createVNode(MessageConstructor, options)

  if (vm.props) {
    vm.props.onDestroy = () => {
      render(null, container)
    }
  }
  close()
  instance = { vm }

  render(vm, container)
  if (container.firstElementChild) {
    document.body.appendChild(container.firstElementChild)
  }
}

Message.close = close
export default Message
