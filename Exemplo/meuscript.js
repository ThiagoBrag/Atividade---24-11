const ListaUsuarios = [
    { name: 'Bruno Henrique', userName: 'brunohvc' },
    { name: 'Vytor Augusto Rosa', userName: 'K43RU' },
    { name: 'João Henrique Meireles da Silva', userName: 'nihilth' },
    { name: 'Otavio Augusto dos Santos', userName: 'SantOtavio' },
    { name: 'Camilly de Souza Pessotti', userName: 'camillyPessotti' },
    { name: 'Thiago Marins Braga', userName: 'ThiagoBrag' },
    { name: 'Ester Girelli', userName: 'Esterzinha12' },
    { name: 'Gustavo Rebelatto Zapella', userName: 'rebelattogustavo' },
    { name: 'Henrique Cole Fernandes', userName: 'HenriqueCole' },
    { name: 'Kenzo Hideaky Ferreira Sato', userName: 'Kenzohfs' },
    { name: 'Vinícius Bonatti Benner', userName: 'viniciusz1' },
    { name: 'Leonardo Heitor Poglia', userName: 'leopoglia' },
    { name: 'Felipe Mielke Vieira', userName: 'FelipeMielkeVieira' },
    { name: 'Eduarda Bolgenhagen De Campos', userName: 'eduardabolgenhagen' },
    { name: 'Matheus Franzener Hohmann', userName: 'MatheusFranzener' },
    { name: 'Leonardo Giuseppe de Souza Rafaelli', userName: 'LeonardoRafaelli' },
    { name: 'Diego Planinscheck', userName: 'frst157' },
    { name: 'Camilly Vitoria da Rocha Goltz', userName: 'VitoriaCamilly' },
    { name: 'Bruna Alves Mafra', userName: 'BMafra' },
    { name: 'Otavio Matheus Neves', userName: 'otavionvs' },
]

// function aa() {
// console.log('Lista:', ListaUsuarios)
// }

function Tabela() {
    const TabelaAtual = document.querySelector('table');
    if (TabelaAtual) {
        TabelaAtual.remove();
    }

    const table = document.createElement('table');
    const row = document.createElement('tr');
    const ColunaNome = document.createElement('th');
    const ColunaUsername = document.createElement('th');
    const ColunaBotao = document.createElement('th');

    ColunaNome.innerText = 'ColunaNome';
    ColunaUsername.innerText = 'ColunaUser';
    ColunaBotao.innerText = 'ColunaBotao';

    row.appendChild(ColunaNome);
    row.appendChild(ColunaUsername);
    row.appendChild(ColunaBotao);
    table.appendChild(row);

    ListaUsuarios.forEach(function (element) {
        console.log('element:', element);
        const rowTable = getPersonTableRow(
            element.name,
            element.userName);

        table.appendChild(rowTable);
    })

    document.body.appendChild(table);
}

function getPersonTableRow(name, userName) {
    const row = document.createElement('tr');
    const ColunaNome = document.createElement('td');
    const ColunaUsername = document.createElement('td');
    const ColunaBotao = document.createElement('td');

    function IrPagina() {
        let NomeUser = userName;
        location.href = './PaginaUser./index.html?' + userName;
    }

    ColunaNome.innerText = name;
    ColunaUsername.innerText = userName;

    let botao = document.createElement('button');
    botao.innerText = "Accessar dados";
    ColunaBotao.appendChild(botao);
    botao.onclick = IrPagina;

    row.appendChild(ColunaNome);
    row.appendChild(ColunaUsername);
    row.appendChild(ColunaBotao);
    return row;
}
Tabela();




    let botaoCadastro = document.createElement('button');
let listPerson = [];
document.body.appendChild(botaoCadastro);
botaoCadastro.onclick = clickButtonRegisteryPerson;
botaoCadastro.innerText = "Cadastrar Pessoa";

function clickButtonRegisteryPerson() {
    const modal = createModal();
    const content = getContentRegesteryPersonModal(modal.removeModal);

    modal.insertHeader(content.header);
    modal.insertMain(content.main);
    modal.insertFooter(content.footer);
}

function createModal() {
    let background = document.createElement('div');
    background.id = "background-modal";
    let modal = document.createElement('div');
    modal.id = "modal";
    background.appendChild(modal);
    document.body.appendChild(background);

    let header = document.createElement('div');
    let main = document.createElement('div');
    let footer = document.createElement('div');

    header.id = 'modal-header';
    main.id = 'modal-main';
    footer.id = 'modal-footer';

    modal.appendChild(header);
    modal.appendChild(main);
    modal.appendChild(footer);

    function removeModal() {
        background.remove();
    }

    function insertHeader(html) {
        header.appendChild(html);
    }

    function insertMain(html) {
        main.appendChild(html);
    }

    function insertFooter(html) {
        footer.appendChild(html);
    }

    let retorno = {
        background: background,
        modal: modal,
        removeModal: removeModal,
        insertHeader: insertHeader,
        insertMain: insertMain,
        insertFooter: insertFooter,
    }

    return retorno;
}

function getContentRegesteryPersonModal(removeModal) {
    const header = document.createElement('div');
    header.id = 'person-header';
    const title = document.createElement('h1');
    title.innerText = 'Cadastrar Pessoa';
    header.appendChild(title);

    const main = document.createElement('div');
    main.id = 'person-main';

    const inputNome = document.createElement('input');
    inputNome.type = 'text';
    inputNome.placeholder = 'Nome completo';
    main.appendChild(inputNome);

    const inputUsername = document.createElement('input');
    inputUsername.type = 'text';
    inputUsername.placeholder = 'Username';
    main.appendChild(inputUsername);

    const footer = document.createElement('div');
    footer.id = 'person-footer';
    const buttonRegistery = document.createElement('button');
    buttonRegistery.innerText = 'Registrar';
    function registery() {
        const name = inputNome.value;
        const surname = inputUsername.value;

//         if (!name || name == '') {
//             return;
//         }
//         if (!surname || surname == '') {
//             return;
//         }
//         if (!birthdate || birthdate == '') {
//             return;
//         }

//         registeryPerson(name, surname, birthdate);
//         removeModal();
//     }
//     buttonRegistery.onclick = registery;

//     const buttonCancel = document.createElement('button');
//     buttonCancel.innerText = 'Cancelar';
//     buttonCancel.onclick = removeModal;

//     footer.appendChild(buttonRegistery);
//     footer.appendChild(buttonCancel);

//     return {
//         header: header,
//         main: main,
//         footer: footer,
//     }
// }

// function registeryPerson(name, surname, birthdate) {
//     let person = {
//         name: name,
//         surname: surname,
//         birthdate: birthdate
//     }

//     listPerson.push(person);
//     showPersonTable();
// }

// function showPersonTable() {
//     const actualTable = document.querySelector('table');
//     if (actualTable) {
//         actualTable.remove();
//     }

//     const table = document.createElement('table');
//     const row = document.createElement('tr');
//     const columnName = document.createElement('th');
//     const columnSurname = document.createElement('th');
//     const columnBirthDate = document.createElement('th');

//     columnName.innerText = 'Nome';
//     columnSurname.innerText = 'Sobrenome';
//     columnBirthDate.innerText = 'Data Nascimento';

//     row.appendChild(columnName);
//     row.appendChild(columnSurname);
//     row.appendChild(columnBirthDate);
//     table.appendChild(row);

//     listPerson.forEach(function (element) {
//         console.log('element:', element);
//         const rowTable = getPersonTableRow(
//             element.name,
//             element.surname,
//             element.birthdate);

//         table.appendChild(rowTable);
//     })

//     document.body.appendChild(table);
// }

// function getPersonTableRow(name, surname, birthdate) {
//     const row = document.createElement('tr');
//     const columnName = document.createElement('td');
//     const columnSurname = document.createElement('td');
//     const columnBirthDate = document.createElement('td');

//     columnName.innerText = name;
//     columnSurname.innerText = surname;
//     columnBirthDate.innerText = birthdate;

//     row.appendChild(columnName);
//     row.appendChild(columnSurname);
//     row.appendChild(columnBirthDate);
//     return row;
// }









// PARA ACESSAR OS DADOS COM LINK
// fetch('https://fake-github.herokuapp.com/api/(USERNAME')
// PARA ACESSAR O REPO
// fetch('https://fake-github.herokuapp.com/api/(USERNAME)/repos')