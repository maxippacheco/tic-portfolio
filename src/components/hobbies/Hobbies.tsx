import Lottie from "react-lottie-player";
import { football, languages, listenToMusic, maths, read, programming } from './data'
import './Hobbies.css'

export const Hobbies = () => {
	

	return (
		<div>

			<h1>Cosas que disfruto hacer:</h1>

			<div className="hobbies__wrapper">
				<div>
					<h3>Hola</h3>
					<Lottie 
						id="football"
						loop
						play
						style={{ height: '300px', width: '300px'}}
						animationData={ football }
					/>
				</div>

				<div>
					<h3>Hola</h3>
					<Lottie 
						loop
						play
						style={{ height: '300px', width: '300px'}}
						animationData={ languages }
					/>
				</div>
				
				<div>
					<h3>Hola</h3>
					<Lottie 
						id="football"
						loop
						play
						style={{ height: '300px', width: '300px'}}
						animationData={ listenToMusic }
					/>
				</div>

				<div>
					<h3>Hola</h3>
					<Lottie 
						loop
						play
						style={{ height: '300px', width: '300px'}}
						animationData={ maths }
					/>
				</div>				
				
				<div>
					<h3>Hola</h3>
					<Lottie 
						id="football"
						loop
						play
						style={{ height: '300px', width: '300px'}}
						animationData={ read }
					/>
				</div>

				<div>
					<h3>Hola</h3>
					<Lottie 
						loop
						play
						style={{ height: '300px', width: '300px'}}
						animationData={ programming }
					/>
				</div>

			</div>
		</div>
	)
}
