

function Footer() {
  return (
<footer className="bg-dark-bg text-text-light py-12 mt-40 px-4 md:px-8">
    <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-primary-light/20 pb-8">
            
            <div className="col-span-full md:col-span-1">
                <div className="text-3xl font-bold text-primary-light mb-4">wForest</div> 
                <p className="text-sm">
                    Dedicated to protecting critical habitats and promoting global conservation awareness.
                </p>
                <p className="mt-8 text-xs text-text-light/60 md:hidden">
                    &copy; 2025 wForest. All Rights Reserved.
                </p>
            </div>
            
            <div>
                <h4 className="text-lg font-semibold text-primary-light mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#home" className="hover:text-accent-light transition-colors">Home</a></li>
                    <li><a href="#mission" className="hover:text-accent-light transition-colors">Our Mission</a></li>
                    <li><a href="#services" className="hover:text-accent-light transition-colors">Services</a></li>
                    <li><a href="#news" className="hover:text-accent-light transition-colors">Latest News</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-lg font-semibold text-primary-light mb-4">Support</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-accent-light transition-colors">FAQs</a></li>
                    <li><a href="#" className="hover:text-accent-light transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-accent-light transition-colors">Terms of Use</a></li>
                    <li><a href="#" className="hover:text-accent-light transition-colors">Careers</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-lg font-semibold text-primary-light mb-4">Get in Touch</h4>
                <p className="text-sm mb-4">
                    Email: contact@wforest.org <br/>
                    Phone: (123) 456-7890
                </p>
                
                <div className="flex justify-center space-x-4">
                    <a href="#" className="text-primary-light hover:text-accent-light transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
                    </a>
                    <a href="#" className="text-primary-light hover:text-accent-light transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                    </a>
                    <a href="#" className="text-primary-light hover:text-accent-light transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
                    </a>
                </div>
            </div>
        </div>
        
        <div className="mt-8 hidden md:block text-center text-xs text-text-light/60">
            &copy; 2025 wForest. All Rights Reserved. Designed with Tailwind CSS.
        </div>
    </div>
</footer>
  )
}

export default Footer