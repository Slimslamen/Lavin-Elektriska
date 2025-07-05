import { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Chip from '@mui/material/Chip';
import { BlogContext } from '../Context/BlogContext';

export default function BlogModal({post}) {
const BContext = useContext(BlogContext);


const { openBlogModal, setOpenBlogModal, setCloseBlogModal, closeBlogModal } = BContext

function closeModalfunction() {
        setCloseBlogModal(!closeBlogModal);
        setOpenBlogModal(false)
        console.log(post)
}

  return (
   <div>
      <Modal
        open={openBlogModal}
        onClose={closeModalfunction}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        aria-modal="true"
        role="dialog"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            maxWidth: 700,
            bgcolor: 'background.paper',
            borderRadius: 3,
            boxShadow: 24,
            overflow: 'hidden',
          }}
        >
          {/* Image + category tag */}
          <Box sx={{ position: 'relative' }}>
            <img
              src={post.image}
              alt={post.title + ' - bloggbild'}
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
              }}
            />
            <Chip
              label={post.category}
              sx={{
                position: 'absolute',
                top: 16,
                left: 16,
                maxWidth: '140px',
                textAlign: 'center',
                backgroundColor: '#66BEF0',
                color: 'white',
                fontWeight: 'bold',
              }}
              role="note"
              aria-label={post.category}
            />
            <Button
              onClick={closeModalfunction}
              sx={{
                position: 'absolute',
                top: 12,
                right: 12,
                minWidth: 32,
                width: 32,
                height: 32,
                borderRadius: '50%',
                fontWeight: 'bold',
                fontSize: '0.875rem',
                lineHeight: 1,
                color: '#333',
                backgroundColor: '#eee',
                '&:hover': {
                  backgroundColor: '#ccc',
                },
              }}
              aria-label="Stäng modal"
            >
              X
            </Button>
          </Box>

          {/* Content */}
          <Box sx={{ p: 4 }}>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                mb: 2,
                color: 'gray',
                fontSize: '0.875rem',
              }}
            >
            </Box>
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h3"
              sx={{ fontWeight: '10px', mb: 2, fontSize: '14px', color: '#555' }}
            >
              {post.miniContent}
            </Typography>

            <Typography
              id="modal-modal-description"
              sx={{ lineHeight: 1.6 }}
            >
              {post.content}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
