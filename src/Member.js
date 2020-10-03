import React from 'react';
import { useState } from 'react';

import "./Member.css";

const Member = (props) => {
    const {name,email, gender,picture,phone } = props.allInfo;
    const handleAddMember = props.handleAddMember;
    const [mobile,setMobile] = useState(' ')
    const showPhone = () => setMobile(phone);
    const fullName = name.title + " " + name.first + " " + name.last;

    
    return (
    <div className = "info">
        <div className="image">
            <img style={{width:"180px", height:"220px", marginTop:"20px"}} src={picture.large} alt=""/>
        </div>
        <div className="header">
            <h3>Name: {fullName}</h3>
            <p>Gender: {gender}</p>
            <h5>Email: {email}</h5>
            <p>Phone: {mobile}</p>
            <button onClick={showPhone}>Show Phone Number</button>
            <button onClick = {() => handleAddMember(fullName)}>Add Member</button>
        </div>
    </div>
    );
};
export default Member;