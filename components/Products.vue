<template>
  <div class="bg-white pt-10 pb-20">
    <div class="grid max-w-7xl mx-auto pt-10 pb-10">
      <h2
        class="text-3xl tracking-tight font-extrabold text-gray-600 sm:text-4xl mx-4"
      >
        Products
      </h2>
    </div>
    <div
      class="max-w-7xl inline-block mx-auto mt-6 pt-5 grid gap-4 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-8"
    >
      <div
        v-for="product of data"
        :key="product.id"
        class="grid justify-center w-full bg-white shadow-lg h-full pb-10"
      >
        <div class="grid grid-cols-1 w-full justify-center">
          <img
            class="w-full aspect-auto object-none object-center"
            :src="product.imageUrl"
          />
          <h2 class="grid text-center text-2xl">
            {{ product.name }}
          </h2>
        </div>
        <div class="grid place-content-center mt-3">
          <router-link
            :to="{
              path: '/productsub',
              query: { id: `${product._id}`, name: `${product.name}` },
              params: { ProductId: `${product.id}` },
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
</template>
<script>
var productList = [];
export default {
  components: {},
  data() {
    return {
      data: [],
    };
  },
  methods: {
    async getProduct() {
      try {
        const { data: products } = await useAsyncData(
          "Product-list-" + Math.random,
          () =>
            $fetch("/api/product/getall", {
              initialCache: false,
              method: "post",
              body: {},
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
    this.getProduct();
  },
};
</script>

//
<script setup>
// const { data: products } = await useAsyncData(
//   "Product-list-" + Math.random,
//   () =>
//     $fetch("/api/product/getall", {
//       initialCache: false,
//       method: "post",
//       body: {},
//     })
// );
// // const { data: products } = await useFetch("/api/product/getall", {
// //   method: "post",
// //   body: {},
// // });
// onMounted(() => {
//   debugger;
//   getProduct();
//   productList = products._rawValue.documents;
//   console.log("Members", productList);
// });
//
</script>