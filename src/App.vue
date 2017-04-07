<template>
<div id="app" class="container">
  <ul class="idx-list">
    <li class="col-md-3 search">
      <div class="input-group">
        <span class="input-group-addon" id="basic-addon1"><i class="glyphicon glyphicon-search"></i></span>
        <input type="text" class="form-control" placeholder="Search" v-model="searchKey" aria-describedby="basic-addon1">
      </div>
    </li>
    <li v-if="$route.path === '/detail'" class="col-md-3 tag ">
      <span>
        <router-link :to="{path: '/'}" class="btn-back"><i class="glyphicon glyphicon-arrow-left"></i>&nbsp;&nbsp;返回</router-link>
      </span>
    </li>
    <li v-if="$route.path === '/detail'" class="col-md-12">
      <router-view></router-view>
    </li>
    <li v-if="$route.path !== '/detail'" v-for="item in tempItems" class="col-md-3 tag">
      <span>
        <router-link :to="{path: '/detail', query: {name: item}}">{{item}}</router-link>
      </span>
    </li>
  </ul>
</div>
</template>

<script>
import data from "./data.js"
import router from "./router"
export default {
  name: 'app',
  data() {
    return {
      items: data.items,
      searchKey: '',
      tempItems: data.items
    }
  },
  watch: {
    searchKey (newVal, oldVal) {
      router.push({ path: '/' })
      if (!this.searchKey || this.searchKey.length <= 0) {
        this.tempItems = this.items
      }
      this.tempItems = new Array()
      for (var i = 0; i < this.items.length; i++){
        if(this.items[i].startsWith(this.searchKey)){
          this.tempItems.push(this.items[i]);
        }
      }
    }
  }
}
</script>

<style>
body {
  font-family: 'Lato', Calibri, Arial, sans-serif;
  background: #f4f4f4 url(./assets/bg.jpg);
  font-weight: 300;
  font-size: 15px;
  color: #333;
  overflow: scroll;
  overflow-x: hidden;
}

ul li {
  display: block;
}

.idx-list {
  padding-left: 0px;
}

.search div input {
  outline: none;
}

.search div span {
  background: #fff;
}

.search div {
  background: #fff;
  color: #5a5a5a;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  padding: 5px 10px;
  -moz-box-shadow: 3px 3px 16px #333333;
  -webkit-box-shadow: 3px 3px 16px #333333;
  box-shadow: 3px 3px 16px #333333;
  -webkit-border-radius: 0.2em;
  border-radius: 0.2em;
}

.tag span a {
  background: #fff;
  display: block;
  color: #5a5a5a;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  padding: 10px 20px;
  -moz-box-shadow: 3px 3px 16px #333333;
  -webkit-box-shadow: 3px 3px 16px #333333;
  box-shadow: 3px 3px 16px #333333;
  -webkit-border-radius: 0.2em;
  border-radius: 0.2em;
  text-decoration:none;
}

.tag span a:hover {
  background: #fc756f;
  color: #fff;
}

.search {
  margin-top: 20px;
}

.tag {
  margin-top: 20px;
}

.tag:last-child {
  margin-bottom: 20px;
}

.tag .btn-back {
  width: 80px;
  font-size: 14px;
  padding: 12px 15px;
}
</style>
