document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS animations
  AOS.init({
    once: true,
    duration: 1000,
    easing: "ease-in-out",
  })

  // Initialize Particles.js for hero section
  if (document.getElementById("particles-js")) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "bubble" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          bubble: { distance: 200, size: 6, duration: 2, opacity: 0.8, speed: 3 },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    })
  }

  // Initialize Swiper for testimonials
  const testimonialSwiper = new Swiper(".testimonial-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  })

  // Visitor Counter Functionality
  let totalVisitors = localStorage.getItem("totalVisitors") || 0
  let loggedInUsers = localStorage.getItem("loggedInUsers") || 0
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null

  // Increment total visitors count if this is a new session
  if (!sessionStorage.getItem("counted")) {
    totalVisitors = Number.parseInt(totalVisitors) + 1
    localStorage.setItem("totalVisitors", totalVisitors)
    sessionStorage.setItem("counted", "true")
  }

  // Update counter display
  document.getElementById("totalVisitors").textContent = totalVisitors
  document.getElementById("loggedInUsers").textContent = loggedInUsers

  // Update user status indicator
  updateUserStatus()

  // Toggle visitor counter
  document.getElementById("showCounter").addEventListener("click", () => {
    document.querySelector(".visitor-counter").classList.add("show")
  })

  document.getElementById("toggleCounter").addEventListener("click", () => {
    document.querySelector(".visitor-counter").classList.remove("show")
  })

  // Theme Toggle Functionality
  const themeToggle = document.getElementById("themeToggle")
  const body = document.body
  const icon = themeToggle.querySelector("i")
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  const currentTheme = localStorage.getItem("theme")

  // Set initial theme
  if (currentTheme === "dark" || (!currentTheme && prefersDarkScheme)) {
    body.classList.add("dark")
    icon.classList.replace("bi-moon-fill", "bi-sun-fill")
  }

  // Toggle theme
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark")
    icon.classList.toggle("bi-sun-fill", body.classList.contains("dark"))
    icon.classList.toggle("bi-moon-fill", !body.classList.contains("dark"))
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light")
  })

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        // Close mobile menu if open
        const navbarCollapse = document.querySelector(".navbar-collapse")
        if (navbarCollapse.classList.contains("show")) {
          document.querySelector(".navbar-toggler").click()
        }

        // Smooth scroll to target
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })

        // Update active nav link
        document.querySelectorAll(".nav-link").forEach((link) => link.classList.remove("active"))
        this.classList.add("active")
      }
    })
  })

  // Navbar Scroll Effect
  const navbar = document.getElementById("mainNav")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled")
      navbar.style.padding = "10px 0"
      navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
    } else {
      navbar.classList.remove("navbar-scrolled")
      navbar.style.padding = "15px 0"
      navbar.style.boxShadow = "none"
    }
  })

  // Update active nav link based on scroll position
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY
    document.querySelectorAll("section[id]").forEach((section) => {
      const sectionTop = section.offsetTop - 100
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll(".nav-link").forEach((link) => {
          link.classList.remove("active")
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active")
          }
        })
      }
    })
  })

  // Form Validation and Submission
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const message = document.getElementById("message").value

      if (name && email && message) {
        alert("Thank you for your message! We will get back to you soon.")
        contactForm.reset()
      } else {
        alert("Please fill in all required fields.")
      }
    })
  }

  // Newsletter Form
  const newsletterForm = document.getElementById("newsletterForm")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const email = newsletterForm.querySelector("input[type='email']").value

      if (email) {
        alert("Thank you for subscribing to our newsletter!")
        newsletterForm.reset()
      } else {
        alert("Please enter your email address.")
      }
    })
  }

  // Login and Signup Functionality
  const userCredentials = JSON.parse(localStorage.getItem("userCredentials")) || []

  // Update auth buttons based on login status
  updateAuthButtons()

  const signupForm = document.getElementById("signupForm")
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const name = document.getElementById("signupName").value
      const email = document.getElementById("signupEmail").value
      const password = document.getElementById("signupPassword").value
      const confirmPassword = document.getElementById("confirmPassword").value

      if (name && email && password && confirmPassword) {
        if (password !== confirmPassword) {
          alert("Passwords do not match.")
          return
        }

        // Check if email already exists
        const existingUser = userCredentials.find((user) => user.email === email)
        if (existingUser) {
          alert("This email is already registered. Please login instead.")
          return
        }

        // Add new user
        const newUser = { name, email, password }
        userCredentials.push(newUser)
        localStorage.setItem("userCredentials", JSON.stringify(userCredentials))

        // Auto login after signup
        loginUser(newUser)

        alert("Signup successful! You are now logged in.")
        signupForm.reset()

        // Close modal
        const signupModal = new bootstrap.Modal(document.getElementById("signupModal"))
        if (signupModal) {
          signupModal.hide()
        }
      } else {
        alert("Please fill in all required fields.")
      }
    })
  }

  const loginForm = document.getElementById("loginForm")
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const email = document.getElementById("loginEmail").value
      const password = document.getElementById("loginPassword").value

      if (email && password) {
        // Find user
        const user = userCredentials.find((user) => user.email === email && user.password === password)

        if (user) {
          loginUser(user)

          alert(`Welcome back, ${user.name}!`)
          loginForm.reset()

          // Close modal
          const loginModal = bootstrap.Modal.getInstance(document.getElementById("loginModal"))
          if (loginModal) {
            loginModal.hide()
          }
        } else {
          alert("Invalid email or password.")
        }
      } else {
        alert("Please fill in all required fields.")
      }
    })
  }

  // Logout functionality
  const logoutBtn = document.getElementById("logoutBtn")
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      logoutUser()
      alert("You have been logged out successfully.")
    })
  }

  // Gallery Modal
  document.querySelectorAll(".gallery-view").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault()
      const imgSrc = this.closest(".gallery-item").querySelector("img").src
      const imgAlt = this.closest(".gallery-item").querySelector("img").alt

      document.getElementById("galleryModalLabel").textContent = imgAlt
      document.getElementById("galleryModalImage").src = imgSrc
      document.getElementById("galleryModalImage").alt = imgAlt

      const galleryModal = new bootstrap.Modal(document.getElementById("galleryModal"))
      galleryModal.show()
    })
  })

  // Countdown Timer
  function updateCountdown() {
    // Set the date we're counting down to (30 days from now)
    const countDownDate = new Date()
    countDownDate.setDate(countDownDate.getDate() + 30)

    // Get current date and time
    const now = new Date().getTime()

    // Find the distance between now and the countdown date
    const distance = countDownDate - now

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    // Display the result
    document.getElementById("days").textContent = days.toString().padStart(2, "0")
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0")
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0")
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0")
  }

  // Update the countdown every 1 second
  if (document.getElementById("days")) {
    updateCountdown()
    setInterval(updateCountdown, 1000)
  }

  // Stats Counter Animation
  function animateCounter(counter) {
    const target = Number.parseInt(counter.getAttribute("data-count"))
    const count = Number.parseInt(counter.innerText)
    const increment = target / 50 // Adjust for animation speed

    if (count < target) {
      counter.innerText = Math.ceil(count + increment)
      setTimeout(() => animateCounter(counter), 30)
    } else {
      counter.innerText = target
    }
  }

  // Start counter animation when element is in viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll(".counter")
          counters.forEach((counter) => {
            animateCounter(counter)
          })
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 },
  )

  const statsContainer = document.querySelector(".stats-container")
  if (statsContainer) {
    observer.observe(statsContainer)
  }

  // Back to Top Button
  const backToTopBtn = document.getElementById("backToTopBtn")

  window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTopBtn.style.display = "block"
    } else {
      backToTopBtn.style.display = "none"
    }
  }

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Gallery Filter
  const galleryFilters = document.querySelectorAll(".btn-filter")
  const galleryItems = document.querySelectorAll(".gallery-item")

  galleryFilters.forEach((filter) => {
    filter.addEventListener("click", function () {
      // Remove active class from all filters
      galleryFilters.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked filter
      this.classList.add("active")

      const filterValue = this.getAttribute("data-filter")

      // Show/hide gallery items based on filter
      galleryItems.forEach((item) => {
        if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
          item.style.display = "block"
          setTimeout(() => {
            item.style.opacity = "1"
            item.style.transform = "scale(1)"
          }, 50)
        } else {
          item.style.opacity = "0"
          item.style.transform = "scale(0.8)"
          setTimeout(() => {
            item.style.display = "none"
          }, 300)
        }
      })
    })
  })

  // Service Authentication
  const serviceLinks = document.querySelectorAll(".service-link")
  const skipAuthBtn = document.getElementById("skipAuthBtn")
  let currentServiceTarget = ""

  // Handle service link clicks
  serviceLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const serviceType = this.getAttribute("data-service")
      currentServiceTarget = serviceType

      // Check if user is logged in
      if (!isLoggedIn) {
        // Show authentication modal
        const serviceAuthModal = new bootstrap.Modal(document.getElementById("serviceAuthModal"))
        serviceAuthModal.show()
      } else {
        // Navigate to service page
        navigateToServicePage(serviceType)
      }
    })
  })

  // Skip authentication button
  if (skipAuthBtn) {
    skipAuthBtn.addEventListener("click", () => {
      // Close modal
      const serviceAuthModal = bootstrap.Modal.getInstance(document.getElementById("serviceAuthModal"))
      if (serviceAuthModal) {
        serviceAuthModal.hide()
      }

      // Navigate to service page
      if (currentServiceTarget) {
        navigateToServicePage(currentServiceTarget)
      }
    })
  }

  // Helper Functions
  function navigateToServicePage(serviceType) {
    // Navigate to the appropriate service page based on service type
    let url = ""

    switch (serviceType) {
      case "corporate":
        url = "./Our Services/Corporate Events/CorporateEvents.html"
        break
      case "social":
        url = "./Our Services/Social Gatherings/SocialGatherings.html"
        break
      case "wedding":
        url = "./Our Services/Wedding/Wedding.html"
        break
      case "entertainment":
        url = "./Our Services/Entertainment/Entertainment.html"
        break
      case "photography":
        url = "./Our Services/Photography/Photography.html"
        break
      case "catering":
        url = "./Our Services/Catering Services/CateringServices.html"
        break
      default:
        url = "#services"
    }

    // Redirect to the service page
    window.location.href = url
  }

  function loginUser(user) {
    // Update logged in users count if not already logged in
    if (!isLoggedIn) {
      loggedInUsers = Number.parseInt(loggedInUsers) + 1
      localStorage.setItem("loggedInUsers", loggedInUsers)
      localStorage.setItem("isLoggedIn", "true")
      document.getElementById("loggedInUsers").textContent = loggedInUsers
    }

    // Store current user
    localStorage.setItem("currentUser", JSON.stringify(user))

    // Update UI
    updateAuthButtons()
    updateUserStatus()
  }

  function logoutUser() {
    // Update logged in users count
    if (isLoggedIn) {
      loggedInUsers = Math.max(0, Number.parseInt(loggedInUsers) - 1)
      localStorage.setItem("loggedInUsers", loggedInUsers)
      localStorage.setItem("isLoggedIn", "false")
      document.getElementById("loggedInUsers").textContent = loggedInUsers
    }

    // Remove current user
    localStorage.removeItem("currentUser")

    // Update UI
    updateAuthButtons()
    updateUserStatus()
  }

  function updateAuthButtons() {
    const loginBtn = document.getElementById("loginBtn")
    const signupBtn = document.getElementById("signupBtn")
    const logoutBtn = document.getElementById("logoutBtn")

    if (isLoggedIn && currentUser) {
      // Hide login/signup buttons, show logout button
      if (loginBtn) loginBtn.classList.add("d-none")
      if (signupBtn) signupBtn.classList.add("d-none")
      if (logoutBtn) logoutBtn.classList.remove("d-none")
    } else {
      // Show login/signup buttons, hide logout button
      if (loginBtn) loginBtn.classList.remove("d-none")
      if (signupBtn) signupBtn.classList.remove("d-none")
      if (logoutBtn) logoutBtn.classList.add("d-none")
    }
  }

  function updateUserStatus() {
    const userStatusText = document.getElementById("userStatusText")

    if (isLoggedIn && currentUser) {
      userStatusText.textContent = currentUser.name
    } else {
      userStatusText.textContent = "Guest"
    }
  }
})

