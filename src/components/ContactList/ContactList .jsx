import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);
    
    const handleDelete = id => {
        dispatch(deleteContact(id));
    };    

    return (
        <ul className={css.list}>
              {contacts.map((contact) => {
                return <li key={contact.id}>
                    <Contact contact={contact} onDelete={handleDelete}></Contact>
                </li>;
            })}
        </ul>
    )
}
export default ContactList;