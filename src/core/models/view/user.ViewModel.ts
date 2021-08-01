class UserViewModel {
    private username;
    private email;
    constructor(username: string, email: string) {
        this.username = username;
        this.email = email;
    }
    getUsername() {
        return this.username;
    }

    setUsername(username: string) {
        this.username = username;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email: string) {
        this.email = email;
    }

}

export default UserViewModel;