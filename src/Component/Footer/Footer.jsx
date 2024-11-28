const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center ">
      <p>&copy; 2024 My Website. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
        <a href="/terms" className="hover:text-gray-400">Terms of Service</a>
        <a href="/contact" className="hover:text-gray-400">Contact Us</a>
      </div>
    </footer>
    );
};

export default Footer;