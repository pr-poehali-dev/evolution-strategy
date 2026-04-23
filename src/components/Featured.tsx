export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Woman on horse in countryside"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500" id="how">Как это работает</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Мы анализируем твои топ-треки, любимых артистов и время прослушивания — и выносим честный (и немного жестокий) вердикт о твоих вкусах.
        </p>
        <ul className="mb-8 flex flex-col gap-3 text-neutral-700 text-base">
          <li>🎧 <span className="font-semibold">Подключаешь</span> Spotify-аккаунт</li>
          <li>🔥 <span className="font-semibold">ИИ прожаривает</span> твои плейлисты и статистику</li>
          <li>😬 <span className="font-semibold">Получаешь</span> персональный роаст с разбором каждого греха</li>
        </ul>
        <button
          className="px-6 py-3 text-sm uppercase tracking-wide font-bold w-fit transition-all duration-300 cursor-pointer"
          style={{ backgroundColor: "#1DB954", color: "#000" }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#17a349")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#1DB954")}
        >
          Получить мой роаст
        </button>
      </div>
    </div>
  );
}