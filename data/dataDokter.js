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
		pic: 'https://cdn.discordapp.com/attachments/1081934238871462034/1093778601272422430/1.jpg'
	},
	{
		id: 2,
		nama: 'Dr. Bahtarul',
		spesialis: 'Spesialis Anak',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Gadjah Mada.',
		pic: 'https://cdn.discordapp.com/attachments/1081934238871462034/1093778603164061706/9.jpg'
	},
	{
		id: 3,
		nama: 'Dr. Jati',
		spesialis: 'Spesialis Kulit',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Indonesia, Depok pada tahun 2006.',
		pic: 'https://cdn.discordapp.com/attachments/1081934238871462034/1093778602920775750/8.jpg'
	},
	{
		id: 4,
		nama: 'Dr. Malik',
		spesialis: 'Spesialis Mata',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Gadjah Mada, Malang pada tahun 2010.',
		pic: 'https://cdn.discordapp.com/attachments/1081934238871462034/1093778602459418624/6.jpg'
	},
	{
		id: 5,
		nama: 'Dr. Peter',
		spesialis: 'Spesialis Penyakit Dalam',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Indonesia, Depok pada tahun 2007.',
		pic: 'https://cdn.discordapp.com/attachments/1081934238871462034/1093778601704443905/3.jpg'
	},
	{
		id: 6,
		nama: 'Dr. Sesilia',
		spesialis: 'Dokter Gigi',
		pengalaman: 'Mendapatkan gelar Kedokteran Gigi setelah menamatkan pendidikan di Universitas Indonesia, Depok pada tahun 2011.',
		pic: 'https://cdn.discordapp.com/attachments/1081934238871462034/1093778601935122462/4.jpg'
	},
	{
		id: 7,
		nama: 'Dr. Ahmad',
		spesialis: 'Dokter Umum',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Brawijaya, Malang pada tahun 2004.',
		pic: 'https://cdn.discordapp.com/attachments/1081934238871462034/1093778601272422430/1.jpg'
	},
	{
		id: 8,
		nama: 'Dr. Yohanna',
		spesialis: 'Spesialis Kulit',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Negeri Jakarta, Jakarta pada tahun 2001.',
		pic: 'https://cdn.discordapp.com/attachments/1081934238871462034/1093778602128052244/5.jpg'
	},
	{
		id: 9,
		nama: 'Dr. Mundur',
		spesialis: 'Dokter Jantung',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Gadjah Mada, Sleman pada tahun 2006.',
		pic: 'https://cdn.discordapp.com/attachments/1081934238871462034/1093778603356991498/10.jpg'
	},
	{
		id: 10,
		nama: 'Dr. Rizky',
		spesialis: 'Spesialis Mata',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Indonesia, Depok pada tahun 2001.',
		pic: 'https://cdn.discordapp.com/attachments/1081934238871462034/1093778691223457853/12.jpg'
	},
	{
		id: 11,
		nama: 'Dr. Rihanna',
		spesialis: 'Spesialis Kulit',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas China Medical University, Beijing pada tahun 2011.',
		pic: 'https://cdn.discordapp.com/attachments/1081934238871462034/1093778690955030558/11.jpg'
	},
	{
		id: 12,
		nama: 'Dr. Thomas',
		spesialis: 'Spesialis Anak',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Gadjah Mada, Sleman pada tahun 2005.',
		pic: 'https://cdn.discordapp.com/attachments/1081934238871462034/1093778601272422430/1.jpg'
	},
	{
		id: 13,
		nama: 'Dr. Rosa',
		spesialis: 'Dokter Umum',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Institut Teknologi Bandung, Bandung pada tahun 2006.',
		pic: 'https://cdn.discordapp.com/attachments/1081934238871462034/1093778602681708554/7.jpg'
	},
	{
		id: 14,
		nama: 'Dr. Yuna',
		spesialis: 'Dokter Umum',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Gadjah Mada, Sleman pada tahun 2013.',
		pic: 'https://cdn.discordapp.com/attachments/1081934238871462034/1093778601477935144/2.jpg'
	},
	{
		id: 15,
		nama: 'Dr. Gustavo',
		spesialis: 'Spesialis Penyakit Dalam',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Indonesia, Depok pada tahun 2012.',
		pic: 'https://cdn.discordapp.com/attachments/1081934238871462034/1093778602920775750/8.jpg'
	},
	{
		id: 16,
		nama: 'Dr. Leon',
		spesialis: 'Dokter Gigi',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Indonesia, Depok pada tahun 2011.',
		pic: 'https://cdn.discordapp.com/attachments/1081934238871462034/1093778603356991498/10.jpg'
	},
	{
		id: 17,
		nama: 'Dr. Putri',
		spesialis: 'Spesialis Mata',
		pengalaman: 'Mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Padjadjaran, Sumedang pada tahun 2015.',
		pic: 'https://cdn.discordapp.com/attachments/1081934238871462034/1093778602681708554/7.jpg'
	},
]