import {Given} from "@badeball/cypress-cucumber-preprocessor"


Given('que o Usuário acessou o site de pesquisa', () => {
	cy.visit('http://duckduckgo.com')
});
