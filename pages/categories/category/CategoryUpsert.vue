<template>
	<section v-if="isUpsertMemberVisible" class="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title"
		role="dialog" aria-modal="true">
		<div class="absolute inset-0 overflow-hidden">
			<div class="absolute inset-0" aria-hidden="true"></div>
			<div class="absolute inset-y-0 right-0 pl-10 max-w-full flex">
				<div class="w-screen max-w-md">
					<div class="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
						<div class="flex-1 h-0 overflow-y-auto">
							<header class="space-y-1 py-6 px-4 bg-gray-200 sm:px-6">
								<div class="flex items-center justify-between space-x-3">
									<h2 class="text-lg leading-7 font-medium text-gray-700">Member</h2>
									<div class="h-7 flex items-center">
										<button v-on:click="closeMemberPanel()" aria-label="Close panel"
											class="text-gray-600 hover:text-white transition ease-in-out duration-150">
											<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
													d="M6 18L18 6M6 6l12 12" />
											</svg>
										</button>
									</div>
								</div>
								<div>
									<p class="text-sm leading-5 text-gray-500">Create or update Member</p>
								</div>
							</header>
							<!--Progress bar (start)-->
							<div v-if="progress" class="flex-1 flex flex-col justify-between">
								<div class="space-y-6 pt-6 pb-5">
									<div class="flex justify-center">
										<span class="inline-flex">
											<button type="button"
												class="inline-flex items-center px-6 py-3 text-base font-medium text-gray-600">
												<!-- Heroicon name: solid/mail -->
												<svg class="-ml-1 mr-3 h-5 w-5 animate-spin"
													xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
													aria-hidden="true">
													<path class="opacity-75" fill="currentColor"
														d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
													</path>
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
							<div v-if="!progress" class="flex-1 flex flex-col justify-between">
								<div class="px-4 divide-y divide-gray-200 sm:px-6">
									<div class="space-y-6 pt-6 pb-5">
										<form name="frmMember" id="frmMember" class="space-y-8 divide-y divide-gray-200"
											@submit.prevent="SaveAndUpdate">
											<div class="sm:overflow-hidden">
												<div class="bg-white space-y-6">
													<div class="grid grid-cols-1 gap-y-3 gap-x-4 sm:grid-cols-6">
														<div class="sm:col-span-6">
															<h2 class="text-xl font-medium text-blue-gray-900">Member
																Information</h2>
														</div>

														<div class="sm:col-span-6">
															<label for="dob"
																class="block text-sm font-medium text-gray-700">
																Date of birth</label>
															<div class="mt-1">
																<DatePicker v-model="date">
																	<template v-slot="{ inputValue, inputEvents }">
																		<input class="bg-white border px-2 py-1 rounded"
																			:value="inputValue" v-on="inputEvents" />
																	</template>
																</DatePicker>
															</div>
														</div>
														<div class="sm:col-span-6">
															<label for="branchNameEnglish"
																class="block text-sm font-medium text-gray-700">Branch
																Name in English</label>
															<div class="mt-1">
																<input type="text" id="branchNameEnglish"
																	name="branchNameEnglish"
																	v-model="data.branchNameEnglish" autocomplete="name"
																	class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300" />
															</div>
														</div>
														<div class="sm:col-span-6">
															<label for="branchNameArabic"
																class="block text-sm font-medium text-gray-700">Branch
																Name Arabic</label>
															<div class="mt-1">
																<input type="text" id="branchNameArabic"
																	name="branchNameArabic"
																	v-model="data.branchNameArabic"
																	autocomplete="branchNameArabic"
																	class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300" />
															</div>
														</div>
														<div class="sm:col-span-6">
															<label for="branchCode"
																class="block text-sm font-medium text-gray-700">Branch
																Code</label>
															<div class="mt-1">
																<input type="text" id="branchCode" name="branchCode"
																	v-model="data.branchCode" autocomplete="branchCode"
																	class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300" />
															</div>
														</div>
														<div class="sm:col-span-6">
															<h2 class="text-xl font-medium text-blue-gray-900">Contact
																Information</h2>
														</div>
														<div class="sm:col-span-6">
															<label for="contactName"
																class="block text-sm font-medium text-gray-700">Person
																in-charge</label>
															<div class="mt-1">
																<input type="text" id="contactName" name="contactName"
																	v-model="data.contactName"
																	autocomplete="contactName"
																	class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300" />
															</div>
														</div>
														<div class="sm:col-span-6">
															<label for="contactEmail"
																class="block text-sm font-medium text-gray-700">Email</label>
															<div class="mt-1">
																<input type="text" id="contactEmail" name="contactEmail"
																	v-model="data.contactEmail"
																	autocomplete="contactEmail"
																	class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300" />
															</div>
														</div>
														<div class="sm:col-span-6">
															<label for="contactPhone"
																class="block text-sm font-medium text-gray-700">Phone</label>
															<div class="mt-1">
																<input type="text" id="contactPhone" name="contactPhone"
																	v-model="data.contactPhone"
																	autocomplete="contactPhone"
																	class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300" />
															</div>
														</div>
														<div class="sm:col-span-6">
															<label for="contactCell"
																class="block text-sm font-medium text-gray-700">Mobile</label>
															<div class="mt-1">
																<input type="text" id="contactCell" name="contactCell"
																	v-model="data.contactCell"
																	autocomplete="contactCell"
																	class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300" />
															</div>
														</div>
														<div class="sm:col-span-6">
															<h2 class="text-xl font-medium text-blue-gray-900">Address
																Information</h2>
														</div>

														<div class="sm:col-span-6">
															<label for="street"
																class="block text-sm font-medium text-gray-700">Street</label>
															<div class="mt-1">
																<input type="text" id="street" name="street"
																	v-model="data.address.street" autocomplete="street"
																	class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300" />
															</div>
														</div>

														<div class="sm:col-span-6">
															<label for="apartment"
																class="block text-sm font-medium text-gray-700">Apartment,
																suite, etc.</label>
															<div class="mt-1">
																<input type="text" id="apartment" name="apartment"
																	v-model="data.address.apartment"
																	class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300" />
															</div>
														</div>

														<div class="sm:col-span-6">
															<label for="city"
																class="block text-sm font-medium text-gray-700">City</label>
															<div class="mt-1">
																<input type="text" id="city" name="city"
																	autocomplete="city" v-model="data.address.city"
																	class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300" />
															</div>
														</div>
														<div class="sm:col-span-6">
															<label for="district"
																class="block text-sm font-medium text-gray-700">District/County</label>
															<div class="mt-1">
																<input type="text" id="district" name="district"
																	v-model="data.address.district"
																	autocomplete="district"
																	class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300" />
															</div>
														</div>
														<div class="sm:col-span-6">
															<label for="state"
																class="block text-sm font-medium text-gray-700">State/Province</label>
															<div class="mt-1">
																<input type="text" id="state" name="state"
																	v-model="data.address.state" autocomplete="state"
																	class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300" />
															</div>
														</div>
														<div class="sm:col-span-6">
															<Dropdownlist v-model="data.address.country"
																@selected_item="handleSelectedInMemberCountry"
																name="country" label="Country" :data="{
																	data: [
																		{ code: 'United States', name: 'United States' },
																		{ code: 'India', name: 'India' },
																		{ code: 'Saudi Arabia', name: 'Saudi Arabia' },
																		{ code: 'Japan', name: 'Japan' },
																	],
																}" :selected_value="data.address.country" />
														</div>

														<div class="sm:col-span-6">
															<label for="postalCode"
																class="block text-sm font-medium text-gray-700">Postal
																code</label>
															<div class="mt-1">
																<input type="text" id="postalCode" name="postalCode"
																	v-model="data.address.postalCode"
																	autocomplete="postalCode"
																	class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300" />
															</div>
														</div>

														<div class="sm:col-span-3">
															<label for="latitude"
																class="block text-sm font-medium text-gray-700">Latitude
															</label>
															<div class="mt-1">
																<input type="text" id="latitude" name="latitude"
																	v-model="data.location.coordinates[0]"
																	autocomplete="Latitude"
																	class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300" />
															</div>
														</div>
														<div class="sm:col-span-3">
															<label for="longitude"
																class="block text-sm font-medium text-gray-700">Longitude
															</label>
															<div class="mt-1">
																<input type="hidden" id="type" name="type"
																	v-model="data.location.type" />
																<input type="text" id="longitude" name="longitude"
																	v-model="data.location.coordinates[1]"
																	autocomplete="Longitude"
																	class="py-3 px-4 block w-full pl-5 focus:ring-primary-500 focus:border-primary-500 border-gray-300" />
															</div>
														</div>
														<div class="sm:col-span-6">
															<h2 class="text-xl font-medium text-blue-gray-900">
																Administration</h2>
														</div>

														<div class="sm:col-span-6">
															<Dropdownlist v-model="data.is_enabled"
																@selected_item="handleSelectedInMemberStatus"
																name="is_enabled" label="Status" :data="{
																	data: [
																		{ code: 'true', name: 'Active' },
																		{ code: 'false', name: 'In-active' },
																	],
																}" :selected_value="data.is_enabled" />
														</div>
														<div class="sm:col-span-6">
															<Dropdownlist v-model="data.mark_as_delete"
																@selected_item="handleSelectedInMemberMarkAsDelete"
																name="mark_as_delete" label="Mark as delete?" :data="{
																	data: [
																		{ code: 'true', name: 'Yes' },
																		{ code: 'false', name: 'No' },
																	],
																}" :selected_value="data.mark_as_delete" />
														</div>
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
									class="py-2 px-4 border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">Reset</button>
							</span>
							<span class="inline-flex rounded-md shadow-sm">
								<button v-on:click="upsertMember" type="submit"
									class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:border-primary-700 focus:shadow-outline-primary active:bg-primary-700 transition duration-150 ease-in-out">
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
import { Calendar, DatePicker } from 'v-calendar';
export default {
	components: {
		Calendar,
		DatePicker,
	},
	data() {
		return {
			isUpsertMemberVisible: false,
			data: {},
			api: "",
			date: new Date(),
			progress: false,
		};
	},
	methods: {
		
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
			alert(data);
			this.data.address.country = data;
		},
		handleSelectedInMemberMarkAsDelete(data) {
			alert(data);
			this.data.mark_as_delete = data;
		},
		handleSelectedInMemberStatus(data) {
			this.data.is_enabled = data;
		},
	},
	computed: {},
	mounted() {
		//this.$toast.success("Record saved successfully");
		//console.log(_.isString("moe"))

	},
	created() {
		useNuxtApp().$bus.$on("evtUpsertCategory", (data) => {
			//alert(data)
			if (data !== undefined) {
				this.data = data;
			} else {
				//set default value
				this.data = { location: { type: "Point", coordinates: [0.0, 0.0] }, address: { street: "", apartment: "", city: "", district: "", state: "", country: "", postalCode: "" } };
			}
			this.isUpsertMemberVisible = !this.isUpsertMemberVisible;
		});

		//2) Delete Member record and then rebind datatable
		useNuxtApp().$bus.$on("evtDeleteMember", (data) => {
			if (data !== undefined) {
				this.data = data;
				this.deleteMember();
			}
		});
	},
	beforeDestroy() {
		useNuxtApp().$bus.$off("evtUpsertCategory");
		useNuxtApp().$bus.$off("evtDeleteMember");
	},
};
</script>
