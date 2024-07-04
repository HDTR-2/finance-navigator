import React, {FC, useEffect, useState} from 'react';
import "./SubscriptionCard.css"
import {AdditionalOptions} from "../AdditionalOptions/AdditionalOptions";
import Modal from "../Modal/Modal";

export const features = {
    featuresBasic: [
        "Доступ к финансовому калькулятору и планировщику бюджета",
        "Ежемесячные обзоры финансовых рынков",
        "Базовые советы по инвестированию и управлению финансами",
    ],
    featuresStandard: [
        "Все преимущества подписки Basic",
        "Персонализированные рекомендации по инвестициям на основе вашего профиля риска",
        "Доступ к онлайн-курсам по финансовой грамотности",
        "Ежеквартальные консультации с финансовым консультантом",
    ],
    featuresPremium: [
        "Все преимущества подписок Basic и Standard",
        "Приоритетная поддержка и консультации с финансовым консультантом в режиме реального времени",
        "Доступ к эксклюзивным инвестиционным предложениям",
        "Ежемесячные индивидуальные сессии с финансовым экспертом"
    ],
    featuresEnterprise: [
        "Все преимущества подписок Basic, Standard и Premium",
        "Корпоративное финансовое планирование и стратегическое консультирование",
        "Интеграция с корпоративными системами управления финансами",
        "Командная поддержка и обучение для финансовых отделов",
    ]

}

interface ISubscriptionCard {
    title: string;
    price: string;
    description: string;
    features?: string[];
    buttonText?: string;
    mostPopular?: boolean;
}

export const SubscriptionCard: FC<ISubscriptionCard> =
    ({
         title,
         price,
         description,
         features,
         buttonText = "Начать",
         mostPopular
     }) => {
        const [isModalOpen, setIsModalOpen] = useState(false);

        const openModal = () => setIsModalOpen(true);
        const closeModal = () => setIsModalOpen(false);
        const cardClass = mostPopular ? "SubscriptionCard mostPopular" : "SubscriptionCard";

        useEffect(() => {
            if (isModalOpen) {
                document.body.classList.add('modal-open');
            } else {
                document.body.classList.remove('modal-open');
            }
        }, [isModalOpen]);
        return (
            <div>
                <div className={cardClass}>
                    <div className="SubscriptionCard-Content">
                        <h2 className="SubscriptionCard-Title">{title}</h2>
                        <h3 className="SubscriptionCard-Price">{price}</h3>

                        <p className="SubscriptionCard-Description">{description}</p>
                    </div>

                    <ul className="SubscriptionCard-Features">
                        {features?.map((feature, index) => <li key={index}>{feature}</li>)}
                    </ul>
                    <button onClick={openModal} className="SubscriptionCard-Button">{buttonText}</button>
                </div>
                {mostPopular && <p className="mostPopular-subtitle">Самый популярный</p>}
                <Modal isOpen={isModalOpen} onClose={closeModal}><AdditionalOptions closeModal={closeModal}/></Modal>

            </div>

        );
    };
