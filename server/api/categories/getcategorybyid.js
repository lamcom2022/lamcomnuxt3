export default async (req, res) => {
    const body = await useBody(req)
    console.log("sfsd=",body)
    const contact = await $fetch('https://data.mongodb-api.com/app/data-fgorq/endpoint/data/v1/action/find', {
        method: 'post', headers: {
            "api-key": 'KTzPhWk0W9fQHmSuQFxK2enn8wjSJ71y1pz3MdaYrzQ2RNcFT4N0mFfaNEweKR2k'
        }, body: {
            "collection": "category",
            "database": 'lamcom-mk',
            "dataSource": 'Cluster0',
            "filter": {
				"_id": {
					"$oid": `${body}`,
				}
            }
        }
    })
    debugger
    return contact
}