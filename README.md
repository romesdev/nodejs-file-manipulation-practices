# nodejs-file-manipulation-practices
## File manipulation practices with Node.JS

[Inspired by this tutorial](https://www.youtube.com/watch?v=moQRSQR1ATw&ab_channel=Rocketseat) 

In this initial example, we were able to read a csv file and store its information in the database.

For execute this project follow next steps:

```

1. git clone https://github.com/romesdev/nodejs-file-manipulation-practices

2. cd /nodejs-file-manipulation-practices

3. yarn install 

4. yarn dev

5. npx prisma migrate dev

```

### API Documentation

POST METHOD | http://localhost:3000/products

Send in a form-data (Postman) to `file` key a csv file like the products.csv file at [`src/data-example/`](https://github.com/romesdev/nodejs-file-manipulation-practices/tree/main/data-example/).

🟢 200 OK

<img width="887" alt="image" src="https://user-images.githubusercontent.com/40067566/212208214-338efa5d-9bc4-4dc4-87ec-8efc72ae915e.png">


If there are errors in the imported data, the data is not saved and an array of errors is returned.

🔴 400 BAD REQUEST

```
[
    [
        {
            "target": {
                "code_bar": "",
                "description": " Chocolate",
                "price": 4.87,
                "quantity": 1000
            },
            "value": "",
            "property": "code_bar",
            "children": [],
            "constraints": {
                "minLength": "code_bar must be longer than or equal to 12 characters",
                "isNotEmpty": "code_bar should not be empty"
            }
        }
    ],
    [
        {
            "target": {
                "code_bar": "A-00",
                "description": " Manteiga",
                "price": 5,
                "quantity": 140
            },
            "value": "A-00",
            "property": "code_bar",
            "children": [],
            "constraints": {
                "minLength": "code_bar must be longer than or equal to 12 characters"
            }
        }
    ],
    [
        {
            "target": {
                "code_bar": "A-0030-ZZZZZZZZZZ",
                "description": " Macarrão",
                "price": 0,
                "quantity": 40
            },
            "value": 0,
            "property": "price",
            "children": [],
            "constraints": {
                "min": "price must not be less than 0.05"
            }
        }
    ],
    [
        {
            "target": {
                "code_bar": "A-0040-ZZZZZZZZZZZZ",
                "description": " Coca Cola 2l",
                "price": 7,
                "quantity": 0
            },
            "value": 0,
            "property": "quantity",
            "children": [],
            "constraints": {
                "min": "quantity must not be less than 1"
            }
        }
    ],
    [
        {
            "target": {
                "code_bar": "A-Z",
                "description": " Àgua Sem Gás 1.5l",
                "price": 2,
                "quantity": 50
            },
            "value": "A-Z",
            "property": "code_bar",
            "children": [],
            "constraints": {
                "minLength": "code_bar must be longer than or equal to 12 characters"
            }
        }
    ]
]

```
