// src/components/Cabecalho.js
const Header = () => {

  return (
    <header className="fixed top-0 left-0 right-0 bg-verde_e p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/assets/Logo.svg"
            alt="Logo"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
