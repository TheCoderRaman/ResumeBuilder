import ls from 'localstorage-slim';

export default function createLocalStorageSlim(){
    return ls;
}

export const localStorage = createLocalStorageSlim();