export const actualLibraryUpdateToStore = (actualLibrary) => {
    localStorage.setItem('actualLibrary', JSON.stringify(actualLibrary));
}

export const actualLibraryFromStore = () => {
    return JSON.parse(localStorage.getItem('actualLibrary'));
}

export const saveIdsArrayToStore = (data, nameOfArray) => {
    localStorage.setItem(nameOfArray, JSON.stringify(data));
}

export const getIdsArrayFromStore = (nameOfArray) => {
    return JSON.parse(localStorage.getItem(nameOfArray));
}

export const pushToStore = (id, nameOfArray) => {
const idsArrayFromStore = getIdsArrayFromStore(nameOfArray);
console.log(`to jest idsArrayFromStore`)
console.log(idsArrayFromStore)
console.log(typeof idsArrayFromStore)
const updatedIdsArray = idsArrayFromStore.push(id);
console.log(`to jest update idsArrayFromStore`)
console.log(idsArrayFromStore)
console.log(typeof idsArrayFromStore)

saveIdsArrayToStore(updatedIdsArray, nameOfArray);
const fromstore = getIdsArrayFromStore(nameOfArray);
console.log(`to jest update fromstore`)
console.log(fromstore)
console.log(typeof fromstore)
}

export const removeFromStore = (id, nameOfArray) => {
    const idsArrayFromStore = getIdsArrayFromStore(nameOfArray);
    const updatedIdsArray = idsArrayFromStore.filter(e => e != id);
    saveIdsArrayToStore(updatedIdsArray, nameOfArray);
}