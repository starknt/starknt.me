import { render } from '@testing-library/vue'
import App from '~/App.vue'

test('App component', () => {
  const { getByText } = render(App)

  expect(getByText('Vue Counter')).toBeDefined()
})
