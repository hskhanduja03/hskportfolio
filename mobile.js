if (window.innerWidth <= 568) {
  document.body.innerHTML = `
      <div style="
        position: fixed;
        inset: 0;
        background: #0e0e0e;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem 1rem;
      ">
        <!-- Background Spline iframe -->
        <iframe 
          src="https://my.spline.design/orb-Wb2qad9H4n32RLNB7jLhwowP/" 
          frameborder="0" 
          style="
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            pointer-events: none;
          "
        ></iframe>

        <!-- HSK Logo -->
        <img 
          src="/hsk-logo2.png" 
          alt="HSK Logo"
          style="
            position: relative;
            z-index: 10;
            width: 120px;
            height: auto;
            margin-bottom: 2rem;
            filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
          "
        />

        <!-- Message Box -->
        <div style="
          position: relative;
          z-index: 10;
          max-width: 600px;
          backdrop-filter: blur(16px);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: 2rem 3rem;
          text-align: center;
          color: #f3f3f3;
          font-family: 'Segoe UI', Roboto, sans-serif;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
        ">
          <h1 style="font-size: 2rem; font-weight: 600; margin-bottom: 1rem;">
            Mobile Access Not Supported
          </h1>
          <p style="font-size: 1.1rem; line-height: 1.6;">
            This site is designed for desktops and tablets only.<br />
            Please switch to a larger screen for the best experience.
          </p>
        </div>
      </div>
    `;
  document.body.style.margin = "0";
  document.body.style.overflow = "hidden";
}
