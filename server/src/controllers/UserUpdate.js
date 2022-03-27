const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = async (req, res) => {

    try {
        const { _id, name, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 12)
        await User.updateOne({ _id: _id }, { $set: { name: name, password: hashedPassword } })

        res.json({ statusCode: 200, message: "Ваши данные обновлены", userData: { _id, name, password } })

    } catch (e) {
        return res.json({ statusCode: 400, message: "Ошибка обновления данных" })
    }
};
