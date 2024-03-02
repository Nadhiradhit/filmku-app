import HeroSection from "./_sections/hero-sections"
import MovieSection from "./_sections/movie-sections"
import SearchSection from "./_sections/search-sections"

function Page() {
    return (
        <section className="mt-28 min-h-screen w-full">
            <div className="max-w-screen-xl mx-auto px-2">
                <HeroSection />  
                <SearchSection/>
                <MovieSection />  
            </div>
        </section>
    )
}

export default Page