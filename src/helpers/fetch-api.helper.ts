const fetchApi = (path = '', method = '', body = {}, headers = {}) => {
    return new Promise((resolve, reject) => {
        fetch(path, {
            method: method,
            headers: headers,
            body: Object.keys(body).length ? JSON.stringify({ ...body }) : null
        })
            .then((response) => {
                const status = response.status;
                response.json()
                    .then(json => {
                        resolve({ data: json, status: status })
                    })
                    .catch(e => {
                        resolve({ data: [], status: status });
                    })
            })
            .catch(e => {
                resolve({ data: [], status: 0 });
            })
    });
};

export { fetchApi };