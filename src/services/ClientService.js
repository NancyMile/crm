import api from '../lib/axios'

export default {
    getClients() { 
        return api.get('/clients')
    },
    addClient(data) {
        return api.post('/clients', data)
    },
    getClient(id) {
        //console.log(id)
        return api.get('/clients/'+id)
    }
}