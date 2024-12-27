describe('Calculator Functionality', () => {
  context('Addition', () => {
    it('adds two positive numbers correctly', () => {
      cy.visit('http://localhost:4200/')
      cy.get('input').first().type('5')
      cy.get('select').select('+').should('have.value', '+')
      cy.get('input').last().type('3')
      cy.get('button').click()
      cy.get('p').should('have.text', '8')
    })

    it('adds two negative numbers correctly', () => {
      // Test case for addition
    })

    it('adds one positive and one negative number correctly', () => {
      // Test case for addition
    })
  })

  context('Subraction', () => {
    it('subtracts two positive numbers correctly', () => {
      // Test case for subtraction
    })

    it('subtracts two negative numbers correctly', () => {
      // Test case for subtraction
    })

    it('subtracts one positive and one negative number correctly', () => {
      // Test case for subtraction
    })
  })

  context('Multiplication', () => {
    it('multiplies one positive number and zero correctly', () => {
      // Test case for multiplication
    })
    it('multiplies two positive numbers correctly', () => {
      // Test case for multiplication
    })

    it('multiplies two negative numbers correctly', () => {
      // Test case for multiplication
    })

    it('multiplies one positive and one negative number correctly', () => {
      // Test case for multiplication
    })
  })

  context('Division', () => {
    it('divides a positive non-zero number by another positive non-zero number', () => {
      // Test case for division
    })

    it('divides a negative non-zero number by another positive non-zero number', () => {
      // Test case for division
    })

    it('divides a negative non-zero number by another negative non-zero number', () => {
      // Test case for division
    })

    it('divides a positive non-zero number by another negative non-zero number', () => {
      // Test case for division
    })
    it('divides a positive non-zero number by zero', () => {
      // Test case for division
    })
    it('divides a negative non-zero number by zero', () => {
      // Test case for division
    })
    it('divide zero by zero', () => {
      // Test case for division
    })
  })
})
