import UserViewModel from '../models/view/user.ViewModel';

function getUserInfo() {
    const userView = new UserViewModel('petran', 'petranb2@gmail.com');
    return userView;
}

export default { getUserInfo };