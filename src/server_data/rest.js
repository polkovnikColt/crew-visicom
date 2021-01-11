export const getBirthday = async () => {
    const serverData = await fetch('/employees/birthday');
    const data = await serverData.json();
    return data;
}

export const getEmployees = async () => {
    const serverData = await fetch('/employees/all');
    const data = await serverData.json();
    return data
}

export const getLinks = async () => {
    const serverData = await fetch('/tools/links');
    const data = await serverData.json()
    return data;
}

export const getAdmins = async () => {
    const serverData = await fetch('/admins/all');
    const data = await serverData.json();
    return data;
}