<template>
    <div @mouseenter="onMouseEnter" @mouseleave="onMouseLeave"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { reactive } from "vue";

type bboxData = {
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    label: string,
    color: string
}

@Component({
    components: {
    }
})
export default class BoundingBox extends Vue {
    @Prop({ type: Object, required: true }) bboxData!: bboxData;
    box : any = null;
    mounted() {
        //get the current div
        const box = this.$el as HTMLDivElement;
        this.box = box;
        box.style.position = 'absolute';
        box.style.top = this.bboxData.y1 + 'px';
        box.style.left = this.bboxData.x1 + 'px';
        box.style.width = (this.bboxData.x2 - this.bboxData.x1) + 'px';
        box.style.height = (this.bboxData.y2 - this.bboxData.y1) + 'px';
        box.style.border = '1px solid ' + this.bboxData.color;
        box.style.color = this.bboxData.color;
        box.style.textAlign = 'center';
        box.style.fontSize = '12px';
        box.style.fontWeight = 'bold';
        box.style.lineHeight = '12px';
        box.style.paddingTop = '2px';
        box.style.opacity = '0.5';
        box.innerText = this.bboxData.label;
    }

    onMouseEnter() {
        this.box.style.backgroundColor = this.bboxData.color;
    }
    
    onMouseLeave() {
        this.box.style.backgroundColor = 'transparent';
    }

}
</script>

<style scoped>
    
</style>