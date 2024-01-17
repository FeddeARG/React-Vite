import data from '../data/data.json'

export const getCat = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000)
    })
}


export const getId = (id) => {
    return new Promise ((resolve, reject) => {
        const item = data.find((item) => item.id === id)
        
        if (item) {
            resolve(item)
        } else {
            reject({
                Error: 'No existe el item'
            })
        }
    })
}
