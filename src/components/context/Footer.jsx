const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<>
			<footer className="text-center text-capitalize mt-5 mb-2">
				Moviebase | Joenel Calvez &copy; {year}
			</footer>
		</>
	);
};

export default Footer;
