# Aurei Website - WordPress/Elementor Conversion Guide

## 🎨 Design System & Colors

### Primary Colors (Use these exact codes)
```css
/* Primary Brand Colors */
--primary: hsl(142, 76%, 36%);        /* #22c55e - Main green */
--primary-foreground: hsl(355, 7%, 97%);  /* #fefefe - White text */
--secondary: hsl(210, 40%, 98%);       /* #f8fafc - Light gray */
--background: hsl(222, 84%, 5%);       /* #0a0a0f - Dark background */
--foreground: hsl(210, 40%, 98%);      /* #f8fafc - Light text */
```

### Gradients
```css
/* Hero Background Gradient */
background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%);

/* Card Hover Effects */
background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%);
```

### Typography
```css
/* Font Setup - Add to WordPress theme */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap');

/* Font Classes */
.font-sans { font-family: 'Inter', sans-serif; }
.font-serif { font-family: 'Playfair Display', serif; }
```

---

## 📋 Section-by-Section Breakdown

### 1. HEADER SECTION
**Elementor Structure:** Container > Section > Columns (Logo | Navigation | CTA)

**Layout:**
- 3 columns: 30% | 40% | 30%
- Sticky header: position fixed, backdrop-blur effect

**Logo Column:**
```html
<div style="display: flex; align-items: center; gap: 12px;">
  <img src="[aurei-logo.webp]" alt="Aurei" style="height: 40px; width: 40px;">
  <span style="font-size: 24px; font-family: 'Playfair Display'; font-weight: 700; color: #22c55e;">Aurei</span>
</div>
```

**Navigation Links:**
- Solutions
- Features  
- Dashboard
- Contact

**CTA Buttons:**
- "Request Demo" (outline button)
- Mobile menu toggle

**CSS for Header:**
```css
.header-container {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(10, 10, 15, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 16px 0;
}
```

---

### 2. HERO SECTION
**Elementor Structure:** Container > Section > Single Column (Centered)

**Background Settings:**
- Background Type: Gradient
- Gradient: `linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)`
- Min Height: 100vh
- Vertical Align: Middle

**Content:**
```html
<div style="text-align: center; color: white; max-width: 1000px; margin: 0 auto;">
  
  <!-- Main Headline -->
  <h1 style="font-size: clamp(3rem, 8vw, 7rem); font-family: 'Playfair Display'; font-weight: 700; margin-bottom: 24px; line-height: 1.1;">
    Unlock <span style="color: #22c55e;">MENA Payments</span> for Your E-commerce
  </h1>
  
  <!-- Subheadline -->
  <p style="font-size: clamp(1.25rem, 3vw, 2rem); color: rgba(255, 255, 255, 0.9); margin-bottom: 32px; line-height: 1.6; max-width: 800px; margin-left: auto; margin-right: auto;">
    Aurei provides complete payment orchestration with powerful merchant admin controls. 
    Manage your payment flows, customize checkout experiences, and control analytics - all through a single, unified platform.
  </p>

  <!-- Key Benefits Pills -->
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 24px; margin-bottom: 40px;">
    <div style="display: flex; align-items: center; gap: 8px; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border-radius: 50px; padding: 8px 16px;">
      <span style="color: #22c55e;">🛡️</span>
      <span style="font-size: 14px; font-weight: 500;">Advanced Security</span>
    </div>
    <div style="display: flex; align-items: center; gap: 8px; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border-radius: 50px; padding: 8px 16px;">
      <span style="color: #22c55e;">🌍</span>
      <span style="font-size: 14px; font-weight: 500;">15+ MENA Countries</span>
    </div>
    <div style="display: flex; align-items: center; gap: 8px; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border-radius: 50px; padding: 8px 16px;">
      <span style="color: #22c55e;">⚡</span>
      <span style="font-size: 14px; font-weight: 500;">99.9% Uptime</span>
    </div>
  </div>

  <!-- CTA Button -->
  <div style="display: flex; justify-content: center;">
    <a href="#contact" style="display: inline-block; padding: 16px 32px; font-size: 18px; border: 2px solid rgba(255, 255, 255, 0.3); color: white; text-decoration: none; border-radius: 8px; transition: all 0.3s ease; font-weight: 500;">
      Request Demo
    </a>
  </div>

</div>
```

**Button Hover Effect CSS:**
```css
.hero-cta:hover {
  background: white;
  color: #0a0a0f;
  transform: translateY(-2px);
}
```

---

### 3. SOLUTIONS SECTION
**Elementor Structure:** Container > Section > Grid (2x2 for payment methods + benefits)

**Section Title:**
```html
<div style="text-align: center; margin-bottom: 64px;">
  <h2 style="font-size: clamp(2.5rem, 5vw, 4rem); font-family: 'Playfair Display'; font-weight: 700; color: white; margin-bottom: 16px;">
    Payment Solutions for Every Business
  </h2>
  <p style="font-size: 20px; color: rgba(255, 255, 255, 0.8); max-width: 600px; margin: 0 auto;">
    Comprehensive payment infrastructure designed for the MENA region
  </p>
</div>
```

**Payment Method Cards (4 cards in 2x2 grid):**

**Card 1: Mobile Wallets**
```html
<div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 32px; transition: all 0.3s ease; backdrop-filter: blur(10px);">
  <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 20px;">
    <span style="font-size: 32px;">📱</span>
    <h3 style="font-size: 24px; font-weight: 600; color: white; margin: 0;">Mobile Wallets</h3>
  </div>
  <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 24px; line-height: 1.6;">
    Support for major regional mobile payment platforms including STC Pay, Careem Pay, and more.
  </p>
  
  <!-- Features List -->
  <div style="margin-bottom: 24px;">
    <h4 style="color: #22c55e; font-size: 16px; font-weight: 600; margin-bottom: 12px;">Supported Features:</h4>
    <ul style="color: rgba(255, 255, 255, 0.8); font-size: 14px; list-style: none; padding: 0;">
      <li style="margin-bottom: 8px;">✓ Instant transfers</li>
      <li style="margin-bottom: 8px;">✓ QR code payments</li>
      <li style="margin-bottom: 8px;">✓ Recurring billing</li>
    </ul>
  </div>
  
  <!-- Coverage -->
  <div style="background: rgba(34, 197, 94, 0.1); border-radius: 8px; padding: 12px;">
    <span style="color: #22c55e; font-size: 14px; font-weight: 600;">Coverage: UAE, Saudi Arabia, Kuwait</span>
  </div>
</div>
```

**Card 2: Card Payments**
```html
<div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 32px; transition: all 0.3s ease; backdrop-filter: blur(10px);">
  <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 20px;">
    <span style="font-size: 32px;">💳</span>
    <h3 style="font-size: 24px; font-weight: 600; color: white; margin: 0;">Card Payments</h3>
  </div>
  <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 24px; line-height: 1.6;">
    Accept all major credit and debit cards with advanced fraud protection and 3D Secure.
  </p>
  
  <!-- Features List -->
  <div style="margin-bottom: 24px;">
    <h4 style="color: #22c55e; font-size: 16px; font-weight: 600; margin-bottom: 12px;">Supported Features:</h4>
    <ul style="color: rgba(255, 255, 255, 0.8); font-size: 14px; list-style: none; padding: 0;">
      <li style="margin-bottom: 8px;">✓ Visa, Mastercard, Amex</li>
      <li style="margin-bottom: 8px;">✓ 3D Secure authentication</li>
      <li style="margin-bottom: 8px;">✓ Tokenization</li>
    </ul>
  </div>
  
  <!-- Coverage -->
  <div style="background: rgba(34, 197, 94, 0.1); border-radius: 8px; padding: 12px;">
    <span style="color: #22c55e; font-size: 14px; font-weight: 600;">Coverage: All MENA countries</span>
  </div>
</div>
```

**Card 3: Bank Transfers**
```html
<div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 32px; transition: all 0.3s ease; backdrop-filter: blur(10px);">
  <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 20px;">
    <span style="font-size: 32px;">🏦</span>
    <h3 style="font-size: 24px; font-weight: 600; color: white; margin: 0;">Bank Transfers</h3>
  </div>
  <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 24px; line-height: 1.6;">
    Direct bank-to-bank transfers with real-time processing and settlement.
  </p>
  
  <!-- Features List -->
  <div style="margin-bottom: 24px;">
    <h4 style="color: #22c55e; font-size: 16px; font-weight: 600; margin-bottom: 12px;">Supported Features:</h4>
    <ul style="color: rgba(255, 255, 255, 0.8); font-size: 14px; list-style: none; padding: 0;">
      <li style="margin-bottom: 8px;">✓ Real-time transfers</li>
      <li style="margin-bottom: 8px;">✓ IBAN support</li>
      <li style="margin-bottom: 8px;">✓ Bulk payments</li>
    </ul>
  </div>
  
  <!-- Coverage -->
  <div style="background: rgba(34, 197, 94, 0.1); border-radius: 8px; padding: 12px;">
    <span style="color: #22c55e; font-size: 14px; font-weight: 600;">Coverage: GCC countries</span>
  </div>
</div>
```

**Card 4: Digital Wallets**
```html
<div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 32px; transition: all 0.3s ease; backdrop-filter: blur(10px);">
  <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 20px;">
    <span style="font-size: 32px;">💰</span>
    <h3 style="font-size: 24px; font-weight: 600; color: white; margin: 0;">Digital Wallets</h3>
  </div>
  <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 24px; line-height: 1.6;">
    Integration with popular digital wallets like PayPal, Apple Pay, and Google Pay.
  </p>
  
  <!-- Features List -->
  <div style="margin-bottom: 24px;">
    <h4 style="color: #22c55e; font-size: 16px; font-weight: 600; margin-bottom: 12px;">Supported Features:</h4>
    <ul style="color: rgba(255, 255, 255, 0.8); font-size: 14px; list-style: none; padding: 0;">
      <li style="margin-bottom: 8px;">✓ One-click payments</li>
      <li style="margin-bottom: 8px;">✓ Biometric authentication</li>
      <li style="margin-bottom: 8px;">✓ Cross-platform support</li>
    </ul>
  </div>
  
  <!-- Coverage -->
  <div style="background: rgba(34, 197, 94, 0.1); border-radius: 8px; padding: 12px;">
    <span style="color: #22c55e; font-size: 14px; font-weight: 600;">Coverage: Global with MENA focus</span>
  </div>
</div>
```

**Card Hover Effect CSS:**
```css
.solution-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(34, 197, 94, 0.3);
  box-shadow: 0 20px 40px -10px rgba(34, 197, 94, 0.2);
}
```

---

### 4. PLATFORM BENEFITS SECTION

**Benefits List:**
```html
<div style="background: rgba(255, 255, 255, 0.02); padding: 80px 0;">
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px;">
    
    <!-- Section Title -->
    <div style="text-align: center; margin-bottom: 64px;">
      <h2 style="font-size: clamp(2.5rem, 5vw, 4rem); font-family: 'Playfair Display'; font-weight: 700; color: white; margin-bottom: 16px;">
        Why Choose Aurei's Complete Platform?
      </h2>
    </div>

    <!-- Benefits Grid -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px; margin-bottom: 64px;">
      
      <!-- Benefit Items -->
      <div style="display: flex; align-items: flex-start; gap: 16px;">
        <span style="color: #22c55e; font-size: 20px; margin-top: 4px;">✓</span>
        <div>
          <h3 style="color: white; font-size: 18px; font-weight: 600; margin-bottom: 8px;">Unified Payment Orchestration</h3>
          <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6;">Single API to access all MENA payment methods and providers</p>
        </div>
      </div>

      <div style="display: flex; align-items: flex-start; gap: 16px;">
        <span style="color: #22c55e; font-size: 20px; margin-top: 4px;">✓</span>
        <div>
          <h3 style="color: white; font-size: 18px; font-weight: 600; margin-bottom: 8px;">Smart Routing & Optimization</h3>
          <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6;">AI-powered routing to maximize success rates and minimize costs</p>
        </div>
      </div>

      <div style="display: flex; align-items: flex-start; gap: 16px;">
        <span style="color: #22c55e; font-size: 20px; margin-top: 4px;">✓</span>
        <div>
          <h3 style="color: white; font-size: 18px; font-weight: 600; margin-bottom: 8px;">Advanced Fraud Protection</h3>
          <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6;">Machine learning-based fraud detection and prevention</p>
        </div>
      </div>

      <div style="display: flex; align-items: flex-start; gap: 16px;">
        <span style="color: #22c55e; font-size: 20px; margin-top: 4px;">✓</span>
        <div>
          <h3 style="color: white; font-size: 18px; font-weight: 600; margin-bottom: 8px;">Real-time Analytics</h3>
          <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6;">Comprehensive dashboards with actionable insights</p>
        </div>
      </div>

      <div style="display: flex; align-items: flex-start; gap: 16px;">
        <span style="color: #22c55e; font-size: 20px; margin-top: 4px;">✓</span>
        <div>
          <h3 style="color: white; font-size: 18px; font-weight: 600; margin-bottom: 8px;">24/7 Expert Support</h3>
          <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6;">Dedicated support team with MENA market expertise</p>
        </div>
      </div>

      <div style="display: flex; align-items: flex-start; gap: 16px;">
        <span style="color: #22c55e; font-size: 20px; margin-top: 4px;">✓</span>
        <div>
          <h3 style="color: white; font-size: 18px; font-weight: 600; margin-bottom: 8px;">Compliance & Security</h3>
          <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6;">PCI DSS Level 1 certified with local compliance</p>
        </div>
      </div>

    </div>

    <!-- CTA Button -->
    <div style="text-align: center;">
      <a href="#contact" style="display: inline-block; background: #22c55e; color: white; padding: 16px 32px; font-size: 18px; font-weight: 600; text-decoration: none; border-radius: 8px; transition: all 0.3s ease;">
        Get Started Today
      </a>
    </div>

  </div>
</div>
```

---

### 5. KEY METRICS SECTION

**Metrics Cards:**
```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 32px; margin-top: 64px;">
  
  <!-- Metric 1: Integration Time -->
  <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 32px; text-align: center;">
    <div style="color: #22c55e; font-size: 48px; font-weight: 700; margin-bottom: 8px;">7 Days</div>
    <h3 style="color: white; font-size: 18px; font-weight: 600; margin-bottom: 8px;">Integration Time</h3>
    <p style="color: rgba(255, 255, 255, 0.8); font-size: 14px;">Average time to go live with our platform</p>
  </div>

  <!-- Metric 2: Success Rate -->
  <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 32px; text-align: center;">
    <div style="color: #22c55e; font-size: 48px; font-weight: 700; margin-bottom: 8px;">99.2%</div>
    <h3 style="color: white; font-size: 18px; font-weight: 600; margin-bottom: 8px;">Success Rate</h3>
    <p style="color: rgba(255, 255, 255, 0.8); font-size: 14px;">Average payment success rate across MENA</p>
  </div>

  <!-- Metric 3: Coverage -->
  <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 32px; text-align: center;">
    <div style="color: #22c55e; font-size: 48px; font-weight: 700; margin-bottom: 8px;">15+</div>
    <h3 style="color: white; font-size: 18px; font-weight: 600; margin-bottom: 8px;">Coverage</h3>
    <p style="color: rgba(255, 255, 255, 0.8); font-size: 14px;">Countries supported across MENA region</p>
  </div>

</div>
```

---

## ⚡ Next Steps:

1. **Set up WordPress page with Elementor**
2. **Copy/paste sections starting with Header**
3. **Add the CSS codes to Additional CSS**
4. **Replace placeholder images with actual ones**
5. **Test responsiveness**

Would you like me to continue with the **Features, Dashboard, Checkout, Contact, and Footer sections** next?