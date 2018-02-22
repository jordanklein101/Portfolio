import React from 'react';
import tostada from '@app/helpers/Tostada.js'
import contactUsService from '../../services/contact-us.Service.js'
import ContactUsForm from '../contact-us/contact-us.form.component.jsx'
import GoogleMap from '../contact-us/google-map.component.jsx'

class Contact extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            item: {}
        }
        this.onCreate = this.onCreate.bind(this)
    }

    onCreate(e) {
        let formData = e.formData
        let phoneNumberParsed = formData.phoneNumber.replace(/[\(\)\-\s]/g, '')
        formData.phoneNumber = Number(phoneNumberParsed)
        contactUsService.create(formData)
            .then(response => {
                tostada.toaster({
                    message: 'Message Sent',
                    level: 'success'
                })
                this.setState({
                    item: {}
                })
            })
            .catch((error) => {
                tostada.toaster({
                    message: 'Error! Could Not Submit Information',
                    level: 'error'
                })
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-7 col-sm-push-5">
                                <ContactUsForm item={this.state.item} onCreate={this.onCreate} />
                            </div>
                            <div className="col-sm-5 col-sm-pull-7">
                                <div className="height-400 grayscale">
                                    <GoogleMap />
                                </div>
                                <ul className="list-unstyled list-icons">
                                    <li><i className="fa fa-map-marker"></i> <strong>Address:</strong> Street Name, City Name, Country</li>
                                    <li><i className="fa fa-phone"></i> <strong>Phone:</strong> <a href="tel:1800-555-1234">1800-555-1234</a></li>
                                    <li><i className="fa fa-envelope"></i> <strong>Email:</strong> <a href="mailto:mail@yourdomain.com">mail@yourdomain.com</a></li>
                                </ul>
                                <div className="relative clearfix">
                                    {/* <!-- social icons --> */}
                                    <a href="#" className="social-icon social-icon-border social-icon-sm social-icon-transparent pull-left social-facebook" data-toggle="tooltip" data-placement="top" title="Facebook">
                                        <i className="icon-facebook"></i>
                                        <i className="icon-facebook"></i>
                                    </a>
                                    <a href="#" className="social-icon social-icon-border social-icon-sm social-icon-transparent  pull-left social-twitter" data-toggle="tooltip" data-placement="top" title="Twitter">
                                        <i className="icon-twitter"></i>
                                        <i className="icon-twitter"></i>
                                    </a>
                                    <a href="#" className="social-icon social-icon-border social-icon-sm social-icon-transparent pull-left social-instagram" data-toggle="tooltip" data-placement="top" title="Instagram">
                                        <i className="icon-instagram"></i>
                                        <i className="icon-instagram"></i>
                                    </a>
                                    <a href="#" className="social-icon social-icon-border social-icon-sm social-icon-transparent  pull-left social-gplus" data-toggle="tooltip" data-placement="top" title="Google Plus">
                                        <i className="icon-google-plus"></i>
                                        <i className="icon-google-plus"></i>
                                    </a>
                                    <a href="#" className="social-icon social-icon-border social-icon-sm social-icon-transparent pull-left social-pinterest" data-toggle="tooltip" data-placement="top" title="IPiterest">
                                        <i className="icon-pinterest"></i>
                                        <i className="icon-pinterest"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact;