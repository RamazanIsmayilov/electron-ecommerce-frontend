
export const getUserRole = () => {
    const token = localStorage.getItem("token")
    if (token) {
        try {
            const payload = JSON.parse(atob(token.split('.')[1]))
            return payload.role
        } catch (error) {
            console.error('Token decryption failed:', error);
        }
    }
    return null
}

export const isAdmin = () => {
    const role = getUserRole()
    return role === "admin"
}