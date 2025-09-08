// Portfolio Animation and Interaction Script

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    setupNavigation();
    setupScrollEffects();
    setupProjectAnimations();
    setupActiveNavigation();
    setupMobileMenu();
});

// Initialize all animations
function initializeAnimations() {
    setupScrollAnimations();
    setupHoverEffects();
}

// Smooth scrolling for navigation links
function setupNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll-based animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add staggered animation for experience items
                if (entry.target.classList.contains('experience-item')) {
                    addStaggeredAnimation(entry.target);
                }
                
                // Add special animation for skill categories
                if (entry.target.querySelector('.skills-grid')) {
                    animateSkillCards(entry.target);
                }

                // Add special animation for about highlights
                if (entry.target.querySelector('.about-highlights')) {
                    animateAboutHighlights(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Add staggered animation to experience items
function addStaggeredAnimation(experienceItem) {
    const listItems = experienceItem.querySelectorAll('li');
    listItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 100);
    });
}

// Animate skill cards with staggered effect
function animateSkillCards(skillsSection) {
    const skillCards = skillsSection.querySelectorAll('.skill-category');
    skillCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });
}

// Animate about highlights with staggered effect
function animateAboutHighlights(aboutSection) {
    const highlights = aboutSection.querySelectorAll('.highlight-item');
    highlights.forEach((highlight, index) => {
        highlight.style.opacity = '0';
        highlight.style.transform = 'translateX(-30px)';
        highlight.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            highlight.style.opacity = '1';
            highlight.style.transform = 'translateX(0)';
        }, index * 200);
    });
}

// Setup hover effects
function setupHoverEffects() {
    // Enhanced hover effect for skill categories
    document.querySelectorAll('.skill-category').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });

    // Enhanced hover effect for experience items
    document.querySelectorAll('.experience-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(15px) scale(1.01)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });

    // Enhanced hover effect for project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });

    // Hover effect for contact items
    document.querySelectorAll('.contact-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.05)';
            this.style.background = 'rgba(255, 255, 255, 0.25)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.background = 'rgba(255, 255, 255, 0.1)';
        });
    });
}

// Enhanced hover effect for highlight items
function setupHighlightEffects() {
    document.querySelectorAll('.highlight-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(15px) scale(1.02)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
}

// Setup scroll-based effects
function setupScrollEffects() {
    // Navigation background change on scroll
    window.addEventListener('scroll', throttle(() => {
        const nav = document.querySelector('nav');
        const scrolled = window.scrollY > 100;
        
        if (nav) {
            if (scrolled) {
                nav.style.background = 'rgba(255, 255, 255, 0.98)';
                nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                nav.style.background = 'rgba(255, 255, 255, 0.95)';
                nav.style.boxShadow = 'none';
            }
        }
    }, 16));

    // Parallax effect for hero section
    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        
        if (hero && heroContent) {
            const rate = scrolled * -0.5;
            heroContent.style.transform = `translateY(${rate}px)`;
        }
    }, 16));

    // Progress indicator
    createProgressIndicator();
}

// Create a scroll progress indicator
function createProgressIndicator() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #3498db, #667eea);
        z-index: 9999;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', throttle(() => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    }, 16));
}

// Smooth reveal animation for project tags
function animateProjectTags() {
    const projectTags = document.querySelectorAll('.project-tag');
    projectTags.forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(20px)';
        tag.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Initialize project tag animation when project section is visible
function setupProjectAnimations() {
    const projectSection = document.querySelector('#projects');
    if (projectSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        animateProjectTags();
                    }, 500);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(projectSection);
    }
}

// Enhanced navigation highlighting
function setupActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', throttle(() => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }, 16));
}

// Mobile menu functionality
function setupMobileMenu() {
    const mobileBreakpoint = 768;
    
    window.addEventListener('resize', () => {
        if (window.innerWidth <= mobileBreakpoint) {
            adjustForMobile();
        } else {
            adjustForDesktop();
        }
    });
}

function adjustForMobile() {
    const heroText = document.querySelector('.hero-text h1');
    if (heroText) {
        heroText.style.fontSize = '2rem';
    }
}

function adjustForDesktop() {
    const heroText = document.querySelector('.hero-text h1');
    if (heroText) {
        heroText.style.fontSize = '3.5rem';
    }
}

// Enhanced CTA button animation
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .nav-links a.active {
        color: #3498db;
    }
    
    .nav-links a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Error handling for animations
function safeAnimate(element, animation) {
    try {
        if (element && typeof animation === 'function') {
            animation(element);
        }
    } catch (error) {
        console.warn('Animation error:', error);
    }
}