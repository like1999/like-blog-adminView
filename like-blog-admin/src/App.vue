<template>
  <div class="test">
  <el-upload
    class="el-upload"
    drag="true"
    multiple="true"
    :limit="3"
  >
    <el-icon class="el-icon--upload"><upload-filled/></el-icon>
  </el-upload>
  </div>
</template>

<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue';
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-upload{
  background-color: aqua;
  width: 200px;
  height: 200px;
}
.test{
  width: 500px;
  height: 500px;
  background-color: #42b983;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
