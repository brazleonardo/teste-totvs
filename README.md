# TESTE TOTVS

Informações sobre o site:
Fiz uma tela home com 5 componetes e utilizei webpack para empacotar os dados javascript e complilar o scss para css

* Navbar
```cmd
<app-navbar><app-navbar>
```
* Banner
```cmd
<app-banner
  heading="Texto header"
  subheading="Recebe uma descrição">
</app-banner>
```
* Product
```cmd
<app-product></app-product>
```
* Cart
```cmd
<app-cart></app-cart>
```

**Comando para rodar o site em localhost** php -S 0.0.0.0:8080

**URL para acessar o site** http://localhost:8080

## Instando dependêcias do site 

Para instalar as pedendência do site será necessário ter o node instalado na sua máquina.

**Com o terminal aberto rode o seguinte comando**

```cmd
yarn
```

Após as intalações das dependência você pode compliar os arquivos SCSS e JS

**/Com o terminal aberto rode o seguinte comando/**

```cmd
yarn start
```

## Preparando o ambiente de produção

Você precisa minificar css e js para subir para ambiente de produção.

**/Com o terminal aberto rode o seguinte comando/**

```cmd
yarn dist
```