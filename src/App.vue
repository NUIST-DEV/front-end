<template>
    <a-layout id="app">
        <a-layout-header class="header">
            <div class="logo" />
            <a-menu theme="dark" mode="horizontal" :default-selected-keys="['1']" :style="{ lineHeight: '64px' }">
                <a-menu-item key="1">
                    实例管理
                </a-menu-item>
                <a-menu-item key="2">
                    统计信息
                </a-menu-item>
                <a-menu-item key="3">
                    系统管理
                </a-menu-item>
            </a-menu>
        </a-layout-header>
        <a-layout>
            <a-layout-sider width="200" style="background: #fff">
                <a-menu mode="inline" :default-selected-keys="['1']" :default-open-keys="['sub1']"
                    :style="{ height: '100%', borderRight: 0 }">
                    <a-sub-menu key="sub1">
                        <span slot="title">
                            <a-icon type="folder" />分类模型
                        </span>
                        <a-menu-item key="1">
                            <router-link to="/">工件划痕检测</router-link> 
                        </a-menu-item>
                        <a-menu-item key="2">
                            <router-link to="/home">布料瑕疵分类</router-link>
                        </a-menu-item>
                        
                    </a-sub-menu>
                    <a-sub-menu key="sub2">
                        <span slot="title">
                            <a-icon type="laptop" />物体识别模型
                        </span>
                        <a-menu-item key="5">
                            <router-link to="/yolov5">通用物体识别</router-link>
                        </a-menu-item>
                        <a-menu-item key="6">
                            标签识别
                        </a-menu-item>
                        <a-menu-item key="7">
                            电路故障点检测
                        </a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>
            <a-layout style="padding: 0 24px 24px">
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item>主页</a-breadcrumb-item>
                    <a-breadcrumb-item>模型列表</a-breadcrumb-item>
                    <a-breadcrumb-item>工件瑕疵检测</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
                    <router-view></router-view>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-layout>
</template>
<script lang="ts">
import HelloMl from "./components/test/hello-ml.vue";
import { Component, Vue } from "vue-property-decorator";
import VueRouter from "vue-router";

export default class App extends Vue  {
    collapsed = false
};
</script>
  
<style>
#components-layout-demo-top-side-2 .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
}
#app,body {
    height: 100%;
}

</style>
  