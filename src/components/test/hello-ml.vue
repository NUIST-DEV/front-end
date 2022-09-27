<template>
    <div class="hello">
        <a-upload
            name="image"
            list-type="picture-card"
            :show-upload-list="false"
            action="/api/upload"
            :before-upload="beforeUpload"
            @change="handleChange"
            >
            <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
            <div v-else>
                <a-icon :type="loading ? 'loading' : 'plus'" />
                <div class="ant-upload-text">Upload</div>
            </div>
        </a-upload>
        <p>{{model_resp.result}}</p>
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
export default class HelloMl extends Vue {
    loading   = false;
    imageUrl  = '';
    imageName = '';
    modelName = 'ConvNeXt_tiny';
    model_resp = reactive({
      result:{}
    })

    handleChange(info: { file: { status: string; originFileObj: Blob; name:string }; }) {
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
      this.axios.post(`/api/ml/dispatch`,{
        model_name: this.modelName,
        image_name: this.imageName
      }).then((res) => {
        this.model_resp.result = res.data;
      }).catch((err) => {
        this.model_resp.result = err;
      });
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
