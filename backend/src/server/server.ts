import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import pkg from "uuid";
import ContactsStore from "../models/contacts-store-mongodb.js";
const { v4: uuidv4 } = pkg;


const app = express();
dotenv.config();
const contactsStoreOperations = new ContactsStore();

app.use(bodyParser.json());

// CORS Headers 
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE"
  );

  next();
});

app.get("/contacts", async (req, res) => {
  const contacts = await contactsStoreOperations.readAll();
  res.status(200).json({ contacts: contacts });
});

app.post("/contact", (req, res) => {
  const { name, age, email, phone } = req.body as { name: string, age: number, email: string, phone: string };

  if (!name || name.trim().length === 0) {
    return res.status(422).json({
      message: "Invalid input, please enter a valid name!"
    });
  }

  if ((!age && age !== 0) || age < 0) {
    return res.status(422).json({
      message: "Invalid input, please enter a valid age!"
    });
  }

  if (!email || email.trim().length === 0) {
    return res.status(422).json({
      message: "Invalid input, please enter a valid email!"
    });
  }

  if (!phone || phone.trim().length === 0) {
    return res.status(422).json({
      message: "Invalid input, please enter a valid email!"
    });
  }


  const createdContact = {
    id: uuidv4(),
    name,
    age,
    email,
    phone
  };

  contactsStoreOperations.create(createdContact);

  res
    .status(201)
    .json({ message: "New contact created.", contact: createdContact });
});

app.delete("https://contacts-09i3.onrender.com/contact-delete", async (req, res) => {
  const {name: nameContactToBeDeleted, phone: phoneContactToBeDeleted} = req.body as {name: string, phone: string};

  contactsStoreOperations.delete(nameContactToBeDeleted, phoneContactToBeDeleted);
})

app.listen(process.env.PORT || 8080); // start Node + Express server on port 5000
