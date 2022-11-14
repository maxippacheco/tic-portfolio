
interface Props {
	title: string;
	description: string;
}

export const SchoolCard = ({ title, description }: Props) => {
	return (
		<div className='school__card'>
			<h1 className='school__card_title'>{ title}</h1>
			<p className='school__card_text'>{ description}</p>
			<span className='school__card_btn'>IR AL TRABAJO</span>
		</div>
	)
}
