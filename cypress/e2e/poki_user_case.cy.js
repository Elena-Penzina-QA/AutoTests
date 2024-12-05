describe('Проверка покупки аватара', function () {

    it('Авторизация, user case', function () {
        cy.visit('https://pokemonbattle.ru/login') //Зашла на сайт
        cy.get(':nth-child(1) > .auth__input').type('Elenholly@yandex.ru'); //Нашла поле логин и ввела данные
        cy.get('#password').type('0711PEi') //Нашла поле пароль и ввела данные
        cy.get('.auth__button').click() //Нашла кнопку Войти и нажала на нее
        cy.get('.header__container > .header__id').click(); //Нашла кнопку перехода в личный кабинет и нажала на нее
        cy.get('[href="/shop"]').click(); //Нашла кнопку Смена аватара и нажала на нее
        cy.get('.available > button').first().click({ force: true });   // Нажимаем кнопку Купить у первого доступного аватара
        cy.get('.credit').type('4111111111111111');                     // Ввожу номер карты
        cy.get('.k_input_ccv').type('125');                             // Ввожу CVV карты
        cy.get('.k_input_date').type('1225');                           // Ввожу срок действия карты
        cy.get('.k_input_name').type('Elena Penzina');                           // Ввожу имя владельца действия карты
        cy.get('.pay-btn').click(); // Нажала кнопку Оплатить
        cy.get('#cardnumber').type('56456'); // Нашла поле для ввода кода и ввела код
        cy.get('.payment__submit-button').click() //Нашла кнопку Отправить и нажала ее
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // Нашла сообщение и сверила текст с требуемым текстом
        cy.get('.payment__font-for-success').should('be.visible'); //Проверила, что текст виден пользователю
        cy.get('.pay__select-block').should('be.visible'); //Проверила, что поле для оплаченной суммы видно
        cy.get('.payment__info-text-new').should('be.visible') //Проверила, что оплаченная сумма  видна пользователю
        cy.get('.payment__adv').click() //Нашла кнопку Верн. в магаз. и нажала ее

    })

})
