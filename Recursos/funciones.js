

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')




  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        registrarpersona();
        event.preventDefault()
      }


      form.classList.add('was-validated')
    }, false)
  })
})()

let userlist = []

function registrarpersona() {
  let userdata = {}

  userdata.username = document.querySelector("#ValidacionNombre").value
  userdata.lastname = document.querySelector("#ValidacionApellido").value
  userdata.email = document.querySelector("#ValidacionCorreo").value
  userdata.celular = document.querySelector("#ValidacionTelefono").value

  userlist.push(userdata)

  alert("Registrado con exito")
  
}