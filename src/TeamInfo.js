import React, { useEffect, useState } from 'react';
import Member from './Member';

const TeamInfo = () => {
    const [team, setTeam] = useState([]);
    const [member,setMember] = useState([]);
   
    useEffect(() => {
        fetch('https://randomuser.me/api/?page=3&results=10&seed=abc')
        .then(res => res.json())
        .then(data => {
        console.log(data);
        setTeam(data.results);
        })
    },[])
    const handleAddMember = (nam) => {
        setMember([...member,nam]); 
    }
    return (
        <div>                  
            <h2 style={{textAlign:"center"}}>Team members: {team.length}</h2>
            <ul>
                {
                member.map(m => <li>{m}</li>) 
                }
            </ul> 
            {
                team.map(teams => <Member allInfo = {teams}  handleAddMember = {handleAddMember}></Member> )
            }          
        </div>
        
    );
};
export default TeamInfo;