export default async (req, res) => {
    const body = await useBody(req)
    console.log(body)
    const contact = await $fetch(`${process.env.MONGODB_ATLAS_REST_URL}/findOne`, {
        method: 'post', headers: {
            "api-key": `${process.env.MONGODB_ATLAS_REST_TOKEN}`
        }, body: {
            "collection": "users",
            "database": `${process.env.MONGODB_ATLAS_DATABASE}`,
            "dataSource": `${process.env.MONGODB_ATLAS_DATASOURCE}`,
            "filter": { "email": `${body.email}` }
        }
    })
    debugger
    return contact
}