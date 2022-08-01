import { useCounter } from '~/composable/useCounter'

describe('useCount', () => {
  test('initalize', () => {
    const { count } = useCounter(1)

    expect(count.value).toEqual(1)
  })

  test('increment', () => {
    const { count, increment } = useCounter(0)

    increment()

    expect(count.value).toEqual(1)
  })

  test('decrement', () => {
    const { count, decrement } = useCounter(0)

    decrement()

    expect(count.value).toEqual(-1)
  })
})
