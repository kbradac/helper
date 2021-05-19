import data from '../fixture/data.json'

describe('My First Test', () => {
    beforeEach(() => {
        cy.visit('https://www.tribalwars.net/en-dk/');
    });

    it('Does not do much!', () => {
        cy.get('input[id="user"]').type(data.username)
        cy.get('input[id="password"]').type(data.password)
        cy.get('a[class="btn-login"]').click({ force: true })
        cy.get('span[class="world_button_active"]')
            .contains('World 120')
            .click({ force: true })
        cy.get('area[href$="screen=place"]').click({ force: true })
        cy.get('a[href$="mode=scavenge"]').click({ force: true })
        cy.get('input[name="spear"]').type(data.spearNumber)
        cy.get('a[class="btn btn-default free_send_button"]')
            .eq(0) //Smallest scavenging
            .click({ force: true })
    })
})
