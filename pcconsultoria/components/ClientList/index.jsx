import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import style from './clientList.module.css';

const clients = [
  {
    id: 1,
    name: "Ana Santos",
    email: "teste@test.com",
    mobile: 81988693599,
    entreprise: [
      {
        cpfCnpj: 12345678910,
        razaoSocial: "Edficações LTDA",
        endereco: "Rua do jasmin",
        telefone: "81-9887692454",
      },
      {
        cpfCnpj: 222222222,
        razaoSocial: "Tech Team LTDA",
        endereco: "Rua do Leme",
        telefone: "81-9887692454",
      },
    ],
  },
  {
    id: 2,
    name: "Jesica Santana",
    email: "teste@test.com",
    mobile: 81988693599,
    entreprise: [
      {
        cpfCnpj: 4444444,
        razaoSocial: "Stefanini",
        endereco: "Rua do Cravo",
        telefone: "81-9887692454",
      },
      {
        cpfCnpj: 3333333,
        razaoSocial: "Globo",
        endereco: "Rua do Amarelo",
        telefone: "81-9887692454",
      },
    ],
  },
  {
    id: 3,
    name: "Well Nobre",
    email: "teste@test.com",
    mobile: 81988693599,
    entreprise: [
      {
        cpfCnpj: 888888888,
        razaoSocial: "Oi Telecom",
        endereco: "Rua da Alegria",
        telefone: "81-9887692454",
      },
      {
        cpfCnpj: 777777777,
        razaoSocial: "Vivo S/A",
        endereco: "Rua Paralela",
        telefone: "81-9887692454",
      },
    ],
  },
  // Adicionar outros clientes aqui...
];

const ClientList = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  // Função para filtrar os clientes com base no valor de pesquisa (searchString)
  const filterClients = (searchString) => {
    const regex = new RegExp(searchString, 'i');
    return clients.filter((client) => {
      const hasMatchingCpfCnpj =
        client.cpfCnpj && regex.test(client.cpfCnpj.toString().replace(/\D/g, ''));
      const hasMatchingRazaoSocial =
        client.entreprise &&
        client.entreprise.some((enterpriseItem) => regex.test(enterpriseItem.razaoSocial));
      return hasMatchingCpfCnpj || hasMatchingRazaoSocial;
    });
  };

  // Filtrar os clientes com base no valor de pesquisa (searchValue)
  const filteredClients = filterClients(searchValue);

  return (
    <section className={style.principal}>
      <h1>Clientes</h1>

      <div className={style.find}>
        <input
          type="text"
          placeholder="Pesquisar por CPF/CNPJ ou Razão Social"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>
      
      <div className={style.acordion}>
        {filteredClients.length === 0 ? (
          <Typography>
            <p className={style.notFound}>Dados não localizados</p>
          </Typography>
        ) : (
          filteredClients.map((client) => (
            <Accordion key={client.id} className={style.transparentAccordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={style.customExpandIcon} />}
                aria-controls={`panel${client.id}-content`}
                id={`panel${client.id}-header`}
              >
                <Typography>
                  <p className={style.name}>{client.name}</p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className={style.accordionContainer}>
                    {client.entreprise &&
                      client.entreprise.map((enterpriseItem, index) => (
                        <Accordion key={index}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${client.id}-content-${index}`}
                            id={`panel${client.id}-header-${index}`}
                          >
                            <Typography>
                              <h4>Empresa {index + 1}</h4>
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              <div className={style.content}>
                                <p>CPF/CNPJ: {enterpriseItem.cpfCnpj}</p>
                                <p>Razão Social: {enterpriseItem.razaoSocial}</p>
                                <p>Telefone: {enterpriseItem.telefone}</p>
                              </div>
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      ))}

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
          ))
        )}
      </div>
    </section>
  );
};

export default ClientList;