## 迁移

在setup中使用ref做响应式的时候，一定要有一个方法对props的值做修改，否则不会做到响应式

```
<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      auroraName: ""
    }
  }
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <input type="text" v-model="auroraName" >
  <HelloWorld :user="auroraName" />
</template>

```

```
<script>
import { ref, onMounted, watch, toRefs } from 'vue'
export default {
  props: {
    user: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const repositories = ref([])
    const getUserRepositories = async () => {
      repositories.value = props.user
    }

    return {
      repositories,
      getUserRepositories
    }
  },
}
</script>

<template>
  <h1 class="aurora">这是直接传递的{{user}}</h1>
  <h2 :get="getUserRepositories()">这是SetUp的值{{repositories}}</h2>
</template>
```

在子组件中，如果我们只`{repositories}`，那么他不会做到响应式，我们必须要调用`getUserRepositories()`这个函数对repositories的值做修改