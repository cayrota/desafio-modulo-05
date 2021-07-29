import React from "react";

function FormPasso2() {
  return (
    <div className="FormPasso2">
      <form action="" method="post">
        <label htmlFor="nome">Nome do restaurante</label>
        <input type="text" />
        <label htmlFor="categoria">Categoria do restaurante</label>
        <select name="Categorias" id="categoria">
          <option value="Árabe">Árabe</option>
          <option value="Japonesa">Japonesa</option>
          <option value="Chinesa">Chinesa</option>
          <option value="Brasileira">Brasilera</option>
          <option value="Lanches">Lanches</option>
        </select>
        <label htmlFor="descricao">Descrição</label>
        <input type="text" id="descricao" maxLength="50" />
        <span>Máx.: 50 caracteres</span>
      </form>
    </div>
  );
}

export default FormPasso2;