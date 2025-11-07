
function Hero() {
  return (
    <section
    style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1735480495310-055b8b369476?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }} 
    className="w-screen h-[750px] flex flex-col justify-center sm:justify-between px-20 relative overflow-hidden">
        <div className="h-4/6 w-full -left-1000 sm:left-0 absolute sm:relative flex items-center justify-between z-10">
      <div id="burst-8"></div>
      <div id=""></div>
        </div>
        <div id='titles' className="mb-10 w-full sm:w-150 sm:text-left text-shadow text-white z-10">
          <h1 className="text-4xl sm:text-7xl font-bold mb-4">Welcome to the Forest</h1>
          <p className="text-2xl text-[var(--color-accent)] sm:text-[var(--color-accent)]/60">Experience the serenity of nature</p>
        </div>
        <div className="absolute hidden sm:block xl:bottom-0 right-5 m-10 z-10 hover:scale-[1.1] hover:cursor-pointer transition">
            <div id="pointer" className="flex justify-center items-center text-2xl font-bold underline">About us</div>
        </div>
    </section>
  );
}

export default Hero;