function abrirPDF(sigla) {
    let linkPDF;

    switch (sigla) {
        case 'H':
            linkPDF = 'https://eppg.fgv.br/sites/default/files/teste.pdf';
        case 'He':
            linkPDF = 'https://eppg.fgv.br/sites/default/files/teste.pdf';
            break;

        default:
            console.log('PDF não encontrado para a sigla:', sigla);
            return;
    }

    window.open(linkPDF, '_blank');
}

document.querySelectorAll('#grid-container section').forEach(section => {
    section.addEventListener('click', () => {
        const siglaElemento = section.querySelector('h2').textContent;
        abrirPDF(siglaElemento);
    });
});