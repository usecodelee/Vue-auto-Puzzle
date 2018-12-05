<template>
<div>
   <h2>原始HTML</h2>
   <div id="main" v-loading="loading">
    <div style="background:red;width: 600px;" id="test" v-show="htmldom">
        <div style="background:green;">
            <div style="background:blue;">
                <div style="background:yellow;">
                    <div style="background:orange;">
                        33333333333333333333333333333333
                    </div>
                </div>

            </div>

        </div>
        </div>
    </div>
    <h2 class="toCanvas" v-show="tocanvash2"> <a href="javascript:void(0);" @click="tocanvas"> 转成canvas </a></h2>
    <h2 v-show="topic"><a href="javascript:void(0);" @click="toPic"> 转成图片 </a></h2>
    <div v-show="parmas">
        <label for="imgW">宽度:</label>
        <input type="number" value="" id="imgW" placeholder="默认是原图宽度" />
        <label for="imgH">高度:</label>
        <input type="number" value="" id="imgH" placeholder="默认是原图高度" />
        <label for="imgFileName">文件名:</label>
        <input type="text" placeholder="文件名" id="imgFileName" />
        <select id="sel">
            <option value="png">png</option>
            <option value="jpeg">jpeg</option>
            <option value="bmp">bmp</option>
        </select>
        <button id="save" @click="save"> 保存 </button>
    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
        topic:false,
        htmldom:true,
        parmas:false,
        tocanvash2:true,
        loading:false,
        canvasWidth:'',
        canvasHeight:'',
    }
  },
  methods:{
  tocanvas(){
    let _this=this;
    this.loading=true;
    let test=document.getElementById('test');
    let main=document.getElementById('main');
    // 调用html2canvas插件
    html2canvas(test,{useCORS:true,foreignObjectRenderign:true,allowTaint:false}).then(function(canvas) {
        // canvas宽度
        _this.canvasWidth = canvas.width;
        // canvas高度
        _this.canvasHeight = canvas.height;
        // 渲染canvas
        main.appendChild(canvas);
        _this.htmldom=false;
        _this.tocanvash2=false;
        _this.loading=false;
        // 显示‘转成图片’按钮
        _this.topic=true;
    });
  },
  toPic(){
      if(this.canvasWidth===''&&this.canvasHeight===''){
          this.$message({
              type:'error',
              message:'请先将html转为canvas'
          });
      }else{
          let canvas=document.getElementsByTagName('canvas')[0];
          // 调用Canvas2Image插件
          console.log(canvas2image);
          let img=canvas2image.convertToImage(canvas,this.canvasWidth,this.canvasHeight);
          // 渲染图片
          main.appendChild(img);
      }
  },
  save(){
    console.log(111);
  }
}
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
            margin: 0;
            padding: 0;
        }
        
        div {
            padding: 20px;
            border: 5px solid black;
        }
        
        h2 {
            background: #efefef;
            margin: 10px;
        }
        
        .toPic {
            display: none;
        }
        #test{
            margin: 0 auto;
        }
</style>
