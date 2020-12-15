
export const getBirthday = async () => {
    const serverData = (await fetch('/birthday'));
    const data = await serverData.json();
    return data;
}

export const getEmployees = async () => {
    const serverData = (await fetch('/employees'));
    const data = await serverData.json()
    return data
}