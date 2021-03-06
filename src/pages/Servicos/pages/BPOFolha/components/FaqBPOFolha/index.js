import React from 'react';
import Accordion from '../../../../../../components/Accordion';

function FaqBPOFolha() {
    return (
        <Accordion idFaq='faqBPOFolha'>
            {[
                { title: 'Duvida 1', description: 'Resposta breve de até 3 linhas', cardId: 'a', collapseId: 'collapseA', expanded: 'false' },
                { title: 'Duvida 2', description: 'Resposta breve de até 3 linhas', cardId: 'b', collapseId: 'collapseB', expanded: 'false' },
                { title: 'Duvida 3', description: 'Resposta breve de até 3 linhas', cardId: 'c', collapseId: 'collapseC', expanded: 'false' }
            ]}
        </Accordion>
    );
}

export default FaqBPOFolha;