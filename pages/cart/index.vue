<template>
  <div>
    <Hero />
    <Cart />
    <SatisfyClients />

    <!-- <Testimonials /> -->
  </div>
</template>

<script setup>
definePageMeta({
  //colorMode: 'system',
  layout: "main",
});
const { data: color } = ref("white");
const { data: articles } = await useAsyncData("articles-list", () =>
  queryContent("articles")
    .only([
      "title",
      "description",
      "link",
      "coverimage",
      "author",
      "date",
      "_path",
      "tags",
      "type",
    ])
    .find()
);
</script>
<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    async getCategory(value) {
      try {
        const { data: products } = await useAsyncData(
          "Category-list-" + Math.random,
          () =>
            $fetch("/api/categories/getbyid", {
              initialCache: false,
              method: "post",
              body: value,
            })
        );
        debugger;
        this.data = products._rawValue.documents;
      } catch (error) {
        console.log(error);
      } finally {
      }
    },
  },

  created() {
    this.getCategory(this.$route.query.id);
  },
};
</script>