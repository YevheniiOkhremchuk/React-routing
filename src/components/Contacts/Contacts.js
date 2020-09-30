import React, {Component} from 'react';
import Contact from './Contact';
import './Contacts.css';
import man from './image/man.png';
import woman from './image/woman.png';
import anonym from './image/anonym.png';

const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
},];

class Contacts extends Component {
    state = {
        contacts: [...contacts],
        search: '',
      }

    setGender(gender) {
        if (gender === 'male') {
          return <img src={man} alt='man'></img>;
        } else if (gender === 'female') {
          return <img src={woman} alt='woman'></img>;
        } else {
          return <img src={anonym} alt='anonym'></img>;
        }
      }

    handleSearchChange  = (e) => {
        this.setState({search: e.target.value})
    
    this.setState({
        contacts: [...contacts.filter((el) => {
          return (
            el.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
            el.lastName.toLowerCase().includes(e.target.value.toLowerCase()) ||
            el.phone.includes(e.target.value)
            )
          })]
      })
    }

    render() {
        return (
          <div className='contacts'>
            <div className='search-contacts'>
              <input value={this.state.search} onChange={this.handleSearchChange}placeholder='Search among contacts' />
            </div>
             {this.state.contacts.map((contact, i) => (
              <Contact
                firstName={contact.firstName}
                lastName={contact.lastName}
                gender={this.setGender(contact.gender)}
                phone={contact.phone}
                key={i} 
                />
              ))}
          </div>
        );
      }
   }

    export default Contacts;