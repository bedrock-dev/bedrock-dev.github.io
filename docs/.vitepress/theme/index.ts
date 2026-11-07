import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import X from './components/X.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('x', X)
  }
}
