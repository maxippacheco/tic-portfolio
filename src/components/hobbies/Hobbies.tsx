import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import { Loader } from "../loader";
import './Hobbies.css'

export const Hobbies = () => {
	const [footballData, setFootballData ] = useState<any>();
	const [languagesData, setLanguagesData ] = useState<any>();
	const [listenToMusicData, setListenToMusicData ] = useState<any>();
	const [readData, setReadData ] = useState<any>();
	const [programmingData, setProgrammingData ] = useState<any>();
	const [watchingSeriesData, setWatchingSeriesData ] = useState<any>();

	// setting data => lazy
	const lazyloadData = async() => {
		await Promise.all([
			 import('./data/football.json').then(setFootballData),
			 import('./data/languages.json').then(setLanguagesData),
			 import('./data/listen_to_music.json').then(setListenToMusicData),
			 import('./data/read.json').then(setReadData),
			 import('./data/programming.json').then(setProgrammingData),
			 import('./data/watching_series.json').then(setWatchingSeriesData),
		 ])

	}

  useEffect(() => {
		lazyloadData()
	}, []);

  if (!footballData || !languagesData || !listenToMusicData || !readData || !programmingData || !watchingSeriesData) return <Loader />	

	return (
		<div className="fadeIn">

			<h1 className="hobbies__title">Cosas que disfruto hacer:</h1>

			<div className="hobbies__wrapper">
				<div>
					<h3 className="hobbies__info">Jugar al futbol</h3>
					<Lottie 
						loop
						play
						style={{ height: '300px', width: '300px'}}
						animationData={ footballData }
					/>
				</div>

				<div>
					<h3 className="hobbies__info">Estudiar idiomas</h3>
					<Lottie 
						loop
						play
						style={{ height: '300px', width: '300px'}}
						animationData={ languagesData }
					/>
				</div>
				
				<div>
					<h3 className="hobbies__info">Escuchar música</h3>
					<Lottie 
						loop
						play
						style={{ height: '300px', width: '300px'}}
						animationData={ listenToMusicData }
					/>
				</div>

				<div>
					<h3 className="hobbies__info">Mirar series</h3>
					<Lottie 
						loop
						play
						style={{ height: '300px', width: '300px'}}
						animationData={ watchingSeriesData }
					/>
				</div>				
				
				<div>
					<h3 className="hobbies__info">Leer</h3>
					<Lottie 
						loop
						play
						style={{ height: '300px', width: '300px'}}
						animationData={ readData }
					/>
				</div>

				<div>
					<h3 className="hobbies__info">Programar</h3>
					<Lottie 
						loop
						play
						style={{ height: '300px', width: '300px'}}
						animationData={ programmingData }
					/>
				</div>

			</div>
		</div>
	)
}
