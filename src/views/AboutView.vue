<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
  </div>
  <!-- <van-button type="primary">主要按钮</van-button> -->
  <div>
    <van-swipe class="my-swipe" autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
  <van-tabs v-model:active="active"  sticky>
  <van-tab title="海报"> 
    <van-list
  v-model:loading="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell v-for="item in list1" :key="item" :title="item" >
    
  </van-cell>
</van-list>
</van-tab>
  <van-tab title="课程">
    <van-list
  v-model:loading="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>

  <van-cell v-for="item in list" :key="item" :title="item" />
</van-list>
</van-tab>
  <van-tab title="标签 3">
    <van-list
  v-model:loading="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell v-for="item in list" :key="item" :title="item" />
</van-list>
</van-tab>
  <van-tab title="标签 4">
    <div id="test" @click="test1()">
    <img src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" />
  </div>
</van-tab>
</van-tabs>
 
  <div>
    <van-image-preview v-model:show="show" :images="images" @change="onChange">
  <template v-slot:index>第{{ index + 1  }}页</template>
</van-image-preview>
    <van-form @failed="onFailed">
      <van-cell-group inset>
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          v-model="value1"
          name="pattern"
          placeholder="正则校验"
          :rules="[{ pattern, message: '请输入正确内容' }]"
        />
        <!-- 通过 validator 进行函数校验 -->
        <van-field
          v-model="value2"
          name="validator"
          placeholder="函数校验"
          :rules="[{ validator, message: '请输入正确内容' }]"
        />
        <!-- 通过 validator 返回错误提示 -->
        <van-field
          v-model="value3"
          name="validatorMessage"
          placeholder="校验函数返回错误提示"
          :rules="[{ validator: validatorMessage }]"
        />
        <!-- 通过 validator 进行异步函数校验 -->
        <van-field
          v-model="value4"
          name="asyncValidator"
          placeholder="异步函数校验"
          :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
 
    
  </div>
</template>
<script>
import { Button, Swipe, SwipeItem, Form, Field, CellGroup,ImagePreview ,showImagePreview ,Tab, Tabs,List,Cell,Col, Row,Collapse, CollapseItem } from "vant";
import {ref} from "vue";
// showImagePreview({
//   images: [
//     'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
//     'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
//   ],
//   closeable: true,
// });
export default {
  // name: "HomeView",
  
  components: {
    // HelloWorld,
    [Button.name]: Button,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Form.name]: Form,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [ImagePreview.name]: ImagePreview, 
    [showImagePreview.name]: showImagePreview,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [List.name]: List,
    [Cell.name]: Cell,
    [Col.name]: Col,
    [Row.name]: Row,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
  },  
  
  data() {
    return {
      show: false,
      index: 0,
      list1:[]
      // images: [
      //   'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
      //   'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg'
      // ],
    };
  },
  setup() {
    const activeNames = ref([]);
    const list = ref([3,3,3,3,,33,3,3,3,6,5,5,5,2,2,2,2,2,5,]);
    const loading = ref(false);
    const finished = ref(false);

    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          list.value.push(list.value.length + 1);
          console.log(list.value.length)
          console.log(list.value)
        }

        // 加载状态结束
        loading.value = false;

        // 数据全部加载完成
        if (list.value.length >= 40) {
          finished.value = true;
        }
      }, 1000);
    };

    return {
      list,
      onLoad,
      loading,
      finished,
      activeNames
    };
  },
  mounted(){
    
//     showImagePreview({
//   images: [
//     'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
//     'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
//   ],
//   closeable: true,
// });
  },
  methods: {
    
  test1(){
    showImagePreview({
  images: [
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
  ],
  closeable: true,
  // onClose() {
  //   showToast('关闭');
  // },
});
  },
    onChange(index) {
      this.index = index;
    }
  }
};
</script>
