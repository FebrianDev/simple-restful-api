# API SPEC

## Create Product

Request :

- Method : POST
- Endpoint : `/api/products`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json
{
  "id": "integer, unique",
  "name": "string",
  "price": "double",
  "quantity": "integer"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "name": "string",
    "price": "double",
    "quantity": "integer",
    "createdAt": "date"
  }
}
```

## Get Product

Request :

- Method : GET
- Endpoint : `/api/products/{id}`
- Header :
    - Content-Type: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "name": "string",
    "price": "double",
    "quantity": "integer",
    "createdAt": "date"
  }
}
```

## Update Product

Request :

- Method : PUT
- Endpoint : `/api/products/{id}`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json
{
  "name": "string",
  "price": "long",
  "quantity": "integer"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "int, unique",
    "name": "string",
    "price": "double",
    "quantity": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## List Product

Request :

- Method : PUT
- Endpoint : /api/products
- Header :
    - Accept: application/json
- Body :

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "integer, unique",
      "name": "string",
      "price": "double",
      "quantity": "integer",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "integer, unique",
      "name": "string",
      "price": "double",
      "quantity": "integer",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```
## Delete Product

Request: 
- Method: DELETE
- Endpoint: `/api/products/{id}`
- Header: 
  - Accept:application/json

```json
{
  "code": "number",
  "status": "string"
}
```