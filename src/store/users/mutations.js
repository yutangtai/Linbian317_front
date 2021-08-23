export function login (state, data) {
  state.jwt.token = data.token
  state.jwt.received = new Date().getTime()
  state.user.account = data.account
  state.user.role = data.role
  state.user.email = data.email
  state.user.phone = data.phone
}

export function logout (state) {
  state.jwt = {
    token: '',
    received: 0
  }
  state.user = {
    role: 0,
    account: '',
    email: '',
    phone: ''
  }
}
