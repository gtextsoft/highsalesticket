// ===== MAIN WEBSITE SCRIPTS =====
// Countdown timer is now handled inline in HTML

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
  
      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
  
  // Add scroll animation for elements
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".card, .benefit-card, .location-card")
  
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3
  
      if (elementPosition < screenPosition) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }
  
  // Initialize animations
  document.addEventListener("DOMContentLoaded", () => {
    // Set initial state for animated elements
    const elementsToAnimate = document.querySelectorAll(".card, .benefit-card, .location-card")
    elementsToAnimate.forEach((element) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(20px)"
      element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    })
  
    // Run animation on load
    animateOnScroll()
  
    // Run animation on scroll
    window.addEventListener("scroll", animateOnScroll)
    
    // Initialize the YouTube carousel
    initCarousel()
    
    // Enhanced mobile navigation - support both structures
    const navToggle = document.getElementById("navToggle")
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
    const navMenu = document.getElementById("navMenu")
    const navLinks = document.querySelector(".nav-links")
    
    // Handle the original navigation structure
    if (navToggle && navMenu) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active")
        navToggle.classList.toggle("active")
        
        // Prevent body scrolling when menu is open
        if (navMenu.classList.contains("active")) {
          document.body.style.overflow = "hidden"
        } else {
          document.body.style.overflow = ""
        }
      })
  
      // Close mobile menu when clicking on a link
      const navLinks = document.querySelectorAll(".nav-list a")
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          navMenu.classList.remove("active")
          navToggle.classList.remove("active")
          document.body.style.overflow = ""
        })
      })
      
      // Close menu when clicking outside
      document.addEventListener("click", (e) => {
        if (navMenu.classList.contains("active") && 
            !navMenu.contains(e.target) && 
            !navToggle.contains(e.target)) {
          navMenu.classList.remove("active")
          navToggle.classList.remove("active")
          document.body.style.overflow = ""
        }
      })
    }
    
    // Handle the alternative mobile navigation structure
    if (mobileMenuToggle) {
      const navMenu = document.querySelector('.nav-menu')
      const navLinks = document.querySelector('.nav-links')
      
      mobileMenuToggle.addEventListener('click', function(event) {
        navMenu?.classList.toggle('active')
        navLinks?.classList.toggle('show')
        mobileMenuToggle.classList.toggle('active')
        
        const isOpen = navLinks?.classList.contains('show') || navMenu?.classList.contains('active')
        
        mobileMenuToggle.innerHTML = isOpen ? 
            '<i class="fas fa-times"></i>' : 
            '<i class="fas fa-bars"></i>'
            
        // Prevent body scrolling when menu is open
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        
        // Prevent the event from propagating
        event.stopPropagation()
      })
      
      // Close mobile menu when clicking on links
      document.querySelectorAll('.nav-links a, .nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
          if (navMenu?.classList.contains('active')) {
            navMenu.classList.remove('active')
            mobileMenuToggle.classList.remove('active')
            mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>'
            document.body.style.overflow = ""
          }
          
          if (navLinks?.classList.contains('show')) {
            navLinks.classList.remove('show')
            mobileMenuToggle.classList.remove('active')
            mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>'
            document.body.style.overflow = ""
          }
        })
      })
    }
  })
  
  // Add responsive navigation toggle (if needed)
  const setupMobileNav = () => {
    const navToggle = document.querySelector(".nav-toggle")
    const navMenu = document.querySelector(".nav-menu")
  
    if (navToggle && navMenu) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active")
        navToggle.classList.toggle("active")
      })
    }
  }
  
  // Call setup functions
  setupMobileNav()
  
  // Sticky Header
  const header = document.getElementById("header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
  
      const targetId = this.getAttribute("href")
      if (targetId === "#") return
  
      const targetElement = document.querySelector(targetId)
  
      if (targetElement) {
        const headerHeight = document.getElementById("header").offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
  
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
  
  // Pricing Toggle
  const pricingToggle = document.getElementById("pricingToggle")
  const earlyBirdPrices = document.querySelectorAll(".price.early-bird")
  const regularPrices = document.querySelectorAll(".price.regular")
  const earlyBirdLabel = document.querySelector(".toggle-label:first-child")
  const regularLabel = document.querySelector(".toggle-label:last-child")
  
  if (pricingToggle) {
    pricingToggle.addEventListener("change", () => {
      if (pricingToggle.checked) {
        // Show regular prices, hide early bird prices
        earlyBirdPrices.forEach((price) => (price.style.display = "none"))
        regularPrices.forEach((price) => (price.style.display = "block"))
        earlyBirdLabel.classList.remove("active")
        regularLabel.classList.add("active")
      } else {
        // Show early bird prices, hide regular prices
        earlyBirdPrices.forEach((price) => (price.style.display = "block"))
        regularPrices.forEach((price) => (price.style.display = "none"))
        earlyBirdLabel.classList.add("active")
        regularLabel.classList.remove("active")
      }
    })
  }
  
  // Testimonial Slider
  const testimonialSlides = document.querySelectorAll(".testimonial-slide")
  const testimonialDots = document.querySelectorAll(".testimonial-dots .dot")
  const testimonialPrev = document.getElementById("testimonialPrev")
  const testimonialNext = document.getElementById("testimonialNext")
  
  let currentSlide = 0
  
  function showSlide(index) {
    // Hide all slides
    testimonialSlides.forEach((slide) => {
      slide.style.display = "none"
    })
  
    // Remove active class from all dots
    testimonialDots.forEach((dot) => {
      dot.classList.remove("active")
    })
  
    // Show the current slide and activate the corresponding dot
    testimonialSlides[index].style.display = "block"
    testimonialDots[index].classList.add("active")
  }
  
  if (testimonialNext && testimonialPrev && testimonialDots.length > 0) {
    // Initialize the slider
    showSlide(currentSlide)
  
    // Next button click
    testimonialNext.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % testimonialSlides.length
      showSlide(currentSlide)
    })
  
    // Previous button click
    testimonialPrev.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length
      showSlide(currentSlide)
    })
  
    // Dot clicks
    testimonialDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentSlide = index
        showSlide(currentSlide)
      })
    })
  
    // Auto-advance slides every 5 seconds
    setInterval(() => {
      currentSlide = (currentSlide + 1) % testimonialSlides.length
      showSlide(currentSlide)
    }, 5000)
  }
  
  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item")
  
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")
  
    question.addEventListener("click", () => {
      // Close all other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active")
        }
      })
  
      // Toggle the clicked item
      item.classList.toggle("active")
    })
  })
  
  // Sponsorship card hover effects
  const sponsorshipCards = document.querySelectorAll(".sponsorship-card")
  
  sponsorshipCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      if (!card.classList.contains("featured") && !card.classList.contains("premium")) {
        card.style.borderColor = "var(--color-amber-500)"
      }
    })
  
    card.addEventListener("mouseleave", () => {
      if (!card.classList.contains("featured") && !card.classList.contains("premium")) {
        card.style.borderColor = "var(--color-gray-800)"
      }
    })
  })
  
  // Add scroll animation for elements
  const animateOnScrollElements = () => {
    const elements = document.querySelectorAll(".benefit-card, .value-card, .pricing-card, .location-card")
  
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.2
  
      if (elementPosition < screenPosition) {
        element.style.opacity = "1"
        element.style.transform =
          element.classList.contains("pricing-card") && element.classList.contains("featured")
            ? "scale(1.05)"
            : "translateY(0)"
      }
    })
  }
  
  // Initialize animations
  document.addEventListener("DOMContentLoaded", () => {
    // Set initial state for animated elements
    const elementsToAnimate = document.querySelectorAll(".benefit-card, .value-card, .pricing-card, .location-card")
    elementsToAnimate.forEach((element) => {
      element.style.opacity = "0"
      element.style.transform =
        element.classList.contains("pricing-card") && element.classList.contains("featured")
          ? "scale(1.05) translateY(20px)"
          : "translateY(20px)"
      element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    })
  
    // Run animation on load
    animateOnScrollElements()
  
    // Run animation on scroll
    window.addEventListener("scroll", animateOnScrollElements)
  })
  
  document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu?.classList.toggle('active');
            navLinks?.classList.toggle('show');
            mobileMenuToggle.classList.toggle('active');
            
            const isOpen = navLinks?.classList.contains('show') || navMenu?.classList.contains('active');
            
            mobileMenuToggle.innerHTML = isOpen ? 
                '<i class="fas fa-times"></i>' : 
                '<i class="fas fa-bars"></i>';
                
            // Prevent body scrolling when menu is open
            if (isOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navMenu?.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                document.body.style.overflow = "";
            }
            
            if (navLinks?.classList.contains('show')) {
                navLinks.classList.remove('show');
                mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                document.body.style.overflow = "";
            }
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.getElementById('header')?.offsetHeight || 70;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll effect
    const header = document.getElementById('header') || document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    });
    
    // Animation on scroll
    const animateElements = () => {
        const elements = document.querySelectorAll('.value-card, .benefit-card, .card, .location-card, .testimonial-card');
        
        elements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    };
    
    // Initialize animations
    const elementsToAnimate = document.querySelectorAll('.value-card, .benefit-card, .card, .location-card, .testimonial-card');
    elementsToAnimate.forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });
    
    // Run animation on load
    animateElements();
    
    // Run animation on scroll
    window.addEventListener('scroll', animateElements);
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelector('.nav-links');
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        
        if ((navMenu?.classList.contains('active') || navLinks?.classList.contains('show')) && 
            !navMenu?.contains(e.target) && 
            !navLinks?.contains(e.target) && 
            !mobileMenuToggle?.contains(e.target)) {
                
            navMenu?.classList.remove('active');
            navLinks?.classList.remove('show');
            
            if (mobileMenuToggle) {
                mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                mobileMenuToggle.classList.remove('active');
            }
            
            document.body.style.overflow = "";
        }
    });

    // Testimonial Carousel
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    let currentSlide = 0;
    const slideInterval = 5000; // Change slide every 5 seconds

    function showSlide(index) {
        // Remove active class from all slides
        testimonialSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Add active class to current slide
        testimonialSlides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonialSlides.length;
        showSlide(currentSlide);
    }

    // Start the carousel
    let slideTimer = setInterval(nextSlide, slideInterval);

    // Pause carousel on hover
    const carousel = document.querySelector('.testimonial-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => {
            clearInterval(slideTimer);
        });

        carousel.addEventListener('mouseleave', () => {
            slideTimer = setInterval(nextSlide, slideInterval);
        });
    }
  })
  
  // YouTube Carousel functionality
  const initCarousel = () => {
    const carousel = document.getElementById('carousel');
    
    if (carousel) {
      const carouselWrapper = carousel;
      const carouselItems = carouselWrapper.querySelectorAll('.carousel-item');
      
      if (carouselItems.length <= 1) return; // No need for carousel logic if only one item
      
      // Add navigation buttons to the carousel
      const navButtons = document.createElement('div');
      navButtons.className = 'carousel-nav';
      navButtons.innerHTML = `
        <button class="carousel-prev" aria-label="Previous">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button class="carousel-next" aria-label="Next">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      `;
      
      // Add after the wrapper
      carouselWrapper.parentNode.appendChild(navButtons);
      
      // Add navigation functionality
      const prevButton = navButtons.querySelector('.carousel-prev');
      const nextButton = navButtons.querySelector('.carousel-next');
      
      // Calculate the scroll amount
      const scrollAmount = carouselItems[0].offsetWidth + parseInt(getComputedStyle(carouselItems[0]).marginRight);
      
      // Navigate to previous item
      prevButton.addEventListener('click', () => {
        carouselWrapper.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
        });
      });
      
      // Navigate to next item
      nextButton.addEventListener('click', () => {
        carouselWrapper.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      });
      
      // Add touch support
      let touchStartX = 0;
      let touchEndX = 0;
      
      carouselWrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      
      carouselWrapper.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        
        // Calculate swipe direction and scroll
        if (touchStartX - touchEndX > 50) {
          // Swipe left - move right
          carouselWrapper.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
          });
        } else if (touchEndX - touchStartX > 50) {
          // Swipe right - move left
          carouselWrapper.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
          });
        }
      }, { passive: true });
    }
  };
  
  // Testimonial Carousel Logic
  (function() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    let current = 0;
    let timer;
    const interval = 5000;

    function showSlide(idx) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === idx);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === idx);
      });
      current = idx;
    }

    function nextSlide() {
      showSlide((current + 1) % slides.length);
    }

    function prevSlide() {
      showSlide((current - 1 + slides.length) % slides.length);
    }

    function startTimer() {
      timer = setInterval(nextSlide, interval);
    }

    function stopTimer() {
      clearInterval(timer);
    }

    if (slides.length > 1) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        stopTimer();
        startTimer();
      });
      prevBtn.addEventListener('click', () => {
        prevSlide();
        stopTimer();
        startTimer();
      });
      dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
          showSlide(i);
          stopTimer();
          startTimer();
        });
      });
      const slider = document.querySelector('.testimonial-slider');
      slider.addEventListener('mouseenter', stopTimer);
      slider.addEventListener('mouseleave', startTimer);
      startTimer();
    }
  })();
  
  // Coupon Code Copy Function
  function copyCouponCode() {
    const couponCode = 'HIGH50';
    
    // Try to use the modern clipboard API
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(couponCode).then(() => {
        showCopyFeedback();
      }).catch(() => {
        fallbackCopyTextToClipboard(couponCode);
      });
    } else {
      // Fallback for older browsers or non-secure contexts
      fallbackCopyTextToClipboard(couponCode);
    }
  }

  // Fallback copy function for older browsers
  function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      showCopyFeedback();
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
    
    document.body.removeChild(textArea);
  }

  // Show feedback when code is copied
  function showCopyFeedback() {
    const copyBtn = document.querySelector('.copy-btn');
    const originalHTML = copyBtn.innerHTML;
    
    // Change button to show success
    copyBtn.innerHTML = '<i class="fas fa-check"></i>';
    copyBtn.style.background = '#10b981';
    
    // Create temporary toast notification
    const toast = document.createElement('div');
    toast.className = 'copy-toast';
    toast.textContent = 'Coupon code copied!';
    toast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #10b981;
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      font-weight: 600;
      box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
      z-index: 10000;
      animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    // Reset button after 2 seconds
    setTimeout(() => {
      copyBtn.innerHTML = originalHTML;
      copyBtn.style.background = '#f59e0b';
    }, 2000);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
      if (toast.parentNode) {
        toast.remove();
      }
    }, 3000);
  }

  // Add CSS animation for toast
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);
  