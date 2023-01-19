import { defineStore } from 'pinia'

export const useStepStore = defineStore('steps', {
  state: () => ({
    steps: [
      {
        index: 1,
        title: 'Person Data',
        valid: false,
        fields: [
          {
            name: 'nome',
            type: 'text',
            label: 'Nome',
            placeholder: 'Digite seu nome',
          },
          {
            name: 'cpf',
            type: 'text',
            label: 'CPF',
            placeholder: 'Digite seu CPF',
          },
          {
            name: 'brthday',
            type: 'date',
            label: 'Birthday',
            placeholder: 'Digite sua data de nascimento',
          },
        ],
      },
      {
        index: 2,
        title: 'Address',
        fields: [
          {
            name: 'cep',
            label: 'CEP',
            type: 'text',
            placeholder: 'Digite seu cep',
          },
          {
            name: 'rua',
            label: 'Rua',
            type: 'text',
            placeholder: 'Digite sua rua',
          },
          {
            name: 'bairro',
            label: 'Bairro',
            type: 'text',
            placeholder: 'Digite seu bairro',
          },
          {
            name: 'cidade',
            label: 'Cidade',
            type: 'text',
            placeholder: 'Digite sua cidade',
          },
          {
            name: 'estado',
            label: 'Estado',
            type: 'list',
            values: [
              { value: 'MG', label: 'Minas Gerais' },
              { value: 'SP', label: 'São Paulo' },
              { value: 'RJ', label: 'Rio de Janeiro' },
              { value: 'ES', label: 'Espirito Santo' },
            ],
          },
          {
            name: 'pais',
            label: 'Pais',
            type: 'text',
            placeholder: 'Digite seu pais',
          },
        ],
      },
    ] as IStep[],
  }),

  actions: {
    validateStep(index: number) {
      const step = this.steps.find((step) => step.index == index)
      if (step) {
        step.valid = true
      }
    },
  },

  getters: {
    getNextStep: (state) => {
      return (index: number) => state.steps.find((step) => step.index == index)
    },
    isFirstStep: (state) => {
      return (index: number) => state.steps.find(Boolean)?.index == index
    },
    isLastStep: (state) => {
      return (index: number) => state.steps.at(-1)?.index == index
    },
  },
})

interface IStep {
  index: number
  valid: boolean
  title: string
  fields: IField[]
}

interface IField {
  name: string
  type: string
  label: string
  placeholder?: string
  values?: IOption[]
}

interface IOption {
  label: string
  value: string
}
