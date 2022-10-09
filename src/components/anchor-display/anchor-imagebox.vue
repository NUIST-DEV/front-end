<template>
    <div class="anchor-imagebox">
        <div class="anchor-imagebox__image">
            <img :src="image" :alt="alt" />
        </div>
        <div class="anchor-imagebox__content" id="boxes">
            <BoudingBox :bboxData="box" v-for="box in bboxes"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { reactive } from "vue";
import BoudingBox from "./bouding-box.vue";


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
        BoudingBox
    }
})
export default class AnchorImageBox extends Vue {
    @Prop({ type: String, required: true }) image!: string;
    @Prop({ type: Array, required: true }) bboxes!: bboxData[];
    name = 'AnchorImageBox';
    alt = '';
    model_resp = reactive({
        result: {}
    })


    mounted() {

    }
}

</script>

<style scoped>
    /* .anchor-imagebox {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .anchor-imagebox__image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .anchor-imagebox__image img {

        object-fit: contain;
    } */
    .anchor-imagebox__content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .anchor-imagebox{
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .bbox {
        position: absolute;
    }
</style>