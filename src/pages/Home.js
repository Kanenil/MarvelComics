import React from 'react'
import Layout from '../layout/Layout'
import image from '../images/marvel-characters.webp'
import image2 from '../images/heros-marvel.webp'
import FAQ from '../components/Faq'
import HeartIcon from '../elements/Icons/HeartIcon'
import LoopIcon from '../elements/Icons/LoopIcon'
import HomeBlock from '../components/HomeBlock'

export default function Home() {
	return (
		<>
			<Layout>
				<div className='relative pt-16 pb-32 overflow-hidden'>
					<HomeBlock
						icon={<LoopIcon className='w-6 h-6 text-white' />}
						title='See movie with your favorite character'
						description='Marvel is home to some of the most beloved and iconic
                     superheroes of all time. From the invincible Iron Man to
                     the mighty Thor, the Marvel universe is filled with a
                     diverse and powerful cast of characters that have captured
                     the hearts and imaginations of fans around the world.'
						image={image2}
					/>

					<div className='mt-24'>
						<HomeBlock
							icon={<HeartIcon className='w-6 h-6 text-white' />}
							isImageLeft={true}
							title='Marvel: A Cultural Phenomenon'
							description="Marvel has become more than just a comic book franchise –
                     it's a cultural phenomenon that has touched the lives of
                     millions of people around the world. From the movies to
                     the comic books, the toys to the video games, Marvel has
                     permeated every aspect of popular culture and inspired a
                     legion of devoted fans."
							image={image}
						/>
					</div>
					<FAQ />
				</div>
			</Layout>
		</>
	)
}
