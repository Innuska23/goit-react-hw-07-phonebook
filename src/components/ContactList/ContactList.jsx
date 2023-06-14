import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../redux/selectors';
import { deleteContact } from '../redux/operations';
import { useDispatch } from 'react-redux';

import { Button, List, ListItem } from './ContactList.styled';

function ContactList({ id }) {
    const dispatch = useDispatch();
    const onDelete = id => {
        dispatch(deleteContact(id));
    };
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const filterContacts = contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter)
    );
    return (
        <List>
            {filterContacts.map(({ id, name, number }, idx) => (
                <ListItem key={id}>
                    <span>{idx + 1}. {name}: {number} </span>
                    <Button onClick={() => onDelete(id)}>delete</Button>
                </ListItem>
            ))}
        </List>
    );
}

export default ContactList;