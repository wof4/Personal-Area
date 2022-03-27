const User = require('../models/User');
const bcrypt = require('bcryptjs');


module.exports = async (req, res) => {

    try { 
        const { name, password, phone, email, telegram } = req.body;

        const hashedPassword = await bcrypt.hash(password, 7)
        const candidate = await User.findOne({ name, hashedPassword })

        if (candidate) {
            return res.json({ statusCode: 401, message: "Такой пользователь уже зарегистрирован" })
        }

        const user = new User({ name, password: hashedPassword, phone, email, telegram })
        await user.save()
        user.password = password

        res.json({ statusCode: 200, message: "Новый пользователь успешно зарегистрирован", user })

    } catch (e) {
        return res.status(401).json({ statusCode: 401, message: "Ошибка при регистрации" })
    }
};
