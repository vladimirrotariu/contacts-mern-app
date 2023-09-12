import { useEffect, useState } from "react";
import ContactList from "../Contacts/ContactList/ContactList";
import NewContactForm from "../Contacts/NewContactForm/NewContactForm";
import Header from "../Header/Header";
import "./App.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      setIsLoading(true);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await fetch("http://localhost:5000/contacts");

      setIsLoading(false);
    };

    fetchContacts();
  }, []);



  const addContactHandler = async (contactName: string, contactAge: string, contactEmail: string, contactPhone: string) => {
    try {
      const newContact = {
        name: contactName,
        age: +contactAge,
        email: contactEmail,
        phone: contactPhone
      };

      let hasError = false;

      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        body: JSON.stringify(newContact),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        hasError = true;
      }

      const responseData = await response.json();

      if (hasError) {
        throw new Error(responseData.message);
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alert(error.message || "Something went wrong!");
    }
  };

  const textButtonAddContact = "ADD CONTACT";
  return (
    <>
      <Header />
      <main>
        <NewContactForm textButton={textButtonAddContact} onAddContact={addContactHandler} />
        {isLoading && <p className="load_flag">Loading your contacts...</p>}
        {!isLoading && <ContactList />}
      </main>
    </>
  );
};

export default App;
