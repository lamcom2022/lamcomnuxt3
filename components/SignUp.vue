<template>
    <section v-if="isSignUpFormVisible" class="z-50 fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title"
        role="dialog" aria-modal="true">
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute inset-0" aria-hidden="true"></div>
            <div class="absolute inset-y-0 right-0 pl-10 max-w-full flex">
                <div class="max-w-4xl">
                    <div class="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-2xl">
                        <div class="flex-1 h-0 overflow-y-auto">
                            <header
                                class="space-y-1 py-6 px-4 bg-gradient-to-r from-primary-900 via-secondary-700 to-primary-900 sm:px-6">
                                <div class="flex items-center justify-between space-x-3">
                                    <h2 class="text-lg leading-7 font-medium text-white">
                                        New Registration
                                    </h2>
                                    <div class="h-7 flex items-center">
                                        <button v-on:click="isSignUpFormVisible = false" aria-label="Close panel"
                                            class="text-primary-200 hover:text-white transition ease-in-out duration-150">
                                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <!-- <p class="text-sm leading-5 text-white">
                                        The information that you have provided in this registration form is used by
                                        us so that we can contact you regarding classes and events, as well as
                                        ensuring that we are able to contact you in an emergency.Information collected
                                        by this form will be held for a limited time in accordance with GDPR.
                                    </p> -->
                                </div>
                            </header>
                            <div class="flex-1 flex flex-col justify-between">
                                <div class="px-4 divide-y divide-gray-200 sm:px-6">
                                    <div class="space-y-6 pt-6 pb-5">
                                        <form name="SignUp" id="SignUp" class="space-y-8" method="POST"
                                            @submit.prevent="SignUp" ref="frmSignUp">
                                            <input type="hidden" name="form-name" value="SignUp" />
                                            <div class="sm:overflow-hidden">
                                               
                                                <section aria-labelledby="shipping-heading" class="mt-10">

                                                    <div class="sm:col-span-6">
                                                        <h2 class="font-medium  text-blue-gray-900">
                                                           Registration</h2>

                                                    </div>
                                                    <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                                                        <div class="sm:col-span-6">
                                                            <label for="first_name"
                                                                class="block text-sm font-medium text-gray-700">Full
                                                                name *</label>
                                                            <div class="mt-1">
                                                                <input v-model="data.full_name" type="text"
                                                                    name="full_name" id="full_name"
                                                                    autocomplete="given-name"
                                                                    class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300" required>
                                                            </div>
                                                        </div>
                                                        <div class="sm:col-span-6">
                                                            <label for="Email"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Email *
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.email" type="text" id="email"
                                                                    name="email" autocomplete="name"
                                                                    class="py-3 px-4 flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        <div class="sm:col-span-6">
                                                            <label for="phone_number"
                                                                class="block text-sm font-medium text-gray-700">Phone
                                                                Number</label>
                                                            <div class="mt-1 relative">

                                                                <!--<div class="pl-40">-->
                                                                <input v-model="data.phone_number" type="text"
                                                                    name="phone_number" id="phone_number"
                                                                    autocomplete="tel"
                                                                    class="py-3 px-4 block w-full pl-5 focus:ring-green-500 focus:border-green-500 border-gray-300"
                                                                    placeholder="+1 (555) 987-6543">
                                                                <!--</div>-->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>

                                               
                                                
                                                <div class="sm:col-span-6 mt-10">
                                                    <div class="flex items-center">
                                                        <input id="terms" type="checkbox"
                                                            class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300" />
                                                        <label for="terms"
                                                            class="ml-2 block text-sm leading-5 text-gray-900">
                                                            I agree to
                                                            <a href="legal/tc"
                                                                class="font-medium text-green-600 hover:text-green-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                                                terms & conditions. </a>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex-shrink-0 px-4 py-4 space-x-4 flex justify-end">
                            <span class="inline-flex rounded-md shadow-sm">
                                <button type="button"
                                    class="py-2 px-4 border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                                    Reset
                                </button>
                            </span>
                            <span class="inline-flex rounded-md shadow-sm">
                                <button v-on:click="SignUp" type="submit"
                                    class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium  text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-primary-700 transition duration-150 ease-in-out">
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
//const config = useRuntimeConfig()
export default {
    components: {

    },
    data() {
        return {
            isSignUpFormVisible: false,
            data: { 'form-name': 'SignUp' },
            api: ""
        }
    },
    methods: {
        async SignUp(args) {
            try {
                let request = {}
                const { data: SignUp } = await useFetch("/api/signup", {
                    method: 'post', body: this.data
                })
                alert("Thank you for your enquiry! our customer success team will repond as soon as possible.")
                this.data = {}
                this.isSignUpFormVisible = !this.isSignUpFormVisible;
                //this.$toast.success("Thank you for your enquiry! our customer success team will repond as soon as possible.")
            } catch (error) {
                this.isSignUpFormVisible = !this.isSignUpFormVisible;
                alert(JSON.stringify(error))
                //this.$toast.error(JSON.stringify(error))
            } finally {

            }
        },
        handleSelectedInProduct(data) {
            this.data.product = data;
        },
        handleSelectedInCountryCode(data) {
            this.data.country_code = data;
        },

    },
    computed: {

    },
    mounted() {
        this.$toast.add({
            severity: "info",
            summary: "Info Message",
            detail: "Message Content",
            life: 10000,
        });
    },
    created() {
        useNuxtApp().$bus.$on('evtShowSignUp', (data) => {
            this.isSignUpFormVisible = true;
        });
    },
    beforeDestroy() {
        useNuxtApp().$bus.$off('evtShowSignUp');
    }
};
</script>
