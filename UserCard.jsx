import React from 'react';

const UserCard = ({ photo, name, email }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '10px' }}>
      <img src={photo} alt="User Photo" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserCard;

    // const getallemp=async() =>
    // {
    //     try{
    //         const response = await axios.get("");
    //         setallemp(response.data.data);
    //     }
    //     catch(erroe){
    //         console.error("Request FAULED",Error);
    //     }
    // }