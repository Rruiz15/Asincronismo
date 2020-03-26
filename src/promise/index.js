const somethingWillHappen = () => {
    return new Promise((resolve,reject)=>{
        if (true) {
            resolve('hey!')
        } else{
            reject('upps!')
        }
    })
}
somethingWillHappen()
    .then(Response => console.log(Response))
    .catch(error => console.log(error))

const somethingWillHappen2 = () => {
    return new Promise((resolve,reject)=>{
        if (true) {
            setTimeout(() => {
                resolve('true')
            }, 2000);
        } else{
            const error = new Error('upps!')
            reject(error)
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(error => console.log(error))


Promise.all([somethingWillHappen(),somethingWillHappen2()])
.then(response => console.log('array of results',response))
.catch(error => console.log(error))