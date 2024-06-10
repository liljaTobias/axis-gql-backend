import { execute, parse } from "graphql"
import { schema } from "./schema"
import { createYoga } from "graphql-yoga"
import { createServer } from "node:http"

const yoga = createYoga({ schema })
const server = createServer(yoga)

server.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphql')
})