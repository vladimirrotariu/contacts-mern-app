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
}

export default ContactsStore;
