import React from 'react';

// Sample partner data (replace with actual partner information)
const partners = [
  {
    name: 'AntiSocialMedia',
    imageUrl: '/assets/images/AntiSocialMedia_r.png', // Replace with actual image URL
    websiteUrl: 'https://www.partner1.com',
  },
  {
    name: 'Tradeverse',
    imageUrl: '/assets/images/TV-Primary.png', // Replace with actual image URL
    websiteUrl: 'https://www.partner2.com',
  },
  {
    name: 'RNS',
    imageUrl: '/assets/images/RNS4.png', // Replace with actual image URL
    websiteUrl: 'https://www.partner3.com',
  },
  {
    name: 'Zerpmon',
    imageUrl: '/assets/images/zerpmon.png', // Replace with actual image URL
    websiteUrl: 'https://www.partner4.com',
  },
  {
    name: 'Drog Beats',
    imageUrl: '/assets/images/DROG_Beats_logo.png', // Replace with actual image URL
    websiteUrl: 'https://www.partner5.com',
  },
  {
    name: 'Wenmedia',
    imageUrl: '/assets/images/wenmedia_WM.png', // Replace with actual image URL
    websiteUrl: 'https://www.partner6.com',
  },
  {
    name: 'Gen3 Games',
    imageUrl: '/assets/images/G3.png', // Replace with actual image URL
    websiteUrl: 'https://www.partner7.com',
  },
  {
    name: 'SwissBorg',
    imageUrl: '/assets/images/swissborglogo.png', // Replace with actual image URL
    websiteUrl: 'https://www.partner8.com',
  },
  // Add more partners as needed
];

function Partners() {
  return (
    <div className='partners' style={{ textAlign: 'center', color: 'white', marginTop: '100px', paddingTop: '20px' }}>
      <h1 style={{ marginBottom: '50px' }}>Meet Our Partners</h1>
      <div className="partner-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '50px', maxWidth: '800px', margin: '0 auto' }}>
        {partners.map((partner, index) => (
          <div key={index} className="partner-item" style={{ textAlign: 'center' }}>
            <a href={partner.websiteUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'block' }}>
              <img src={partner.imageUrl} alt={partner.name} style={{ width: '100%', maxWidth: '200px', height: 'auto', margin: '0 auto' }} />
              <div style={{ marginTop: '10px' }}>{partner.name}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
