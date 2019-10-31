import React from 'react'

class Contacts extends React.Component {
    state = {
        contacts: []
    }
    
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
            this.setState({ contacts: data })
            console.log(this.state.contacts)
        })
        .catch(console.log)
    }

    render() {
        return (
            <ul>
                {this.state.contacts.map((contact) => (
                    <li>{contact.name}</li>
                ))}
            </ul>
        )
    }
}

export default Contacts