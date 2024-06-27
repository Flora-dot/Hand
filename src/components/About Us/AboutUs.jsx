import AboutUsImage from '../../assets/images/Mid Image.svg'
export const AboutUS = () => {
    return(
        <section className='p-20'>
            <h2 className='font-bold text-5xl my-10'>Who we are</h2>
            <p className='text-2xl font-medium my-12 tracking-wide'>
            We love what we do and create partnerships with our clients to ensure their digital transformation <br /> is positioned for long-term success.We believe that the human dimensions essential to start any successful <br /> project and that this is where splendid emotional relationships between the company and people are born.
            </p>
            <div className='my-28'>
                <img src={AboutUsImage} alt="" />
            </div>
        </section>
    );
}
