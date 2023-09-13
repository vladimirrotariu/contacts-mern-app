import mongodb from "mongodb";
import { ContactStored } from "../types/types.js";

const MongoClient = mongodb.MongoClient;
let client: mongodb.MongoClient;


const connectMongoDB = async () => {
  if (!client) client = await MongoClient.connect(process.env.DATABASE_URL);
}

const db = () => {
  return client.db(process.env.DATABASE_NAME);
}

class ContactsStore {
  async close() {
    if (client) client.close();
    client = undefined;
  }

  async create(contact: ContactStored) {
    await connectMongoDB();

    const collection = db().collection("contacts");
    await collection.insertOne(contact);

    this.close();
  }

  async readAll(id: string): Promise<ContactStored[]> {
    await connectMongoDB();

    const collection = db().collection("contacts");

    const contacts = await new Promise((resolve) => {
      const contacts = [] as ContactStored[];

      collection.find({}).forEach(
        (contactDocument) => { 
          const contact = {
            id: contactDocument.id,
            name: contactDocument.name,
            age: contactDocument.age,
            email: contactDocument.email,
            phone: contactDocument.phone
          }
          contacts.push(contact);
        }
      )
      resolve(contacts);
    })
    
    this.close();
    return contacts as ContactStored[];
  }
}

export default ContactsStore;
