import LogoFeira from "../assets/logo-feira.png";

const Fair = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto px-6 max-w-7xl flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
        {/* Logo à esquerda, fora do componente vermelho */}
        <img
          src={LogoFeira}
          alt="logo-feira"
          className="h-36 w-36 sm:h-44 sm:w-44 md:h-48 md:w-48 object-contain"
        />

        {/* Componente vermelho com o título */}
        <div
          className="bg-[#D21528] text-white rounded-lg shadow-md px-6 sm:px-8 md:px-10 py-4"
          style={{
            boxShadow: "0 4px 15px rgba(210, 21, 40, 0.3), 0 0 20px rgba(210, 21, 40, 0.1)",
          }}
        >
          <h2 className="text-2xl md:text-3xl font-bold leading-tight font-livvic text-start">
            Feira 
          </h2>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight font-livvic text-center">
            Mãos de Potengi
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Fair;
