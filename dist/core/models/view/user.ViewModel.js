"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserViewModel {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    getUsername() {
        return this.username;
    }
    setUsername(username) {
        this.username = username;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
}
exports.default = UserViewModel;
//# sourceMappingURL=user.ViewModel.js.map