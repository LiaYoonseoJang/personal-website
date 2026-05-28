import React from 'react';

function Footer() {
  return (
    <div style={{ borderTop: "1px solid #f0f0f0", padding: "32px 24px", marginTop: 0 }}>
      <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontSize: 13, color: "#999" }}>
          Designed & built by{' '}
          <a href="https://www.linkedin.com/in/lia-yoonseo-jang-/" target="_blank" rel="noopener noreferrer"
            style={{ color: "#555", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid #ccc" }}>
            Lia Yoonseo Jang
          </a>
        </p>
        <p style={{ fontSize: 13, color: "#bbb" }}>lia010911@gmail.com</p>
      </div>
    </div>
  );
}

export default Footer;
