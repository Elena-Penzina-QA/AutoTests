describe('Проверка авторизации', function () {

    it('Авторизация, user case', function () {
        cy.visit('https://login.qa.studio/'); //Зашла на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //Нашла поле логин и ввела данные
        cy.get('#pass').type('iLoveqastudio1'); //Нашла поле пароль и ввела данные
        cy.get('#loginButton').click() //Нашла кнопку ВОЙТИ и нажала на нее

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Нашла сообщение и сверила текст с требуемым
        cy.get('#messageHeader').should('be.visible'); //Проверила, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверила, что крестик виден пользователю
        cy.get('#exitMessageButton > .exitIcon').click() //Проверила, что крестик нажимается
    })
    it('Восстановление пароля, user case', function () {
        cy.visit('https://login.qa.studio/'); //Зашла на сайт
        cy.get('#forgotEmailButton').click(); //Нашла кнопку Восс.пароль и нажала на нее
        cy.get('#forgotForm > .header').should('be.visible'); //Проверила, что текст Восстан. пароль виден пользователю
        cy.get('#mailForgot').type('german@dolnikov.ru'); //Нашла поле логин и ввела данные почты
        cy.get('#restoreEmailButton').click() //Нашла кнопку Отправить код и кликнула по ней
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Нашла сообщение и сверила текст с требуемым
        cy.get('#messageHeader').should('be.visible'); //Проверила, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверила, что крестик виден пользователю
        cy.get('#exitMessageButton > .exitIcon').click() //Проверила, что крестик нажимается
    })
    it('Авторизация с неверным паролем', function () {
        cy.visit('https://login.qa.studio/'); //Зашла на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //Нашла поле логин и ввела данные
        cy.get('#pass').type('iLoveqastudio2'); //Нашла поле пароль и ввела неверные данные
        cy.get('#loginButton').click() //Нашла кнопку ВОЙТИ и нажала на нее

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Нашла сообщение и сверила текст с требуемым
        cy.get('#messageHeader').should('be.visible'); //Проверила, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверила, что крестик виден пользователю
        cy.get('#exitMessageButton > .exitIcon').click() //Проверила, что крестик нажимается
    })
    it('Авторизация с неверным логином', function () {
        cy.visit('https://login.qa.studio/'); //Зашла на сайт
        cy.get('#mail').type('german@olnikov.ru'); //Нашла поле логин и ввела неверные данные
        cy.get('#pass').type('iLoveqastudio1'); //Нашла поле пароль и ввела данные
        cy.get('#loginButton').click() //Нашла кнопку ВОЙТИ и нажала на нее

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Нашла сообщение и сверила текст с требуемым
        cy.get('#messageHeader').should('be.visible'); //Проверила, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверила, что крестик виден пользователю
        cy.get('#exitMessageButton > .exitIcon').click() //Проверила, что крестик нажимается
    })
    it('Авторизация с отсутствием @ в логине', function () {
        cy.visit('https://login.qa.studio/'); //Зашла на сайт
        cy.get('#mail').type('germandolnikov.ru'); //Нашла поле логин и ввела неверные данные
        cy.get('#pass').type('iLoveqastudio1'); //Нашла поле пароль и ввела данные
        cy.get('#loginButton').click() //Нашла кнопку ВОЙТИ и нажала на нее

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Нашла сообщение и сверила текст с требуемым
        cy.get('#messageHeader').should('be.visible'); //Проверила, что текст виден пользователю
    })
    it('Авторизация с логином в разных регистрах', function () {
        cy.visit('https://login.qa.studio/'); //Зашла на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //Нашла поле логин и ввели  данные в разных регистрах
        cy.get('#pass').type('iLoveqastudio1'); //Нашла поле пароль и ввела данные
        cy.get('#loginButton').click() //Нашла кнопку ВОЙТИ и нажала на нее

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Нашла сообщение и сверила текст с требуемым
        cy.get('#messageHeader').should('be.visible'); //Проверила, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверила, что крестик виден пользователю

    })
})
