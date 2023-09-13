import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";
dotenv.config();
const uri = process.env.DATABASE_URL;
let client;
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
};
const db = () => {
    return client.db(process.env.DATABASE_NAME);
};
class ContactsStore {
    async create(contact) {
        await connectMongoDB();
        const collection = db().collection("contacts");
        await collection.insertOne(contact);
    }
    async readAll() {
        await connectMongoDB();
        const collection = db().collection("contacts");
        const contactsCursor = collection.find({});
        const contactDocs = await contactsCursor.toArray();
        return contactDocs.map(doc => ({
            id: doc.id,
            name: doc.name,
            age: doc.age,
            email: doc.email,
            phone: doc.phone,
        }));
    }
}
export default ContactsStore;
//# sourceMappingURL=contacts-store-mongodb.js.map