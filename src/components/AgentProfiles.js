import React from 'react';
import Agent1 from "../assets/images/agent1.png"
import Agent2 from "../assets/images/agent2.png"
import Agent3 from "../assets/images/agent3.png"
import Agent4 from "../assets/images/agent4.png"
import Agent5 from "../assets/images/agent5.png"
import './AgentProfiles.css';

const AgentProfiles = ({ agents = [] }) => {
  // If agents array is empty, use default agents data
  const defaultAgents = agents.length ? agents : [
    {
      id: 1,
      name: "John Doe",
      bio: "Experienced real estate agent with over 10 years of experience in the industry.",
      photo: Agent1,
    },
    {
      id: 2,
      name: "Jane Smith",
      bio: "Specializes in luxury properties and has a keen eye for detail.",
      photo: Agent2,
        },
    {
      id: 3,
      name: "Michael Johnson",
      bio: "Expert in the local market with a track record of successful sales.",
      photo: Agent3,
    },
    {
      id: 4,
      name: "Emily Davis",
      bio: "Passionate about helping first-time home buyers find their perfect home.",
      photo: Agent4,
    },
    {
      id: 5,
      name: "William Brown",
      bio: "Specializes in commercial real estate with extensive knowledge of the market.",
      photo: Agent5,
    },
  ];

  return (
    <div className="agent-profiles">
      {defaultAgents.map((agent) => (
        <div key={agent.id} className="agent-profile">
          <img src={agent.photo} alt={agent.name} />
          <h2>{agent.name}</h2>
          <p>{agent.bio}</p>
          <button>View Listings</button>
        </div>
      ))}
    </div>
  );
};

export default AgentProfiles;
