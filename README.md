# GeradorCertificado

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute o projeto
```bash
# Desenvolvimento
ng serve

# ou com porta específica
ng serve --port 4200
```

### 4. Acesse a aplicação
Abra seu navegador em: `http://localhost:4200`

## Estrutura do Projeto

```
src/
├── app/
│   ├── _components/
│   │   ├── navbar/              # Barra de navegação
│   │   ├── certificate-form/    # Formulário de certificados
│   │   ├── certificate-preview/ # Preview em tempo real
│   │   └── certificate-list/    # Lista de certificados
│   ├── app.ts                   # Componente principal
│   ├── app.html                 # Template principal
│   └── app.css                  # Estilos principais
├── styles.css                   # Estilos globais
└── index.html                   # Página base
```

## Como Usar

### 1. **Criar Certificado**
1. Preencha o formulário com os dados do aluno
2. Selecione o curso e instituição
3. Configure a carga horária
4. Visualize o preview em tempo real
5. Clique em "Gerar Certificado"

### 2. **Gerenciar Certificados**
1. Acesse a aba "Meus Certificados"
2. Use a busca para encontrar certificados
3. Ordene por data, nome ou curso
4. Use as ações: visualizar, editar, duplicar, excluir

### 3. **Personalização**
- Modifique os estilos em `src/styles.css`
- Adicione novos cursos em `certificate-form.ts`
- Customize o template em `certificate-preview.html`

## Deploy

### Produção
```bash
ng build --prod
```

### GitHub Pages
```bash
ng add angular-cli-ghpages
ng deploy --base-href=/Gerador-de-Certificados-Angular/
```

## Contribuição

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

**Douglas Vecchi**
- GitHub: [@DougVec](https://github.com/DougVec)
- LinkedIn: [Douglas Vecchi](https://linkedin.com/in/douglas-vecchi)
