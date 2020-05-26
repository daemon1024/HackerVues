<template>
  <div class="home">
    <Item v-for="story in stories" :key="story.id" :story="story" />
  </div>
</template>

<script>
// @ is an alias to /src
import Item from "@/components/Item.vue";

export default {
  name: "Home",
  components: {
    Item
  },
  data() {
    return {
      stories: this.$store.state.topStories
    };
  },
  created: function() {
    if (this.$store.state.topStories.length === 0)
      this.$store.dispatch("fetch_top_stories");
    console.log(this.stories);
  }
};
</script>
