export default async (req, res) => {
    const body = await useBody(req)
    console.log("Hi babu=",body)
    console.log(" id == " + body.id)
    const recordset = await $fetch('https://data.mongodb-api.com/app/data-fgorq/endpoint/data/v1/action/updateOne', {
		method: "post",
		headers: {
			"api-key": 'KTzPhWk0W9fQHmSuQFxK2enn8wjSJ71y1pz3MdaYrzQ2RNcFT4N0mFfaNEweKR2k',
		},
		body: {
			collection: "product",
			database: 'lamcom-mk',
			dataSource: 'Cluster0',
			filter: {
				_id: {
					$oid: body.id,
				},
			},
			update: {
				$set: body,
			},
		},
	});
    debugger
    console.log("recordset" + recordset)
    return recordset
}