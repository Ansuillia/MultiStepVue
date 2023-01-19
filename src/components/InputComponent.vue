<template>
  <div>
    <label :for="name">{{ labelText }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :value="modelValue"
      @input="updateValue" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  type: String,
  placeholder: String,
  name: String,
  labelText: String,
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: any) => {
  emit('update:modelValue', event.target.value)
}
</script>
