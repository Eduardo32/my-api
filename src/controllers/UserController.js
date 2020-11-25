const User = require('../schema/User');

module.exports = {
    async store(req, res) {
        const { firstName, lastName, userName, email } = req.body;

        //let user = await Participante.findOne({ email });

        const participante = await User.create({
            firstName,
            lastName,
            userName,
            email,
        });
    
        return res.json(participante);
    },


    async index(req, res) {
        const user = await User.find();

        return res.json(user);
    },

    /*
    async update(req, res) {
        const { nome, email, amigo } = req.body;

        const participante = await Participante.findByIdAndUpdate(
            req.params.id, {
                nome,
                email,
                amigo,
            }
        );

        return res.json(participante);
    },

    async destroy(req, res) {
        await Participante.deleteOne({ _id: req.params.id });

        return res.json({"mensagem": "ok"});
    }
    //*/
};