import UserViewModel from '../models/view/user.ViewModel';

function getUserList(): UserViewModel[] {
    return [new UserViewModel('petran', 'petranb2@gmail.com'), new UserViewModel('petranb4', 'petranb4@gmail.com'), new UserViewModel('petranb3', 'petranb3@gmail.com')]
}

export default { getUserList };