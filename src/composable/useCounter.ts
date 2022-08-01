export function useCounter(initivalue?: number) {
  const count = ref(initivalue ?? 0)

  const increment = () => count.value++
  const decrement = () => count.value--

  return { count, increment, decrement }
}
