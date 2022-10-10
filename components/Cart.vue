<template>
  <div v-for="category of data" :key="category.id">
    <div
      v-if="category._id == this.$route.query.id"
      class="max-w-7xl mx-auto mt-16 my-16 lg:grid lg:grid-cols-2 md:flex md:flex-col"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <img :src="category.imageUrl" />
      </div>
      <div class="max-w-7xl mx-auto md:px-6 lg:px-8">
        <!-- {{ category._id }} --- {{ this.$route.query.id }} -->
        <div class="lg:text-left md:text-left">
          <h3 class="mt-2 text-xl md:text-xl font-bold mx-4">
            <!-- 100% Natural Cotton, Glass Cloth -->
            {{ category.description }}
          </h3>
          <p
            class="mt-5 text-lg text-gray-700 text md:text-left line-through mx-4"
          >
            <!-- M.R.P: ₹ 118.00 -->
            M.R.P: ₹ {{ category.price }}
            <!-- {{ this.data[0].price }} -->
          </p>
          <p
            class="mt-5 font-semibold text-secondary text-lg text-gray-700 text mx-4"
          >
            Price ₹ {{ category.discountamount }} ( {{ category.discount }}%)
          </p>
          <p
            class="mt-5 font-semibold text text-lg text-gray-700 text md:text-left mx-4"
          >
            Quantity
          </p>
          <a @click="handleMinus">- </a>
          <button class="rounded-lg border-2 w-16 h-12 mt-3 mx-4">
            {{ this.qty }}</button
          ><a @click="handlePlus">+ </a>
          <div class="flex">
            <router-link
              :to="{
                path: '/checkout',
                query: { id: `${category._id}`, _qty: `${this.qty}` },
                params: { CategoryId: `${category._id}` },
              }"
            >
              <button
                class="flex flex-col rounded-full text-white bg-gray-600 w-32 h-12 mt-3 py-2 mx-4"
              >
                Add to Cart
              </button>
            </router-link>
            <button
              class="flex flex-col rounded-full text border-2 w-32 h-12 mt-3 py-2 mx-4"
            >
              Buy Now
            </button>
          </div>
          <h3
            class="mt-2 sm:text-left md:text-lg font-semibold uppercase mt-3 mx-4"
          >
            Sold by M.K. Agencies
          </h3>
          <p
            class="mt-3 font-semibold text-base text-gray-400 text md:text-left uppercase mx-4"
          >
            Product ID : {{ category.categoryid }}
            <!-- XSHLILMU6 -->
          </p>
          <p
            class="mt-3 font-semibold text-base text-gray-700 text md:text-left capitalize mx-4"
          >
            Easy Return Policy
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      qty: 1,
    };
  },
  methods: {
    handlePlus() {
      this.qty = this.qty + 1;
      //alert("plus = " + this.qty);
    },
    handleMinus() {
      if (this.qty > 1) this.qty = this.qty - 1;
      //alert("plus = " + this.qty);
    },
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