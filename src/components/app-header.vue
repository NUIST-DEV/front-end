<template>
    <div class="header">头部</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class AppHeader extends Vue {
    
}
</script>

<style scoped>
    .header {
        background-color: #f1f1f1;
        text-align: center;
    }
</style>
