export const saveIdsArrayToStore = (data, nameOfArray) => {
    localStorage.setItem(nameOfArray, JSON.stringify(data));
}

export const getIdsArrayFromStore = (nameOfArray) => {
    return JSON.parse(localStorage.getItem(nameOfArray));
}

export const pushToStore = (id, nameOfArray) => {
const idsArrayFromStore = getIdsArrayFromStore(nameOfArray);
const updatedIdsArray = idsArrayFromStore.push(id);
saveIdsArrayToStore(updatedIdsArray, nameOfArray);
}

export const removeFromStore = (id, nameOfArray) => {
    const idsArrayFromStore = getIdsArrayFromStore(nameOfArray);
    const updatedIdsArray = idsArrayFromStore.filter(e => e != id);
    saveIdsArrayToStore(updatedIdsArray, nameOfArray);
}