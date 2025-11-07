

function Featured () {
    return (
<main className="bg-dark-bg py-20 px-4 md:px-8">
    <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-primary-light mb-2">
                Our Featured Services
            </h2>
            <p className="text-xl text-text-light font-serif">
                What we do for nature and for you.
            </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8">
            
            <div id="card-Featured" className="flex-1 bg-secondary-dark p-6 border-[var(--color-secondary)] border-b-8 text-left transition-transform duration-300 hover:scale-[1.03]">
                <img src="https://images.unsplash.com/photo-1722769022871-c67733710d33?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1334" alt="Conservation Image" className="w-full h-48 object-cover mb-4" />
                <h3 className="text-2xl font-bold text-primary-light mb-3">
                    Wildlife Rescue & Habitat
                </h3>
                <p className="text-text-light mb-4">
                    We focus on protecting critical habitats and reintroducing endangered species into their natural homes.
                </p>
                <a href="#" className="text-accent-light font-semibold hover:text-primary-light transition-colors duration-200 flex items-center">
                    Explore Our Mission 
                    <span className="ml-1">→</span>
                </a>
            </div>
            
            <div id="card-Featured" className="flex-1 bg-secondary-dark p-6 border-[var(--color-secondary)] border-b-8 text-left transition-transform duration-300 hover:scale-[1.03]">
                <img src="https://images.unsplash.com/photo-1729700125074-30981b22cd26?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332" alt="Exploration Image" className="w-full h-48 object-cover mb-4" />
                <h3 className="text-2xl font-bold text-primary-light mb-3">
                    Guided Hiking Trails
                </h3>
                <p className="text-text-light mb-4">
                    Discover the forest's hidden beauty with our expert guides and explore our secure, curated trails.
                </p>
                <a href="#" className="text-accent-light font-semibold hover:text-primary-light transition-colors duration-200 flex items-center">
                    View Trails 
                    <span className="ml-1">→</span>
                </a>
            </div>
            
            <div id="card-Featured" className="flex-1 bg-secondary-dark p-6 border-[var(--color-secondary)] border-b-8 text-left transition-transform duration-300 hover:scale-[1.03]">
                <img src="https://images.unsplash.com/photo-1714849294343-2a39a8dece8b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1329" alt="Education Image" className="w-full h-48 object-cover mb-4" />
                <h3 className="text-2xl font-bold text-primary-light mb-3">
                    Nature Education Programs
                </h3>
                <p className="text-text-light mb-4">
                    Workshops and training for schools and communities on the vital importance of the local ecosystem.
                </p>
                <a href="#" className="text-accent-light font-semibold hover:text-primary-light transition-colors duration-200 flex items-center">
                    Learn More 
                    <span className="ml-1">→</span>
                </a>
            </div>
        </div>
    </div>
</main>
    )
}

export default Featured;