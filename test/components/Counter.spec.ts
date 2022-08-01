import { fireEvent, render } from '@testing-library/vue'
import Counter from '~/components/Counter.vue'

test('Counter component', async () => {
  const { getByText } = render(Counter)

  expect(getByText('0')).toBeDefined()

  const incementBtn = getByText('increment')

  await fireEvent.click(incementBtn)

  expect(getByText('1')).toBeDefined()

  const decementBtn = getByText('decrement')

  await fireEvent.click(decementBtn)

  expect(getByText('0')).toBeDefined()
})
