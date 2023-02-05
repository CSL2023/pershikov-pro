export const scrollIntoView = (e) => {
	e.preventDefault()
	const blockID = e.target.getAttribute('href').substr(1)
	document.getElementById(blockID).scrollIntoView({
		behavior: 'smooth',
		block: 'center'
	})
}
