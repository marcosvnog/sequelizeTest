import user from './databese.js';

function createUser(req, res) {
    const {
        name,
        email,
        password
    } = req.body

    console.log(name,email,password);

    try {
        user.create({
            name,
            email,
            password
        })

        res.status(200).send();
    }
    catch(err) {
        console.error(err);
        res.status(400).send({message: err});
    }
}

export default createUser;