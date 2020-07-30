import React,{useState}from 'react';
import PageDefault from '../../../components/PageDefault';
import {Link} from 'react-router-dom';
import FormField from '../../../components/FormField';
function CadastroCategoria(){

  const valoresIniciais = {
    nome: 'b',
    descricao:'',
    cor: '#000',
  }
  const [categorias, setCategoria] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange (infoDoEvento){
    // const [getAttribute, value] = infoDoEvento.target;
    setValue(
      infoDoEvento.target.getAttribute('name'), 
      infoDoEvento.target.value,
    );
  }

  return(
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infoEvent){
        infoEvent.preventDefault();
        setCategoria([...categorias, values]);
        console.log(values);
        setValues(valoresIniciais);
      }}>
        <FormField
          label="Nome da Categoria:"
          name="nome"
          type="text"
          value={values.nome}
          onChange={handleChange}
        />

        {/* <FormField
          label="Descrição:"
          name="descricao"
          type="text"
          value={values.descricao}
          onChange={handleChange}
        /> */}
        
        <div>
          <label>
            Descrição:
            <textarea type="text"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}/>
          </label> 
        </div>

        <FormField
          label="Cor"
          name="cor"
          type="color"
          value={values.cor}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Cor:
            <input type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}/>
          </label>

        </div> */}
        
        

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((item, index) => {
          return(
            
            <li key={`${item}${index}`}> {item.nome} </li>
            
          )
        })}
      </ul>

      <Link to="/">
        Ir para a home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;