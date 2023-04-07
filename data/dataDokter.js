// dataDokter = [
// 	{
// 		nama: '',
// 		spesialis: '',
// 		pesan: ''
// 	},
// ]

let dokter = [
	{
		id: 1,
		nama: 'Dr. Johnny',
		spesialis: 'Dokter Umum',
		pengalaman: 'Mendapatkan gelar kedokterannya setelah menamatkan pendidikan di China Medical University pada tahun 1980.',
		pic: 'https://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/people-03.jpg'
	},
	{
		id: 2,
		nama: 'Dr. Bahtarul',
		spesialis: 'Spesialis Anak',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Gadjah Mada.',
		pic: 'https://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/people-01.jpg'
	},
	{
		id: 3,
		nama: 'Dr. Jati',
		spesialis: 'Spesialis Kulit',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Indonesia, Depok pada tahun 2006.',
		pic: 'https://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/people-03.jpg'
	},
	{
		id: 4,
		nama: 'Dr. Malik',
		spesialis: 'Spesialis Mata',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Gadjah Mada, Malang pada tahun 2010.',
		pic: 'https://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/people-01.jpg'
	},
	{
		id: 5,
		nama: 'Dr. Peter',
		spesialis: 'Spesialis Penyakit Dalam',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Indonesia, Depok pada tahun 2007.',
		pic: 'https://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/people-03.jpg'
	},
	{
		id: 6,
		nama: 'Dr. Sesilia',
		spesialis: 'Dokter Gigi',
		pengalaman: 'Mendapatkan gelar Kedokteran Gigi setelah menamatkan pendidikan di Universitas Indonesia, Depok pada tahun 2011.',
		pic: 'https://media.discordapp.net/attachments/1081934238871462034/1093516829525299200/OJXK8U1_01_05.jpg?width=613&height=904'
	},
	{
		id: 7,
		nama: 'Dr. Ahmad',
		spesialis: 'Dokter Umum',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Brawijaya, Malang pada tahun 2004.',
		pic: 'https://media.discordapp.net/attachments/1081934238871462034/1093516830880055326/OJXK8U1_01_09.jpg?width=789&height=903'
	},
	{
		id: 8,
		nama: 'Dr. Yohanna',
		spesialis: 'Spesialis Kulit',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Negeri Jakarta, Jakarta pada tahun 2001.',
		pic: 'https://media.discordapp.net/attachments/1081934238871462034/1093516830175412284/OJXK8U1_01_07.jpg?width=678&height=904'
	},
	{
		id: 9,
		nama: 'Dr. Mundur',
		spesialis: 'Dokter Jantung',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Gadjah Mada, Sleman pada tahun 2006.',
		pic: 'https://media.discordapp.net/attachments/1081934238871462034/1093516830880055326/OJXK8U1_01_09.jpg?width=789&height=903'
	},
	{
		id: 10,
		nama: 'Dr. Rizky',
		spesialis: 'Spesialis Mata',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Indonesia, Depok pada tahun 2001.',
		pic: 'https://media.discordapp.net/attachments/1081934238871462034/1093516829030350879/OJXK8U1_01_03.jpg?width=838&height=904'
	},
	{
		id: 11,
		nama: 'Dr. Rihanna',
		spesialis: 'Spesialis Kulit',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas China Medical University, Beijing pada tahun 2011.',
		pic: 'https://media.discordapp.net/attachments/1081934238871462034/1093516829525299200/OJXK8U1_01_05.jpg?width=613&height=904'
	},
	{
		id: 12,
		nama: 'Dr. Thomas',
		spesialis: 'Spesialis Anak',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Gadjah Mada, Sleman pada tahun 2005.',
		pic: 'https://media.discordapp.net/attachments/1081934238871462034/1093516829030350879/OJXK8U1_01_03.jpg?width=838&height=904'
	},
	{
		id: 13,
		nama: 'Dr. Rosa',
		spesialis: 'Dokter Umum',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Institut Teknologi Bandung, Bandung pada tahun 2006.',
		pic: 'https://media.discordapp.net/attachments/1081934238871462034/1093516830175412284/OJXK8U1_01_07.jpg?width=678&height=904'
	},
	{
		id: 14,
		nama: 'Dr. Yuna',
		spesialis: 'Dokter Umum',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Gadjah Mada, Sleman pada tahun 2013.',
		pic: 'https://media.discordapp.net/attachments/1081934238871462034/1093516829261054024/OJXK8U1_01_04.jpg?width=719&height=904'
	},
	{
		id: 15,
		nama: 'Dr. Gustavo',
		spesialis: 'Spesialis Penyakit Dalam',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Indonesia, Depok pada tahun 2012.',
		pic: 'https://media.discordapp.net/attachments/1081934238871462034/1093516830519349340/OJXK8U1_01_08.jpg?width=581&height=904'
	},
	{
		id: 16,
		nama: 'Dr. Leon',
		spesialis: 'Dokter Gigi',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Indonesia, Depok pada tahun 2011.',
		pic: 'https://media.discordapp.net/attachments/1081934238871462034/1093516829793714296/OJXK8U1_01_06.jpg?width=678&height=904'
	},
	{
		id: 17,
		nama: 'Dr. Putri',
		spesialis: 'Spesialis Mata',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Padjadjaran, Sumedang pada tahun 2015.',
		pic: 'https://media.discordapp.net/attachments/1081934238871462034/1093516831588892742/OJXK8U1_01_11.jpg?width=873&height=904'
	},
]