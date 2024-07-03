import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader, Input, Form, Button, Media } from "reactstrap";
import './Modal.css';

const DynamicModal = ({ isOpen, toggle, view, title }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [replyMode, setReplyMode] = useState(false);
  const [comment, setComment] = useState("");

  const handleReplyClick = () => {
    setReplyMode(true);
  };

  const handleReplySubmit = (e) => {
    e.preventDefault();
    // Handle the reply submission logic here
    setReplyMode(false);
    setComment(""); // Reset the input field
  };

  let content;

  switch (view) {
    case "comments":
      content = (
        <div>
          <Media className="mt-3">
            <Media>
              <Media
                object
                src='https://picsum.photos/id/123/1200/600'
                alt="Profile"
                className="community-profile-img"
              />
            </Media>
            <Media body className="ml-3">
              <h4 className="mb-0">Abdul Hannan</h4>
              <span className="goat-label mt-2">
                My name is hannan <span className="see-reply-btn ml-2">see replies</span>
              </span>
              {replyMode ? (
                <Form onSubmit={handleReplySubmit}>
                  <Input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write a reply..."
                    className="login-input input-group-alternative "
                  />
                  <Button type="submit" className="mt-2 login-button-color auth-button">Submit</Button>
                </Form>
              ) : (
                <h4 className="comment-reply-btn" onClick={handleReplyClick}>Reply</h4>
              )}
            </Media>
          </Media>
        </div>
      );
      break;
    default:
      content = null;
  }

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}><h1 className="text-center">{title}</h1></ModalHeader>
      <ModalBody>{content}</ModalBody>
    </Modal>
  );
};

export default DynamicModal;
