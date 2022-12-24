$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function(){
        $('#docarousel').slideToggle();
    })

    $('.cadastro').click(function(){
        $('#docadastro').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })

    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    })

    $('#cep').mask('00.000-000', {
        placeholder: '00.000-000'
    })

    $('.contatos').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculoInteresse: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu e-mail',
            telefone: 'Por favor, insira seu telefone',
            mensagem: 'Por favor, insira sua mensagem'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            console.log(camposIncorretos)
        }
    })

    $('.cadastros').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu e-mail',
            telefone: 'Por favor, insira seu telefone',
            cpf: 'Por favor, insira seu cpf',
            cep: 'Por favor, insira seu CEP',
            endereco : 'Por favor, insira seu endereço completo'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            console.log(camposIncorretos)
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $("#contato")
        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#veiculoInteresse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

    $('.carousel-atividade #destaque').click(function(){
        const destina = $("#destaques")

        $("html").animate({
            scrollTop: destina.offset().top
        }, 1000)
    })

    $('.carousel-atividade #promo').click(function(){
        const destina = $("#promocao")

        $("html").animate({
            scrollTop: destina.offset().top
        }, 1000)
    })

    $('.carousel-atividade #conta').click(function(){
        const destina = $("#contato")

        $("html").animate({
            scrollTop: destina.offset().top
        }, 1000)
    })

    $('.carousel-atividade #sobre').click(function(){
        const destina = $("#sobre-a-loja")

        $("html").animate({
            scrollTop: destina.offset().top
        }, 1000)
    })

})

$('.contatos').submit(function(){
    $('.contatos input').val('');
    $('.contatos textarea').val('');
})

$('.cadastros').submit(function(){
    $('.cadastros input').val('');
})