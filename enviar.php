<?php

$host = 'Servidor: 127.0.0.1'; // IP do servidor do banco de dados
$port = '3306'; // Porta do MySQL
$dbname = 'Projeto_fome_zero'; // Nome do banco de dados
$username = 'seu_usuario'; // Nome de usuário do banco
$password = 'sua_senha'; // Senha do banco

// Definir o cabeçalho da resposta como JSON
header('Content-Type: application/json');

// Conexão ao banco de dados usando porta especificada
try {$conn = new PDO("mysql:host=$host;port=$port;dbname=$dbname;charset=utf8", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} 
catch (PDOException $e) {
    
   echo json_encode(['message' => 'Erro de conexão: ' . $e->getMessage()]);
    exit; // Saia do script em caso de erro
}
// Se o método for POST, continue com a validação e inserção
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
// Valida o nome
    if (empty($_POST['nome']) || strlen($_POST['nome']) < 3) {
        
       
echo json_encode(['message' => 'Nome inválido.']);
        exit;
    }

    
    }

// Valida o email
    
   
if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        
       
echo json_encode(['message' => 'Email inválido.']);
        
       
exit;
    }

    
   
// Valida o CNPJ (uma expressão regular simples para garantir 14 dígitos)
    
   
if (!preg_match("/^\d{14}$/", $_POST['cnpj'])) {
        
       echo json_encode(['message' => 'CNPJ inválido.']);
        
    exit;
}
   
// Se todos os dados forem válidos, prossiga com a inserção no banco de dados
    try {
        
// Preparar a consulta SQL com placeholders para evitar SQL Injection
    $stmt = $conn->prepare("INSERT INTO sua_tabela (nome, email, cnpj) VALUES (:nome, :email, :cnpj)");

// Executar a consulta com os parâmetros       
$stmt->execute([
            
           
':nome' => $_POST['nome'],
    ':email' => $_POST['email'],
            
           
':cnpj' => $_POST['cnpj']
        ]);

      

// Resposta de sucesso
        echo json_encode(['message' => 'Dados inseridos com sucesso!']);

    } 

catch (PDOException $e) {
        
       
// Capturar e retornar erros de execução do SQL
        echo json_encode(['message' => 'Erro ao inserir dados: ' . $e->getMessage()]);
}
   
?>