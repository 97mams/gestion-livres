export const path = (item: String) => {
    if (item.includes(' ')) {
        const text = item.split(' ')
        return text[0] + '_' + text[1]
    }
    return item
}