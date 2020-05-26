export default {
  fetch_top_stories: async ({ commit }) => {
    const res = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    );
    let data = await res.json();
    data = data.slice(0, 25);
    data.forEach(async (element) => {
      const res = await fetch(
        "https://hacker-news.firebaseio.com/v0/item/" + element + ".json"
      );
      let data = await res.json();
      commit("APPEND_TOP_STORY", data);
    });
  },
};
