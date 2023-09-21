import React from 'react';

const Home = () => {
    return (
        <div className='flex  '>
            <div className='bg-slate-400 max-sm:hidden'>
                <ul tabIndex={0} className="menu menu-sm bg-slate-400 dropdown-content mt-3 z-[1] p-2 shadow h-96 w-52">
                    <li>Sidebar</li>
                    <li>
                        <a className='bg-white rounded-none'>Item 1</a>
                        <ul className="p-2 text-center ">
                            <li className='mt-2 bg-zinc-400 '><a>Item A</a></li>
                            <li className='mt-2 bg-zinc-400'><a>Item B</a></li>
                        </ul>
                    </li>
                    <li>
                        <a className='bg-white rounded-none '>Item 2</a>
                    </li>
                    <li className='mt-2'><a className='bg-white rounded-none '>Item 3</a></li>
                </ul>
            </div>
            <div className='lg:mx-20 p-4'>
                <h2 className='text-3xl text-center mt-4 mb-6 font-semibold'>Main Content</h2>
                <p>My country’s name is Bangladesh. Bangladesh is a very small country huge population. It is a medium-developed country in South Asia. We have a very good and progressing economy. It has an area of 147,570 square kilometers. But it has a population of 164 million. That is huge than the area. <br />

                    But it is still a very beautiful and peaceful country. People of Bangladesh are so friendly with each other. This country has a glorious history of independence. We got independence from Pakistan in 1971 after nine mothers’ blood-shedding war. More than 3 million Bangladeshi sacrificed their life in that genocide. <br />

                    But still, we were able to get our independence. After independence, the newly born country faced lots of hard times and struggles. But it rises very well. Now Bangladesh is one of the best countries to live in South Asia. There are so many beautiful spots to see in this country. </p>
            </div>

        </div>
    );
};

export default Home;