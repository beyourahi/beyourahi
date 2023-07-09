const Home = () => {
    return (
        <div className="flex h-[100dvh] flex-col items-center justify-center">
            <video autoPlay loop muted playsInline>
                <source src="/memoji.mp4" type="video/mp4" />
            </video>

            <h1 className="text-4xl font-bold lg:text-6xl">Portfolio Cooking ⚗️</h1>
        </div>
    );
};

export default Home;
