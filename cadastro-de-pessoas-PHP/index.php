<?php

  include('config.php');
  Mysql::conectar();
?>

<!DOCTYPE html>
<html lang="pt-br" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="vieport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Pessoas</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="form_cd">

      <?php

        if(isset($_POST['acao']) && $_POST['form'] == 'f_form'){
          $nome = $_POST['nome'];
          $email = $_POST['email'];
          $senha = $_POST['senha'];

          if($nome == ''){
            Form::alert('erro', 'O nome ficou vazio!');
          }else if($email == ''){
            Form::alert('erro','O email ficou vazio!');
          }else if($senha == ''){
            Form::alert('erro', 'A senha ficou vazia!');
          }else{
            Form::cadastrar($nome, $email, $senha);
            Form::alert('sucesso', 'Usuario '.$nome.'cadastrado com sucesso!');
          }

        }

      ?>

      <h2>Cadastro de usuário</h2>
      <form action="index.php" method="post">
        <div><input type="text" name="nome" placeholder="Nome"></div>
        <div><input type="email" name="email" placeholder="E-mail"></div>
        <div><input type="password" name="senha" placeholder="Senha"></div>
        <div><input type="submit" name="acao" placeholder="Cadastrar"></div>
        <div><input type="hidden" name="form" placeholder="f_form"></div>
      </form>

    </div>
  </body>
</html>
