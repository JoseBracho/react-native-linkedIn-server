function stringArray ( array = [], id ) {
    const arr = [];
    array.map(value => {
        arr.push(value?.sender)
    })
    arr.push(id);
    return arr;
}

module.exports = {
    stringArray
}