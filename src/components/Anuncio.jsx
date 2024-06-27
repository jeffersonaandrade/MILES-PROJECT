import React from 'react';

function Anuncio() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-6 rounded-lg flex flex-col items-center space-y-4">
        <div className="flex flex-col items-center">
          <label htmlFor="selectCompraEVenda" className="mb-2"><strong>Eu Quero:</strong></label>
          <select name="selectCompraEVenda" id="selectCompraEVenda" className="w-full p-2 border border-gray-300 rounded-md">
            <option value="queroComprar">Comprar</option>
            <option value="queroVender">Vender</option>
          </select>
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="selectQtdMilhas" className="mb-2"><strong>Quantas milhas:</strong></label>
          <select name="selectQtdMilhas" id="selectQtdMilhas" className="w-full p-2 border border-gray-300 rounded-md">
            <option value="cincoKMilhas">5 Mil Milhas</option>
            <option value="dezKMilhas">10 Mil Milhas</option>
            <option value="quinzeKMilhas">15 Mil Milhas</option>
            <option value="vinteKMilhas">20 Mil Milhas</option>
            <option value="vinteECincoKMilhas">25 Mil Milhas</option>
            <option value="trintaKMilhas">30 Mil Milhas</option>
            <option value="cinquentaKMilhas">50 Mil Milhas</option>
            <option value="cemKMilhas">100 Mil Milhas</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Anuncio;
