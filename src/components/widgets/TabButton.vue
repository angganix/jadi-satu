<template>
    <RouterLink
        :to="to"
        :class="['flex flex-col justify-center items-center text-xs hover:bg-lime-50 p-1 hover:text-lime-700', isActive ? 'text-lime-700 bg-lime-50' : '']"
    >
        <slot></slot>
        <span>{{ text }}</span>
    </RouterLink>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { computed, defineProps } from 'vue';

const { currentRoute } = useRouter();

const props = defineProps({
    to: String,
    text: String
});

const isActive = computed(() => {
    return props?.to === currentRoute?.path 
})

</script>