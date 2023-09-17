import { ContactStored } from "../types/types.js";

import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";
dotenv.config();

const uri = process.env.DATABASE_URL;
let client: MongoClient;


const connectMongoDB = async () => {
  if (!client) {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
       strict: true,
       deprecationErrors: true
      }
    });
    await client.connect();
  }
}

const db = () => {
  return client.db(process.env.DATABASE_NAME);
}

class ContactsStore {
  async create(contact: ContactStored) {
    await connectMongoDB();

    const collection = db().collection("contacts");
    await collection.insertOne(contact);
  }

  async readAll(): Promise<ContactStored[]> {
    await connectMongoDB();
    
    const collection = db().collection("contacts");
    const contactsCursor = collection.find({});

    const contactDocs = await contactsCursor.toArray();

    return contactDocs.map<ContactStored>(doc => ({
      id: doc.id,
      name: doc.name,
      age: doc.age,
      email: doc.email,
      phone: doc.phone,
    }));
  }

  async delete(name: string, phone: string) {
    await connectMongoDB();

    const collection = db().collection("contacts");
    const toBeDeletedContact = await collection.findOne({name: name, phone:phone})

    if (toBeDeletedContact) {
      await collection.findOneAndDelete({name: name, phone:phone});
    } else {
      throw new Error("Could not delete contact!");
    }
  }
}

export default ContactsStore;
