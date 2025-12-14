import { Link, useLocation } from "react-router-dom"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function Header() {
  const location = useLocation()
  const headerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const navRef = useRef<HTMLElement>(null)
  
  const isActive = (path: string) => location.pathname === path

  useEffect(() => {
    const tl = gsap.timeline()
    
    // Set initial states
    gsap.set([logoRef.current, titleRef.current], { 
      opacity: 0, 
      y: -30,
      scale: 0.8
    })
    
    gsap.set(navRef.current?.children || [], { 
      opacity: 0, 
      y: -20,
      x: 20
    })

    // Animate header entrance
    tl.to(headerRef.current, {
      duration: 0.6,
      y: 0,
      ease: "power2.out"
    })
    .to(logoRef.current, {
      duration: 0.8,
      opacity: 1,
      y: 0,
      scale: 1,
      ease: "back.out(1.7)",
      rotation: 360
    }, "-=0.4")
    .to(titleRef.current, {
      duration: 0.6,
      opacity: 1,
      y: 0,
      scale: 1,
      ease: "power2.out"
    }, "-=0.5")
    .to(navRef.current?.children || [], {
      duration: 0.5,
      opacity: 1,
      y: 0,
      x: 0,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.3")

    // Add hover animations for logo
    const logoElement = logoRef.current
    if (logoElement) {
      const handleMouseEnter = () => {
        gsap.to(logoElement, {
          duration: 0.3,
          scale: 1.1,
          rotation: "+=15",
          ease: "power2.out"
        })
      }
      
      const handleMouseLeave = () => {
        gsap.to(logoElement, {
          duration: 0.3,
          scale: 1,
          rotation: 0,
          ease: "power2.out"
        })
      }

      logoElement.addEventListener('mouseenter', handleMouseEnter)
      logoElement.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        logoElement.removeEventListener('mouseenter', handleMouseEnter)
        logoElement.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  // Animate navigation links on route change
  useEffect(() => {
    const navLinks = navRef.current?.children
    if (navLinks) {
      gsap.fromTo(navLinks, 
        { scale: 0.95 },
        { 
          scale: 1,
          duration: 0.2,
          stagger: 0.05,
          ease: "power2.out"
        }
      )
    }
  }, [location.pathname])

  return (
    <header 
      ref={headerRef}
      className="fixed w-[60%] top-7 left-[20%] z-50 bg-background/50 backdrop-blur-md border-2 border-neutral-400 rounded-full"
      style={{ transform: 'translateY(-100%)' }}
    >
      <div className="container mx-auto flex justify-center">
        <div className="flex items-center justify-between h-15 w-[90%]">
          <div className="flex items-center gap-3 mb-3">
            <Link to="/feed">
              <img 
                ref={logoRef}
                src="/logo1.png" 
                alt="Flash News AI logo" 
                className="w-10 h-10 object-contain cursor-pointer" 
              />
            </Link>
            <h2 
              ref={titleRef}
              className="text-2xl font-bold mt-4"
            >
              Flash News AI
            </h2>
          </div>
          <nav 
            ref={navRef}
            className="hidden md:flex items-center gap-8"
          >
            <Link
              to="/"
              className={`text-lg transition-colors relative overflow-hidden group ${
                isActive("/") 
                  ? "font-semibold" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  duration: 0.2,
                  y: -2,
                  ease: "power2.out"
                })
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  duration: 0.2,
                  y: 0,
                  ease: "power2.out"
                })
              }}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/features"
              className={`text-lg transition-colors relative overflow-hidden group ${
                isActive("/features") 
                  ? "font-semibold" 
                  : "text-gray-300 hover:text-foreground"
              }`}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  duration: 0.2,
                  y: -2,
                  ease: "power2.out"
                })
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  duration: 0.2,
                  y: 0,
                  ease: "power2.out"
                })
              }}
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/About"
              className={`text-lg transition-colors relative overflow-hidden group ${
                isActive("/about") 
                  ? "font-semibold" 
                  : "text-gray-300 hover:text-foreground"
              }`}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  duration: 0.2,
                  y: -2,
                  ease: "power2.out"
                })
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  duration: 0.2,
                  y: 0,
                  ease: "power2.out"
                })
              }}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

