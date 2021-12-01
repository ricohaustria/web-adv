# GraphQL

[GraphQL](https://graphql.org/)

## Demos

### GraphQL

- Explain [GraphQLObjectType](https://graphql.org/graphql-js/constructing-types/) defined in `server.js`
- Start GraphQL server:

```
npm run devStart
```

- Go to [http://localhost:5000/graphql](http://localhost:5000/graphql) and enter the following query:

```
{
  books {
    name
    author {
      id
    }
  }
}
```