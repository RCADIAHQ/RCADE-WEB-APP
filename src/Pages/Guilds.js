

import React, { useState } from 'react';
import './Guilds.css';
import General from '../components/GuildItems/GeneralGuilds';
import Classic from '../components/GuildItems/ClassicGuild';
import Executive from '../components/GuildItems/Executiveguild';
import Elite from '../components/GuildItems/EliteGuild';


function Guilds() {
  const [activeContent, setActiveContent] = useState('general');

  const handleLinkClick = (content) => {
    setActiveContent(content);
  };

  const renderContent = () => {
    switch (activeContent) {
      case 'general':
        return <General />;
      case 'classic':
        return <Classic />;
      case 'executive':
        return <Executive />;
      case 'elite':
        return <Elite />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="guildnav">
        <button onClick={() => handleLinkClick('general')} className={activeContent === 'general' ? 'active' : ''}>General</button>
        <button onClick={() => handleLinkClick('classic')} className={activeContent === 'classic' ? 'active' : ''}>Classic</button>
        <button onClick={() => handleLinkClick('executive')} className={activeContent === 'executive' ? 'active' : ''}>Executive</button>
        <button onClick={() => handleLinkClick('elite')} className={activeContent === 'elite' ? 'active' : ''}>Elite</button>
      </div>
      <div className='content'>
        <div className='header'>
          <h1>Guilds Page ~ Chat With The Community</h1>
          <h2>Band With your Guild, Enter The Open Metaverse</h2>
          <h3>Coming Soon</h3>
        </div>

        {renderContent()}

        <div className="feed">
          <div>Guilds Feed</div>
        </div>
      </div>
    </div>
  );
}

export default Guilds;
