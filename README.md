# SITE NYC BANK

Informações sobre o site.

**Comando para roldar o site em localhost** php -S 0.0.0.0:8080

**URL para acessar o site** http://localhost:8080

## Instando dependêcias do site 

Para instalar as pedendência do site será necessário o node na máquina.

**Com o terminal aberto rode o seguinte comando**

```cmd
yarn
```

Após as intalações das dependência você pode compliar os arquivos SCSS e JS

**/Com o terminal aberto rode o seguinte comando/**

```cmd
yarn start
```

## Configuração de enviou de email

A biblioteca utilizada foi PHPMailer

## Link para meu currículo online: 

[PHPMailer](https://github.com/PHPMailer/PHPMailer)

**/Variáveis que precisar ser alteradas para ambiente de prdoução/**

```cmd
$image = setar url para logo
```

Para fazer as configurações para o email abra o arquivo /actions/contato.php.

E faça as configuraão de acordo com o seu servidor.

```cmd
$mail->Host = 'smtp.host.com.br';
$mail->SMTPAuth = true;
$mail->Username = 'email@host.com.br';
$mail->Password = 'senhaEmail';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 465;
```

## Preparando o ambiente de produção

Você precisa minificar css e js para subir para ambiente de produção.

**/Com o terminal aberto rode o seguinte comando/**

```cmd
yarn dist
```

**/IMPORTANTE/**

Arquivos e pastas que não precisam ir para o ambiente de produção:

- /node_modules
- /src