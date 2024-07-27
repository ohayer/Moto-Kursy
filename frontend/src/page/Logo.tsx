const Logo = () => (
  <div
    id="brand-logo"
    className="mr-5 relative inline-block p-6 border-2 border-black transform rotate-12 overflow-hidden"
    style={{
      clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
      width: "auto",
      height: "auto",
    }}
  >
    <div className="transform -rotate-12 text-center leading-none">
      <div className="text-2xl font-bold italic">MOTO</div>
      <div className="text-base font-semibold italic">KURSY</div>
    </div>
  </div>
);

export default Logo;
