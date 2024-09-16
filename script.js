
function submit() {
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;

    const car = {
        marca: marca,
        modelo: modelo
    };

    localStorage.setItem('carros', JSON.stringify(car));

    document.getElementById("marcaUsuario").innerHTML = "a marca é " + car.marca;
    document.getElementById("modeloUsuario").innerHTML = "o modelo é " + car.modelo;

}