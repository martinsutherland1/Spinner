class Request {
    async get(url) {
        const res = await fetch(url)
        return await res.json()
        
    }
    delete(url) {
        return fetch(url, {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'}
        })
    }
    post(url, payload){
        console.log(url)
        return fetch(url, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
        })
    }
    patch(url, payload){
        return fetch(url, {
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
        })
    }
    }
    export default Request;