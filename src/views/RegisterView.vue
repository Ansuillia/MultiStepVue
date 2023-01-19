<template>
  <div class="container mx-auto my-3 flex w-3/5 flex-col justify-center">
    <h1 class="text-center text-2xl font-semibold">{{ step?.title }}</h1>
    <div
      class="flex flex-row border-b-2 p-3"
      v-for="field in step?.fields"
      :key="field.name">
      <div class="flex w-1/5 items-center">
        <label class="mr-2 text-sm text-gray-600" :for="field.name">{{
          field.label
        }}</label>
      </div>
      <input
        v-if="field.type != 'list'"
        class="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
        :type="field.type"
        :placeholder="field.placeholder" />
      <select
        v-if="field.type == 'list'"
        class="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none">
        <option value="" disabled selected>Selecione o {{ field.name }}</option>
        <option
          v-for="option in field.values"
          :value="option.value"
          :key="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
    <div class="mx-auto my-5 flex w-2/5 flex-row">
      <button
        v-if="isFirstStep(index) == false"
        class="flex-1 rounded-l-md border-red-500 bg-red-400 py-1 px-5 text-lg text-white"
        @click="back">
        Back
      </button>
      <button
        v-if="isLastStep(index) == false"
        class="flex-1 rounded-r-md border-green-500 bg-green-400 py-1 px-5 text-lg text-white"
        @click="next">
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStepStore } from '@/stores/stepsStore'
import { ref } from 'vue'

const { getNextStep, isLastStep, isFirstStep } = useStepStore()

let index = 1
let step = ref(getNextStep(1))

function next() {
  index++
  step.value = getNextStep(index)
}

function back() {
  index--
  step.value = getNextStep(index)
}
</script>
