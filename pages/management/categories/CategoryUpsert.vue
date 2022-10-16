<template>
  <section
    v-if="isUpsertMemberVisible"
    class="fixed inset-0 overflow-hidden"
    aria-labelledby="slide-over-title"
    role="dialog"
    aria-modal="true"
  >
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0" aria-hidden="true"></div>
      <div class="absolute inset-y-0 right-0 pl-10 max-w-full flex">
        <div class="w-screen max-w-md">
          <div
            class="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl"
          >
            <div class="flex-1 h-0 overflow-y-auto">
              <header class="space-y-1 py-6 px-4 bg-gray-200 sm:px-6">
                <div class="flex items-center justify-between space-x-3">
                  <h2 class="text-lg leading-7 font-medium text-gray-700">
                    Category
                  </h2>
                  <div class="h-7 flex items-center">
                    <button
                      v-on:click="closeMemberPanel()"
                      aria-label="Close panel"
                      class="text-gray-600 hover:text-white transition ease-in-out duration-150"
                    >
                      <svg
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <p class="text-sm leading-5 text-gray-500">
                    Create or update Category
                  </p>
                </div>
              </header>
              <!--Progress bar (start)-->
              <div v-if="progress" class="flex-1 flex flex-col justify-between">
                <div class="space-y-6 pt-6 pb-5">
                  <div class="flex justify-center">
                    <span class="inline-flex">
                      <button
                        type="button"
                        class="inline-flex items-center px-6 py-3 text-base font-medium text-gray-600"
                      >
                        <!-- Heroicon name: solid/mail -->
                        <svg
                          class="-ml-1 mr-3 h-5 w-5 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <!--Progress bar (end)-->
              <!--alert message (start)-->
              <!--<Alert type="success w-full">Member Member has been saved successfully!...</Alert>-->
              <!--alert message (start)-->
              <div
                v-if="!progress"
                class="flex-1 flex flex-col justify-between"
              >
                <div class="px-4 divide-y divide-gray-200 sm:px-6">
                  <div class="space-y-6 pt-6 pb-5">
                    <form
                      name="frmCategory"
                      id="frmCategory"
                      class="space-y-8 divide-y divide-gray-200"
                      @submit.prevent="SaveAndUpdate"
                    >
                      <div class="sm:overflow-hidden">
                        <div class="bg-white space-y-6">
                          <div
                            class="grid grid-cols-1 gap-y-3 gap-x-4 sm:grid-cols-6"
                          >
                            <div class="sm:col-span-6">
                              <h2
                                class="text-xl font-medium text-blue-gray-900"
                              >
                                Category Information
                              </h2>
                            </div>

                            <div class="sm:col-span-6">
                              <label
                                for="branchNameEnglish"
                                class="block text-sm font-medium text-gray-700"
                                >Name <span class=" text-red-900">*</span></label
                              >
                              <div class="mt-1">
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  v-model="data.name"
                                  autocomplete="name"
                                  required
                                  class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300"
                                />
                              </div>
                              <label v-if='isName == true' class="ml-2 block text-sm leading-5 text-red-900">
                                  {{ error.name }}
                              </label>
                            </div>
                            <div class="sm:col-span-6">
                              <label
                                for="branchNameEnglish"
                                class="block text-sm font-medium text-gray-700"
                                >Price<span class=" text-red-900">*</span></label
                              >
                              <div class="mt-1">
                                <input
                                  type="text"
                                  id="price"
                                  name="price"
                                  v-model="data.price"
                                  autocomplete="price"
                                  v-on:change ="priceValidation"
                                  required
                                  class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300"
                                />
                              </div>
                              <label v-if='isPrice == true' class="ml-2 block text-sm leading-5 text-red-900">
                                  {{ error.price }}
                              </label>
                            </div>
                            <div class="sm:col-span-6">
                              <label
                                for="branchNameEnglish"
                                class="block text-sm font-medium text-gray-700"
                                >Discount</label
                              >
                              <div class="mt-1">
                                <input
                                  type="text"
                                  id="discount"
                                  name="discount"
                                  v-model="data.discount"
                                  autocomplete="discount"
                                  class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300"
                                />
                                <label v-if='isDiscount == true' class="ml-2 block text-sm leading-5 text-red-900">
                                  {{ error.discount }}
                              </label>
                              </div>
                            </div>
                            <div class="sm:col-span-6">
                              <label
                                for="description"
                                class="block text-sm font-medium text-gray-700"
                                >Description</label
                              >
                              <div class="mt-1">
                                <input
                                  type="text"
                                  id="description"
                                  name="description"
                                  v-model="data.description"
                                  autocomplete="description"
                                  class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300"
                                />
                              </div>
                            </div>
                            <div class="sm:col-span-6">
                              <label
                                for="imageUrl"
                                class="block text-sm font-medium text-gray-700"
                                >Image Url<span class=" text-red-900">*</span></label
                              >
                              <div class="mt-1">
                                <input
                                  type="text"
                                  id="imageUrl"
                                  name="imageUrl"
                                  v-model="data.imageUrl"
                                  autocomplete="imageUrl"
                                  required
                                  class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300"
                                />
                              </div>
                              <label v-if='isImageUrl == true' class="ml-2 block text-sm leading-5 text-red-900">
                                  {{ error.imageUrl }}
                              </label>
                            </div>
                            <div class="sm:col-span-6">
                              <label  class="block text-sm font-medium text-gray-700">
                                  Product<span class=" text-red-900">*</span>
                              </label>
                              <div class="mt-1">
                                <select  v-model="selected"   class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300 ">
                                  <option value="">Choose</option>
                                  <option
                                    v-for="option in product"
                                    v-bind:key="option._id"
                                    :value="option._id"
                                  >
                                    {{ option.name }}
                                  </option>
                                </select>
                                <label v-if='isProduct == true' class="ml-2 block text-sm leading-5 text-red-900">
                                  {{ error.product }}
                                </label>
                                <span>Selected: {{ selected }}</span>
                                
                                <!-- <Dropdownlist
                                  v-model="data.product"
                                  @selected_item="handleSelectedInMemberStatus"
                                  name="product"
                                  label="product"
                                  :data="{
                                    data: [
                                      { code: 'true', name: 'Active' },
                                      { code: 'false', name: 'In-active' },
                                    ],
                                  }"
                                  :selected_value="data.product"
                                /> -->
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="w-full flex-shrink-0 px-4 py-4 space-x-4 flex justify-end"
            >
              <span class="inline-flex rounded-md shadow-sm">
                <button
                  v-on:click="resetForm"
                  type="button"
                  class="py-2 px-4 border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                >
                  Reset
                </button>
              </span>
              <span class="inline-flex rounded-md shadow-sm">
                <button
                  v-on:click="upsertCategory"
                  type="submit"
                  class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:border-primary-700 focus:shadow-outline-primary active:bg-primary-700 transition duration-150 ease-in-out"
                >
                  Save
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/**
 * MemberUpsert.vue
 *
 * @description :: [sails._s.capitalize(table) ] form panel to handle Add New & Edit. Panel visible and hidden managed thru event subscription.
 *                 Additional events published to handle custom functions post "Save" operation.
 *
 * @author      :: Zynobot
 * @help        ::
 *
 * Created at   :: Sun Feb 27 2022 11:48:01 GMT-0500 (Eastern Standard Time)
 * Modified at  :: Sun Feb 27 2022 11:48:01 GMT-0500 (Eastern Standard Time)
 */
import { Calendar, DatePicker } from "v-calendar";

export default {
  components: {
    Calendar,
    DatePicker,
  },
  data() {
    return {
      isUpsertMemberVisible: false,
      data: {},
      product: {},
      api: "",
      date: new Date(),
      progress: false,
      selected_value: this.selected_value,
      selected:'',
      error: {},
      isName: false,
      isPrice: false,
      isDiscount: false,
      isImageUrl: false,
      isProduct: false,
      updateorsave: 0,
    };
  },
  methods: {
    priceValidation(){
      //alert(this.data.price)
      
      regex = new Regex("[0-9]");

      if (/^[0-9]+$/.test(this.data.price))
      { 
          alert("true")
      }else { alert("false")}
    },
    validation(){
      let isValidate = true;
      if (this.data.name == undefined || this.data.name =='' || this.data.name == null){
          this.error.name = 'Please Enter Name'
          this.isName = true
          isValidate = false
        }
        if(this.data.price == undefined || this.data.price =='' || this.data.price == null){
          this.error.price = "Please Enter Price"
          this.isPrice = true
          isValidate = false
        }
        if(this.data.discount == undefined || this.data.discount =='' || this.data.discount == null){
          this.error.discount = "Please Enter Discount"
          this.isDiscount = true
          isValidate = false
        }
        if(this.data.imageUrl == undefined || this.data.imageUrl =='' || this.data.imageUrl == null){
          this.error.imageUrl = "Please Enter Image Url"
          this.isImageUrl = true
          isValidate = false
        }
        if(this.selected == undefined || this.selected =='' || this.selected == null){
          this.error.product = "Please Select Product"
          this.isProduct = true
          isValidate = false
        }
        return isValidate
    },
    async upsertCategory(args) {
      try {
        var isValidate = this.validation();
        if (isValidate == true) {
          this.data.categoryid = this.selected;//"632ed43224ee30c3ed4e8625";
          this.product.forEach((val, index) => {
          if (val._id === this.selected) {
              this.data.productName =  val.name;
            }
          });
          this.data.discountamount = Math.round(
            (this.data.price * this.data.discount) / 100
          );
          this.data.discountamount = this.data.price - this.data.discountamount;
          if (this.updateorsave == 0){
            //alert(this.data.id)
            const { data: category } = await useFetch("/api/categories/store", {
              method: "post",
              body: this.data,
            });
            alert("Category add successfully")
            
          }else{
            alert(this.data.id + "  " + this.data.name)
            //this.data.id ='6343ba11e326e25047b93d02'
            const { data: category } = await useFetch("/api/categories/update", {
              method: "put",
              body: this.data,
            });
            alert("Category updated successfully")
          }
          this.resetForm();  
          this.updateorsave =0;
        } else{
          return
        }
        
         
        // else {
        //   const { data: Member } = await useFetch(
        //     "/api/members/Member/" + this.data._id,
        //     {
        //       method: "put",
        //       body: this.data,
        //     }
        //   );
        // }
        
        this.isUpsertMemberVisible = !this.isUpsertMemberVisible;
        useNuxtApp().$bus.$emit("evtRefreshProductDatatable");
        this.$toast.success("Record saved successfully");
      } catch (error) {
        console.log(error);
        //this.$toast.error("Oops!Save failed...");
      } finally {
      }
    },
    async deleteCategory(value, name) {
      try {
        //Make sure to set the status and delete marker
        this.data.is_enabled = false;
        //end
        const { data: category } = await useFetch(
          "/api/categories/delete",
          {
            method: "delete",
            body: value,
          }
        );
        alert("Category " + name + " deleted successfully")
        useNuxtApp().$bus.$emit("evtRefreshProductDatatable");
        //this.$toast.success("Record has been deleted successfully");
      } catch (error) {
        //this.$toast.error("Oops! delete failed...");
      } finally {
      }
    },
    async getProduct() {
      try {
        const { data: products } = await useAsyncData(
          "Product-list-" + Math.random(),
          () =>
            $fetch("/api/product/getall", {
              initialCache: false,
              method: "post",
              body: {},
            })
        );
        this.product = products._rawValue.documents;
        
      } catch (error) {
        console.log(error);
      } finally {
      }
    },
    async bindMember() {
      try {
      } catch (error) {
        console.log(error);
      }
    },
    async closeMemberPanel() {
      this.data = {};
      this.isUpsertMemberVisible = !this.isUpsertMemberVisible;
    },
    handleSelectedInMemberCountry(data) {
      this.data.address.country = data;
    },
    handleSelectedInMemberMarkAsDelete(data) {
      this.data.mark_as_delete = data;
    },
    handleSelectedInMemberStatus(data) {
      this.data.is_enabled = data;
    },
    resetForm(){
      this.data.name = '';
      this.data.price = '';
      this.data.discount = '';
      this.data.description = '';
      this.data.imageUrl = '';
      this.selected = '';
    }
  },
  computed: {},
  mounted() {
    //this.$toast.success("Record saved successfully");
    this.getProduct();
    
  },
  created() {
    useNuxtApp().$bus.$on("evtUpsertCategory", (data) => {
      
      if (data !== undefined) {
        this.data.id = data._cells[0].data
        //alert(this.data.id)
        this.data.name = data._cells[1].data
        this.data.price = data._cells[2].data
        this.data.discount = data._cells[3].data;
        this.data.description = data._cells[4].data;
        this.data.imageUrl = data._cells[5].data;;
        this.selected = data._cells[6].data;
        this.updateorsave = 1;
      } else {
        //set default value
        // this.data = {
        //   location: { type: "Point", coordinates: [0.0, 0.0] },
        //   address: {
        //     street: "",
        //     apartment: "",
        //     city: "",
        //     district: "",
        //     state: "",
        //     country: "",
        //     postalCode: "",
        //   },
        // };
      }
      this.isUpsertMemberVisible = !this.isUpsertMemberVisible;
    });

    //2) Delete Member record and then rebind datatable
    useNuxtApp().$bus.$on("evtDeleteCategory", (data) => {
      //alert("evtDeleteCategory")
      if (data !== undefined) {
        this.deleteCategory(data._cells[0].data, data._cells[1].data);
      }
    });
  },
  beforeDestroy() {
    useNuxtApp().$bus.$off("evtUpsertCategory");
    useNuxtApp().$bus.$off("evtDeleteCategory");
  },
};
</script>