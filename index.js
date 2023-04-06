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

function spesialisFilter(id) {
	let result = {}

	for (const { nama, spesialis } of dokter) {
		if (!result[spesialis]) {
			result[spesialis] = []
		}
		result[spesialis].push(nama)

	}
	let filtered = Object.keys(result)

	let selector = document.querySelector(id)
	selector.innerHTML = ''
	filtered.forEach(e => {
		selector.innerHTML += `
		<option value="${e}">${e}</option>
		`
	})
}


spesialisFilter('#select-spesialis')

function filterDoctor(arr, idSelectorSpesialis, idSelectorDokter) {
	let selectSpesialis = document.querySelector(idSelectorSpesialis).value
	console.log(selectSpesialis);
	let filtered = arr.filter(e => e.spesialis.includes(selectSpesialis))
	let selector = document.querySelector(idSelectorDokter)
	selector.innerHTML = ''
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
	temp = {}
	document.querySelector('#name').value = ''
	document.querySelector('#email').value = ''
	document.querySelector('#date').value = ''
	filterDoctor(dokter, '#select-spesialis', '#select-doctor')
	listPemesanan()
}

function listPemesanan(idModal) {
	let list = document.querySelector('#list-pemesanan')
	list.innerHTML = ''
	for (let { id, namaPasien, namaDokter, emailPasien, tanggal } of dataPemesanan) {
		if (idModal && idModal === id) {
			console.log(id, 'id');
			console.log(idModal, 'idModal');
			list.innerHTML += `
			<div id=${id} class="card m-2" style="width: 18rem">
				<div class="card-body">
					<h5 class="card-title">${namaPasien}</h5>
					<p class="card-text"> Nama : ${namaPasien}</p>	
					<p class="card-text"> Email : ${emailPasien}</p>	
					<p class="card-text"> Tanggal : ${tanggal}</p>	
					<p class="card-text"> Dokter : ${namaDokter}</p>	
					<button onclick="deleteList(${id})" type="submit" class="btn btn-danger">Delete</button>
					
					<!-- Button trigger modal -->
					<button type="button" onclick="editModal(${id})" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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
								Modal title
							</h1>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body">
							<div class="col-6">
								<label for="name" class="form-label"
									>Your name
								</label>
								<input
									id="name${id}"
									class="form-control"
									type="text"
									placeholder="Name..."
									value="${namaPasien}"
									oninput="onChangeName(event, ${id})"
								/>
							</div>
							<div class="col-6">
								<label for="email" class="form-label"
									>Email address
								</label>
								<input
									id="email"
									class="form-control"
									type="text"
									placeholder="email@email.com"
									value="${emailPasien}"
									oninput="onChangeEmail(event, ${id})"
								/>
							</div>
							<div class="col-4">
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
							<div class="col-4">
								<label
									for="select-doctorModal${id}"
									class="form-label"
									>Choose your Doctor
								</label>
								<select
									id="select-doctorModal${id}"
									class="form-select"
									disabled
								></select>
							</div>
		
							<div class="col-4">
								<label for="date" class="form-label"
									>Appointment date
								</label>
								<input
									id="date"
									class="form-control"
									type="date"
									value="${tanggal}"
									oninput="onChangeTanggal(event, ${id})"
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
								id="booking-appointment"
								onclick="editModalPemesanan(${idModal})"
								class="btn btn-primary"
								data-bs-dismiss="modal"
							>
								Book Appointment
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
					<h5 class="card-title">${namaPasien}</h5>
					<p class="card-text"> Nama : ${namaPasien}</p>	
					<p class="card-text"> Email : ${emailPasien}</p>	
					<p class="card-text"> Tanggal : ${tanggal}</p>	
					<p class="card-text"> Dokter : ${namaDokter}</p>	
					<button onclick="deleteList(${id})" type="submit" class="btn btn-danger">Delete</button>
					
					<!-- Button trigger modal -->
					<button type="button" onclick="editModal(${id})" class="btn btn-success" >
					Edit
					</button>
				</div>
			</div>`
		}

	}
}

function passId(id) {
	console.log(document.getElementById(id).id);
	return document.getElementById(id).id
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

function onChangeName(event, id) {
	let namaPasien = event.target.value
	let data = {
		id,
		namaPasien,
	}
	editModalPemesanan(id, data)
}

function onChangeEmail(event, id) {
	let emailPasien = event.target.value
	let data = {
		id,
		emailPasien,
	}
	editModalPemesanan(id, data)
}

function onChangeTanggal(event, id) {
	let tanggal = event.target.value
	let data = {
		id,
		tanggal,
	}
	editModalPemesanan(id, data)
}

function editModalPemesanan(idModal, dataNew) {
	if (!dataNew) {
		return
	}

	for (const data of dataPemesanan) {
		if (data.id === idModal) {
			if (dataNew.hasOwnProperty('namaPasien')) {
				data.namaPasien = dataNew.namaPasien
			}
			if (dataNew.hasOwnProperty('emailPasien')) {
				data.emailPasien = dataNew.emailPasien
			}
			if (dataNew.hasOwnProperty('tanggal')) {
				data.tanggal = dataNew.tanggal
			}
		}
	}
	listPemesanan()
}