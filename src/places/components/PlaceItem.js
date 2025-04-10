import React,{useState,useContext} from 'react'
import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'
import Modal from '../../shared/components/UIElements/Modal';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';
import './PlaceItem.css'
import Map from '../../shared/components/UIElements/Map';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

const PlaceItem = ({id,image,title,address,description,coordinates,onDelete,creatorId}) => {

   const {isLoading,error,sendRequest,clearError}=useHttpClient();

  const [showMap,setShowMap]=useState(false);

  const[showConfirmModal,setShowConfirmModal]=useState(false);

  const openMapHandler =()=> setShowMap(true);

  const closeMapHandler =()=>setShowMap(false);

  const showDeleteWarningHandler =()=>{
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler =()=>{
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler =async()=>{
    setShowConfirmModal(false);
    try{
      await  sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/places/${id}`,
        "DELETE",
        null,
        {
          Authorization: 'Bearer ' + auth.token
        }
      );
      onDelete(id);
    }
    catch(err){

    }
  };

  const auth = useContext(AuthContext);

  return (
    <>
    <ErrorModal error={error} onClear={clearError} />

    <Modal show={showMap} 
           onCancel={closeMapHandler} 
           header={address} 
           contentClass="place-item__modal-content"
           footerClass="place-item__modal-actions"
           footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
    >
       <div className="map-container">
        
        <h2>
          <Map
            lat={coordinates.lat} 
            lng={coordinates.lng}
            address={address}
          />
        </h2>
          
        </div>   
    </Modal>

    <Modal show={showConfirmModal}
    onCancel={cancelDeleteHandler}
     header="Are you sure?" footerClass="place-item__modal-actions" footer={
      <>
        <Button inverse onClick={cancelDeleteHandler}>Cancel</Button>
        <Button danger onClick={confirmDeleteHandler}>Delete</Button>
      </>
    }>
      <p>Do you want to proceed and delete this place? Please note that it can't be undone thereafter.</p>
    </Modal>
       <li className='place-item'>
        <Card className="place-item__content">
           
        {isLoading && (
          <div className="center_spinner">
            <LoadingSpinner asOverlay />
          </div>
        )}
            <div className="place-item__image">
            <img src={image.startsWith('http') ? image : `${process.env.REACT_APP_ASSET_URL}/${image}`} alt={title} />

            </div>
            <div className='place-item__info'>
                <h2>{title}</h2>
                <h2 className='address'>{address}</h2>
                <p>{description}</p>
            </div>
            <div className="place-item__actions">
                 <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
                 { auth.userId ===creatorId && 
                    <>
                      <Button to={`/places/${id}`}>
                            EDIT
                      </Button>
                      <Button danger onClick={showDeleteWarningHandler}>
                            DELETE
                      </Button>
                    </>
                  }
            </div>
        </Card>
    </li>
    </>
  )
}

export default PlaceItem