
const Contact = require('../models/Contact');

module.exports = async (req, res) => {

    try {
        await Contact.deleteOne({ _id: req.query.contactId })

        res.json({ statusCode: 200, message: "Контакт удален" })

    } catch (e) {

        return res.json({ statusCode: 400, message: "Ошибка при удалении контакта" })
    }
};
