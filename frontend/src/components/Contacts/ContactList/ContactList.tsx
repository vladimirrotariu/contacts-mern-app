
import { useEffect, useState } from "react";
import { ContactStored } from "../../../utils/types";
import Contact from "../Contact/Contact";
import "./ContactList.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";

const ContactList = () => {
  let content;
  const [loadedContacts, setLoadedContacts] = useState([] as ContactStored[]);

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await fetch("http://localhost:5000/contacts");

      const responseData = await response.json() as { contacts: ContactStored[] };

      setLoadedContacts(responseData.contacts);
    };

    fetchContacts();
  });

  if (!loadedContacts || loadedContacts.length === 0) {
    content = <p>You haven&apos;t created any contact yet.</p>;
  } else {
    content = (
      <ul className="contact-list">
        {loadedContacts.map((contact) => (
          <Contact key={contact.id} name={contact.name} age={contact.age} email={contact.email} phone={contact.phone} />
        ))}
      </ul>
    );
  }

  return <section className="contacts">{content}</section>;
};

export default ContactList;
