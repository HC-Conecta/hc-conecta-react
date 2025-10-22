interface IContact {
    type: 'phone' | 'email' | 'address';
    label: string;
    value: string;
    description?: string;
    text: string
}

export default IContact;