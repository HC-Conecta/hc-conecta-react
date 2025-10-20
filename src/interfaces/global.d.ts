import { Register } from '@/routes/registrar';
import React from "react";

export interface NavigationItem {
  name: string;
  path: string;
  description?: string;
}

export interface FormData {
  name: string;
  email: string;
  telephone: string;
  message: string;
  needsHelp: boolean;
  serviceType: string;
}

export interface Developer {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Contact {
  type: 'phone' | 'email' | 'address';
  label: string;
  value: string;
  description?: string;
  text: string
}

export interface ISteps {
  number?: number;
  tip?: string;
  icon?: string | React.ReactElement;
  title: string;
  description: string;
  details?: string[];
  button?: string;
  existButton?: boolean;
  url?: string
  buttonColor?: boolean;
  link?: true;
}


export interface IformValues {
  cpf: string;
  age: number;
  password: string;
}

export interface Ilocations {
  id: number;
  title: string;
  street: string;
  img: string;
  description: string;
  map: string;
  invertStyle?: boolean;
}

export interface NameValues  {
  email: string;
  password: string;
  cpf: string;
  name: string;
  age: string;
};

export interface ILoginContext {
    loggedIn: "true" | "false";
}

export interface IprofileData {
    id: string,
    name: string,
    cpf: string,
    age: number,
    password: string,
}

export interface IPutProfileData {
    name: string,
    cpf: string,
    age: number,
    password: string,
}

export interface emailData {
  name: string,
  email: string,
  telephone: string,
  serviceType: string,
  message: string
}