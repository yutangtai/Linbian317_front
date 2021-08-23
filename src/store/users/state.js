export default function () {
  return {
    jwt: {
      token: '',
      // 時間戳記初始值
      received: 0
    },
    user: {
      role: 0,
      account: '',
      email: '',
      phone: ''
    }
  }
}
