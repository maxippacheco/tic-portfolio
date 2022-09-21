import './Knowledge.css'

const images = [
	{
		url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-7800f169-bb4c-4cc8-a97a-104a7162f6de.jpg',
	},
	{
		url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-3e5dd4a5-bd3e-4a86-bddc-163ea127bc21.jpg',

	},
	{
		url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-90a2b2a6-05ee-4628-975f-fbc8bbc52f41.jpg',
		
	},
	{
		url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-3bce9e7a-d8df-493d-8379-8288267c9c8d.jpg',
	},
	{
		url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-01102cc8-a560-4e3c-b101-8b5f3a47e010.jpg',
	},
	{
		url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-8a8c3ff2-c326-452e-a62f-3bc5c8c68c1d.jpg'
	},
]

export const Knowledge = () => {
	return (
	<>
		<div className="knowledge__wrapper">
			
			{
				images.map(img => (
					<div className="card">
							{/* <h1>Hola</h1> */}
							<img src={ img.url } alt="a" />
					</div>
				))
			}
		</div>
	</>
	)
}
