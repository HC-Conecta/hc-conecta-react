import { NameValues } from "@/interfaces/global";

export const createUser = async (data: NameValues) => {

    data.cpf = data.cpf.replace(/\D/g, "");

    const BASE_URL: string = `${import.meta.env.VITE_API_URL}`;

    const allData: NameValues = {
        ...data,
        name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
    }

    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(allData),
        });

        if (response.status != 201) {
            console.error('Failed to create post:', response.statusText);
        } else {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log(`Error create User: ${error}`);
    }
}