import TeamMemberImg1 from '../../assets/images/Team-member1.svg';
import TeamMemberImg2 from '../../assets/images/Team-member2.svg';
import TeamMemberImg3 from '../../assets/images/Team-member3.svg';


export const MeetTeam = () => {
    return(
        <section className='p-8'>
            <h2 className='text-5xl font-bold my-10 text-center'>Meet the heroes behind the magic</h2>
            <div className='px-24 flex flex-col xl:flex-row gap-8 items-center justify-between my-16'>
                <div className='p-4 shadow-lg w-96'>
                    <img src={TeamMemberImg1} alt="" />
                    <h5 className='font-bold text-3xl my-6'>Esther Howard</h5>
                    <p className='font-medium text-2xl text-faint-black'>Founder</p>
                </div>
                <div className='p-4 shadow-lg w-96'>
                    <img src={TeamMemberImg2} alt="" />
                    <h5 className='font-bold text-3xl my-6'>Cody Fisher</h5>
                    <p className='font-medium text-2xl text-faint-black'>Developer</p>
                </div>
                <div className='p-4 shadow-lg w-96'>
                    <img src={TeamMemberImg3} alt="" />
                    <h5 className='font-bold text-3xl my-6'>Brooklyn Simmons</h5>
                    <p className='font-medium text-2xl text-faint-black'>Designer</p>
                </div>
            </div>
        </section>
    );
}