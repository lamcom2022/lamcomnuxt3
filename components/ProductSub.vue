<template>
  <div class="bg-white pt-10 pb-20">
    <div class="grid max-w-7xl mx-auto pt-10 pb-10">
      <h2
        class="text-3xl tracking-tight font-extrabold text-gray-600 sm:text-4xl mx-4"
      >
        Cleaning Cloths
      </h2>
    </div>
    <div
      class="max-w-7xl inline-block mx-auto mt-6 pt-5 grid gap-4 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-8"
    >
      <div
        v-for="category of data"
        :key="category.id"
        class="grid justify-center w-full bg-white shadow-lg h-full pb-10"
      >
        <div class="grid grid-cols-1 w-full justify-center">
          <img
            class="w-full aspect-auto object-none object-center"
            :src="category.imageUrl"
          />
          <h2 class="grid text-center text-2xl">
            {{ category.name }}
          </h2>
        </div>
        <div class="grid place-content-center mt-3">
          <router-link
            :to="{
              path: '/cart',
              query: { id: `${category._id}` },
              params: { CategoryId: `${category._id}` },
            }"
          >
            <button
              class="w-24 h-12 rounded bg-gray-900 hover:bg-primary-900 text-white"
            >
              Shop Now
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="bg-white pt-10 pb-20">
    <div class="grid max-w-7xl mx-auto pt-10 pb-10">
      <h2
        class="text-3xl tracking-tight font-extrabold text-gray-600 sm:text-4xl mx-4"
      >
        Cleaning Cloths
      </h2>
    </div>
    <div
      v-for="product of data"
      :key="product._id"
      class="max-w-7xl inline-block mx-auto mt-6 pt-5 grid gap-4 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-8"
    >
      Glass Cloth 
      <div class="grid justify-center w-full bg-white shadow-lg h-full pb-10">
        <div class="grid grid-cols-1 w-full justify-center">
          <img
            class="w-full aspect-auto object-none object-center"
            :src="product.imageUrl"
          />
          <h2 class="grid text-center text-2xl">{{ product.name }}</h2>
          <p class="grid text-center text-xl text-gray-500">Rs. 250</p>
        </div>
        <div class="grid place-content-center mt-3">
          <router-link :to="{ path: '/cart' }">
            <button
              type="button"
              class="w-24 h-12 rounded bg-gray-900 hover:bg-primary-900 text-white"
            >
              Shop Now
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>  -->
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      data: [],
    };
  },
  methods: {
    async getCategory(value) {
      try {
        const { data: products } = await useAsyncData(
          "Category-list-" + Math.random(),
          () =>
            $fetch("/api/categories/getbyid", {
              initialCache: false,
              method: "post",
              body: value,
            })
        );
        this.data = products._rawValue.documents;
      } catch (error) {
        console.log(error);
      } finally {
      }
    },
  },
  mounted() {
    this.getCategory(this.$route.query.id);

  },
//   created() {
//     this.getCategory(this.$route.query.id);
//   },
};
</script>

<style></style>