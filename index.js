const options = request.data.options ? Object.fromEntries(new Map(request.data.options.map(o => {
    if (o.options) {
        return [o.name, Object.fromEntries(new Map(o.options.map(v => [v.name, v.value])))]
    } else {
        return [o.name, o.value]
    }
}))) : {};