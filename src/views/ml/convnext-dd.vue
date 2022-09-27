<template>
    <div>
        <h2>ConvNeNt-Tiny Defect Dection Test Page</h2>
        <p>输入图片</p>
        <a-upload name="image" list-type="picture-card" :show-upload-list="false" action="/api/upload"
            :before-upload="beforeUpload" @change="handleChange">
            <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
            <div v-else>
                <a-icon :type="loading ? 'loading' : 'plus'" />
                <div class="ant-upload-text">Upload</div>
            </div>
        </a-upload>
        <p>Hub Reply:</p>
        <p>{{model_resp.result}}</p>
        <a-icon class="icon-big" :class="test_success?'ok':'broken'" v-if="test_done" :type="test_success?'check-circle':'warning'"></a-icon>
        <a-icon class="icon-big" v-if="has_submitted&&!test_done" type="loading"></a-icon>
        <p v-if="test_done">{{test_success?'测试通过':'测试失败'}}</p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { reactive } from "vue";
function getBase64(img: Blob, callback: (arg0: string | ArrayBuffer | null) => any) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

@Component
export default class ConvNeXt_DD extends Vue {
    loading = false;
    test_done = false;
    test_success = false;
    has_submitted = false;
    imageUrl = '';
    imageName = '';
    modelName = 'ConvNeXt_tiny';
    model_resp = reactive({
        result: {}
    })

    handleChange(info: { file: { status: string; originFileObj: Blob; name: string }; }) {
        if (info.file.status === 'uploading') {
            this.loading = true;
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                this.imageUrl = imageUrl as string;
                this.loading = false;
            });
            this.imageName = info.file.name;
            this.afterUpload();
        }
    }

    beforeUpload(file: { type: string; size: number; }) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            this.$swal({
                title: 'You can only upload JPG/PNG file!',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            //use swal
            this.$swal({
                title: 'Image must smaller than 2MB!',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
        return isJpgOrPng && isLt2M;
    }

    afterUpload() {
        this.has_submitted = true;
        this.axios.post(`/api/ml/dispatch`, {
            model: this.modelName,
            local_image: this.imageName
        }).then((res) => {
            this.model_resp.result = res.data;
            this.test_done = true;
            this.test_success = res.data.verbose == 'ok' ? true : false;
        }).catch((err) => {
            this.model_resp.result = err;
        }).finally(() => {
            this.has_submitted = false;
        });
    }
}
</script>

<style scoped>
.icon-big {
    font-size: 100px;
}

.broken {
    color: red;
}

.ok {
    color: green;
}
</style>