import { PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
  type: "button" | "submit";
  textButton: string;
  actionOnClick: () => void;
}

export interface InputProps extends PropsWithChildren {
  id: string;
  label: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface NewContactFormProps {
  onAddContact: (enteredName: string, enteredAge: string, enteredEmail: string, enteredPhone: string) => void,
  textButton: string
}

export interface ContactProps {
  name: string,
  age: number,
  email: string,
  phone: string
}

export interface ContactStored extends ContactProps {
  id: number
}




