describe('Autenticacion de prueba', ()=>{
    it('Ingreso a la pagina',()=>{
        cy.clearCookies();
        cy.clearLocalStorage();
            cy.window().then((win) => {
        win.location.href = 'https://ccp-next-dev.softwareone.cloud';
      
        });
        cy.wait(10000)
            
    })
})