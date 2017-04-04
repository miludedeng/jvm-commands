<template>
  <div class="detail">
    <div class="col-md-12 detail-panel">
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  name: 'detail',
  data () {
    return {
      content: ''
    }
  },
  mounted () {

    this.$http.get('https://www.cafetime.cc/jvmc/' + this.$route.query.name + '.md').then(response => {
      var temp = response.data;
      this.content = marked(temp);
    }, response => {
      alert("server error");
    })
  }
}
</script>

<style>
.detail-panel {
  background-color: #fff;
  min-height: 200px;
  margin-top: 20px;
  margin-bottom: 20px;
  -moz-box-shadow: 3px 3px 16px #333333;
  -webkit-box-shadow: 3px 3px 16px #333333;
  box-shadow: 3px 3px 16px #333333;
  -webkit-border-radius: 0.2em;
  border-radius: 0.2em;
  font-family: '微软雅黑';
  font-weight: 400;
}
.detail-panel strong {
  font-weight: 700;
}
table {
  margin-bottom: 20px
}
table th {
  border:1px solid #bbb;
  padding: 5px;
}
table td {
  border:1px solid #bbb;
  padding: 5px;
}
</style>
