import React from 'react';
import Form from 'react-jsonschema-form'

class ContactUsForm extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {

        const formSchema = {
            type: 'object',
            title: 'DROP US A LINE OR JUST SAY HELLO',
            required: ['name', 'email', 'phoneNumber', 'subject', 'message'],
            properties: {
                name: {
                    type: 'string',
                    title: 'Name'
                },
                email: {
                    type: 'string',
                    title: 'Email',
                    format: 'email'
                },
                phoneNumber: {
                    type: 'string',
                    title: 'Phone Number',
                },
                subject: {
                    type: 'string',
                    title: 'Subject'
                },
                message: {
                    type: 'string',
                    title: 'Message'
                }
            }
        }

        const uiSchema = {
            message: { 'ui:widget': 'textarea' }
        }

        return (
            <div>
                <Form
                    noHtml5Validate={true}
                    schema={formSchema}
                    uiSchema={uiSchema}
                    formData={this.props.item}
                    onSubmit={this.props.onCreate}
                >
                    <div className="row">
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-primary"><i className="fa fa-check"></i> SEND MESSAGE</button>
                        </div>
                    </div>
                </Form>
            </div>
        )
    }
}

export default ContactUsForm