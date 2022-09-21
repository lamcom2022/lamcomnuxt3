<template>
  <div class="h-screen flex overflow-hidden bg-gray-50">
    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:flex-shrink-0">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex flex-col h-0 flex-1 border-r border-gray-200 bg-gray-100">
          <ManagementLeftNavBar />
          <ManagementLeftNavProfileBar />
        </div>
      </div>
    </div>
    <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
      <div class="flex-1 relative z-0 flex overflow-hidden">
        <main class="flex-1 flex overflow-hidden">
          <div class="flex-1 flex flex-col overflow-y-auto xl:overflow-hidden">
            <nav aria-label="Breadcrumb" class="bg-white border-b border-blue-gray-200 xl:hidden">
              <div class="max-w-3xl mx-auto py-3 px-4 flex items-start sm:px-6 lg:px-8">
                <a href="#" class="-ml-1 inline-flex items-center space-x-3 text-sm font-medium text-blue-gray-900">
                  <!-- Heroicon name: solid/chevron-left -->
                  <svg class="h-5 w-5 text-blue-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Profile information</span>
                </a>
              </div>
            </nav>

            <div class="flex-1 flex xl:overflow-hidden">
              <!-- Secondary sidebar (Start)-->
             <ManagementLeftNavSecondary :data="lefNavLinks.navAccount" :api="api"/>
              <!-- Secondary sidebar (End)-->

              <div class="flex-1 xl:overflow-y-auto">
                 <!--<UsersPageHeader heading="Users Management" showbutton="true" guide="Search
                                for Users data" addClickEvent="evtUpsertUsers" />
                                <UsersSearch heading="" />-->
                <div class="max-w-5xl">
                  <!-- Main content (start)-->

                  <!-- Profile display (start)-->
                 
                  <div class="space-y-8 divide-y divide-gray sm:space-y-5 pt-2">
                    <div class="md:flex md:items-center md:justify-between">
                      <h2 class="text-xl font-medium text-blue-gray-900 mx-4">Profile information</h2>
                      <p class="mt-1 max-w-2xl text-sm text-gray-500"></p>
                      <div class="mt-4 flex md:mt-0 md:ml-4">
                        <button @click="useNuxtApp().$bus.$emit('evtUpsertUsers')" type="submit" class="bg-primary-600 border border-transparent shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600">Edit</button>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <ProfileUpsert class="w-2/4 mx-4" />
                  <!-- Profile display (End)-->
                  <!-- Main content (End)-->
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <UsersUpsert />
  </div>
</template>
<script>
//import UsersPageHeader from '@/pages/management/UsersPageHeader.vue';
//import UsersSearch from '@/pages/management/UsersSearch.vue';
import UsersUpsert from '~~/pages/account/UsersUpsert.vue';
import ProfileUpsert from '~~/pages/account/ProfileUpsert.vue';
import lefNavLinks from '@/store/admin-navigation.json';

export default {
  layout: 'app',
  components: {
    //UsersPageHeader,
    //UsersSearch,
    UsersUpsert,
    ProfileUpsert
  },
  data() {
    return {
      user: {},
      api: '',
      lefNavLinks
    };
  },
  methods: {
    async getUser(email) {
      try {
        let api = 'users?email=' + email;
        const { data } = await this.$axios.get(api);
        console.log(JSON.stringify(data));
        //alert(JSON.stringify(data.data[0]))
        return (this.user = data.data[0]);
      } catch (error) {
        console.log(error);
      }
    },
  },
  async asyncData({ params }) {},
  created() {
    //this.getUser(this.$route.params.slug);
  },
};
</script>
<script setup>
definePageMeta({
  // layout: "admin",
})
</script>
