const User = require('../schema/User');

module.exports = {
    async store(req, res) {
        const { firstName, lastName, userName, email } = req.body;

        const user = await User.create({
            firstName,
            lastName,
            userName,
            email,
        });
    
        return res.json(user);
    },


    async index(req, res) {
        const user = await User.find();

        return res.json(user);
    },


    async update(req, res) {
        const { firstName, lastName, userName, email, } = req.body;

        await User.updateOne(
            {_id: req.params.id}, 
            {
                firstName,
                lastName,
                userName,
                email
            }
        );

        return res.json({"mensagem": "ok"});
    },

    
    async delete(req, res) {
        await User.deleteOne({ _id: req.params.id });

        return res.json({"mensagem": "ok"});
    }

};