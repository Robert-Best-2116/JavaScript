const express = require('express'); 
const {faker} = require("@faker-js/faker");
const app = express();
const port = 8000;

app.use( express.json() );
app.use(express.json(), express.urlencoded({extended:true}));

// Create User
const createUser = () => {
    const user ={
        _id: faker.database.mongodbObjectId(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password:faker.internet.password()
    };
}

//Create Company
const createCompany = () => {
    const company = {
        _id: faker.database.mongodbObjectId(),
        companyName: faker.company.name(),
        address: {
            street: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.county()
        }
    }
    return company;
}


//Routes
app.get("/api/users/new", (req, res) => {
    res.json(createUser());
});

app.get("/api/company/new", (req, res) => {
    res.json(createCompany);
});

app.get("/api/userAndCompany/new", (req, res) => {
    res.json(createUser, createCompany);
});




app.listen(8000, () => console.log('the server is all filed up on port 8000'));