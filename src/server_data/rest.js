export const getBirthday = async () => {
    const serverData = await fetch('/birthday');
    const data = await serverData.json();
    return data;
}

export const getEmployees = async () => {
    const serverData = await fetch('/employees');
    const data = await serverData.json();
    return data
}

export const getLinks = async () => {
    const serverData = await fetch('/links');
    const data = await serverData.json()
    return data;
}

export const getAdmins = async () => {
    const serverData = await fetch('/admins');
    const data = await serverData.json();
    return data;
}