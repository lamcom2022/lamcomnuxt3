export default async (req, res) => {
    const body = await useBody(req)
    console.log(body)
    const roles = await $fetch(`${process.env.MONGODB_ATLAS_REST_URL}/insertOne`, {
        method: 'post', headers: {
            "api-key": `${process.env.MONGODB_ATLAS_REST_TOKEN}`
        }, body: {
            "collection": "roles",
            "database": `${process.env.MONGODB_ATLAS_DATABASE}`,
            "dataSource": `${process.env.MONGODB_ATLAS_DATASOURCE}`,
            "document": body
        }
    })
    return roles
}