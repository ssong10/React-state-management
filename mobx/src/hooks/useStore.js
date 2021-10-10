import { userStore } from '../store/user'
import { themeStore } from '../store/theme'

const useStore = () => {
  return {
    userStore,
    themeStore
  }
}

export default useStore