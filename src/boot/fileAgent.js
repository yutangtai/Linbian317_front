// 目前沒用到
import VueFileAgent from 'vue-file-agent'
import VueFileAgentStyles from 'vue-file-agent/dist/vue-file-agent.css'

export default ({ Vue }) => {
  Vue.use(VueFileAgent)
}

export { VueFileAgentStyles }
