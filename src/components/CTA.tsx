

function CTA () {
    return (
        <section
            className="w-screen h-[700px] my-10 px-4 relative text-center"
        >
            <img src="https://images.unsplash.com/photo-1628075264522-541fc688e9d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" className="absolute top-0 left-1/2 -translate-x-1/2 h-full"/>
    <div className="flex flex-col items-center justify-center h-full py-20 z-1000 bg-[var(--color-bg)]/40 backdrop-blur-[4px] relative">
        
        <h2 className="text-5xl font-extrabold text-dark-bg mb-6 leading-tight">
            Be the Force for Nature
        </h2>
        
        <p className="text-xl text-dark-bg mb-10 font-serif max-w-2xl mx-auto">
            Every trail protected, every animal rescued, starts with a single step. Join our mission and make a tangible impact today.
        </p>
        
        <a href="#" className="font-bold inline-block bg-[var(--color-primary)] font-bold text-lg px-12 py-4 rounded-full shadow-lg transition duration-300 hover:bg-opacity-90 hover:shadow-xl transform hover:scale-105">
            Donate and Protect
        </a>
        
        <p className="mt-4 text-dark-bg text-sm">
            <a href="#" className="underline hover:no-underline font-semibold">
                Or discover more ways to get involved →
            </a>
        </p>
    </div>
</section>
    )
}

export default CTA