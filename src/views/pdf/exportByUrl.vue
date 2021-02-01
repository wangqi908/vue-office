<template>
  <div class="home">
    <input v-model="url" />
    <button @click="addPdf">打印指定页面</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      url: ''
    }
  },
  methods: {
    addPdf () {
      axios
        .post('http://localhost:3000/pdf', {
          url: this.url
        })
        .then(response => {
          console.log(response)
        })
    }
  }
}
</script>

<style>
.info-box {
  border: 2px solid rgb(207, 59, 59);
  padding: 20px;
  /* page-break-after: always; */
}

.img-box {
  border: 2px solid rgb(110, 33, 211);
  page-break-inside: avoid;
  background-color: #fff;
  margin: 10px;
  margin-bottom: 50px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  margin-bottom: 10px;
  font-size: 14px;
}
.img {
  width: 400px;
  height: auto;
}
</style>
