describe('API test Case',() => {

    // API PACKAGE == https://catfact.ninja/ 

    it('should get random fact about cats', () => {
        cy.request({
            method: 'GET',
            url: '/fact',
        }).then(response => {
            expect(response).to.have.property('status', 200)
        })
    });

    it('should get random facts about cats', () => {
        cy.request({
            method: 'GET',
            url: '/facts',
        }).then(response => {
            expect(response).to.have.property('status', 200)
        })
    });

    it('should get random facts about cats', () => {
        cy.request({
            method: 'GET',
            url: '/breeds',
        }).then(response => {
            expect(response).to.have.property('status', 200)
        })
    });
});

// EXAMPLE OF API TEST CASE
// cy.request({

//     method: 'POST',
//     url: 'https://postman-echo.com/post',
//     body: formData,
//     headers: {
//       'content-type': 'multipart/form-data',
//     },
//   }).
//     as('responce')

//   cy.get('@responce').should((responce) => {
//     console.log(responce)
//   })