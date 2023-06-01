const img = $("#imgg")
const hamb = $(".responsive-nav")

img.click(() => {

    hamb.toggle()

})

const submit = $("#submit")
let nome = $("#nome")
submit.click(() => {
    alert("Obrigada pela preferência, acompanhe seu pedido pela página de Andamento")
})
