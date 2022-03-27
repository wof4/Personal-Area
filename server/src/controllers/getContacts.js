const Contact = require('../models/Contact');
const User = require('../models/User');


module.exports = async (req, res) => {

    try {
        const { userId } = req.query
        
        const userData = await User.findOne({ _id: userId })

        const contacts = await Contact.find({ _id: { $in: userData.contacts } })

        res.json({ statusCode: 200, message: "Список контактов обновлен", contacts })

    } catch (e) {
        return res.status(400).json({ message: "Ошибка при поиске пользователей" })
    }
};