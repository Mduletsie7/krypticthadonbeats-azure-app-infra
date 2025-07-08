/// <reference types="cypress" />
const { timeout } = require("async");

describe('Kryptic Tha Don Website Tests', () => {
  const url = 'http://localhost:3000/';

  beforeEach(() => {
    cy.visit(url)
  })

   it('Should load the Kryptic Tha Don Beats website successfully', () => {
    cy.url().should('include', 'krypticthadonbeats');
    cy.title().should('include', 'Kryptic Tha Don Beats');
  });

  it('Should display Kryptic Tha Don branding', () => {
    cy.contains('Kryptic Tha Don').should('be.visible');
  });

  it('Should contain correct homepage banner content', () => {
    const expectedText: string[] = [
      'Kryptic Tha Don',
      'Music Producer from Cape Town, South Africa with a passion for Hip-Hop.'
    ];
    cy.get('div.hero-content').then(($el: JQuery<HTMLElement>) => {
      expectedText.forEach((text) => {
        expect($el.text()).to.include(text);
      });
    });
  });

  it('Header should contain all required navigation links', () => {
    const expectedLinks: string[] = [
      'Lease Beats',
      'Credits',
      'Contact'
    ];
    cy.get('div.header__container').then(($nl: JQuery<HTMLElement>) => {
      expectedLinks.forEach((text) => {
        expect($nl.text()).to.include(text);
      });
    });
  });

  it('Should render the LeaseBeats section with correct content and embedded BeatStars iframe', () => {
    // Check main heading
    cy.get('.LeaseBeats-heading')
      .should('be.visible')
      .and('have.text', 'Browse Beats');

    // Check subheading
    cy.get('.beats-meta')
      .should('be.visible')
      .and('contain.text', 'Instant download after purchase');

    // Check iframe is rendered inside the container
    cy.get('.beatstars-player-container')
      .find('iframe')
      .should('exist')
      .and('have.attr', 'src')
      .and('include', 'player.beatstars.com');
  });

   it('Should render the pricing section heading and description', () => {
    cy.contains('Licensing Info').should('be.visible');
    cy.contains('Choose the license that best fits your needs').should('be.visible');
  });

  it('Should display all three pricing plans', () => {
    const plans = ['Standard', 'Premium', 'Unlimited'];
    plans.forEach(plan => {
      cy.contains(plan).should('be.visible');
    });
  });

  it('Should display price and description for each plan', () => {
    cy.contains('$30').should('be.visible');
    cy.contains('$50').should('be.visible');
    cy.contains('$100').should('be.visible');

    cy.contains('Untagged High Quality MP3 File').should('be.visible');
    cy.contains('Untagged MP3 + WAV File').should('be.visible');
    cy.contains('MP3 + WAV + Trackouts').should('be.visible');
  });

  it('Should show contact link for license queries', () => {
    cy.get('footer')
      .should('contain.text', 'Need a custom license?')
      .find('a')
      .should('have.attr', 'href', 'mailto:krypticthadonbeats@gmail.com');
  });
});
