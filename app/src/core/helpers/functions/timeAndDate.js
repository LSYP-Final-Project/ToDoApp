export const convertMsToLocalDate = (time) => {
	const date = new Date(time)
	return date.toLocaleDateString()
}