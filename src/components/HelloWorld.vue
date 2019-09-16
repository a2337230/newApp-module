<template>
  <div class="hello">
    <!-- 滑块验证码 -->
    <p>滑块验证码</p>
    <side-code></side-code>
    <p>上传图片</p>
    <div class="upImg">
      <upload-img @FileImgPath="FileImgPath"></upload-img>
      <upload-img @FileImgPath="FileImgPath"></upload-img>
      <upload-img @FileImgPath="FileImgPath"></upload-img>
    </div>
    
    <p>视频组件</p>
    <div class="video-input">
      <input type="text" placeholder="请输入阿里云视频ID" v-model="videoId">
      <button @click="playVideo">愉快的播放吧</button>
    </div>
    <div class="video" style="width: 100%; height: 4rem; margin-top: .3rem;">
      <video-box :VideoId="videoId" :key="resizeTime"></video-box>
    </div>
    
  </div>
</template>

<script>
import SideCode from './SideCode'
import UploadImg from './UploadImg'
import VideoBox from './Video'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      resizeTime: String(new Date()),
      videoId: ''
    }
  },
  mounted () {
    window.onresize = () => {
      this.resizeTime = String(new Date())
    }
  },
  methods: {
    // 图片上传成功地址
    FileImgPath (url, allUrl) {
      console.log('相对路径' + url, '绝对路径' + allUrl)
    },
    playVideo () {
      this.resizeTime = String(new Date())
    }
  },
  components: {
    SideCode,
    UploadImg,
    VideoBox
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
.upImg {
  display: flex;
  justify-content: space-between;
}
</style>
