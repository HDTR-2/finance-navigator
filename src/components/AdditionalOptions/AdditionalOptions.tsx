import React, {FC, useState} from 'react';
import "./AdditionalOptions.css"

interface IOptions {
    id: string
    label: string
    text: string
}

const options: IOptions[] = [
    {
        id: 'extendedTechnicalSupport',
        label: 'Расширенная техническая поддержка:',
        text: " Круглосуточная техническая поддержка с гарантией ответа в течение 15 минут.  Срок действия: 1 год.",
    },
    {
        id: 'personalAssistant',
        label: 'Персональный ассистент: ',
        text: "Предоставление услуг личного ассистента для решения повседневных задач и управления расписаниями. Срок действия: 6 месяцев."
    },
    {
        id: 'educationalWebinars',
        label: 'Обучающие вебинары: ',
        text: "Доступ к серии вебинаров по различным темам, связанным с использованием продукта или сервиса. Срок действия: 3 месяца."
    },
    {
        id: 'advancedDataAnalytics',
        label: 'Продвинутая аналитика данных: ',
        text: " Расширенные возможности анализа данных с предоставлением детальных отчетов и прогнозов. Срок действия: 1 год."
    },
    {
        id: 'specialDiscounts',
        label: 'Специальные скидки на партнерские услуги: ',
        text: "Доступ к эксклюзивным скидкам и предложениям от партнеров компании. Срок действия: без ограничений (постоянно действующая услуга)."
    },
]

interface IAdditionalOptions {
    closeModal: () => void
    options?: string[]
}

export const AdditionalOptions: FC<IAdditionalOptions> = ({closeModal}) => {
    const [checkedOptions, setCheckedOptions] = useState<{ [key: string]: boolean }>({});

    const handleCheckboxChange = (id: string) => {
        setCheckedOptions({
            ...checkedOptions,
            [id]: !checkedOptions[id],
        });
    };

    return (
        <div className="AdditionalOptions">
            <div className="AdditionalOptions-Content">
                <h2> Дополнительные опции к тарифу </h2>
                <ul className="AdditionalOptions-List">
                    {options.map((option) => (
                        <li className="AdditionalOptions-Item" key={option.id}>
                            <label>
                                <input type="checkbox"
                                       checked={checkedOptions[option.id] || false}
                                       onChange={() => handleCheckboxChange(option.id)}/>
                                <p> {option.label}  </p>
                                <span>{option.text}</span>

                            </label>
                        </li>
                    ))}

                </ul>
                <button className="AdditionalOptions-Button" onClick={closeModal}>Подтвердить выбор</button>
            </div>
        </div>
    );
};
