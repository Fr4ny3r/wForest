

function Gallery() {


    const imagenes = [
        'https://images.unsplash.com/photo-1750772194494-8e72b2fb5119?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169',
        'https://images.unsplash.com/photo-1679619940244-a7c30a07e8e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1266',
        'https://images.unsplash.com/photo-1545332006-8683a4bf4595?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        'https://images.unsplash.com/photo-1616695521162-fdf68556d7b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171',
        'https://images.unsplash.com/photo-1573513500292-92feb51c491c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
        'https://images.unsplash.com/photo-1512741709538-3b10036eb57e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'
    ];


    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-center text-primary-light mb-10">In Action</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {imagenes.map((src, index) => (
                    <div id="img-gallery" key={index} className="overflow-hidden hover:scale-105 transition-transform duration-300 hover:cursor-pointer shadow-2xl z-100 after:w-full after:z-200 after:h-full after:top-0 after:left-0 after:absolute hover:after:bg-black/50 after:transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=" z-1000 absolute m-5 icon icon-tabler icons-tabler-outline icon-tabler-external-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" /><path d="M11 13l9 -9" /><path d="M15 4h5v5" /></svg>
                        <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-64 object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;