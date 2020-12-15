import React from "react";
import './pages.styles.scss'
import Tree from "./grooup_link/tree_link";
let links_arr = [{title:'Дирекція'},{title:'Керівництво'},
    {title:'Бухгалтерія'}, {title:'Секретар'},{title:'Менеджмент радіопланування'},
    {title:'Відділ підготовки цифрових карт',
        add:['Група обробки цифрових карт міст','Група створення цифрових карт',
            'Група обробки цифрових карт регіонів']},
    {title:'Відділ фотограмметричної обробки ДДЗЗ'},
    {title:'Відділ автоматичного дешифрування ДДЗЗ',
        add:['Група автоматичного дешифрування ДДЗЗ міст','Група автоматичного дешифрування ДДЗЗ регіонів']},
    {title:'Відділ стереообробки ДДЗЗ'},{title:'Відділ збору та обробки атрибутивних даних'},
    {title:'Відділ підготовки даних для систем радіопланування'}, {title:'Відділ системного адміністрування'},
    {title:'Програмування, web'},{title:'Транспортний відділ'},
    {title:'Підрозділ технічного обслуговування'},{title:'Група графіки та дизайну'}
]

export default function GroupPage(){
    return(
        <div className={'page'}>
            <div className={'container'}>
                <div className={'row mx-auto'}>
                        <div className={'p-3 bg-gray'}>
                            <Tree arr={links_arr}/>
                        </div>
                        <div className={'p-3 bg-gray'}></div>
                </div>
            </div>
        </div>
    )
}