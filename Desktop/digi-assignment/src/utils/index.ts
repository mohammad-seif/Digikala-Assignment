export const debounce = <T extends (...params: any[]) => void>(
  cb: T,
  waitFor: number
) => {
  let timeoutId: ReturnType<typeof setTimeout>
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => cb.apply(this, args), waitFor)
  } as T
}
