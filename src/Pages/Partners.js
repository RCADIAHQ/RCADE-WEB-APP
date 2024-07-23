import React from 'react';
import './/partners.css'

// Sample partner data 
const partners = [
  {
    name: 'AntiSocialMedia',
    imageUrl: '/assets/images/PartnerLogos/AntisocialMediaLogo-Tile.png', // image URL from local file
    websiteUrl: 'https://linktr.ee/anti_social_media', // link to webpage of partner
  },
  {
    name: 'Tradeverse',
    imageUrl: '/assets/images/PartnerLogos/TradeverseLogo-Tile.png', // image URL from local file
    websiteUrl: 'https://thetradeverse.xyz/',  // link to webpage of partner
  },
  {
    name: 'RNS',
    imageUrl: '/assets/images/PartnerLogos/RNSLogo-Tile.png', // image URL from local file
    websiteUrl: 'https://www.rootnameservice.com/',  // link to webpage of partner
  },
  {
    name: 'Zerpmon',
    imageUrl: '/assets/images/PartnerLogos/ZerpmonLogo-Tile.png', // image URL from local file
    websiteUrl: 'https://www.zerpmon.world/',  // link to webpage of partner
  },
  {
    name: 'Drog Beats',
    imageUrl: '/assets/images/PartnerLogos/DrogBeatsLogo-Tile.png', // image URL from local file
    websiteUrl: 'https://x.com/DROGBeats1',  // link to webpage of partner
  },
  {
    name: 'Wenmedia',
    imageUrl: '/assets/images/PartnerLogos/WenmediaLogo-Tile.png', // image URL from local file
    websiteUrl: 'https://x.com/WENMEDIA_',  // link to webpage of partner
  },
  {
    name: 'Gen3 Games',
    imageUrl: '/assets/images/PartnerLogos/G3Logo-Tile.png', // image URL from local file
    websiteUrl: 'https://x.com/Gen3Games',  // link to webpage of partner
  },
  {
    name: 'SwissBorg',
    imageUrl: '/assets/images/PartnerLogos/SwissBorgLogo-Tile.png', // image URL from local file
    websiteUrl: 'https://swissborg.com/',  // link to webpage of partner
  },
  // Add more partners as needed
];

function Partners() { // main function to display partner image logos
  return (
    <div className='partners'>
      <h1><span className="shadowed-text">Meet Our Partners</span></h1>
      <div className="partner-list">
        {partners.map((partner, index) => (
          <div key={index} className="partner-item">
            <a href={partner.websiteUrl} target="_blank" rel="noopener noreferrer">
              <div className="partner-logo">
                <img src={partner.imageUrl} alt={partner.name} />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;