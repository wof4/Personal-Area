const Contact = require('../models/Contact');


module.exports = async (req, res) => {

    try {
        const allContacts = await Contact.find()

        res.json({ statusCode: 200, message: "Список контактов обновлен", allContacts })

    } catch (e) {
        return res.status(400).json({ message: "Ошибка при поиске пользователей" })
    }
};