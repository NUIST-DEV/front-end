<template>
    <div>
        <h3>Test</h3>
        <AnchorImagebox :image="image" :bboxes="bbox" />
        <h3>Test</h3>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AnchorImagebox from "../anchor-imagebox.vue";


@Component({
    components: {
        AnchorImagebox
    }
})
export default class TestAnchor extends Vue {
    
    image = 'https://www.w3schools.com/howto/img_fjords.jpg';
    bbox = [
        {
            x1: 100,
            y1: 100,
            x2: 200,
            y2: 200,
            label: 'test1',
            color: 'red'
        },
        {
            x1: 0,
            y1: 0,
            x2: 100,
            y2: 100,
            label: 'test2',
            color: 'blue'
        },
        {
            x1: 200,
            y1: 200,
            x2: 300,
            y2: 300,
            label: 'test3',
            color: 'green'
        }
    ]
}
</script>

<style lang="scss" scoped>

</style>