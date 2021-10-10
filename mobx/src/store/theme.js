import { observable } from 'mobx';

const themeStore = observable({
  theme: 'light',
  setTheme(theme) {
    this.theme = theme
  }
});

export { themeStore };