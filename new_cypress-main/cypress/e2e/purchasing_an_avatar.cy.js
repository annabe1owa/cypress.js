describe('Покупка аватара', function () {

    it('e2e тест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.me/');
         cy.get(':nth-child(1) > .auth__input').type('annabe1owa@yandex.ru');
         cy.get('#password').type('Pokemon123!');
         cy.get('.auth__button').click();
         cy.get('.header__btns > [href="/shop"]').click();
         cy.get('.available > button').first().click(); 
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('12.24');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ANNA BELOVA');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.contains('Покупка прошла успешно').should('be.visible');

        })
 }) 

 // найти поле логин и ввести правильный логин
 // найти поле пароль и ввести правильный пароль
 // найти кнопку Войти и нажать на неё
 // проверить, что аторизация прошла успешно
 // найти кнопку Магазин и нажать на неё
 // выбрать карточку аватара, найти на ней кнопку Купить и нажать на неё
 // найти поле номер карты и ввести 
 // найти поле срок и ввести 
 // найти поле код и ввести 
 // найти поле имя и ввести 
 // найти кнопку Оплатить и нажать на неё
 // найти поле код из пуша и ввести его
 // найти кнопку Отправить и нажать на неё
 // проверяю, что после авторизации виден текст Покупка прошла успешно
