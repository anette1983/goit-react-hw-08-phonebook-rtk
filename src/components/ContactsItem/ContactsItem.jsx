import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import Divider from '@mui/material/Divider';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';

function ContactsItem({ contact }) {
  const [delId, setDelId] = useState();
  const dispatch = useDispatch();

  const [deleteContact, result] = useDeleteContactMutation();
  console.log('res :>> ', res);

  const handleDelete = id => {
    setDelId(id);
    // dispatch(deleteContact(id));
    deleteContact(id);
    // диспатч вже не потрібен???
    return toast.success(`Contact deleted successfully`);
  };

  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton
            // color='warning'
            edge="end"
            aria-label="delete"
            onClick={() => handleDelete(contact.id)}
            disabled={delId === contact.id}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar
            alt={contact.name}
            src={
              contact.name
                ? `https://ui-avatars.com/api/?name=${contact.name[0]}&length=1&background=random&size=262`
                : 'https://ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png'
            }
          >
            {/* <ImageIcon /> */}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={contact.name} secondary={contact.number} />
      </ListItem>
      <Divider variant="inset" />
    </>
  );
}
ContactsItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactsItem;

// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contacts/operations';
// import StyledItem from './ContactsItem.styled';
// import StyledButton from 'components/Button.styled';
// import { useState } from 'react';
// import { toast } from 'react-toastify';

// function ContactsItem({ contact }) {
//   const [delId, setDelId] = useState();
//   const dispatch = useDispatch();

//   const handleDelete = id => {
//     setDelId(id);
//     dispatch(deleteContact(id));
//     return toast.success(`Contact deleted successfully`);
//   };

//   return (
//     <StyledItem>
//       <div>
//         <span>{contact.name}:</span>
//         <span>{contact.number}</span>
//       </div>
//       <StyledButton
//         type="button"
//         onClick={() => handleDelete(contact.id)}
//         disabled={delId === contact.id}
//       >
//         {delId === contact.id ? 'Deleting...' : 'Delete'}
//       </StyledButton>
//     </StyledItem>
//   );
// }
// ContactsItem.propTypes = {
//   id: PropTypes.string,
//   name: PropTypes.string,
//   number: PropTypes.string,
// };

// export default ContactsItem;
