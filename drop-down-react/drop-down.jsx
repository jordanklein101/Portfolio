import React from 'react'
import providerService from '@app/services/provider.service'

class LeadsPaidDropDown extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            dropDownItems: []
        }
    }

    componentDidMount() {
        providerService.readAll()
            .then(data => {
                this.setState({ selectValue: 0 })
                let blank = {
                    providerName: 'Provider', _id: 0
                }
                let newOptions = data.items
                newOptions.unshift(blank)
                this.setState({ dropDownItems: newOptions })
            })
            .catch(err => {
                tostada.toaster({
                    message: 'Could Not Read Drop Down Info',
                    level: 'error'
                })
            })
    }

    render() {
        const options = this.state.dropDownItems ? this.state.dropDownItems.map(item => {
            return <option key={item._id} value={item._id} name={item.providerName}>{item.providerName}</option>
        }) : <div> Loading... </div>

        return (
            <select onChange={this.props.filterByProviderId} >
                {options}
            </select>
        )
    }
}
export default LeadsPaidDropDown