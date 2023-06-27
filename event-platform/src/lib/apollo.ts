import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cljcwuswu094001t9c87b2bfp/master",
  cache: new InMemoryCache(),
})
