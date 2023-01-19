import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state() {
    return {
      user: {} as IUser,
    }
  },

  actions: {
    setName(name: string) {
      this.user.name = name
      setLocalStorage(this.user)
    },
    setCpf(cpf: string){
      this.user.cpf = cpf
      setLocalStorage(this.user)
    },
  },
})

function setLocalStorage(user: IUser){
  localStorage.setItem('user', JSON.stringify(user))
}

interface IUser {
  cpf: string
  name: string
  birthday: Date
  email: string
}
