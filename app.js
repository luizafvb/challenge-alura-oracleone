function copiarTexto() {
    var campoTexto = document.getElementById('mensagemCopiar');
    campoTexto.select();
    campoTexto.setSelectionRange(0, 99999); // Para dispositivos móveis

    navigator.clipboard.writeText(campoTexto.value).then(function() {
        alert('Texto copiado: ' + campoTexto.value);
    }, function(err) {
        alert('Falha ao copiar texto: ' + err);
    });
}
function criptografar() {
    var texto = document.getElementById('mensagemCodDecode').value;
    var textoCriptografado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('mensagemCopiar').value = textoCriptografado;
}

function descriptografar() {
    var texto = document.getElementById('mensagemCodDecode').value;
    var textoDescriptografado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('mensagemCopiar').value = textoDescriptografado;
}