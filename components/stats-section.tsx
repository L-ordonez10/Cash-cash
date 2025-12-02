export function StatsSection() {
  return (
    <section className="bg-[#EDEDED] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-16 md:gap-32">
          <div className="text-center text-white">
            <p className="text-[#FF6C00] text-[45px] md:text-[60px] lg:text-[98px] font-bold">2K</p>
            <p className="sm:text-[20px] md:text-[25px] lg:text-[42px] text-[#143B4D]">
              Clientes
              <br />
              atendidos
            </p>
          </div>
          <div className="text-center text-white">
            <p className="text-[#1A9CD9] text-[45px]  md:text-[60px] lg:text-[98px] font-bold">+7</p>
            <p className="sm:text-[20px] md:text-[25px] lg:text-[42px] text-[#143B4D]">
              Años de
              <br />
              experiencia
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
