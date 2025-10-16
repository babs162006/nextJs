'use client';
import { useState } from 'react';
import './forms.css';


export default function FormPage() {
  useEffect(() => {
    const form = document.getElementById('form');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener('submit', (e) => {
      let valid = true;

      const nome = form.elements['nome'].value.trim();
      if (nome === '') {
        alert('Por favor, preencha o nome.');
        valid = false;
      }

      if (!isValidEmail(emailInput.value)) {
        emailError.style.display = 'block';
        emailInput.style.borderColor = 'red';
        valid = false;
      } else {
        emailError.style.display = 'none';
        emailInput.style.borderColor = 'green';
      }

      const sobreVoce = form.querySelector('textarea').value.trim();
      if (sobreVoce === '') {
        alert('Por favor, escreva um pouco sobre você.');
        valid = false;
      }

      if (!valid) {
        e.preventDefault();
      } else {
        e.preventDefault();
        alert("Formulário enviado com sucesso!");
      }
    });
  }, []);

  return (
    <section className="center-form">
      <form id="form">
        <fieldset>
          <legend>Formulário WomanTech</legend>
          <h4>Preencha as informações abaixo:</h4>
        </fieldset>
      </form>
    </section>
  );
}