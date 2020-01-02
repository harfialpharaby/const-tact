'use strict'

const {Contact} = require('../models');

class ContactController {
    static getAllContacts(req, res) {
        Contact.findAll()
            .then((arrContacts) => {
                res.send(arrContacts);
            }).catch((err) => {
                res.send(err);
            });
    }

    static getContactById(req, res) {
        const options = {
            where: {
                id: req.params.id
            }
        };

        Contact.findOne(options)
            .then((contact) => {
                res.send(contact);
            }).catch((err) => {
                res.send(err);
            });
    }

    static addNewContact(req, res) {
        const values = {
            fullName: req.body.fullName,
            phone: req.body.phone
        };
        const options = {
            where: values
        };

        Contact.findOne(options)
            .then((contactFound) => {
                if (contactFound) {
                    throw 409;
                }
                return Contact.create(values);
            }).then((done) => {
                res.sendStatus(201);
            }).catch((err) => {
                res.sendStatus(err);
            });
    }

    static editContact(req, res) {
        const values = req.body;
        const options = {
            where: {
                id: req.params.id
            }
        };

        Contact.findOne({where: values})
            .then((duplicateContact) => {
                if (duplicateContact) {
                    throw 409
                }
                return Contact.update(values, options);
            }).then((result) => {
                res.sendStatus(200);
            }).catch((err) => {
                res.sendStatus(err);
            });
    }

    static deleteContact(req, res) {
        const options = {
            where: {
                id: req.params.id
            }
        };

        Contact.destroy(options)
            .then((result) => {
                if (!result) {
                    throw 404;
                }
                res.sendStatus(200);
            }).catch((err) => {
                res.sendStatus(err);
            });
    }
}

module.exports = {
    ContactController
};
