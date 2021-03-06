import Storage from './lstorage'
export default {
  authenticate (ctx, data) {
    return ctx.$http.post(Storage.get('serverDir') + '/user/authenticate', data)
  },
  signin (ctx, data) {
    if (data._id) {
      return ctx.$http.put(Storage.get('serverDir') + '/user/signin', data)
    } else {
      return ctx.$http.post(Storage.get('serverDir') + '/user/signin', data)
    }
  },
  deleteImage (ctx, data) {
    return ctx.$http.put(Storage.get('serverDir') + '/chat/upload', data)
  },
  user: null,
  userShow: {},
  setUserShow (some) {
    this.userShow = some
  },
  getUser () {
    return Storage.get('user')
  },
  setUser (newUser) {
    this.user = Storage.set('user', newUser)
  },
  get (ctx, data) {
    return ctx.$http.get(Storage.get('serverDir') + '/user/' + data)
  },
  testUser (ctx, data) {
    return ctx.$http.post(Storage.get('serverDir') + '/user/test', data)
  },
  logout () {
    Storage.clearLocal(true);
    this.user = null
  },
  init () {
    this.user = Storage.get('user')
  },
  user_acces (perm = 'authenticate') {
    if (this.getUser() && perm !== 'authenticate') {
      return this.user.rol === perm
    }
    if (perm === 'authenticate') {
      if (this.getUser()) {
        return true
      }
    }
    return false
  }
}
