export default async (req, res) => {
    const body = await useBody(req)
    console.log(body)
    const role = await $fetch(`${process.env.MONGODB_ATLAS_REST_URL}/find`, {
        method: 'post', headers: {
            "api-key": `${process.env.MONGODB_ATLAS_REST_TOKEN}`
        }, body: {
            "collection": "category",
            "database": `${process.env.MONGODB_ATLAS_DATABASE}`,
            "dataSource": `${process.env.MONGODB_ATLAS_DATASOURCE}`,
           
        }
    })
    debugger
    return role
}