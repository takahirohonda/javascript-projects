### Make Query with token

**Query**

```graphql
query movies {
  movies {
    id
    title
  }
}

query movieById {
  movieById(id: 1) {
    id
    title
  }
}
```

**Header**

Admin & Readonly

```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYWRtaW5fdXNlciIsInJvbGUiOlsiQWRtaW4iXX0sImlhdCI6MTYyMDc4MDcxOH0.VWK1dVw4NFmB_AglyPZ5Lq1ZK8tLp8WXGs357MfNz1k"
}

{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoicmVhZG9ubHlfdXNlciIsInJvbGUiOlsiUmVhZG9ubHkiXX0sImlhdCI6MTYyMDc3NzI1MH0.DxBYtekFyd2qZFxyws9HWYba7qH5gL6SDjO9BCkpoDg"
}
```
