import type {IncomingMessage, ServerResponse} from "http";
import {useBody} from "h3";
import destr from "destr";

// export default eventHandler(async (event) => {
// 	const query = useQuery(event);
// 	const body = await useBody(event); // only for POST | PUT | PATCH | DELETE requests
// 	const recordset = await $fetch(`${process.env.MONGODB_ATLAS_REST_URL}/insertOne`, {
// 		method: "post",
// 		headers: {
// 			"api-key": `${process.env.MONGODB_ATLAS_REST_TOKEN}`,
// 		},
// 		body: {
// 			collection: "users",
// 			database: `${process.env.MONGODB_ATLAS_DATABASE}`,
// 			dataSource: `${process.env.MONGODB_ATLAS_DATASOURCE}`,
// 			document: body,
// 		},
// 	});
// 	return recordset;
// });
// export default async (req, res) => {
//     const body = await useBody(req)
//     console.log(body)
//     const roles = await $fetch(`${process.env.MONGODB_ATLAS_REST_URL}/insertOne`, {
//         method: 'post', headers: {
//             "api-key": `${process.env.MONGODB_ATLAS_REST_TOKEN}`
//         }, body: {
//             "collection": "users",
//             "database": `${process.env.MONGODB_ATLAS_DATABASE}`,
//             "dataSource": `${process.env.MONGODB_ATLAS_DATASOURCE}`,
//             "document": body
//         }
//     })
//     return roles
// }

export default async (req, res) => {
    const body = await useBody(req)
    console.log(body)
    const roles = await $fetch('https://data.mongodb-api.com/app/data-fgorq/endpoint/data/v1/action/insertOne', {
        method: 'post', headers: {
            "api-key": 'KTzPhWk0W9fQHmSuQFxK2enn8wjSJ71y1pz3MdaYrzQ2RNcFT4N0mFfaNEweKR2k'
        }, body: {
            "collection": "users",
            "database": 'lamcom-mk',
            "dataSource": 'Cluster0',
            "document": body
        }
    })
    return roles
}
