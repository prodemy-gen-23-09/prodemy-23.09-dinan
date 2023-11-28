const daftarCustomers = [
    {
        firstName: "Dinan",
        lastName: "Achmad",
        historyPembelian: ["pulpen", "buku", "pensil", "tas"]
    },
    {
        firstName: "Achmad",
        lastName: "Fauzan",
        historyPembelian: ["buku", "pensil", "penghapus"]
    },
    {
        firstName: "Alam",
        lastName: "Alam",
        historyPembelian: ["penggaris", "hvs", "spidol", "busur"]
    },
    {
        firstName: "Kelvin",
        lastName: "Kelvin",
        historyPembelian: ["hvs", "spidol", "busur", "tipe-x"]
    },
    {
        firstName: "Fauzan",
        lastName: "Fauzan",
        historyPembelian: ["buku", "pensil"],
    }
]

//menambahkan function ke array of object
daftarCustomers.forEach((customer) => {customer['fullName'] = function (){
    return this.firstName + " " + this.lastName
}})

//filter objecct berdasarkan historyPembelian = buku
let filterCustomer =  daftarCustomers.filter((customer) => customer.historyPembelian.includes("buku"))

console.log(filterCustomer.map((customer) => customer.fullName()))