const Contact = require('../models/Contact');


module.exports = async (req, res) => {

    try {
        const { _id, name, phone, email, telegram } = req.body

        await Contact.updateOne({ _id: _id }, { $set: { name: name, phone: phone, email: email, telegram: telegram } })

        res.json({ statusCode: 200, message: "Обновление ..." })

    } catch (e) {
        return res.json({ statusCode: 400, message: "Ошибка обновлении контакта" })
    }
};
