// export default async (req, res) => {
//     const body = await useBody(req)
//     console.log(body)
//     const contact = await $fetch(`${process.env.MONGODB_ATLAS_REST_URL}/insertOne`, {
//         method: 'post', headers: {
//             "api-key": `${process.env.MONGODB_ATLAS_REST_TOKEN}`
//         }, body: {
//             "collection": "category",
//             "database": `${process.env.MONGODB_ATLAS_DATABASE}`,
//             "dataSource": `${process.env.MONGODB_ATLAS_DATASOURCE}`,
//             "document": body
//         }
//     })
//     return contact
// }

export default async (req, res) => {
    const body = await useBody(req)
    console.log(body)
    const contact = await $fetch('https://data.mongodb-api.com/app/data-fgorq/endpoint/data/v1/action/insertOne', {
        method: 'post', headers: {
            "api-key": 'KTzPhWk0W9fQHmSuQFxK2enn8wjSJ71y1pz3MdaYrzQ2RNcFT4N0mFfaNEweKR2k'
        }, body: {
            "collection": "category",
            "database": 'lamcom-mk',
            "dataSource": 'Cluster0',
            "document": body
        }
    })
    return contact
}

