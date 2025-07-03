import '/css/styles.css'
const formData = {
    email: "",
    message: ""
  };

const form = document.querySelector('.feedback-form');

const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
    const parsed = JSON.parse(savedData);
    formData.email = parsed.email || '';
    formData.message = parsed.message || '';
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}
form.addEventListener('input', event => {
    const { name, value } = event.target;
  
    if (name in formData) {
      formData[name] = value;
      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }
  });

  form.addEventListener('submit', event => {
    event.preventDefault(); 
  
    const { email, message } = formData;
  
    if (!email.trim() || !message.trim()) {
      alert('Fill please all fields');
      return;
    }
  
    console.log('Submitted:', formData); 
  
    form.reset(); 
    localStorage.removeItem('feedback-form-state');
  
    formData.email = '';
    formData.message = ''; 
  });
  
  