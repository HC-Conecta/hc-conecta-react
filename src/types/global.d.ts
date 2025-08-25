import React from "react";

export interface NavigationItem {
  name: string;
  path: string;
  description?: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
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
}

export interface ISteps {
  icon: string | React.ReactElement;
  title: string;
  description: string;
  details: string[];
  button?: string;
  existButton?: boolean;
}