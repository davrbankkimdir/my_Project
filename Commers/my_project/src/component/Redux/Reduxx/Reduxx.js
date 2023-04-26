const types = []
export default function Reduxx(state = types, action) {
    if (action.type === "nimadir") {
        let shop = [...state]
        shop.push(action.payload)
        console.log(shop);
        return state = shop
    }
    return state
}