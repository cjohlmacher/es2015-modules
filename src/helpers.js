const choice = (items) => {
    const randomIdx = Math.floor(Math.random()*items.length);
    return items[randomIdx];
};

const remove = (items, item) => {
    const idx = items.find((i) => {
        return i === item;
    });
    return idx;
};

export {choice, remove}