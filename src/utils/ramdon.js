/* obtener los elementos de una lista */

export const getRamdon = (list) => {
    const randomIndex = Math.floor (Math.random() * list.length)
    return list[randomIndex]
}