const riga=6;
const colonne=7;

function createBoard()
{
    gameDiv.innerHTML = '';
    for(let r=0; r<riga; r++)
    {
        for(let c=0; c<colonne; c++)
        {
            const cella = document.createElement('div');
            
            cella.classList.add('cell');

            cella.setAttribute('data-row', r);
            cella.setAttribute('data-row', c);

            cella.addEventListener('click', () => handleMove(r,c));

            gameDiv.appendChild(cell);

        }
    }
}
