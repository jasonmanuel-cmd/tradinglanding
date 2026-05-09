/**
 * Chaotically Organized AI - Site Logic
 * Focused on: Speed, Clarity, and Lead Generation
 */

const tradeText = {
    roofing: {
        hero: 'We build simple, fast, honest websites for roofing companies. Big buttons. Clear phone number. Easy quote forms. Real photos. No fluff.',
        proof1: 'Roof leak calls often come in a hurry. Your site should make it simple for worried homeowners to reach you fast.'
    },
    plumbing: {
        hero: 'We build simple, fast, honest websites for plumbing companies. Big buttons. Clear phone number. Easy “I have a leak” forms.',
        proof1: 'Plumbing emergencies are stressful. A clear, calm site with a visible phone number helps people call you first.'
    },
    hvac: {
        hero: 'We build simple, fast, honest websites for HVAC companies. Big buttons. Clear phone number. Easy “no heat / no AC” forms.',
        proof1: 'When AC or heat fails, people want help now. Your site should make it easy to call and book service.'
    },
    electrical: {
        hero: 'We build simple, fast, honest websites for electrical companies. Big buttons. Clear phone number. Easy “no power / upgrade” forms.',
        proof1: 'Electrical work is about safety and trust. Your website should make your license, insurance, and experience easy to see.'
    },
    contractor: {
        hero: 'We build simple, fast, honest websites for contractors. Big buttons. Clear phone number. Easy bid request forms.',
        proof1: 'Homeowners want to see what you build and where you work before they call. Your site should make that easy.'
    },
    other: {
        hero: 'We build simple, fast, honest websites for local trade and service businesses. Big buttons. Clear phone number. Easy quote forms.',
        proof1: 'Whatever your trade, customers need to understand what you do, where you work, and how to reach you.'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const tradeButtons = document.querySelectorAll('.trade-btn');
    const heroLead = document.getElementById('hero-lead');
    const proofText1 = document.getElementById('proof-text-1');

    tradeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the trade key from the button text (lowercase)
            const tradeKey = button.getAttribute('data-trade') || button.innerText.toLowerCase().replace(' ', '');
            
            // 1. Update UI Active State
            tradeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 2. Update Content based on Data Structure
            if (tradeText[tradeKey]) {
                heroLead.style.opacity = 0;
                proofText1.style.opacity = 0;

                setTimeout(() => {
                    heroLead.innerText = tradeText[tradeKey].hero;
                    proofText1.innerText = tradeText[tradeKey].proof1;
                    heroLead.style.opacity = 1;
                    proofText1.style.opacity = 1;
                }, 150);
            }
        });
    });

    // Form Submission Logic
    const quoteForm = document.querySelector('form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            // Here you would typically integrate your backend endpoint or service
            // console.log("Lead captured for Chaotically Organized AI");
        });
    }
});