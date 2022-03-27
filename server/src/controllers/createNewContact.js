
const Contact = require('../models/Contact');

module.exports = async (req, res) => {
    try {
        const { name, phone, email, telegram } = req.body

        const contact = new Contact({ name: name, phone: phone, email: email, telegram: telegram })

        await contact.save()

        res.json({ statusCode: 200, message: "Контакт добавлен, обновление ..." })
    } catch (e) {
        return res.json({ statusCode: 400, message: "Ошибка при добавлении контакта" })
    }
};
