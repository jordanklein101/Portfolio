function _login(model) {
    return conn.db().collection('leadr_user').find({ email: { $eq: model.email } })
        .map(user => {
            return user
        })
        .next()
}