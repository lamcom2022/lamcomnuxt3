<template>
	<div class="px-4 sm:px-4 lg:px-4">
		<div class="sm:flex sm:items-center">

			<!--Datatable action buttons (start)-->

			<!--right action buttons (start)-->

			<!--right action buttons (end)-->
			<!--Datatable action buttons (End)-->
		</div>
		<div class="mt-2 flex flex-col">
			<div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">

					<div ref="gridRef"></div>

				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	components: {

	},
	data() {
		return {
			data: [],
		};
	},
};
</script>
<script setup>
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
const gridRef = ref();
const slist = ref([]);
const { data: Members } = await useAsyncData("Members-list-" + Math.random, () =>
	$fetch("/api/members", {
		initialCache: false,
		method: "post",
		body: {
			projection: {
				Name: 1,
				Code: 1,
				Kattalai: 1,
				Star: 1,
				CellPhone: 1,
				LandlinePhone: 1,
				CommunicationAddress: 1,
				BookNo: 1,
				SlNo: 1,
				BookMonth: 1,
				BookDate: 1
			},
			filter: {},
			limit: 500,
		},
	})
);
onMounted(() => {
	console.log("Members", Members)
	/*console.log("keys", _.keys(Members._rawValue.documents[0]))
	console.log("value", _.values(Members._rawValue.documents[0]))*/
	//console.log(_.keys(Members._rawValue.documents[0]));
	//console.log(_.values(Members._rawValue.documents[0]));
	const grid = new Grid({
		columns: [
			{ id: "_id", name: "Id.", hidden: true },
			{ id: "Code", name: "Code/B.#/S.#", width: "200px" },
			{
				id: "Name",
				name: "Full Name",
			},

			{
				id: "Star",
				name: "Natchathiram",
			}, {
				id: "Kattalai",
				name: "Kattalai",
			}, {
				id: "CellPhone",
				name: "Mobile #.",
			}, {
				id: "BookNo",
				width: "150px", name: "Book #.", hidden: true
			}, {
				id: "SlNo",
				width: "150px", name: "Sl. #.", hidden: true
			}, {
				id: "BookMonth",
				name: "Month",
				width: "150px"
			}, , {
				id: "BookDate",
				name: "Day"
				, width: "150px"
			},
		],
		//CommunicationAddress
		//_.keys(Members._rawValue.documents[0]),
		sort: true,
		pagination: {
			enabled: true,
			limit: 25,
			summary: true
		},
		className: {
			td: 'whitespace-nowrap px-2 py-2 text-sm text-gray-500',
			table: 'min-w-full divide-y divide-gray-300',
			thead: 'bg-gray-50',
			th: 'whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900',
			//tbody: 'divide-y divide-gray-200 bg-primary-200'
		},
		search: true,
		fixedHeader: true,
		height: "600px",
		data: Members._rawValue.documents,
	});
	grid.render(gridRef.value);
});
	//console.log("underscore=",_)
</script>
