import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { getUsersInfo } from '../../redux_store/api/index';
import SpinLoader from '../Loaders/spinLoader';
import '../Modal/style.css';

const UserInfoModal = ({ show, onHide, user }) => {

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (show && user && user.id) {
      setLoading(true);
      getUsersInfo(user.login, 'Your Git Key').then(data => {
        if (data.status == 404) {
          setNotFound(true)
        }
        else {
          setUserData(data);
        }
        setLoading(false);
      }).catch(error => {
        console.error("Error fetching user data:", error);
        setLoading(false);
        setNotFound(true)

      });
    }
  }, [show, user]);

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>User Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading ? (
          <SpinLoader />
        ) : (
          userData && !notFound ? (
            <>
              <div className="text-center mt-3">
                <img src={userData.avatar_url} className="img-fluid rounded-circle mb-3" alt={`${userData.login} avatar`} style={{ width: '100px', height: '100px' }} />
                <h5 className="mb-1">{userData.name}</h5>
                <p className="text-muted mb-3">@{userData.login}</p>
              </div>
              <div className='details'>
                <p><strong>Location:</strong> <span>{userData.location || "N/A"}</span> </p>
                <p><strong>Followers:</strong> <span>{userData.followers || "N/A"}</span> </p>
                <p><strong>Following:</strong> <span>{userData.following || "N/A"}</span> </p>
                <p><strong>GitHub Profile:</strong> <span><a href={userData.html_url} target="_blank" >{userData.html_url}</a></span> </p>
              </div>
            </>
          ) : (

            <div className="d-flex justify-content-center align-items-center" style={{ height: '340px' }}>

              <p>No user data available.</p>

            </div>

          )
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserInfoModal;
