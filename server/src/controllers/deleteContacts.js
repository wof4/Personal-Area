
const Contact = require('../models/Contact');
const User = require('../models/User');

module.exports = async (req, res) => {

    try {
        const { contactId, userId } = req.query

        await User.updateOne({ _id: userId }, { $pull: { contacts: { $in: contactId } } },)

        await Contact.deleteOne({ _id: contactId })

        res.json({ statusCode: 200, message: "Контакт удален" })

    } catch (e) {

        return res.json({ statusCode: 400, message: "Ошибка при удалении контакта" })
    }
};
