import React from 'react';
import AgentProfiles from '../components/AgentProfiles';
import './AgentsPage.css';

const AgentsPage = ({ agents }) => (
  <div className="agents-page">
    <h1>Meet Our Agents</h1>
    <AgentProfiles agents={agents} />
  </div>
);

export default AgentsPage;
