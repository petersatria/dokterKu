function render(dokter) {
	let render = document.getElementById('list-dokter')
	render.innerHTML = ''
	for (let x = 0; x < dokter.length; x++) {
		const idcard = dokter[x];
		render.innerHTML += `
		<div class="card col-md-3 m-3 p-0">
			<img
				src=${idcard.pic}
				class="card-image"
				
			/>
			<div class="card-body">
				<h5>${idcard.nama}</h5>
				<div class="line"></div>
				<p class="desc">${idcard.spesialis}</p>
				<p class="desc">${idcard.pengalaman}</p>
			</div>
		</div>`
	}
}

render(dokter)

function search(event) {
	// let searchText = document.getElementById('searchText');
	let elHtml = document.getElementById('list-dokter')
	let searchText = event.target.value.trim()
	console.log(event.target.value);
	// searchText.
	let baru = []
	baru = dokter.filter(el => el.nama.toLowerCase().includes(searchText.toLowerCase()))

	if (baru.length === 0) {
		elHtml.innerHTML = `
		<p class="desc">Dokter yang dicari tidak tersedia</p>
		<div class="line"></div>
		`
	} else {
		render(baru)
	}
}
function spec() {
	let searchText = document.getElementById('specText').value;
	console.log(searchText);
	if (searchText === 'Semua') {
		render(dokter)
	} else {
		let baru = []
		baru = dokter.filter(el => el.spesialis.toLowerCase().includes(searchText.toLowerCase()))


		render(baru)
	}

}

document.getElementById('booking-appointment').onclick = () => {
	const emptyName = document.getElementById('emptyName')
	const emptyEmail = document.getElementById('emptyEmail')
	const emptyDate = document.getElementById('emptyDate')
	let nama = document.getElementById('name')
	let email = document.getElementById('email')
	let date = document.getElementById('date')
	if (nama.value === '' || !nama.value) {
		emptyName.style.display = 'inline';
	} else if (email.value === '' || !email.value) {
		emptyEmail.style.display = 'inline';
		emptyName.style.display = 'none';
	} else if (date.value === '' || !nama.value) {
		emptyDate.style.display = 'inline';
		emptyEmail.style.display = 'none';
		emptyName.style.display = 'none';
	} else {
		booking()
		emptyDate.style.display = 'none'
	}
};

function spesialisFilter(id) {
	let result = {}

	for (const { nama, spesialis } of dokter) {
		if (!result[spesialis]) {
			result[spesialis] = []
		}
		result[spesialis].push(nama)

	}
	let filtered = Object.keys(result)
	console.log(filtered);
	filtered.unshift('Semua')
	let selector = document.querySelector(id)
	selector.innerHTML = ''
	filtered.forEach(e => {
		selector.innerHTML += `
		<option value="${e}">${e}</option>
		`
	})
}


spesialisFilter('#specText')
spesialisFilter('#select-spesialis')

function filterDoctor(arr, idSelectorSpesialis, idSelectorDokter) {
	let selectSpesialis = document.querySelector(idSelectorSpesialis).value
	let filtered = arr.filter(e => e.spesialis.includes(selectSpesialis))
	let selector = document.querySelector(idSelectorDokter)
	selector.innerHTML = ''
	if (selectSpesialis === 'Semua') {
		filtered = dokter
	}
	filtered.forEach(dokter => {
		selector.innerHTML += `
		<option value="${dokter.nama}">${dokter.nama}</option>
		`
	})
}
filterDoctor(dokter, '#select-spesialis', '#select-doctor')

function booking() {
	let namaPasien = document.querySelector('#name').value
	let emailPasien = document.querySelector('#email').value
	let namaDokter = document.querySelector('#select-doctor').value
	let tanggal = document.querySelector('#date').value

	let temp = {
		id: Date.now(),
		namaPasien,
		emailPasien,
		namaDokter,
		tanggal
	}

	dataPemesanan.push(temp)
	localStorage.setItem('data', JSON.stringify(dataPemesanan));
	let scrollTo = document.querySelector('#daftar-pemesanan')
	scrollTo.scrollIntoView()
	temp = {}
	document.querySelector('#name').value = ''
	document.querySelector('#email').value = ''
	document.querySelector('#date').value = ''
	filterDoctor(dokter, '#select-spesialis', '#select-doctor')
	listPemesanan()
}

let dataLocal = localStorage.getItem('data')

function listPemesanan(idModal) {
	let list = document.querySelector('#list-pemesanan')
	list.innerHTML = ''
	for (let { id, namaPasien, namaDokter, emailPasien, tanggal } of dataPemesanan) {
		if (idModal && idModal === id) {
			list.innerHTML += `
			<div id=${id} class="card m-2" style="width: 18rem">
				<div class="card-body">
					<h5 class="card-title">Id.${id}</h5>
					<p class="card-text"> Nama : ${namaPasien}</p>	
					<p class="card-text"> Email : ${emailPasien}</p>	
					<p class="card-text"> Tanggal : ${tanggal}</p>	
					<p class="card-text"> Dokter : ${namaDokter}</p>	
					<button onclick="deleteList(${id})" type="submit" class="btn btn-danger" style="background-color: #BC74A5;border-color: #BC74A5;"
								onmouseover="this.style.backgroundColor='#dc8fc4'"
								onmouseover="this.style.borderColor='#dc8fc4'"
								onmouseout="this.style.backgroundColor='#BC74A5'"
					> Batalkan</button>
					
					<!-- Button trigger modal -->
					<button type="button" onclick="editModal(${id})" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop" 
					style="background-color: #0E54AE;border-color: #0E54AE;"
					onmouseover="this.style.backgroundColor='#1b66c8'"
								onmouseover="this.style.borderColor='#1b66c8'"
								onmouseout="this.style.backgroundColor='#0E54AE'"
					>
					Edit
					</button>
				</div>
			</div>
			
					<!-- Modal -->
			<div
				class="modal fade"
				id="staticBackdrop"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabindex="-1"
				aria-labelledby="staticBackdropLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h1
								class="modal-title fs-5"
								id="staticBackdropLabel"
							>
								Ubah data 
							</h1>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body">
							<div class="col">
								<label for="name" class="form-label"
									>Nama
								</label>
								<input
									id="name"
									class="form-control"
									type="text"
									placeholder="Name..."
									value="${namaPasien}"
								/>
							</div>
							<div class="col">
								<label for="email" class="form-label"
									>Alamat Email 
								</label>
								<input
									id="email"
									class="form-control"
									type="text"
									placeholder="email@email.com"
									value="${emailPasien}"
								/>
							</div>
							<div class="col">
								<label
									for="select-spesialisModal${id}"
									class="form-label"
									>Spesialis
								</label>
								<select
									onchange="filterDoctor(dokter, '#select-spesialisModal${id}', '#select-doctorModal${id}')"
									id="select-spesialisModal${id}"
									class="form-select"
									disabled
								></select>
							</div>
							<div class="col">
								<label
									for="select-doctorModal${id}"
									class="form-label"
									>Pilih Dokter
								</label>
								<select
									id="select-doctorModal${id}"
									class="form-select"
									disabled
								></select>
							</div>
		
							<div class="col">
								<label for="date" class="form-label"
									>Pilih Tanggal
								</label>
								<input
									id="date"
									class="form-control"
									type="date"
									value="${tanggal}"
								/>
							</div>
						</div>
						<div class="modal-footer">
							<button
								type="button"
								class="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Close
							</button>
							<button
								id="update-appointment"
								onclick="editModalPemesanan(event, ${idModal})"
								class="btn btn-primary"
								data-bs-dismiss="modal"
								style="background-color: #0E54AE;border-color: #0E54AE;"
								onmouseover="this.style.backgroundColor='#bc74a5'"
								onmouseover="this.style.borderColor='#bc74a5'"
								onmouseout="this.style.backgroundColor='#0E54AE'"
							>
								Update
							</button>
						</div>
					</div>
				</div>
			</div>
			`
		} else {
			list.innerHTML += `
			<div id=${id} class="card m-2" style="width: 18rem">
				<div class="card-body">
					<h5 class="card-title">Id.${id}</h5>
					<p class="card-text"> Nama : ${namaPasien}</p>	
					<p class="card-text"> Email : ${emailPasien}</p>	
					<p class="card-text"> Tanggal : ${tanggal}</p>	
					<p class="card-text"> Dokter : ${namaDokter}</p>	
					<button onclick="deleteList(${id})" type="submit" class="btn btn-danger" style="background-color: #BC74A5;border-color: #BC74A5;"
								onmouseover="this.style.backgroundColor='#dc8fc4'"
								onmouseover="this.style.borderColor='#dc8fc4'"
								onmouseout="this.style.backgroundColor='#BC74A5'"
					>Batalkan</button>

					<!-- Button trigger modal -->
					<button type="button" onclick="editModal(${id})" class="btn btn-success" style="background-color: #0E54AE;border-color: #0E54AE;"
								onmouseover="this.style.backgroundColor='#1b66c8'"
								onmouseover="this.style.borderColor='#1b66c8'"
								onmouseout="this.style.backgroundColor='#0E54AE'"
					>
					Edit
					</button>
				</div>
			</div>`
		}

	}
}

function deleteList(id) {
	let newData = []
	for (const data of dataPemesanan) {
		if (data.id === id) continue
		newData.push(data)
	}
	dataPemesanan = newData
	let element = document.getElementById(id)
	element.remove()
}

function editModal(id) {
	listPemesanan(id)
	spesialisFilter(`#select-spesialisModal${id}`)
	filterDoctor(dokter, `#select-spesialisModal${id}`, `#select-doctorModal${id}`)
}

function editModalPemesanan(event, idModal) {
	for (const data of dataPemesanan) {
		if (data.id === idModal) {
			data.namaPasien = event.target.parentElement.parentElement.children[1].children[0].children.name.value
			data.emailPasien = event.target.parentElement.parentElement.children[1].children[1].children.email.value
			data.tanggal = event.target.parentElement.parentElement.children[1].children[4].children.date.value
		}
	}
	listPemesanan()
}