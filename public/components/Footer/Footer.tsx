import './_Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Sanket Shivam. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;