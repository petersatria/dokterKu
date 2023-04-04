console.log(dokter);

function render(params) {
	let dokterList = document.querySelector('#list-dokter')
	params.forEach(el => {
		let nama = el.nama
		let spesialis = el.spesialis

		const wrapper = document.createElement('div')
		const namaDokter = document.createElement('h1')
		const namaSpesialis = document.createElement('p')
		namaDokter.innerText = nama
		namaSpesialis.innerText = spesialis
		wrapper.appendChild(namaDokter)
		wrapper.appendChild(namaSpesialis)
		dokterList.appendChild(wrapper)

		let html = `
			<div>
				<h1>${nama}</h1>
				<p>${spesialis}</p>
			</div>`

	});

}


render(dokter)