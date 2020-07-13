
const form = document.getElementById('formLogin')
const button = document.getElementById('btn-submit')

const usuario = document.getElementById('user')
const contraseña = document.getElementById('pass')

const formValid =
{
    usuario = false,
    contraseña = false
}

form.addEventListener('submit', (e) => 
{
    validateForm()
    Redirect()
    alert('Datos enviados')
})

usuario.addEventListener('change', (e) => 
{
    if(e.target.value.trim().lenght > 0) formValid.usuario = true
})

contraseña.addEventListener('change', (e) => 
{
    if(e.target.value.trim().lenght > 0) formValid.contraseña = true
})

const validateForm = () => 
{
    const formValues = Object.values(formValid) //Convertimos el objeto en un array para recorerlo y le pasamos el objeto que queremos validar
    const validar = formValues.findIndex(value => value == false)//Comprobamos si en el array existe un false para que no se vallan campos en blanco
    if(validar == -1) form.submit()
    else alert('Faltan Datos')
}

const Redirect = () =>
{
    if(validateForm == true)
    window.location.href = 'Registrarse.html'
    else alert('Faltan Datos')
}

