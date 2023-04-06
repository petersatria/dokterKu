// console.log(dokter);

function render(params) {
  let dokterList = document.querySelector("#list-dokter");
  params.forEach((el) => {
    let nama = el.nama;
    let spesialis = el.spesialis;

    const wrapper = document.createElement("div");
    const namaDokter = document.createElement("h1");
    const namaSpesialis = document.createElement("p");
    namaDokter.innerText = nama;
    namaSpesialis.innerText = spesialis;
    wrapper.appendChild(namaDokter);
    wrapper.appendChild(namaSpesialis);
    dokterList.appendChild(wrapper);

    let html = `
			<div>
				<h1>${nama}</h1>
				<p>${spesialis}</p>
			</div>`;
  });
}

// render(dokter)

function spesialisFilter() {
  let result = {};

  for (const { nama, spesialis } of dokter) {
    if (!result[spesialis]) {
      result[spesialis] = [];
    }
    result[spesialis].push(nama);
  }
  let filtered = Object.keys(result);

  let selector = document.querySelector("#select-spesialis");
  selector.innerHTML = "";
  filtered.forEach((e) => {
    selector.innerHTML += `
		<option value="${e}">${e}</option>
		`;
  });
}

spesialisFilter();

// function selectDoctor(arr, id, selectBy) {
// 	let selector = document.querySelector(id)
// 	selector.innerHTML = ''
// 	arr.forEach(dokter => {
// 		selector.innerHTML += `
// 		<option value="${dokter[selectBy]}">${dokter[selectBy]}</option>
// 		`
// 	})
// }
// selectDoctor(dokter, '#select-doctor', 'nama')
// selectDoctor(dokter, '#select-spesialis', 'spesialis')

function filterDoctor(arr) {
  let selectSpesialis = document.querySelector("#select-spesialis").value;
  let filtered = arr.filter((e) => e.spesialis.includes(selectSpesialis));
  let selector = document.querySelector("#select-doctor");
  selector.innerHTML = "";
  filtered.forEach((dokter) => {
    selector.innerHTML += `
		<option value="${dokter.nama}">${dokter.nama}</option>
		`;
  });
}
filterDoctor(dokter);

function booking() {
  let namaPasien = document.querySelector("#name").value;
  let emailPasien = document.querySelector("#email").value;
  let namaDokter = document.querySelector("#select-doctor").value;
  let tanggal = document.querySelector("#date").value;

  let temp = {
    id: Date.now(),
    namaPasien,
    emailPasien,
    namaDokter,
    tanggal,
  };

  dataPemesanan.push(temp);
  temp = {};
  document.querySelector("#name").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#date").value = "";
  filterDoctor(dokter);
  listPemesanan();
}

function listPemesanan() {
  let list = document.querySelector("#list-pemesanan");
  list.innerHTML = "";
  for (let {
    id,
    namaPasien,
    namaDokter,
    emailPasien,
    tanggal,
  } of dataPemesanan) {
    list.innerHTML += `
		<div id=${id} class="card m-2" style="width: 18rem">
			<div class="card-body">
				<h5 class="card-title">${namaPasien}</h5>
				<p class="card-text"> Nama : ${namaPasien}</p>	
				<p class="card-text"> Email : ${emailPasien}</p>	
				<p class="card-text"> Tanggal : ${tanggal}</p>	
				<p class="card-text"> Dokter : ${namaDokter}</p>	
				<a href="#" class="btn btn-danger">Delete</a>
				<a href="#" class="btn btn-success">Edit</a>
			</div>
		</div>
		`;
  }
}

listPemesanan();

function deleteList(id) {
  console.log(document.getElementById("1680765057461"));
}
