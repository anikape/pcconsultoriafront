import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import style from './clientList.module.css';

const clients =  [
  {
    id:1,
    name: "Ana Santos",
    email: "teste@test.com",
    mobile: 81988693599,
    cpfCnpj: 12345678910,
    wonner: "Edficações LTDA",
  },
  {
    id:2,
    name: "Ana Santos",
    email: "teste@test.com",
    mobile: 81988693599,
    cpfCnpj: 2222222222222,
    wonner: "Moura Brasil LTDA",
  },
  {
    id:3,
    name: "Jessica ",
    email: "teste@test.com",
    mobile: 81988693599,
    cpfCnpj: 1111111111111,
    wonner: "Alef ME",
  },
  {
    id:4,
    name: "Mario Cesar",
    email: "teste@test.com",
    mobile: 81988693599,
    cpfCnpj: 55555555555,
    wonner: "Alef ME",
  },
  {
    id:5,
    name: "Tati",
    email: "teste@test.com",
    mobile: 81988693599,
    cpfCnpj: 4444444444444,
    wonner: "Sefaz S/A",
  },
  {
    id:6,
    name: "Wellington Nobre",
    email: "teste@test.com",
    mobile: 81988693599,
    cpfCnpj: 99999999999999,
    wonner: "Sefaz S/A",
  }
];

const ClientList = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  // Filtrar os clientes com base no valor de pesquisa (searchValue)
  const filteredClients = clients.filter((client) => {
    const searchString = searchValue.toLowerCase();
    return (
      client.cpfCnpj.toString().includes(searchString) ||
      client.wonner.toLowerCase().includes(searchString)
    );
  });

  return (
    <section className={style.principal}>
      <h1>Clientes</h1>

      <div className={style.find}>
      {/* <div dangerouslySetInnerHTML={{ __html: '<h3>Cpf/Cnpj</h3>' }} />
      dangerouslySetInnerHTML - evitar possíveis vulnerabilidades de injeção de código. */}
      <input
        type="text"
        placeholder="Pesquisar por CPF/CNPJ ou Empresa"
        value={searchValue}
        onChange={handleSearchChange}
      />
  </div>
      <div className={style.acordion}>
        {filteredClients.map((client) => (
          <Accordion key={client.id} className={style.transparentAccordion}>
            <AccordionSummary 
              expandIcon={<ExpandMoreIcon className={style.customExpandIcon}  />}
              aria-controls={`panel${client.id}-content`}
              id={`panel${client.id}-header`}
            >
              <Typography><p className={style.name}>{client.name}</p> <span>{client.cpfCnpj}</span>
              
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
             <div className={style.accordionContainer}>

             <span>Empresa: {client.wonner}</span>

             <div className={style.content} >
                  <h4>Nome/Razão Social</h4>
                  <p>{client.name}</p>
                </div>
                  
                <div className={style.content}>
                  <h4>E-mail</h4>
                  <p>{client.email}</p>
                </div>

                <div className={style.content}>
                  <h4>Telefone Celular</h4>
                  <p>{client.mobile}</p>
                </div>

                <div className={style.content}>
                  <h4>CPF/CNPJ</h4>
                  <p>{client.cpfCnpj}</p>
                </div>
               
                </div>
              
            </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default ClientList;