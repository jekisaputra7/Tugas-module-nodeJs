const biodata = {
  nama: "Jeki saputra",
  tempatLahir: "jambi",
  tanggalLahir: "17 juli 1996",
  alamat: "Jl.Air hangat Timur.25",
};
const tampilNama = () => console.log(`Nama: ${biodata.nama}`);
const tampilTempatLahir = () =>console.log(`Tempat Lahir: ${biodata.tempatLahir}`);
const tampilTanggalLahir = () =>console.log(`Tanggal Lahir: ${biodata.tanggalLahir}`);
const tampilAlamat = () => console.log(`Alamat: ${biodata.alamat}`);

module.exports = {
  tampilNama,
  tampilTempatLahir,
  tampilTanggalLahir,
  tampilAlamat,
};
