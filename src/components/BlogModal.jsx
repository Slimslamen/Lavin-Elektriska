import { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { BlogContext } from '../Context/BlogContext';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BlogModal({post}) {
  const BContext = useContext(BlogContext);


  const { openBlogModal, setOpenBlogModal, setCloseBlogModal, closeBlogModal } = BContext

function closeModalfunction() {
        setCloseBlogModal(!closeBlogModal);
        setOpenBlogModal(false)
}

  return (
    <div>
        <Modal
            open={openBlogModal}
            onClose={closeModalfunction}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            hidden={closeBlogModal}
        >
        <Box sx={{ ...style, position: 'relative' }}>
            <Button
            onClick={closeModalfunction}
            sx={{
                position: 'absolute',
                top: 8,
                right: 4,
                minWidth: '28px',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                fontWeight: 'bold',
                fontSize: '1rem',
                lineHeight: 1,
            }}
            >
            X
            </Button>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            {post.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {post.content}
            </Typography>
        </Box>
        </Modal>
    </div>
  );
}
