
const Contact = require('../models/Contact');
const User = require('../models/User');

module.exports = async (req, res) => {
    try {
        const { name, phone, email, telegram } = req.body.data
        const { userId } = req.body

        const contact = new Contact({ name: name, phone: phone, email: email, telegram: telegram })
        await User.updateOne({ _id: userId }, { $push: { contacts: contact._id } })

        await contact.save()

        res.json({ statusCode: 200, message: "Контакт добавлен, обновление ..." })
    } catch (e) {
        return res.json({ statusCode: 400, message: "Ошибка при добавлении контакта" })
    }
};
