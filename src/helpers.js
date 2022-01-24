const choice = (items) => {
    const randomIdx = Math.floor(Math.random()*items.length);
    return items[randomIdx];
};

const remove = (items, item) => {
    const idx = items.indexOf(item);
    items = items.slice(0,idx).concat(items.slice(idx+1));
    return items;
};

export {choice, remove}