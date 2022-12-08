import { GraphQLClient, gql } from 'graphql-request'


const graphQLClient = new GraphQLClient('https://graphql.fauna.com/graphql', {
  headers: {
    authorization: `Bearer ${process.env.FAUNA_KEY}`,
  },
})

export const getTodos = async () => {
    console.log('getting Todos', {key: process.env.FAUNA_KEY})
    const query = gql`
        query Todos($size: Int) {
            allTodos(_size: $size) {
                data {
                    _id
                    title
                    completed
                }
            }
        }
`
    
    const res = await graphQLClient.request(query, { size: 20 })
    console.log('fauna res', res)
    
    const { allTodos: { data }} = res
    return data

}
