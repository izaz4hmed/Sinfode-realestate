import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
export default function Framepage() {

  const [state, setState] = React.useState({
    right: false,
    top: false,
    left: false,
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
  <>
   
    <div>
      {['right', '', '', ''].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    <div className='frame bg-light text-dark'>

<h4>Tell us what you crave</h4>
<hr  className='hrtage' />
<p>Not only are our meals deliciously homely, they are also customisable.
   Pick and choose from our varied menu on the app and we’ll serve it up, piping hot.</p>
  <br /> <br /> <br /> <br />
  <h4>
    All payments and dues, in one place
  </h4>
  <hr  className='hrtage' />
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
   Consectetur error eius sunt voluptate excepturi atque,
    reprehenderit voluptatem. Necessitatibus vitae harum eos
     unde culpa nisi sint nemo quisquam, qui, architecto quibusdam
      eveniet ut magni nesciunt repellat pariatur tempora omnis incidunt,
       expedita molestias? Nesciunt placeat sint sunt quasi magnam 
       necessitatibus voluptatibus aliquam.
</p> <br /> <br /> <br /> <br />
<h4>Be heared.Without saying a word</h4>
<hr  className='hrtage' />
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
  Id laborum ipsum atque optio nobis perferendis soluta impedit 
  fugit reiciendis adipisci?</p>
</div>
    </>
  )
}
