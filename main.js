const BTNENCRYPT = document.querySelector('#encryptor');
const BTNDECRYPT = document.querySelector('#decryptor');
const BTNDELETE = document.querySelector('#delete');
const BTNCOPY = document.querySelector('#copy')
const TEXTOTRANSFORMADO = document.querySelector('#textTransform')
let texto = document.querySelector('#text');
let textoTransformado;

function encriptar(text){

    let newText;
    
    newText = text.replace(/e/g,'enter');
    newText = newText.replace(/i/g,'imes');
    newText = newText.replace(/a/g,'ai');
    newText = newText.replace(/o/g,'ober');
    newText = newText.replace(/u/g,'ufat');

    mostrarTexto(newText)
}
function desencriptar(text){

    let newText;
    newText = text.replace(/enter/g,'e');
    newText = newText.replace(/imes/g,'i');
    newText = newText.replace(/ai/g,'a');
    newText = newText.replace(/ober/g,'o');
    newText = newText.replace(/ufat/g,'u');
    mostrarTexto(newText)

}
function mostrarTexto(text){
       if(TEXTOTRANSFORMADO.textContent !== ''){
        TEXTOTRANSFORMADO.textContent = '';
       }
       TEXTOTRANSFORMADO.textContent = text;
       textoTransformado = TEXTOTRANSFORMADO.textContent;
       return textoTransformado;
}
function COPY(copytext){
    navigator.clipboard.writeText(copytext)
    
    BTNCOPY.textContent = 'Copiado';
    BTNCOPY.classList.add('btnAgrandar')
    setTimeout(()=>{
        BTNCOPY.classList.remove('btnAgrandar')
            BTNCOPY.textContent = 'Copiar';
    },600);
}
function eliminarTexto(textItem){
    textItem.value = '';
}


BTNENCRYPT.addEventListener('click', ()=>{
    if(texto.value !== ''){
        encriptar(texto.value);
    }

});
BTNDECRYPT.addEventListener('click', ()=>{
    if(texto.value !== ''){
        desencriptar(texto.value);
    }
});
BTNCOPY.addEventListener('click', ()=>{
    if(TEXTOTRANSFORMADO.value !== ''){
        COPY(textoTransformado);
    }
})
BTNDELETE.addEventListener('click', ()=>{
    eliminarTexto(texto)
})