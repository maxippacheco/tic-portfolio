
interface Props {
	title: string;
	description: string;
	link: string;
}

export const SchoolCard = ({ title, description, link }: Props) => {
	return (
		<div className='school__card'>
			<h1 className='school__card_title'>{ title}</h1>
			<p className='school__card_text'>{ description}</p>
			<span className='school__card_btn'>
				<a href={ link } target="__blank" style={{ 'textDecoration': 'none', 'color': 'white' }}>IR AL TRABAJO</a>
			</span>
		</div>
	)
}
