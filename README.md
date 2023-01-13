# nodejs-file-manipulation-practices
## File manipulation practices with Node.JS

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

<img width="887" alt="image" src="https://user-images.githubusercontent.com/40067566/212208214-338efa5d-9bc4-4dc4-87ec-8efc72ae915e.png">


If there are errors in the imported data, the data is not saved and an array of errors is returned.
