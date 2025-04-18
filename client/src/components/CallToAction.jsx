import React from 'react';
import { Button } from 'flowbite-react';

export default function CallToAction() {
    return (
        <div className="flex flex-col sm:flex-row  p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl">
            <div className='flex-1 justify-center flex flex-col'>
                <h2 className='text-2xl'>Want to learn more about Cinema</h2>
                <p className='text-gray-500 my-2'>Check Out here</p>
                <a href='https://en.wikipedia.org/wiki/Cinema' target="_blank" rel="noopener noreferrer" className='w-full'>
                    <Button gradientDuoTone={'purpleToPink'} className='rounded-tl-xl rounded-bl-none w-full' >Explore</Button>
                </a>
            </div>
            <div className="p-7 flex-1">
                <img src='https://c4.wallpaperflare.com/wallpaper/22/762/507/film-movie-filmmaker-movie-director-wallpaper-preview.jpg' />
            </div>
        </div>
    )
}
