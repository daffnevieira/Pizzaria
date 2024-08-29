
const img = $("#imgg")
const hamb = $(".responsive-nav")

img.click(() => {

    hamb.toggle()

})

const submit = $("#submit")
let nome = $("#nome")
submit.click(() => {

    alert(`Obrigado pela preferência! Você será redirecionado para página de andamento. Até mais!`)
})

