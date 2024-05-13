import * as data from "../helpers/default_data.json"
describe('Проверка авторизации', function () {
    beforeEach('Начало теста', function () {
        cy.visit('/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
          });
    afterEach('Конец теста', function () {
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и, он виден пользователю
           });

    it('Верный логин и верный пароль', function () {
         
         cy.get('#mail').type(data.login); // ввела верный логин
         cy.get('#pass').type(data.password);; // ввела верный пароль
         cy.get('#loginButton').click(); // нажала войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю, что после авторизации виден текст
         cy.get('#messageHeader').should('be.visible'); // есть видимый для пользователя текст
     })

     it('Верный логин и НЕверный пароль', function () {

        cy.get('#mail').type(data.login); // ввела верный логин
        cy.get('#pass').type('iLoveqastudio'); // ввела НЕверный пароль
        cy.get('#loginButton').click(); // нажала войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после авторизации виден текст
        cy.get('#messageHeader').should('be.visible'); // есть видимый для пользователя текст
    })
    it('НЕверный логин и верный пароль', function () {
        
        cy.get('#mail').type("german@dalnikov.ru"); // ввела НЕверный логин
        cy.get('#pass').type(data.password); // ввела верный пароль
        cy.get('#loginButton').click(); // нажала войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после авторизации виден текст
        cy.get('#messageHeader').should('be.visible'); // есть видимый для пользователя текст
    })
    it('Приведение к строчным буквам в логине', function () {

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввела верный логин с заглавными буквами 
        cy.get('#pass').type(data.password); // ввела верный пароль
        cy.get('#loginButton').click(); // нажала войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после авторизации виден текст
        cy.get('#messageHeader').should('be.visible'); // есть видимый для пользователя текст
    })
    it('Проверка, что в логине есть @', function () {

        cy.get('#mail').type("germandolnikov.ru"); // ввела логин без @
        cy.get('#pass').type(data.password); // ввела верный пароль
        cy.get('#loginButton').click(); // нажала войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю, что после авторизации виден текст
        cy.get('#messageHeader').should('be.visible'); // есть видимый для пользователя текст
    })
    it('Проверка восстановления пароля', function () {

        cy.get('#forgotEmailButton').click(); // нажимаю восстановить пароль
        cy.get('#mailForgot').type(data.login); // ввожу почту для восстановления
        cy.get('#restoreEmailButton').click(); // нажимаю отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю, на совпадение текст
        cy.get('#messageHeader').should('be.visible'); // есть видимый для пользователя текст
     
    })
 })
 
 
 
 // найти поле логин и ввести правильный логин
 // найти поле пароль и ввести правильный пароль
 // найти кнопку Войти и нажать на неё
 // проверить, что аторизация прошла успешно