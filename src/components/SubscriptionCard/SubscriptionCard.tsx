import React, {FC} from 'react';
import "./SubscriptionCard.css"

interface ISubscriptionCard {
    title: string;
    price: number;
    description: string;
    buttonText?: string;
}

export const SubscriptionCard: FC<ISubscriptionCard> = ({title, price, description, buttonText}) => {
    return (
        <div className="SubscriptionCard">
            <h2 className="SubscriptionCard-Title">{title}</h2>
            <div className="SubscriptionCard-Content">
                <p className="SubscriptionCard-Price">{price}</p>
                <p className="SubscriptionCard-Description">{description}</p>
                <button className="SubscriptionCard-Button">{buttonText}</button>
            </div>
        </div>
    );
};
