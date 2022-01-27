# GET MARKET API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `POST /googleSignIn`
- `GET /products`
- `GET /productsEtsy`
- `GET /products/:productId`
- `GET /productsEtsy/:listing_id`
- `GET /cart`
- `POST /cart/:productId`
- `DELETE /cart/:id`



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
OR
{
  "message": "Email is required!"
}
OR
{
  "message": "Password is required!"
}
```

&nbsp;


## 3. POST /googleSignIn

Description:

- Login with Google

Request:

- body:

```json
{
  "email": "string",
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

&nbsp;

## 4. GET /products

Description:

- Show all products from Fake Store API


_Response (200 - OK)_

```json
[
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    ...,
]
```
&nbsp;


## 5. GET /productsEtsy

Description:

- Show all products from Etsy API


_Response (200 - OK)_

```json
{
    "count": 50001,
    "results": [
        {
            "listing_id": 1032446116,
            "state": "active",
            "user_id": 438266121,
            "category_id": null,
            "title": "What a day ! Wine glass / pint glass / bag/ keyring / coaster great gift idea valentines Mother’s Day",
            "description": "Wine or pint glass or keyring with “ what a day ! “ saying on it. Why not add a natural slate coaster. The coaster has 4 “feet”on the bottom to protect surface. \nGreat for a gift or for yourself after a hard day and treating yourself to a glass or 2 ! (Wine unfortunately not included) we aim to dispatch in 1-3 days \nBag is 100 percent recyclable cotton \n\nWriting is done using permanent vinyl \nNot suitable for dishwasher or soaking in water. For best results rinse clean. \nKeyring is made from acrylic with permanent vinyl on it.if you would prefer a white keyring background with white writing just leave a note in messages. Tassel colours will vary as to what is in stock. \n\nAny questions please feel free to drop me a message 😀",
            "creation_tsz": 1643269063,
            "ending_tsz": 1653633463,
            "original_creation_tsz": 1625423293,
            "last_modified_tsz": 1643269063,
            "price": "3.89",
            "currency_code": "GBP",
            "quantity": 12,
            "sku": [],
            "tags": [
                "Mothers Day wine",
                "what a day wine glas",
                "slate coaster",
                "gift for friend",
                "what a day pint glas",
                "cheer up gift",
                "funny glass",
                "friend gift",
                "wine gift",
                "wine glass",
                "what a day"
            ],
            "materials": [],
            "shop_section_id": null,
            "featured_rank": null,
            "state_tsz": 1640633595,
            "url": "https://www.etsy.com/listing/1032446116/what-a-day-wine-glass-pint-glass-bag?utm_source=getmarket&utm_medium=api&utm_campaign=api",
            "views": 641,
            "num_favorers": 12,
            "shipping_template_id": 128562149878,
            "processing_min": 1,
            "processing_max": 3,
            "who_made": "i_did",
            "is_supply": "false",
            "when_made": "made_to_order",
            "item_weight": null,
            "item_weight_unit": "oz",
            "item_length": null,
            "item_width": null,
            "item_height": null,
            "item_dimensions_unit": "in",
            "is_private": false,
            "style": null,
            "non_taxable": false,
            "is_customizable": false,
            "is_digital": false,
            "file_data": "",
            "should_auto_renew": false,
            "language": "en-US",
            "has_variations": true,
            "taxonomy_id": 1937,
            "taxonomy_path": [
                "Home & Living",
                "Kitchen & Dining",
                "Drink & Barware",
                "Barware",
                "Wine Glasses & Charms",
                "Wine Glasses"
            ],
            "used_manufacturer": false,
            "is_vintage": false,
            "Images": [
                {
                    "listing_image_id": 3233051907,
                    "hex_code": "9A918D",
                    "red": 154,
                    "green": 145,
                    "blue": 141,
                    "hue": 18,
                    "saturation": 8,
                    "brightness": 60,
                    "is_black_and_white": false,
                    "creation_tsz": 1625423294,
                    "listing_id": 1032446116,
                    "rank": 1,
                    "url_75x75": "https://i.etsystatic.com/27483793/r/il/ab274f/3233051907/il_75x75.3233051907_7c03.jpg",
                    "url_170x135": "https://i.etsystatic.com/27483793/r/il/ab274f/3233051907/il_170x135.3233051907_7c03.jpg",
                    "url_570xN": "https://i.etsystatic.com/27483793/r/il/ab274f/3233051907/il_570xN.3233051907_7c03.jpg",
                    "url_fullxfull": "https://i.etsystatic.com/27483793/r/il/ab274f/3233051907/il_fullxfull.3233051907_7c03.jpg",
                    "full_height": 1136,
                    "full_width": 640
                },
                {
                    "listing_image_id": 3368291965,
                    "hex_code": "928373",
                    "red": 146,
                    "green": 131,
                    "blue": 115,
                    "hue": 31,
                    "saturation": 21,
                    "brightness": 57,
                    "is_black_and_white": false,
                    "creation_tsz": 1631290069,
                    "listing_id": 1032446116,
                    "rank": 2,
                    "url_75x75": "https://i.etsystatic.com/27483793/r/il/69e743/3368291965/il_75x75.3368291965_5evr.jpg",
                    "url_170x135": "https://i.etsystatic.com/27483793/r/il/69e743/3368291965/il_170x135.3368291965_5evr.jpg",
                    "url_570xN": "https://i.etsystatic.com/27483793/r/il/69e743/3368291965/il_570xN.3368291965_5evr.jpg",
                    "url_fullxfull": "https://i.etsystatic.com/27483793/r/il/69e743/3368291965/il_fullxfull.3368291965_5evr.jpg",
                    "full_height": 1136,
                    "full_width": 610
                },
                {
                    "listing_image_id": 3256249786,
                    "hex_code": "95919B",
                    "red": 149,
                    "green": 145,
                    "blue": 155,
                    "hue": 264,
                    "saturation": 6,
                    "brightness": 60,
                    "is_black_and_white": false,
                    "creation_tsz": 1628576818,
                    "listing_id": 1032446116,
                    "rank": 3,
                    "url_75x75": "https://i.etsystatic.com/27483793/r/il/7979c3/3256249786/il_75x75.3256249786_jq4t.jpg",
                    "url_170x135": "https://i.etsystatic.com/27483793/r/il/7979c3/3256249786/il_170x135.3256249786_jq4t.jpg",
                    "url_570xN": "https://i.etsystatic.com/27483793/r/il/7979c3/3256249786/il_570xN.3256249786_jq4t.jpg",
                    "url_fullxfull": "https://i.etsystatic.com/27483793/r/il/7979c3/3256249786/il_fullxfull.3256249786_jq4t.jpg",
                    "full_height": 2992,
                    "full_width": 2244
                },
                {
                    "listing_image_id": 3255080094,
                    "hex_code": "9B7F8D",
                    "red": 155,
                    "green": 127,
                    "blue": 141,
                    "hue": 330,
                    "saturation": 18,
                    "brightness": 60,
                    "is_black_and_white": false,
                    "creation_tsz": 1628529590,
                    "listing_id": 1032446116,
                    "rank": 4,
                    "url_75x75": "https://i.etsystatic.com/27483793/r/il/fdec1f/3255080094/il_75x75.3255080094_ho7j.jpg",
                    "url_170x135": "https://i.etsystatic.com/27483793/r/il/fdec1f/3255080094/il_170x135.3255080094_ho7j.jpg",
                    "url_570xN": "https://i.etsystatic.com/27483793/r/il/fdec1f/3255080094/il_570xN.3255080094_ho7j.jpg",
                    "url_fullxfull": "https://i.etsystatic.com/27483793/r/il/fdec1f/3255080094/il_fullxfull.3255080094_ho7j.jpg",
                    "full_height": 2992,
                    "full_width": 2244
                },
                {
                    "listing_image_id": 3299762088,
                    "hex_code": "74746F",
                    "red": 116,
                    "green": 116,
                    "blue": 111,
                    "hue": 60,
                    "saturation": 4,
                    "brightness": 45,
                    "is_black_and_white": false,
                    "creation_tsz": 1630431020,
                    "listing_id": 1032446116,
                    "rank": 5,
                    "url_75x75": "https://i.etsystatic.com/27483793/r/il/c730c2/3299762088/il_75x75.3299762088_f5mx.jpg",
                    "url_170x135": "https://i.etsystatic.com/27483793/r/il/c730c2/3299762088/il_170x135.3299762088_f5mx.jpg",
                    "url_570xN": "https://i.etsystatic.com/27483793/r/il/c730c2/3299762088/il_570xN.3299762088_f5mx.jpg",
                    "url_fullxfull": "https://i.etsystatic.com/27483793/r/il/c730c2/3299762088/il_fullxfull.3299762088_f5mx.jpg",
                    "full_height": 2992,
                    "full_width": 2244
                },
                {
                    "listing_image_id": 3299762066,
                    "hex_code": "71706C",
                    "red": 113,
                    "green": 112,
                    "blue": 108,
                    "hue": 48,
                    "saturation": 4,
                    "brightness": 44,
                    "is_black_and_white": false,
                    "creation_tsz": 1630431020,
                    "listing_id": 1032446116,
                    "rank": 6,
                    "url_75x75": "https://i.etsystatic.com/27483793/r/il/af9f07/3299762066/il_75x75.3299762066_m96f.jpg",
                    "url_170x135": "https://i.etsystatic.com/27483793/r/il/af9f07/3299762066/il_170x135.3299762066_m96f.jpg",
                    "url_570xN": "https://i.etsystatic.com/27483793/r/il/af9f07/3299762066/il_570xN.3299762066_m96f.jpg",
                    "url_fullxfull": "https://i.etsystatic.com/27483793/r/il/af9f07/3299762066/il_fullxfull.3299762066_m96f.jpg",
                    "full_height": 2992,
                    "full_width": 2244
                },
                {
                    "listing_image_id": 3337147870,
                    "hex_code": "7E8C9F",
                    "red": 126,
                    "green": 140,
                    "blue": 159,
                    "hue": 215,
                    "saturation": 20,
                    "brightness": 62,
                    "is_black_and_white": false,
                    "creation_tsz": 1631955938,
                    "listing_id": 1032446116,
                    "rank": 7,
                    "url_75x75": "https://i.etsystatic.com/27483793/r/il/be7c4f/3337147870/il_75x75.3337147870_boit.jpg",
                    "url_170x135": "https://i.etsystatic.com/27483793/r/il/be7c4f/3337147870/il_170x135.3337147870_boit.jpg",
                    "url_570xN": "https://i.etsystatic.com/27483793/r/il/be7c4f/3337147870/il_570xN.3337147870_boit.jpg",
                    "url_fullxfull": "https://i.etsystatic.com/27483793/r/il/be7c4f/3337147870/il_fullxfull.3337147870_boit.jpg",
                    "full_height": 3000,
                    "full_width": 2250
                },
                ...,
            ]
        }
    ],
    "params": {
        "listing_id": "1032446116"
    },
    "type": "Listing",
    "pagination": {}
}
```

&nbsp;


## 6. GET /products/:productId

Description:

- Show product from Fake Store API by id


_Response (200 - OK)_

```json
{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}
```
_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}

```

&nbsp;

## 7. GET /productsEtsy/:listingId

Description:

- Show product from Etsy API by Id


_Response (200 - OK)_

```json
{
    "count": 1,
    "results": [
        {
            "listing_id": 1032446116,
            "state": "active",
            "user_id": 438266121,
            "category_id": null,
            "title": "What a day ! Wine glass / pint glass / bag/ keyring / coaster great gift idea valentines Mother’s Day",
            "description": "Wine or pint glass or keyring with “ what a day ! “ saying on it. Why not add a natural slate coaster. The coaster has 4 “feet”on the bottom to protect surface. \nGreat for a gift or for yourself after a hard day and treating yourself to a glass or 2 ! (Wine unfortunately not included) we aim to dispatch in 1-3 days \nBag is 100 percent recyclable cotton \n\nWriting is done using permanent vinyl \nNot suitable for dishwasher or soaking in water. For best results rinse clean. \nKeyring is made from acrylic with permanent vinyl on it.if you would prefer a white keyring background with white writing just leave a note in messages. Tassel colours will vary as to what is in stock. \n\nAny questions please feel free to drop me a message 😀",
            "creation_tsz": 1643269063,
            "ending_tsz": 1653633463,
            "original_creation_tsz": 1625423293,
            "last_modified_tsz": 1643269063,
            "price": "3.89",
            "currency_code": "GBP",
            "quantity": 12,
            "sku": [],
            "tags": [
                "Mothers Day wine",
                "what a day wine glas",
                "slate coaster",
                "gift for friend",
                "what a day pint glas",
                "cheer up gift",
                "funny glass",
                "friend gift",
                "wine gift",
                "wine glass",
                "what a day"
            ],
            "materials": [],
            "shop_section_id": null,
            "featured_rank": null,
            "state_tsz": 1640633595,
            "url": "https://www.etsy.com/listing/1032446116/what-a-day-wine-glass-pint-glass-bag?utm_source=getmarket&utm_medium=api&utm_campaign=api",
            "views": 641,
            "num_favorers": 12,
            "shipping_template_id": 128562149878,
            "processing_min": 1,
            "processing_max": 3,
            "who_made": "i_did",
            "is_supply": "false",
            "when_made": "made_to_order",
            "item_weight": null,
            "item_weight_unit": "oz",
            "item_length": null,
            "item_width": null,
            "item_height": null,
            "item_dimensions_unit": "in",
            "is_private": false,
            "style": null,
            "non_taxable": false,
            "is_customizable": false,
            "is_digital": false,
            "file_data": "",
            "should_auto_renew": false,
            "language": "en-US",
            "has_variations": true,
            "taxonomy_id": 1937,
            "taxonomy_path": [
                "Home & Living",
                "Kitchen & Dining",
                "Drink & Barware",
                "Barware",
                "Wine Glasses & Charms",
                "Wine Glasses"
            ],
            "used_manufacturer": false,
            "is_vintage": false,
            "Images": [
                {
                    "listing_image_id": 3233051907,
                    "hex_code": "9A918D",
                    "red": 154,
                    "green": 145,
                    "blue": 141,
                    "hue": 18,
                    "saturation": 8,
                    "brightness": 60,
                    "is_black_and_white": false,
                    "creation_tsz": 1625423294,
                    "listing_id": 1032446116,
                    "rank": 1,
                    "url_75x75": "https://i.etsystatic.com/27483793/r/il/ab274f/3233051907/il_75x75.3233051907_7c03.jpg",
                    "url_170x135": "https://i.etsystatic.com/27483793/r/il/ab274f/3233051907/il_170x135.3233051907_7c03.jpg",
                    "url_570xN": "https://i.etsystatic.com/27483793/r/il/ab274f/3233051907/il_570xN.3233051907_7c03.jpg",
                    "url_fullxfull": "https://i.etsystatic.com/27483793/r/il/ab274f/3233051907/il_fullxfull.3233051907_7c03.jpg",
                    "full_height": 1136,
                    "full_width": 640
                },
                {
                    "listing_image_id": 3368291965,
                    "hex_code": "928373",
                    "red": 146,
                    "green": 131,
                    "blue": 115,
                    "hue": 31,
                    "saturation": 21,
                    "brightness": 57,
                    "is_black_and_white": false,
                    "creation_tsz": 1631290069,
                    "listing_id": 1032446116,
                    "rank": 2,
                    "url_75x75": "https://i.etsystatic.com/27483793/r/il/69e743/3368291965/il_75x75.3368291965_5evr.jpg",
                    "url_170x135": "https://i.etsystatic.com/27483793/r/il/69e743/3368291965/il_170x135.3368291965_5evr.jpg",
                    "url_570xN": "https://i.etsystatic.com/27483793/r/il/69e743/3368291965/il_570xN.3368291965_5evr.jpg",
                    "url_fullxfull": "https://i.etsystatic.com/27483793/r/il/69e743/3368291965/il_fullxfull.3368291965_5evr.jpg",
                    "full_height": 1136,
                    "full_width": 610
                },
                {
                    "listing_image_id": 3256249786,
                    "hex_code": "95919B",
                    "red": 149,
                    "green": 145,
                    "blue": 155,
                    "hue": 264,
                    "saturation": 6,
                    "brightness": 60,
                    "is_black_and_white": false,
                    "creation_tsz": 1628576818,
                    "listing_id": 1032446116,
                    "rank": 3,
                    "url_75x75": "https://i.etsystatic.com/27483793/r/il/7979c3/3256249786/il_75x75.3256249786_jq4t.jpg",
                    "url_170x135": "https://i.etsystatic.com/27483793/r/il/7979c3/3256249786/il_170x135.3256249786_jq4t.jpg",
                    "url_570xN": "https://i.etsystatic.com/27483793/r/il/7979c3/3256249786/il_570xN.3256249786_jq4t.jpg",
                    "url_fullxfull": "https://i.etsystatic.com/27483793/r/il/7979c3/3256249786/il_fullxfull.3256249786_jq4t.jpg",
                    "full_height": 2992,
                    "full_width": 2244
                },
                {
                    "listing_image_id": 3255080094,
                    "hex_code": "9B7F8D",
                    "red": 155,
                    "green": 127,
                    "blue": 141,
                    "hue": 330,
                    "saturation": 18,
                    "brightness": 60,
                    "is_black_and_white": false,
                    "creation_tsz": 1628529590,
                    "listing_id": 1032446116,
                    "rank": 4,
                    "url_75x75": "https://i.etsystatic.com/27483793/r/il/fdec1f/3255080094/il_75x75.3255080094_ho7j.jpg",
                    "url_170x135": "https://i.etsystatic.com/27483793/r/il/fdec1f/3255080094/il_170x135.3255080094_ho7j.jpg",
                    "url_570xN": "https://i.etsystatic.com/27483793/r/il/fdec1f/3255080094/il_570xN.3255080094_ho7j.jpg",
                    "url_fullxfull": "https://i.etsystatic.com/27483793/r/il/fdec1f/3255080094/il_fullxfull.3255080094_ho7j.jpg",
                    "full_height": 2992,
                    "full_width": 2244
                },
                {
                    "listing_image_id": 3299762088,
                    "hex_code": "74746F",
                    "red": 116,
                    "green": 116,
                    "blue": 111,
                    "hue": 60,
                    "saturation": 4,
                    "brightness": 45,
                    "is_black_and_white": false,
                    "creation_tsz": 1630431020,
                    "listing_id": 1032446116,
                    "rank": 5,
                    "url_75x75": "https://i.etsystatic.com/27483793/r/il/c730c2/3299762088/il_75x75.3299762088_f5mx.jpg",
                    "url_170x135": "https://i.etsystatic.com/27483793/r/il/c730c2/3299762088/il_170x135.3299762088_f5mx.jpg",
                    "url_570xN": "https://i.etsystatic.com/27483793/r/il/c730c2/3299762088/il_570xN.3299762088_f5mx.jpg",
                    "url_fullxfull": "https://i.etsystatic.com/27483793/r/il/c730c2/3299762088/il_fullxfull.3299762088_f5mx.jpg",
                    "full_height": 2992,
                    "full_width": 2244
                },
                {
                    "listing_image_id": 3299762066,
                    "hex_code": "71706C",
                    "red": 113,
                    "green": 112,
                    "blue": 108,
                    "hue": 48,
                    "saturation": 4,
                    "brightness": 44,
                    "is_black_and_white": false,
                    "creation_tsz": 1630431020,
                    "listing_id": 1032446116,
                    "rank": 6,
                    "url_75x75": "https://i.etsystatic.com/27483793/r/il/af9f07/3299762066/il_75x75.3299762066_m96f.jpg",
                    "url_170x135": "https://i.etsystatic.com/27483793/r/il/af9f07/3299762066/il_170x135.3299762066_m96f.jpg",
                    "url_570xN": "https://i.etsystatic.com/27483793/r/il/af9f07/3299762066/il_570xN.3299762066_m96f.jpg",
                    "url_fullxfull": "https://i.etsystatic.com/27483793/r/il/af9f07/3299762066/il_fullxfull.3299762066_m96f.jpg",
                    "full_height": 2992,
                    "full_width": 2244
                },
                {
                    "listing_image_id": 3337147870,
                    "hex_code": "7E8C9F",
                    "red": 126,
                    "green": 140,
                    "blue": 159,
                    "hue": 215,
                    "saturation": 20,
                    "brightness": 62,
                    "is_black_and_white": false,
                    "creation_tsz": 1631955938,
                    "listing_id": 1032446116,
                    "rank": 7,
                    "url_75x75": "https://i.etsystatic.com/27483793/r/il/be7c4f/3337147870/il_75x75.3337147870_boit.jpg",
                    "url_170x135": "https://i.etsystatic.com/27483793/r/il/be7c4f/3337147870/il_170x135.3337147870_boit.jpg",
                    "url_570xN": "https://i.etsystatic.com/27483793/r/il/be7c4f/3337147870/il_570xN.3337147870_boit.jpg",
                    "url_fullxfull": "https://i.etsystatic.com/27483793/r/il/be7c4f/3337147870/il_fullxfull.3337147870_boit.jpg",
                    "full_height": 3000,
                    "full_width": 2250
                },
                ...,
            ]
        }
    ],
    "params": {
        "listing_id": "1032446116"
    },
    "type": "Listing",
    "pagination": {}
}
```

&nbsp;

## 8. GET /cart

Description:

- Show cart data from current logged in user


_Response (200 - OK)_

```json
[
    {
        "id": 12,
        "userId": 1,
        "productId": 1,
        "productName": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": "109.95",
        "createdAt": "2022-01-27T00:11:54.986Z"
    },
    ...,
]
```

&nbsp;

## 9. POST /cart/:productId

Description:

- Post product into cart from current logged in user

_Response (201 - Created)_

```json
{
    "message": "Item has been added to your shopping cart"
}
```
&nbsp;

## 10. DELETE /cart/:id

Description:

- Delete cart item from current logged in user

_Response (200 - Created)_

```json
{
    "message": "Item has been added to your shopping cart"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "Unauthorized"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
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
