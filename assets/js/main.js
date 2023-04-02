// Objects
class Aula{
    constructor(hora, turma, sala, curso, undCurricular, professor, dia, status){
        this.hora = hora;
        this.sala = sala;
        this.turma = turma;
        this.curso = curso;
        this.undCurricular = undCurricular;
        this.professor = professor;
        this.dia = dia;
        this.status = status;
    }
}
class Professor{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.aulas = []
        professores.push(this);
    }

    cadastrarAula(hora, turma, sala, curso, undCurricular, dia, status='a__começar'){
        this.aulas.push(new Aula(hora, turma, sala, curso, undCurricular,
            this.nome, dia, status));
        if(dia == new Date().getDate()){
            return aulasDoDia(new Date().getDate());
        }
    }

    setStatusAula(aula, set='cancelada'){
        if(set == 'cancelada'){
            return this.aulas[aula].status = 'cancelada';
        } else if(set == 'concluido'){
            return this.aulas[aula].status = 'concluido';
        } else if(set == 'em__andamento'){
            return this.aulas[aula].status = 'em__andamento';
        }
    }
}


// GET DATE USERS NAV
const showDate = document.getElementById('time');

function getDateToday(){
    const date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
    months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    day = date.getDate(),
    hour = date.getHours(),
    minutes = date.getMinutes();

    return showDate.innerText = `${hour}:${minutes >= 10 ? minutes : '0' + minutes} — Hoje, ${day} ${months[month]} ${year}`;
}

// GET DATE TODAY
getDateToday();
setInterval(getDateToday, 10000);

// FUNCTION AULAS DO DIA
function aulasDoDia(dia){
    const aulasDeHoje = [],
    week = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
    months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    for(professor of professores){
        for(aula of professor.aulas){
            if(aula.dia == dia && aula.status !== 'alterada'){
                aulasDeHoje.push(aula);
            }
        }
    }
    tabela.innerHTML =
    `
    <h3 class="content__header">
        ${week[new Date().getDay()]}, ${dia} de 
        ${months[new Date().getMonth()]} de ${new Date().getFullYear()}
    </h3>
    <div class="agenda__row agenda__label">
        <div>Hora</div>
        <div>Turma</div>
        <div>Sala</div>
        <div>Curso</div>
        <div>Unidade Curricular</div>
        <div>Professor</div>
        <div>Status</div>
    </div>
    `

    for(aula of aulasDeHoje){
        tabela.innerHTML += 
        `
        <div class="agenda__row agenda__data">
            <div>${aula.hora}</div>
            <div>${aula.turma}</div>
            <div>${aula.sala}</div>
            <div>${aula.curso}</div>
            <div>${aula.undCurricular}</div>
            <div>${aula.professor}</div>
            <div>
                <span class="agenda__status status__${aula.status}">${aula.status.replace('__', ' ')}</span>
            </div>
        </div>
        `
    }
}

//CREATING TABELA
const tabela = document.getElementById('station-content');

// CREATING PROFESSORS
const professores = [],
profRenisson = new Professor('Renisson', 'Souza'), // Programação web - projeto integrador
profEdgar = new Professor('Edgar', 'Segundo'), // programação e desenvolvimento web
profAlexandre = new Professor('Alexandre', 'Morais'), // Administração
profMarcelo = new Professor('Marcelo', 'Anjos'), // Téc de Informatica, montagem e manutenção
profGabriel = new Professor('Gabriel', 'Pereira'); // TI para empresas

// CREATING PROF IN LOGIN
const professorOn = profRenisson;

// CREATING AULAS
profEdgar.cadastrarAula('12:00', '443', 'Lab 1', 'Desenvolvimento Web',
                        'UC3', new Date().getDate());
profEdgar.setStatusAula(0);
profRenisson.cadastrarAula('10:00', '443', 'Lab 1', 'Programação Web',
                        'UC5', new Date().getDate());
profRenisson.setStatusAula(0, 'concluido')
profAlexandre.cadastrarAula('14:00', '460', 'Sala 6', 'Administração',
                        'UC1', new Date().getDate());
profAlexandre.setStatusAula(0, 'em__andamento')
profMarcelo.cadastrarAula('18:00', '448', 'Lab 2', 'Téc. Informática',
                        'UC8', new Date().getDate());
profGabriel.cadastrarAula('20:00', '480', 'Lab 3', 'TI para Empresas',
                        'UC2', new Date().getDate());

// SEARCH BAR
const search = document.getElementById('search');

search.addEventListener('focusin', ()=>{
    const searchIco = document.getElementsByClassName('search__ico');
    searchIco[0].style.display = "none";
    search.style.width = "50rem";
    showDate.style.display = "none";
    search.placeholder = "";
});

search.addEventListener('focusout', ()=>{
    const searchIco = document.getElementsByClassName('search__ico');
    if(search.value == ""){
        searchIco[0].style.display = "inline-block";
    }
    search.placeholder = "Pesquisar";
    showDate.style.display = "block";
    search.style.width = "20rem";
});