function _updateNotes(req, res) {
    leadsService.updateNotesInLeads(req.params.id, req.body, req.query)
        .then(() => {
            if (req.query['disable-notification'] === 'true') {
                const responseModel = new responses.SuccessResponse()
                res.status(200).json(responseModel)
            } else {
                leadsService.getUserByLeadId(req.params.id)
                    .then(user => {
                        mailService.sendNoteLeadStatusChange(user.userData.email, req.body.note)
                            .then(() => {
                                const responseModel = new responses.SuccessResponse()
                                res.status(200).json(responseModel)
                            })
                            .catch(err => {
                                res.status(500).send(new responses.ErrorResponse(err))
                            })
                    })
                    .catch(err => {
                        res.status(500).send(new responses.ErrorResponse(err))
                    })
            }

        })
        .catch(err => {
            res.status(500).send(new responses.ErrorResponse(err))
        })
}