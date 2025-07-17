
import React from 'react';

function SuportePage() {
  
  
  return (
    <div className="contato-coluna">
          <div className="fale-conosco">
            <h3>Fale Conosco</h3>
            <form>
              <input type="text" placeholder="Nome Completo" required />
              <input type="email" placeholder="E-mail" required />
              {/* Usando <select> para o campo "Assunto" */}
              <select required>
                <option value="" disabled selected>Selecione um assunto</option>
                <option value="pedido">Problema com Pedido</option>
                <option value="pagamento">Dúvida sobre Pagamento</option>
                <option value="entrega">Atraso na Entrega</option>
                <option value="outro">Outro</option>
              </select>
              <textarea placeholder="Sua mensagem..." rows="5" required></textarea>
              <button type="submit" className="botao">Enviar Mensagem</button>
            </form>
          </div>

          <div className="outros-canais">
            <h3>Outros Canais de Contato</h3>
            <p>📞 (85) 98765-4321</p>
            <p>✉️ suporte@fatalityshop.com.br</p>
            <p>⏰ Segunda a Sexta: 9h às 18h</p>
          </div>
        </div>
    
    
  );
}

export default SuportePage;