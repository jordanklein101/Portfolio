class LeadsPaid extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
        this.filterByProviderId = this.filterByProviderId.bind(this)
    }


    filterByProviderId(e) {
        const selectedProviderValue = e.target.value
        this.filterItemsForEachDropDown()
        let finalLeads = this.state.filteredLeads;
        if (selectedProviderValue != 0) {
            finalLeads = this.state.filteredLeads.filter(item => {
                return item.providerId == selectedProviderValue
            })
        }
        this.setState({
            items: finalLeads
        })
    }

    render() {
        return (
            <div>
                <label>Search By Provider</label>
                <DropDown filterByProviderId={this.filterByProviderId} />
            </div>
        )
    }
}