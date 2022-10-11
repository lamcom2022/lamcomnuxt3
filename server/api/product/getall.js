// export default async (req, res) => {
//     const body = await useBody(req)
//     console.log(body)
//     const products = await $fetch(`${process.env.MONGODB_ATLAS_REST_URL}/find`, {
//         method: 'post', headers: {
//             "api-key": `${process.env.MONGODB_ATLAS_REST_TOKEN}`
//         }, body: {
//             "collection": "product",
//             "database": `${process.env.MONGODB_ATLAS_DATABASE}`,
//             "dataSource": `${process.env.MONGODB_ATLAS_DATASOURCE}`,
           
//         }
//     })
//     debugger
//     return products
// }

export default async (req, res) => {
    const body = await useBody(req)
    console.log(body)
    const products = await $fetch('https://data.mongodb-api.com/app/data-fgorq/endpoint/data/v1/action/find', {
        method: 'post', headers: {
            "api-key": 'KTzPhWk0W9fQHmSuQFxK2enn8wjSJ71y1pz3MdaYrzQ2RNcFT4N0mFfaNEweKR2k'
        }, body: {
            "collection": "product",
            "database": 'lamcom-mk',
            "dataSource": 'Cluster0',
           
        }
    })
    debugger
    return products
}