import api from './APIService'

export async function getMembers(token) {

    const response = await api.get('/member', { headers: {
        'x-access-token': token
    }})

    return response.data
}