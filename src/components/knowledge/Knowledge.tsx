import './Knowledge.css'

const images = [
	{
		url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-7800f169-bb4c-4cc8-a97a-104a7162f6de.jpg',
		description: 'React: Aplicaciones en tiempo real con Socket-io',
	},
	{
		url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-3e5dd4a5-bd3e-4a86-bddc-163ea127bc21.jpg',
		description: 'Master en CSS: Responsive, SASS, Flexbox, Grid y Bootstrap',
	},
	{
		url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-90a2b2a6-05ee-4628-975f-fbc8bbc52f41.jpg',
		description: 'Next.js: El framework de React para producción',
	},
	{
		url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-3bce9e7a-d8df-493d-8379-8288267c9c8d.jpg',
		description: 'React Native: Aplicaciones nativas para IOS y Android',
	},
	{
		url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-01102cc8-a560-4e3c-b101-8b5f3a47e010.jpg',
		description: 'Node: De cero a experto',
	},
	{
		url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-8a8c3ff2-c326-452e-a62f-3bc5c8c68c1d.jpg',
		description: 'Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS',
	},
]

export const Knowledge = () => {
	return (
	<div className='fadeIn'>
		<h1 className='knowledge__title'>Cursos que tome:</h1>	
		<div className="knowledge__wrapper">
			{
				images.map(img => (
							<a href={ img.url } target="_blank" className='card' key={ img.description }>

							{/* <h1>Hola</h1> */}
								<img src={ img.url } alt="a" />
							</a>
				))
			}
		</div>
	</div>
	)
}
