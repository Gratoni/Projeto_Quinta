document.getElementById('telefone').addEventListener('input', function (e) {
            // Armazena o valor digitado pelo usuário
var telefone = e.target.value;

            // Remove todos os caracteres não numéricos
    telefone = telefone.replace(/\D/g, '');

            // Aplica a máscara para números com até 10 dígitos (XX) XXXX-XXXX
if (telefone.length <= 10) {
    telefone = telefone.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
} else {
                // Aplica a máscara para números com 11 dígitos (XX) XXXXX-XXXX
    telefone = telefone.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
}

// Atualiza o campo com o valor formatado
e.target.value = telefone;

// Exibe o campo de "Tipo de Telefone" quando o número está completamente preenchido
if (telefone.length >= 14) {
    document.getElementById('tipoTelefoneDiv').style.display = 'block';
} else {
                // Esconde o campo se o número não estiver completo
    document.getElementById('tipoTelefoneDiv').style.display = 'none';
    }
 });

        // Função para aplicar máscara no campo de CNPJ
    document.getElementById('cnpj').addEventListener('input', function (e) {
            // Armazena o valor digitado pelo usuário
var cnpj = e.target.value;

            // Remove todos os caracteres não numéricos
    cnpj = cnpj.replace(/\D/g, '');

            // Aplica a máscara para o formato XX.XXX.XXX/XXXX-XX
    cnpj = cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})/, "$1.$2.$3/$4-$5");

            // Atualiza o campo com o valor formatado
    e.target.value = cnpj;

            // Exibe as caixas de seleção adicionais quando o CNPJ está completamente preenchido
if (cnpj.length === 18) {
         document.getElementById('extraOptions').style.display = 'block';
} else {
                // Esconde as opções se o CNPJ não estiver completo
    document.getElementById('extraOptions').style.display = 'none';
    }
});

        // Função para alternar a visibilidade da senha
        document.getElementById('togglePassword').addEventListener('click', function () {
            // Seleciona o campo de senha
    var senhaInput = document.getElementById('senha');
            
            // Alterna o tipo entre 'password' e 'text'
    var type = senhaInput.getAttribute('type') === 'password' ? 'text' : 'password';
        senhaInput.setAttribute('type', type);

            // Alterna o texto do botão entre 'Mostrar Senha' e 'Ocultar Senha'
    this.textContent = type === 'password' ? 'Mostrar Senha' : 'Ocultar Senha';
});
