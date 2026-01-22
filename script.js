// Menu responsivo
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Formulário de contato
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obter valores do formulário
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validação simples
        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        // Simular envio do formulário
        console.log('Dados do formulário de contato:');
        console.log('Nome:', name);
        console.log('E-mail:', email);
        console.log('Assunto:', subject);
        console.log('Mensagem:', message);
        
        // Mostrar mensagem de sucesso
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        
        // Limpar formulário
        contactForm.reset();
    });
}

// Formulário de doação
const donationForm = document.getElementById('donationForm');
if (donationForm) {
    donationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obter valores do formulário
        const amount = document.getElementById('amount').value;
        const donationType = document.getElementById('donationType').value;
        
        // Validação
        if (!amount || amount < 10) {
            alert('Por favor, insira um valor de doação válido (mínimo R$ 10,00).');
            return;
        }
        
        // Simular processamento de doação
        console.log('Processando doação:');
        console.log('Valor: R$', amount);
        console.log('Tipo:', donationType);
        
        // Em um cenário real, aqui você integraria com um gateway de pagamento
        alert(`Obrigado pela sua doação de R$ ${amount}! Você será redirecionado para a página de pagamento.`);
        
        // Em um cenário real, redirecionar para o gateway de pagamento
        // window.location.href = 'https://gateway-de-pagamento.com';
        
        // Limpar formulário
        donationForm.reset();
    });
}

// Formulário de newsletter
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        if (!email) {
            alert('Por favor, insira seu e-mail.');
            return;
        }
        
        // Simular inscrição
        console.log('Inscrição na newsletter:', email);
        
        // Mostrar mensagem de sucesso
        alert('Obrigado por se inscrever em nossa newsletter!');
        
        // Limpar campo
        emailInput.value = '';
    });
}

// Destaque da navegação ativa ao rolar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Efeito de carregamento suave
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Contador de visitantes (simulado)
const visitorCount = document.createElement('div');
visitorCount.className = 'visitor-counter';
visitorCount.innerHTML = '<p><i class="fas fa-users"></i> Junte-se a mais de 500 membros em nossa comunidade</p>';
visitorCount.style.cssText = 'text-align: center; background-color: var(--light); padding: 15px; margin: 20px 0; border-radius: 8px;';

// Inserir contador após o hero
const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroSection.parentNode.insertBefore(visitorCount, heroSection.nextSibling);
}

// Botão de voltar ao topo
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: var(--primary);
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    z-index: 999;
`;

document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('mouseenter', () => {
    backToTopBtn.style.backgroundColor = '#1e457a';
    backToTopBtn.style.transform = 'translateY(-3px)';
});

backToTopBtn.addEventListener('mouseleave', () => {
    backToTopBtn.style.backgroundColor = 'var(--primary)';
    backToTopBtn.style.transform = 'translateY(0)';
});

// Efeito de digitação no hero (opcional)
const heroText = document.querySelector('.hero h2');
if (heroText) {
    const originalText = heroText.textContent;
    heroText.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            heroText.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Iniciar efeito após um breve delay
    setTimeout(typeWriter, 500);
}