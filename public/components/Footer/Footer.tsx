import './_Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>Built From Scratch. No Templates</p>
        <p style={{color: 'red'}}>🚧 Building. Still in progress. 🚧</p>
        <p className='subtitle-h2'>© {new Date().getFullYear()} Sanket Shivam. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;