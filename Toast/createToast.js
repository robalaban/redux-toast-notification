let uuid = 0

const defaultOptions = {
  color: '#2185d0'
}

export default function createToast (options) {
  return {
    ...defaultOptions,
    ...options,
    uuid: uuid++
  }
}
