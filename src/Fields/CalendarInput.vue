<template>
    <div></div>
</template>

<script>
export default {
    name: 'vf-calendar-input',
    props: {
        id: String,
        field: Object,
        value: {
            type: Object,
            default: () => ({
            })
        }
    }
}
</script>
