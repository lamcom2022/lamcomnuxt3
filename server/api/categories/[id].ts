// export default eventHandler(async (event) => {
// 	const {id} = event.context.params;
// 	console.log("ID = ", id);
// 	const record = await $fetch(`${process.env.MONGODB_ATLAS_REST_URL}/findOne`, {
// 		method: "post",
// 		headers: {
// 			"api-key": `${process.env.MONGODB_ATLAS_REST_TOKEN}`,
// 		},
// 		body: {
// 			collection: "members",
// 			database: `${process.env.MONGODB_ATLAS_DATABASE}`,
// 			dataSource: `${process.env.MONGODB_ATLAS_DATASOURCE}`,
// 			filter: {
// 				_id: {
// 					$oid: id,
// 				},
// 			},
// 		},
// 	});
// 	return record;
// });

export default eventHandler(async (event) => {
	const {id} = event.context.params;
	console.log("ID = ", id);
	const record = await $fetch('https://data.mongodb-api.com/app/data-fgorq/endpoint/data/v1/action/findOne', {
		method: "post",
		headers: {
			"api-key": 'KTzPhWk0W9fQHmSuQFxK2enn8wjSJ71y1pz3MdaYrzQ2RNcFT4N0mFfaNEweKR2k',
		},
		body: {
			collection: "members",
			database: 'lamcom-mk',
			dataSource: 'Cluster0',
			filter: {
				_id: {
					$oid: id,
				},
			},
		},
	});
	return record;
});

