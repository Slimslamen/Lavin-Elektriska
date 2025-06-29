import React from 'react';
import ReactDOM from 'react-dom';
// import Modal from 'react-modal';

import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px'
  },
};

// Modal.setAppElement('#root'); 
//onClose={() => setOpenModal(false)}

export default function BlogModal({post, openBlogModal}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(openBlogModal);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
        <Modal dismissible show={openBlogModal} popup>
        <ModalHeader>{post.title}</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 ">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button>Stäng</Button>
        </ModalFooter>
      </Modal>




      {/* <Modal
        isOpen={openBlogModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <button
          onClick={closeModal}
          className="h-4 w-4 text-center absolute right-4 top-4 rounded-sm opacity-100  md:opacity-80 transition-opacity hover:opacity-100 z-10"
        >
            X
            <span className="sr-only">Stäng</span>
        </button>
        
        <div className="space-y-6">

          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-[#66BEF0] text-white px-3 py-1 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>
          </div>


            <h2 className="text-2xl font-bold text-gray-900 leading-tight">
              {post.title}
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
              <div className="flex items-center gap-1">
              </div>
              <div className="flex items-center gap-1">
                <span>{post.author}</span>
              </div>
            </div>


          <p>{post.content}</p>
          <div 
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          />
        </div>
      </Modal> */}
        {/* <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form> */}
    </div>
  );
}
