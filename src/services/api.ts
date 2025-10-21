import { IprofileData, IPutProfileData, NameValues } from "@/interfaces/global";

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

export const verifyUser = async (data: NameValues) => {

    data.cpf = data.cpf.replace(/\D/g, "");

    const BASE_URL: string = `${import.meta.env.VITE_API_URL}?cpf=${data.cpf}&password=${data.password}`;

    try {
        const response = await fetch(BASE_URL, { method: "GET" });
        const data = await response.json();
        if (data.length > 0) {
            const user: IprofileData = data[0];
            localStorage.setItem("userId", user.id);
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
    }
}

export const updateUser = async (data: NameValues, id: string) => {
    data.cpf = data.cpf.replace(/\D/g, "");

    const BASE_URL: string = `${import.meta.env.VITE_API_URL}${id}`;

    const dataUpdate: IPutProfileData = {
        name: data.name.trim(),
        cpf: data.cpf.trim(),
        age: parseInt(data.age),
        password: data.password.trim(),
    };
    try {
        const response = await fetch(BASE_URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataUpdate),
        });

        if (response.status !== 200) {
            console.error("Failed to update user:", response.statusText);
            return false;
        } else {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log(`Error update User: ${error}`);
    }
};

