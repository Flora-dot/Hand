export const CompanyInfo = () => {
    return(
        <section className="my-26 bg-dark-black flex flex-col xl:flex-row gap-8 justify-between items-center py-10 px-20 ">
            <div>
                <h2 className="font-bold text-6xl text-custom-yellow my-4">350 +</h2>
                <p className="font-medium text-2xl text-custom-white">Clients Worldwide</p>
            </div>
            <div>
                <h2 className="font-bold text-6xl text-custom-yellow my-4">20 +</h2>
                <p className="font-medium text-2xl text-custom-white">Team Members</p>
            </div>
            <div>
                <h2 className="font-bold text-6xl text-custom-yellow my-4">100 +</h2>
                <p className="font-medium text-2xl text-custom-white">Projects Completed</p>
            </div>
            <div>
                <h2 className="font-bold text-6xl text-custom-yellow my-4">85M +</h2>
                <p className="font-medium text-2xl text-custom-white">Revenue Generated</p>
            </div>
        </section>
    );
}