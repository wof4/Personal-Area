const User = require('../models/User');


module.exports = async (req, res) => {

    try {
        const userData = await User.findOne({ _id: req.query.id })
        userData.password = req.query.password

        res.json({ statusCode: 200, message: "Ваши данные успешно получены", userData })
    } catch (e) {
        return res.json({ statusCode: 400, message: "Ошибка при получении данных" })
    }
};
