

function Footer() {
  return (
<footer className="bg-dark-bg text-text-light py-12 px-4 md:px-8">
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
                
                <div className="flex space-x-4">
                    <a href="#" className="text-primary-light hover:text-accent-light transition-colors">FB</a>
                    <a href="#" className="text-primary-light hover:text-accent-light transition-colors">TW</a>
                    <a href="#" className="text-primary-light hover:text-accent-light transition-colors">IG</a>
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