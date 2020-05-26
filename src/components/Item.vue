<template>
  <router-link :to="{ path: '/story/' + story.id }">
    <div>
      <h3>{{ story.title }}</h3>
      <ul>
        <li>Link: {{ story.url }}</li>
        <li>Score: {{ story.score }}</li>
      </ul>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Item",
  props: ["story"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a h3 {
  color: #42b983;
}
</style>
