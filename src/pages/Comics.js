import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import ComicsSlider from '../components/ComicsSlider'
import ComicsList from '../components/ComicsList'
import axios from 'axios'
import md5 from 'md5'
import { useLocation, useNavigate } from 'react-router'

const apiSettings = {
	api: '5b9a06317ef1952e7fc786659b84d8f7',
	secret: '3646359aec3f0ded3a323cf0fadeae5375fea051',
}

export default function Comics() {
	const [comicsSlider, setComicsSlider] = useState([])
	const [comicsList, setComicsList] = useState([])

	const navigator = useNavigate()
	const location = useLocation()

	useEffect(() => {
		const ts = new Date().getTime()
		const hash = md5(ts + apiSettings.secret + apiSettings.api)

		axios
			.get('https://gateway.marvel.com:443/v1/public/comics', {
				params: {
					ts,
					hash,
					apikey: apiSettings.api,
					format: 'comic',
					orderBy: '-modified',
					limit: 10,
				},
			})
			.then(resp => {
				const { data } = resp

				setComicsSlider(data.data.results)
			})
	}, [])

	const params = new URLSearchParams(location.search)

	useEffect(() => {
		const ts = new Date().getTime()
		const hash = md5(ts + apiSettings.secret + apiSettings.api)

		axios
			.get('https://gateway.marvel.com:443/v1/public/comics', {
				params: {
					ts,
					hash,
					apikey: apiSettings.api,
					format: 'comic',
					orderBy: '-modified',
					limit: 32,
					offset: 10,
					titleStartsWith: params.get('title'),
				},
			})
			.then(resp => {
				const { data } = resp

				setComicsList(data.data.results)
			})
	}, [location.search])

	return (
		<>
			<Layout>
				<div className='relative pb-32 overflow-hidden'>
					<div className='relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
						<ComicsSlider comics={comicsSlider} />
					</div>

					{params.get('title') && (
						<div className='relative grid grid-cols-12 max-w-7xl mx-auto py-10'>
							<h2 className='text-3xl font-extrabold col-span-11 text-gray-500 text-center tracking-tight'>
								Based on your search '{params.get('title')}'
							</h2>
							<button
								className='bg-gradient-to-r from-red-500 to-pink-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-red-700 hover:to-pink-700'
								onClick={() => navigator('/comics')}
							>
								Reset
							</button>
						</div>
					)}

					<ComicsList comics={comicsList} />
				</div>
			</Layout>
		</>
	)
}
