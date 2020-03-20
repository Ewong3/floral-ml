const combineUrl = (root, params) => {
    const parameters = Object.entries(params).map(([key, value]) => {
        return `${key}=${value}`;
    }).join('&');

    return `${root}${parameters}`;
}

export {
    combineUrl,
};