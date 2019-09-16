<template>
  <div class="upload-img" :id="loadId">
    <!-- 上传图片 -->
    <span>✖</span>
    <p>上传</p>
    <!-- 上传成功显示图片 -->
    <img :src="imagePreviewUrl" alt="" v-show="imagePreviewUrl">
  </div>
</template>
<script>
import plupload from "plupload"
import $ from 'jquery'
export default {
  name: 'upload-img',
  props: {
    // 外部组件传入的图片
    defaultImg: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      // 父级ID
      loadId: 'uploadImg' + parseInt(Math.random() * 9999),
      imagePreviewUrl: '',
      // 图片上传配置-------上线之前需要修改
      aliossHost: 'https://img.meinianuniversity.com',
      serverHost: 'https://lms.meinianuniversity.com/AliyunOSS/GetOssSignature',
      aliossBucketFloder: 'AppUpLoad'
    }
  },
  mounted () {
    this.initialUploader()
    // 如果有默认图片 显示默认图片
    if (this.defaultImg) {
      this.imagePreviewUrl = this.defaultImg
    }
  },
  methods: {
    initialUploader () {
      var vm = this;
      vm.uploader = new plupload.Uploader({
        browse_button: vm.loadId,
        url: vm.aliossHost,
        multi_selection: true, // single file
        filters: {
          mime_types:vm.mime_types,
          max_file_size: "100mb",
          prevent_duplicates: false //不允许选取重复文件
        },
        resize:{
          width: vm.width,
          height:vm.height,
          crop: true,
          quality: 150,
          preserve_headers: true
        },
        init: {
          FilesAdded: function(up, files) {
            if (up.files.length > 1) {
              up.removeFile(up.files[0]);
            }
            vm.fileName = files[0].name;
            var Num = files[0].name.split(".");
            var type = Num[Num.length-1];
            vm.imageUrl = vm.jsonDateFormat() + "/" + Date.parse(new Date()) + Math.floor(Math.random() * 100000) + "." + type;
            vm.set_upload_param(up);
            vm.$emit('FilesAdded',true)
          },
          FileUploaded: function(up, file, info) {
            let index;
            if (info.status == 200) {
              // 全路径
              vm.imagePreviewUrl = vm.aliossHost + '/' + vm.aliossBucketFloder +'/' + vm.imageUrl; //上传成功后更新地址
              // 不带域名的地址
              vm.imageUrl = '/' + vm.aliossBucketFloder +'/' + vm.imageUrl
              // 输出给父组件
              vm.$emit('FileImgPath', vm.imageUrl, vm.imagePreviewUrl)
            } else {
              vm.$emit('FileUpError');
            }
          }
        }
      });
      vm.uploader.init();
    },
    set_upload_param(up,index) {
      var new_multipart_params;
      var vm = this;
      $.ajax({
        type: "get", 
        url: vm.serverHost,
        data:{dir:vm.aliossBucketFloder},
        async:false,
        success:function(res){
          if(res.Code==200){
            vm.index = index;
            var rdata = res.Data;
            new_multipart_params = {
              'key' : vm.aliossBucketFloder + "/" + vm.imageUrl,
              'policy' : rdata.policy,
              'OSSAccessKeyId' : rdata.accessid,
              'success_action_status' : "200",
              'signature' : rdata.signature
            };
            up.setOption({
              'url': rdata.host,
              'multipart_params': new_multipart_params
            });
            up.start();
          }
        }
      });
    },
    jsonDateFormat() {
      var date = new Date();
      var yyyy = date.getFullYear().toString();
      var mm = (date.getMonth() + 1).toString(); // getMonth() is zero-based
      var dd = date.getDate().toString();
      return yyyy + "/" + (mm[1] ? mm : "0" + mm[0]) + "/" + (dd[1] ? dd : "0" + dd[0]);
    }
  }
}
</script>
<style lang="css">
.upload-img {
  width: 1.8rem;
  height: 1.3rem;
  border: 1px dashed #848484;
  border-radius: .2rem;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #848484;
}
.upload-img span {
  font-size: .44rem;
  transform: rotate(45deg)
}
.upload-img p {
  font-size: .2rem;
  line-height: .4rem;
}
.upload-img img {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>