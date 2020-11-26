const User = require('../model/User');

module.exports = {
    async store(req, res) {
        const { firstName, lastName, userName, email } = req.body;

        let user = await User.findOne({ email });

        if(!user) {
            user = await User.create({
                firstName,
                lastName,
                userName,
                email,
            });

            return res.status(201).json(user);
        } else {
            return res.status(400).json({ error: 'Usuario já cadastrado'});
        }
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