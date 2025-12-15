describe('Pokedex', function() {
  it('page of a specific Pokémon can be opened', function() {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:5000')
    // eslint-disable-next-line no-undef
    cy.contains('ivysaur')
    // eslint-disable-next-line no-undef
    cy.contains('ivysaur').click()
    // eslint-disable-next-line no-undef
    cy.contains('chlorophyll')
  })
})