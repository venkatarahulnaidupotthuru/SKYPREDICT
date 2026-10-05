// Global Airport Database (Major global hubs across all continents)
const AIRPORTS = [
  // North America
  { code: 'JFK', name: 'John F. Kennedy International Airport', city: 'New York', country: 'United States' },
  { code: 'LAX', name: 'Los Angeles International Airport', city: 'Los Angeles', country: 'United States' },
  { code: 'ORD', name: 'O\'Hare International Airport', city: 'Chicago', country: 'United States' },
  { code: 'DFW', name: 'Dallas/Fort Worth International Airport', city: 'Dallas', country: 'United States' },
  { code: 'ATL', name: 'Hartsfield-Jackson Atlanta International Airport', city: 'Atlanta', country: 'United States' },
  { code: 'SFO', name: 'San Francisco International Airport', city: 'San Francisco', country: 'United States' },
  { code: 'MIA', name: 'Miami International Airport', city: 'Miami', country: 'United States' },
  { code: 'SEA', name: 'Seattle-Tacoma International Airport', city: 'Seattle', country: 'United States' },
  { code: 'YYZ', name: 'Toronto Pearson International Airport', city: 'Toronto', country: 'Canada' },
  { code: 'YVR', name: 'Vancouver International Airport', city: 'Vancouver', country: 'Canada' },
  { code: 'MEX', name: 'Mexico City International Airport', city: 'Mexico City', country: 'Mexico' },
  
  // Europe
  { code: 'LHR', name: 'Heathrow Airport', city: 'London', country: 'United Kingdom' },
  { code: 'LGW', name: 'Gatwick Airport', city: 'London', country: 'United Kingdom' },
  { code: 'CDG', name: 'Charles de Gaulle Airport', city: 'Paris', country: 'France' },
  { code: 'ORY', name: 'Orly Airport', city: 'Paris', country: 'France' },
  { code: 'FRA', name: 'Frankfurt Airport', city: 'Frankfurt', country: 'Germany' },
  { code: 'MUC', name: 'Munich Airport', city: 'Munich', country: 'Germany' },
  { code: 'AMS', name: 'Amsterdam Airport Schiphol', city: 'Amsterdam', country: 'Netherlands' },
  { code: 'MAD', name: 'Adolfo Suárez Madrid–Barajas Airport', city: 'Madrid', country: 'Spain' },
  { code: 'BCN', name: 'Barcelona-El Prat Airport', city: 'Barcelona', country: 'Spain' },
  { code: 'FCO', name: 'Leonardo da Vinci–Fiumicino Airport', city: 'Rome', country: 'Italy' },
  { code: 'MXP', name: 'Milano Malpensa Airport', city: 'Milan', country: 'Italy' },
  { code: 'IST', name: 'Istanbul Airport', city: 'Istanbul', country: 'Turkey' },
  { code: 'CDG', name: 'Charles de Gaulle Airport', city: 'Paris', country: 'France' },
  { code: 'ZRH', name: 'Zurich Airport', city: 'Zurich', country: 'Switzerland' },
  { code: 'VIE', name: 'Vienna International Airport', city: 'Vienna', country: 'Austria' },
  { code: 'ATH', name: 'Athens International Airport', city: 'Athens', country: 'Greece' },
  { code: 'DME', name: 'Domodedovo International Airport', city: 'Moscow', country: 'Russia' },
  
  // Asia
  { code: 'HND', name: 'Tokyo Haneda Airport', city: 'Tokyo', country: 'Japan' },
  { code: 'NRT', name: 'Tokyo Narita Airport', city: 'Tokyo', country: 'Japan' },
  { code: 'SIN', name: 'Singapore Changi Airport', city: 'Singapore', country: 'Singapore' },
  { code: 'HKG', name: 'Hong Kong International Airport', city: 'Hong Kong', country: 'China' },
  { code: 'PEK', name: 'Beijing Capital International Airport', city: 'Beijing', country: 'China' },
  { code: 'PVG', name: 'Shanghai Pudong International Airport', city: 'Shanghai', country: 'China' },
  { code: 'CAN', name: 'Guangzhou Baiyun International Airport', city: 'Guangzhou', country: 'China' },
  { code: 'ICN', name: 'Incheon International Airport', city: 'Seoul', country: 'South Korea' },
  { code: 'BKK', name: 'Suvarnabhumi Airport', city: 'Bangkok', country: 'Thailand' },
  { code: 'DMK', name: 'Don Mueang International Airport', city: 'Bangkok', country: 'Thailand' },
  { code: 'KUL', name: 'Kuala Lumpur International Airport', city: 'Kuala Lumpur', country: 'Malaysia' },
  { code: 'CGK', name: 'Soekarno-Hatta International Airport', city: 'Jakarta', country: 'Indonesia' },
  { code: 'MNL', name: 'Ninoy Aquino International Airport', city: 'Manila', country: 'Philippines' },
  { code: 'TPE', name: 'Taiwan Taoyuan International Airport', city: 'Taipei', country: 'Taiwan' },
  { code: 'SGN', name: 'Tan Son Nhat International Airport', city: 'Ho Chi Minh City', country: 'Vietnam' },
  { code: 'HAN', name: 'Noi Bai International Airport', city: 'Hanoi', country: 'Vietnam' },
  
  // South Asia (India, Pakistan, Bangladesh, Sri Lanka)
  { code: 'DEL', name: 'Indira Gandhi International Airport', city: 'Delhi', country: 'India' },
  { code: 'BOM', name: 'Chhatrapati Shivaji Maharaj International Airport', city: 'Mumbai', country: 'India' },
  { code: 'BLR', name: 'Kempegowda International Airport', city: 'Bengaluru', country: 'India' },
  { code: 'MAA', name: 'Chennai International Airport', city: 'Chennai', country: 'India' },
  { code: 'HYD', name: 'Rajiv Gandhi International Airport', city: 'Hyderabad', country: 'India' },
  { code: 'CCU', name: 'Netaji Subhash Chandra Bose International Airport', city: 'Kolkata', country: 'India' },
  { code: 'COK', name: 'Cochin International Airport', city: 'Kochi', country: 'India' },
  { code: 'KHI', name: 'Jinnah International Airport', city: 'Karachi', country: 'Pakistan' },
  { code: 'LHE', name: 'Allama Iqbal International Airport', city: 'Lahore', country: 'Pakistan' },
  { code: 'DAC', name: 'Hazrat Shahjalal International Airport', city: 'Dhaka', country: 'Bangladesh' },
  { code: 'CMB', name: 'Bandaranaike International Airport', city: 'Colombo', country: 'Sri Lanka' },
  
  // Middle East
  { code: 'DXB', name: 'Dubai International Airport', city: 'Dubai', country: 'United Arab Emirates' },
  { code: 'AUH', name: 'Abu Dhabi International Airport', city: 'Abu Dhabi', country: 'United Arab Emirates' },
  { code: 'DOH', name: 'Hamad International Airport', city: 'Doha', country: 'Qatar' },
  { code: 'RUH', name: 'King Khalid International Airport', city: 'Riyadh', country: 'Saudi Arabia' },
  { code: 'JED', name: 'King Abdulaziz International Airport', city: 'Jeddah', country: 'Saudi Arabia' },
  { code: 'MCT', name: 'Muscat International Airport', city: 'Muscat', country: 'Oman' },
  { code: 'TLV', name: 'Ben Gurion Airport', city: 'Tel Aviv', country: 'Israel' },
  
  // Oceania
  { code: 'SYD', name: 'Sydney Airport', city: 'Sydney', country: 'Australia' },
  { code: 'MEL', name: 'Melbourne Airport', city: 'Melbourne', country: 'Australia' },
  { code: 'BNE', name: 'Brisbane Airport', city: 'Brisbane', country: 'Australia' },
  { code: 'PER', name: 'Perth Airport', city: 'Perth', country: 'Australia' },
  { code: 'AKL', name: 'Auckland Airport', city: 'Auckland', country: 'New Zealand' },
  { code: 'CHC', name: 'Christchurch International Airport', city: 'Christchurch', country: 'New Zealand' },
  
  // South America
  { code: 'GRU', name: 'São Paulo/Guarulhos International Airport', city: 'São Paulo', country: 'Brazil' },
  { code: 'GIG', name: 'Rio de Janeiro/Galeão International Airport', city: 'Rio de Janeiro', country: 'Brazil' },
  { code: 'EZE', name: 'Ministro Pistarini International Airport', city: 'Buenos Aires', country: 'Argentina' },
  { code: 'SCL', name: 'Arturo Merino Benítez International Airport', city: 'Santiago', country: 'Chile' },
  { code: 'BOG', name: 'El Dorado International Airport', city: 'Bogotá', country: 'Colombia' },
  { code: 'LIM', name: 'Jorge Chávez International Airport', city: 'Lima', country: 'Peru' },
  
  // Africa
  { code: 'JNB', name: 'O. R. Tambo International Airport', city: 'Johannesburg', country: 'South Africa' },
  { code: 'CPT', name: 'Cape Town International Airport', city: 'Cape Town', country: 'South Africa' },
  { code: 'CAI', name: 'Cairo International Airport', city: 'Cairo', country: 'Egypt' },
  { code: 'ADD', name: 'Addis Ababa Bole International Airport', city: 'Addis Ababa', country: 'Ethiopia' },
  { code: 'NBO', name: 'Jomo Kenyatta International Airport', city: 'Nairobi', country: 'Kenya' },
  { code: 'LOS', name: 'Murtala Muhammed International Airport', city: 'Lagos', country: 'Nigeria' },
  { code: 'CMN', name: 'Mohammed V International Airport', city: 'Casablanca', country: 'Morocco' }
];

// App States
const state = {
  currentUser: null,
  passengers: {
    adults: 1,
    children: 0,
    infants: 0
  }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  setupMinDate();
  loadRegisterMockData();
  
  // Close lists when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown-wrapper')) {
      closeAllSuggestions();
    }
    if (!e.target.closest('.passenger-dropdown-wrapper')) {
      closePassengerDropdown();
    }
  });

  // Display logo and brand header after animation starts (approx. 4.5 seconds)
  setTimeout(() => {
    document.getElementById('app-header').classList.remove('hide-initial');
    document.getElementById('app-header').classList.add('show-header');
  }, 4500);
});

// Configure Calendar Limits (Minimum is today)
function setupMinDate() {
  const dateInput = document.getElementById('departure-date');
  if (dateInput) {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    dateInput.min = `${yyyy}-${mm}-${dd}`;
  }
}

// Mock User Database (stored in Local Storage)
function loadRegisterMockData() {
  if (!localStorage.getItem('users')) {
    // Seed some mock accounts
    localStorage.setItem('users', JSON.stringify([
      { email: 'user@example.com', password: 'password123', firstName: 'John', lastName: 'Doe', phone: '1234567890' }
    ]));
  }
}

// VIEW SWITCHERS (Animations & Classes)
function showView(viewId) {
  // Hide all main section containers
  const views = ['auth-section', 'travel-section', 'results-section'];
  views.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });

  // Show active view
  const activeEl = document.getElementById(viewId);
  if (activeEl) {
    activeEl.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// TOAST NOTIFICATIONS
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = 'fa-info-circle';
  if (type === 'success') icon = 'fa-check-circle';
  if (type === 'error') icon = 'fa-exclamation-circle';

  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <span class="toast-message">${message}</span>
  `;
  container.appendChild(toast);

  // Trigger animation slide in
  setTimeout(() => {
    toast.style.transform = 'translateX(0)';
  }, 50);

  // Auto remove
  setTimeout(() => {
    toast.classList.add('toast-fade-out');
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 4000);
}

// LOGIN FLOW
function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;

  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);

  if (user) {
    state.currentUser = user;
    showToast(`Welcome back, ${user.firstName}!`, 'success');
    
    // Smooth transition to travel screen
    const loginCard = document.getElementById('login-card');
    const introTitles = document.getElementById('intro-titles');
    
    loginCard.style.transform = 'scale(0.9)';
    loginCard.style.opacity = '0';
    introTitles.style.opacity = '0';
    
    setTimeout(() => {
      showView('travel-section');
    }, 450);
  } else {
    showToast('Invalid email or password.', 'error');
  }
}

// REGISTRATION MODAL FLOW
function openRegisterModal() {
  const modal = document.getElementById('register-modal');
  modal.classList.remove('hidden');
}

function closeRegisterModal() {
  const modal = document.getElementById('register-modal');
  modal.classList.add('hidden');
  document.getElementById('register-form').reset();
}

function handleRegister(event) {
  event.preventDefault();
  
  const firstName = document.getElementById('reg-firstname').value.trim();
  const middleName = document.getElementById('reg-middlename').value.trim();
  const lastName = document.getElementById('reg-lastname').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const phone = document.getElementById('reg-phone').value.trim();
  const password = document.getElementById('reg-password').value;
  const confirmPassword = document.getElementById('reg-confirm-password').value;

  // Basic Validation
  if (password !== confirmPassword) {
    showToast('Passwords do not match.', 'error');
    return;
  }

  const users = JSON.parse(localStorage.getItem('users') || '[]');
  if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
    showToast('An account with this email already exists.', 'error');
    return;
  }

  // Create and add user
  const newUser = {
    firstName,
    middleName,
    lastName,
    email,
    phone,
    password
  };

  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  showToast('Account created successfully! You can now log in.', 'success');
  closeRegisterModal();
}

// FORGOT PASSWORD MODAL FLOW
function openForgotPasswordModal() {
  document.getElementById('forgot-modal').classList.remove('hidden');
}

function closeForgotPasswordModal() {
  document.getElementById('forgot-modal').classList.add('hidden');
  document.getElementById('forgot-form').reset();
}

function handleForgotPassword(event) {
  event.preventDefault();
  const email = document.getElementById('forgot-email').value.trim();
  
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const userExists = users.some(u => u.email.toLowerCase() === email.toLowerCase());

  if (userExists) {
    showToast(`Password reset link sent to ${email}`, 'success');
    closeForgotPasswordModal();
  } else {
    showToast('Email address not registered.', 'error');
  }
}

// PASSENGER COUNT SELECTOR
function togglePassengerDropdown(event) {
  event.stopPropagation();
  const dropdown = document.getElementById('passenger-dropdown');
  dropdown.classList.toggle('show');
}

function closePassengerDropdown() {
  document.getElementById('passenger-dropdown').classList.remove('show');
}

function adjustPassenger(type, change) {
  const current = state.passengers[type];
  const newVal = current + change;

  // Rules:
  // - Minimum 1 Adult
  // - Minimum 0 Children/Infants
  // - Maximum 9 passengers total
  if (type === 'adults' && newVal < 1) return;
  if ((type === 'children' || type === 'infants') && newVal < 0) return;

  const total = state.passengers.adults + state.passengers.children + state.passengers.infants - current + newVal;
  if (total > 9) {
    showToast('Maximum 9 passengers allowed per booking.', 'warning');
    return;
  }

  state.passengers[type] = newVal;
  document.getElementById(`count-${type}`).textContent = newVal;
  updatePassengerSummary();
}

function updatePassengerSummary() {
  const parts = [];
  const p = state.passengers;
  
  if (p.adults > 0) parts.push(`${p.adults} Adult${p.adults > 1 ? 's' : ''}`);
  if (p.children > 0) parts.push(`${p.children} Child${p.children > 1 ? 'ren' : ''}`);
  if (p.infants > 0) parts.push(`${p.infants} Infant${p.infants > 1 ? 's' : ''}`);

  document.getElementById('passenger-summary-text').textContent = parts.join(', ');
}

// AIRPORT AUTOCOMPLETE SEARCH LOGIC
function showSuggestions(field) {
  closeAllSuggestions();
  const input = document.getElementById(`airport-${field}`);
  const list = document.getElementById(`suggestions-${field}`);
  list.classList.add('show');
  
  // Show default initial top 5 airports if field is empty
  if (input.value.trim() === '') {
    renderSuggestions(field, AIRPORTS.slice(0, 5));
  } else {
    filterAirports(field);
  }
}

function filterAirports(field) {
  const input = document.getElementById(`airport-${field}`);
  const list = document.getElementById(`suggestions-${field}`);
  const query = input.value.toLowerCase().trim();

  if (query === '') {
    renderSuggestions(field, AIRPORTS.slice(0, 5));
    return;
  }

  // Search by code, name, city, or country
  const filtered = AIRPORTS.filter(airport => {
    return airport.code.toLowerCase().includes(query) ||
           airport.name.toLowerCase().includes(query) ||
           airport.city.toLowerCase().includes(query) ||
           airport.country.toLowerCase().includes(query);
  });

  renderSuggestions(field, filtered.slice(0, 8)); // Limit to top 8 matches
}

function renderSuggestions(field, airports) {
  const list = document.getElementById(`suggestions-${field}`);
  list.innerHTML = '';

  if (airports.length === 0) {
    list.innerHTML = `<div class="suggestion-item" style="cursor: default; color: var(--text-muted);">No airports found</div>`;
    return;
  }

  airports.forEach(airport => {
    const div = document.createElement('div');
    div.className = 'suggestion-item';
    div.onclick = () => selectAirport(field, airport.city + ' (' + airport.code + ')', airport.code);
    
    div.innerHTML = `
      <div class="s-city-country">
        <span class="s-city">${airport.city}, ${airport.country}</span>
        <span class="s-airport">${airport.name}</span>
      </div>
      <span class="s-code">${airport.code}</span>
    `;
    list.appendChild(div);
  });
}

function selectAirport(field, displayName, code) {
  document.getElementById(`airport-${field}`).value = displayName;
  document.getElementById(`airport-${field}-val`).value = code;
  closeAllSuggestions();
}

function closeAllSuggestions() {
  document.getElementById('suggestions-from').classList.remove('show');
  document.getElementById('suggestions-to').classList.remove('show');
}

// PREDICT FARE & SEARCH ACTION
function handleSearch(event) {
  event.preventDefault();
  
  const fromCode = document.getElementById('airport-from-val').value;
  const toCode = document.getElementById('airport-to-val').value;
  const fromName = document.getElementById('airport-from').value;
  const toName = document.getElementById('airport-to').value;
  const depDate = document.getElementById('departure-date').value;
  const stops = document.querySelector('input[name="flight-stops"]:checked').value;

  // Verify FROM and TO codes
  if (!fromCode || !toCode) {
    showToast('Please select valid airports from the suggestions list.', 'error');
    return;
  }

  if (fromCode === toCode) {
    showToast('Origin and Destination airports cannot be the same.', 'error');
    return;
  }

  // Generate Prediction simulated numbers
  generateSimulatedPrediction(fromCode, toCode, depDate, stops);
  
  // Transition to results page
  showView('results-section');
}

function goBackToSearch() {
  showView('travel-section');
}

// SIMULATION ENGINE (Fare prediction logic)
function generateSimulatedPrediction(from, to, dateStr, stopsVal) {
  // 1. Calculate a base index using letters of airport codes to simulate distance
  let distanceFactor = 0;
  for (let i = 0; i < 3; i++) {
    distanceFactor += Math.abs(from.charCodeAt(i) - to.charCodeAt(i));
  }
  
  // Set price multiplier based on flight details
  const stopsMultiplier = stopsVal === '0' ? 1.25 : (stopsVal === '1' ? 1.0 : 0.85);
  const totalPassengers = state.passengers.adults + state.passengers.children * 0.7 + state.passengers.infants * 0.1;
  
  // Date coefficient: Fares rise as dates approach (simulating days left)
  const today = new Date();
  const flyDate = new Date(dateStr);
  const diffTime = Math.abs(flyDate - today);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  let dateMultiplier = 1.0;
  if (diffDays < 7) dateMultiplier = 1.5;
  else if (diffDays < 14) dateMultiplier = 1.3;
  else if (diffDays < 30) dateMultiplier = 1.1;
  else dateMultiplier = 0.9;

  // Calculate base price
  const basePrice = Math.round((200 + distanceFactor * 5.2) * stopsMultiplier * dateMultiplier * totalPassengers);
  
  // Set UI elements
  document.getElementById('res-route').textContent = `${from} ➔ ${to}`;
  document.getElementById('res-price').textContent = basePrice;
  document.getElementById('res-date').textContent = new Date(dateStr).toLocaleDateString('en-US', {
    weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'
  });

  // Calculate Price status advice
  const meterProgress = document.getElementById('res-meter');
  const adviceEl = document.getElementById('res-advice');
  
  // meter percentage (randomish index based on distance factor)
  const meterPercent = 30 + (distanceFactor % 50);
  meterProgress.style.width = `${meterPercent}%`;

  if (meterPercent < 45) {
    adviceEl.innerHTML = `<i class="fa-solid fa-circle-check text-green"></i> Excellent deal! Fares are predicted to rise by ${10 + (distanceFactor % 15)}% within 4 days. Buy now.`;
    adviceEl.className = "prediction-status-message";
  } else if (meterPercent < 70) {
    adviceEl.innerHTML = `<i class="fa-solid fa-circle-info text-blue"></i> Average price. Fares should remain steady for the next 48 hours.`;
    adviceEl.className = "prediction-status-message";
    adviceEl.querySelector('i').style.color = 'var(--accent-blue)';
  } else {
    adviceEl.innerHTML = `<i class="fa-solid fa-circle-xmark text-red"></i> High fare warning! Fares are expected to drop by $50 - $120 next week. Try waiting.`;
    adviceEl.className = "prediction-status-message text-red";
  }

  // 2. Generate 7-day trend chart
  const graphContainer = document.getElementById('graph-bars');
  const graphX = document.getElementById('graph-x');
  graphContainer.innerHTML = '';
  graphX.innerHTML = '';

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const centerDate = new Date(dateStr);
  
  let minGraphPrice = 99999;
  let maxGraphPrice = 0;
  const trendPrices = [];

  // Generate 7 values around target date
  for (let i = -3; i <= 3; i++) {
    const currentDay = new Date(centerDate);
    currentDay.setDate(centerDate.getDate() + i);
    
    // pricing model variation
    const dayFactor = Math.sin((currentDay.getDate() + distanceFactor) / 2) * 60;
    const dayPrice = Math.round(basePrice + dayFactor);
    trendPrices.push({
      price: dayPrice,
      dateStr: currentDay.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      weekday: daysOfWeek[currentDay.getDay()]
    });

    if (dayPrice < minGraphPrice) minGraphPrice = dayPrice;
    if (dayPrice > maxGraphPrice) maxGraphPrice = dayPrice;
  }

  // Set chart Y labels
  document.getElementById('g-y-max').textContent = `$${Math.round(maxGraphPrice + 20)}`;
  document.getElementById('g-y-mid').textContent = `$${Math.round((maxGraphPrice + minGraphPrice)/2)}`;
  document.getElementById('g-y-min').textContent = `$${Math.round(minGraphPrice - 20)}`;

  // Populate chart HTML
  trendPrices.forEach(item => {
    // calculate bar height percentage
    const heightPercent = ((item.price - (minGraphPrice - 50)) / (maxGraphPrice - minGraphPrice + 100)) * 100;
    const barWrapper = document.createElement('div');
    barWrapper.className = 'graph-bar-wrapper';
    
    // Highlight date chosen
    const isChosenDay = item.dateStr === centerDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const activeColorStyle = isChosenDay ? 'background: linear-gradient(to top, rgba(127, 90, 240, 0.4), var(--accent-purple)); border: 1px solid var(--accent-purple);' : '';

    barWrapper.innerHTML = `
      <div class="graph-bar" style="height: ${Math.max(heightPercent, 10)}%; ${activeColorStyle}">
        <div class="graph-bar-tooltip">$${item.price}</div>
      </div>
    `;
    graphContainer.appendChild(barWrapper);

    const xLabel = document.createElement('div');
    xLabel.style.textAlign = 'center';
    xLabel.innerHTML = `<span style="font-weight:700; display:block; color: ${isChosenDay ? 'var(--accent-purple)' : 'var(--text-main)'}">${item.weekday}</span><span style="font-size:9px;">${item.dateStr}</span>`;
    graphX.appendChild(xLabel);
  });

  // 3. Generate Simulated Flights
  const flightsList = document.getElementById('flights-list');
  flightsList.innerHTML = '';

  const airlines = [
    { name: 'SkyGlide Airways', icon: 'fa-paper-plane', baseDuration: 180 },
    { name: 'Apex Airlines', icon: 'fa-rocket', baseDuration: 240 },
    { name: 'Stratosphere Express', icon: 'fa-cloud', baseDuration: 120 }
  ];

  airlines.forEach((airline, index) => {
    const durationMins = airline.baseDuration + (distanceFactor % 40) + index * 30;
    const hours = Math.floor(durationMins / 60);
    const mins = durationMins % 60;
    
    const flightPrice = Math.round(basePrice * (0.9 + index * 0.1));
    const stopsText = stopsVal === '0' ? 'Nonstop' : `${stopsVal} Stop${stopsVal > 1 ? 's' : ''}`;
    
    // departure & arrival times
    const depHour = 6 + index * 4;
    const depTimeStr = `${String(depHour).padStart(2, '0')}:15`;
    const arrTimeStr = `${String((depHour + hours) % 24).padStart(2, '0')}:${String((15 + mins) % 60).padStart(2, '0')}`;

    const flightCard = document.createElement('div');
    flightCard.className = 'flight-card';
    flightCard.innerHTML = `
      <div class="flight-airline-info">
        <div class="airline-logo-box">
          <i class="fa-solid ${airline.icon}"></i>
        </div>
        <div class="airline-name-details">
          <span class="airline-name">${airline.name}</span>
          <span class="flight-number">SG-${100 + index * 25 + (distanceFactor % 50)}</span>
        </div>
      </div>

      <div class="flight-timeline">
        <div class="time-node">
          <span class="time-val">${depTimeStr}</span>
          <span class="code-val">${from}</span>
        </div>
        
        <div class="timeline-visual">
          <span class="duration-val">${hours}h ${mins}m</span>
          <div class="timeline-line">
            <i class="fa-solid fa-plane"></i>
          </div>
          <span class="stops-val">${stopsText}</span>
        </div>

        <div class="time-node" style="text-align: right;">
          <span class="time-val">${arrTimeStr}</span>
          <span class="code-val">${to}</span>
        </div>
      </div>

      <div class="flight-pricing-booking">
        <span class="flight-price">$${flightPrice}</span>
        <button class="btn btn-primary btn-sm" onclick="showToast('Booking simulator: Seat reserved successfully!', 'success')">Book</button>
      </div>
    `;
    flightsList.appendChild(flightCard);
  });
}
