import UserViewModel from 'src/core/models/view/user.ViewModel'
import userService from 'src/core/services/user.service'

test('example test', () => {
  const user = userService.getUserInfo()
  expect(user).toBeInstanceOf(UserViewModel)
})
