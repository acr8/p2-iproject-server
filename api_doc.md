# GET MARKET API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `POST /googleSignIn`
- `GET /products`
- `GET /productsEtsy`
- `GET /products/categories`
- `GET /products/:productId`
- `GET /cart`
- `POST /cart/:productId`
- `DELETE /cart/:id`
- `GET /products/category/:categoryName`



&nbsp;

## 1. POST /register

Description:

- Insert a User to Database

Request:

- body:

```json
{
  "username": "string",
  "password": "string",
  "email": "string",
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required!"
}
OR
{
  "message": "Please input your email correctly!"
}
OR
{
  "message": "Password is required!"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Username is required!"
}

```

&nbsp;

## 2. POST /login

Description:

- Login and Pass access_token

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Invalid Email Or Password"
}
```

&nbsp;



## Global Error

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```
