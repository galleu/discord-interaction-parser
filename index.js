const options = request.data.options ? Object.fromEntries(new Map(request.data.options.map(o => {
    if (o.options) {
        return [o.name, o.options ?  Object.fromEntries(new Map(o.options.map(v => [v.name, v.value]))) : null]
    } else {
        return [o.name, o.value || null]
    }
}))) : {};