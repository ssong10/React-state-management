import { observable } from 'mobx';

const userStore = observable({
  user: null,
  setUser(user) {
    this.user = user
  },
  setUserName(name){
    if (this.user) {
      this.user.name = name
    }
  },
  setUserNumber(number) {
    if (this.user) {
      this.user.number=number
    }
  }
});

export { userStore };