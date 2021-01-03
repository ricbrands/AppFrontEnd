import api from './APIService'

export async function login(user, password) {

    const response = await api.post('/login', {
        login: user,
        password: password
    })

    return response.data
}