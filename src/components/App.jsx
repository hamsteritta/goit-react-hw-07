import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contactsOps";
import ContactList from "./ContactList/ContactList ";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const loadContacts = async () => {
          await dispatch(fetchContacts());
        };
        loadContacts();
      }, [dispatch]);
    

    return (    
        <div>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </div>        
    )
}

export default App