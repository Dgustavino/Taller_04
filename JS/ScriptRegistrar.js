
const form = document.getElementById('form')
const button = document.getElementById('btn-submit')

const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const correo = document.getElementById('correo')
const usuario = document.getElementById('usuario')
const contraseña = document.getElementById('contraseña')

const formIsValid = 
{
    nombre: false,
    apellido: false,
    correo: false,
    usuario: false,
    contraseña: false
}


const miJSON = '{"Nombre:"'+nombre+'", Apellido:"'+apellido+'", Correo:"'+correo+'", Usuario:"'
    +usuario+'", Contraseña:"'+contraseña+'}'

    obj_json= JSON.parse(miJSON)
    console.log(miJSON)

form.addEventListener('submit', (e) => 
{
    validateForm()
    

    let xhr
    if(window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")

    xhr.submit('POST', '/JS/JsonFolder')
    xhr.setRequestHeader("Content-type", "application/json-charset=UTF-8")

    xhr.addEventListener('load', (data) =>
    {
        console.log(JSON.parse(data.target.response))
    })

    xhr.send()
})

nombre.addEventListener('change', (e) => 
{
    if(e.target.value.trim().lenght > 0) formIsValid.nombre = true
})

apellido.addEventListener('change', (e) => 
{
    if(e.target.value.trim().lenght > 0) formIsValid.apellido = true
})

correo.addEventListener('change', (e) => 
{
    if(e.target.value.trim().lenght > 0) formIsValid.correo = true
})

usuario.addEventListener('change', (e) => 
{
    if(e.target.value.trim().lenght > 0) formIsValid.usuario = true
})

contraseña.addEventListener('change', (e) => 
{
    if(e.target.value.trim().lenght > 0) formIsValid.contraseña = true
})


const validateForm = () => 
{
    const formValues = Object.values(formIsValid) //Convertimos el objeto en un array para recorerlo y le pasamos el objeto que queremos validar
    const valid = formValues.findIndex(value => value == false)//Comprobamos si en el array existe un false para que no se vallan campos en blanco
    if(valid == -1) form.submit()
    else alert('Form invalid')
}

