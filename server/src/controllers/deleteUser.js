
const Contact = require('../models/Contact');
const User = require('../models/User');

module.exports = async (req, res) => {

    try {
        const { userId } = req.query

        const user = await User.findOne({ _id: userId })

        await User.updateOne({ _id: userId }, { $pull: { contacts: { $in: user.contacts } } },)

        await User.deleteOne({ _id: userId })

        res.json({ statusCode: 200, message: "Контакт удален" })

    } catch (e) {

        return res.json({ statusCode: 400, message: "Ошибка при удалении контакта" })
    }
};
